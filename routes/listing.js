// routes/listing.js

const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js"); // Import User model
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Combined GET '/' route handling location and rentDate
router.get('/', async (req, res) => {
    try {
        let listings;
        const { rentDate, location } = req.query;

        const query = {};

        // Filter by rentDate
        if (rentDate) {
            query.$or = [
                { rentedDates: { $exists: false } }, // Listings with no rental dates
                { 'rentedDates.date': { $ne: new Date(rentDate) } } // Listings where the date is not rented
            ];
        }

        // Filter by location
        if (location) {
            query.location = { $regex: new RegExp(location, 'i') }; // Case-insensitive search
        }

        // Fetch listings based on the query
        listings = await Listing.find(query);

        // Render the view with listings, location, and rentDate
        res.render('listings/index', { listings, location, rentDate });
    } catch (err) {
        console.error(err);
        req.flash('error', 'Unable to fetch listings.');
        res.redirect('/');
    }
});

// Handle POST '/' route for creating a new listing
router.route("/")
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show, Update, Delete Routes
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

// Rent Route
router.post('/:id/rent', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { rentDate } = req.body;

    if (!rentDate) {
        req.flash('error', 'Rent date is required.');
        return res.redirect(`/listings/${id}`);
    }

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', 'Listing not found.');
        return res.redirect('/listings');
    }

    const rentDateFormatted = new Date(rentDate).toISOString().split('T')[0];
    const dateConflict = listing.rentedDates.some(
        (date) => date && date.date && date.date.toISOString().split('T')[0] === rentDateFormatted
    );

    if (dateConflict) {
        req.flash('error', 'This date is already rented.');
        return res.redirect(`/listings/${id}`);
    }

    // Add the rent date to the listing
    listing.rentedDates.push({ date: new Date(rentDate) });

    // Save rental in user's profile
    const user = await User.findById(req.user._id);
    user.rentals.push({ listing: id, rentDate: new Date(rentDate) });

    await listing.save();
    await user.save();

    req.flash('success', 'Listing rented successfully!');
    res.redirect(`/listings/${id}`);
});

module.exports = router;
