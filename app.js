if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const rentalRoutes = require('./routes/rental');

// Database connection
const dbUrl = process.env.ATLAS_URL;

mongoose.connect(dbUrl, {
    serverSelectionTimeoutMS: 5000, // Keep only necessary options
})
.then(() => {
    console.log("Database connected");
}).catch(err => {
    console.error("Database connection error:", err);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Setting up view engine
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret:process.env.SECRET,
    },
    touchAfter: 24*3600,
});

store.on("error", () => {
    console.log("ERROR IN MONGO SESSION STORE", err);
});

// Session setup
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }
};

app.use(session(sessionOptions));
app.use(flash());

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to pass variables to all views
app.use((req, res, next) => {
    res.locals.curUser = req.user || null;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.location = req.query.location || '';
    res.locals.rentDate = req.query.rentDate || '';
    next();
});

// Routes
app.use('/listings', listingRouter);
app.use('/listings/:id/reviews', reviewRouter);
app.use('/', userRouter);
app.use('/', rentalRoutes);

// Error handling
// Error handling
app.all("*", (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500; // Ensure statusCode is numeric, default to 500
    err.message = err.message || 'Something went wrong!';
    res.status(statusCode).render('error', { err });
});



app.use((err, req, res, next) => {
    const { statusCode = 500 } = err; // Default to 500 if no status code is provided
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    res.status(statusCode).render("error", { err });
});



// Start server
app.listen(8080, () => {
    console.log("Serving on port 8080");
});
