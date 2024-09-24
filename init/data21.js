const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727100395/Rental_Platform_DEV/mwzjeqz65gl0ooghgued.png",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727098434/Rental_Platform_DEV/xgvemr2t5aaxbo8mdbcw.jpg",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727098705/Rental_Platform_DEV/qfoqvsxejgzewvufzdtn.jpg",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727098781/Rental_Platform_DEV/q2ri9ufrlr7el0km7vsu.jpg",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727100484/Rental_Platform_DEV/gjd1gy07teistgv62eus.png",
      },
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727098901/Rental_Platform_DEV/e8apmg6umzumg7norrjf.jpg",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727098948/Rental_Platform_DEV/bijjxslri1hbagse8xfu.jpg",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099004/Rental_Platform_DEV/azgxolkovd6t98dubxkx.jpg",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099059/Rental_Platform_DEV/zmtuhnppivhggialp5hk.jpg",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099112/Rental_Platform_DEV/bhbqxnjucna5e0damv4e.jpg",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099148/Rental_Platform_DEV/ixuawrkwlo0woae7rwvr.jpg",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099193/Rental_Platform_DEV/xdp4br1bwsx5u4vmnbsf.jpg",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099268/Rental_Platform_DEV/cztppk7cgpluthb4imww.jpg",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099326/Rental_Platform_DEV/knwm9syt2qtwff458z41.jpg",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099361/Rental_Platform_DEV/w2etbden5co8aevdxjmw.jpg",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099498/Rental_Platform_DEV/opdihezdjuu9wdmzdshv.jpg",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099557/Rental_Platform_DEV/fku0r2nmaapdng9fpkku.jpg",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099586/Rental_Platform_DEV/vwrgjb9cxf998xihogss.jpg",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099677/Rental_Platform_DEV/dzk4ghyjwffkt0b46nap.jpg",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099709/Rental_Platform_DEV/vh9vivcpuf4drjrcpfpv.jpg",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727100597/Rental_Platform_DEV/dy79hii0doegh5qyybiv.png",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099766/Rental_Platform_DEV/tlzg2usrdetozcjgt98f.jpg",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099860/Rental_Platform_DEV/margdr3bwjmdwpykfviy.jpg",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099901/Rental_Platform_DEV/b0j00d3sfoawhp3rs0sw.jpg",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727101191/Rental_Platform_DEV/si0cngypddivzviwnrt3.png",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727099968/Rental_Platform_DEV/bp8wm0an1xgsb6ipi68u.jpg",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727100003/Rental_Platform_DEV/wnvowavpmk1pwdxx3tyr.jpg",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727101286/Rental_Platform_DEV/t8jqundegdnndeh98cwi.png",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dvmkrrka3/image/upload/v1727100082/Rental_Platform_DEV/ogawgglpoawn77qalkp5.jpg",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
  module.exports = { data: sampleListings };