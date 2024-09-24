// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// main().then(()=>{console.log("connection successful");
    
// })
// .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/myproject21');
// }

// const initDB = async () => {
//     try {
//         await Listing.deleteMany({});  // To empty the database
//         initData.data = initData.data.map((obj)=>({...obj, owner:"66f163e8c0ad8eb745b05e83"}));
//         await Listing.insertMany(initData.data);
//         console.log("data was initialised");
//     } catch (err) {
//         console.log(err);
//     }
// };

// initDB();



// Load environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require("mongoose");
const initData = require("./data21.js");
const Listing = require("../models/listing.js");

// Load the database URL from environment or fallback
const dbUrl = process.env.ATLAS_URL ;  

console.log("MongoDB URL: ", dbUrl);  // Debugging line to check dbUrl

// Connect to MongoDB Atlas or local MongoDB
main().then(() => {
    console.log("Database connection successful");
}).catch(err => console.log("Database connection error:", err));

async function main() {
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

// Function to initialize the database
const initDB = async () => {
    try {
        await Listing.deleteMany({});  // Empty the database
        initData.data = initData.data.map((obj) => ({ ...obj, owner: "66f18c70a2d3da5c9b7c5b1d" }));  // Assign default owner
        await Listing.insertMany(initData.data);
        console.log("Data was initialized");
    } catch (err) {
        console.log("Error initializing data:", err);
    }
};

// Initialize the database
initDB();

