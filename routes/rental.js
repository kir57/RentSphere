// routes/rental.js

const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');
const User = require('../models/user');
const { isLoggedIn } = require('../middleware');

// Show "My Rentals" page
router.get('/my-rentals', isLoggedIn, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('rentals.listing');
        res.render('rent', { rentals: user.rentals });
    } catch (err) {
        console.error(err);
        req.flash('error', 'Unable to fetch your rentals.');
        res.redirect('/listings');
    }
});

// Cancel a rental
router.post('/rentals/:id/cancel', isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params; // Listing ID
        const { rentDate } = req.body;

        if (!rentDate) {
            req.flash('error', 'Rent date is required to cancel.');
            return res.redirect('/my-rentals');
        }

        // Remove rental from user's rentals array
        await User.findByIdAndUpdate(req.user._id, {
            $pull: { rentals: { listing: id, rentDate: new Date(rentDate) } }
        });

        // Remove the rent date from the listing's rentedDates array
        const listing = await Listing.findById(id);
        if (listing) {
            listing.rentedDates = listing.rentedDates.filter(r => r.date.toISOString() !== new Date(rentDate).toISOString());
            await listing.save();
        }

        req.flash('success', 'Rental cancelled successfully!');
        res.redirect('/my-rentals');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Unable to cancel rental.');
        res.redirect('/my-rentals');
    }
});

module.exports = router;
