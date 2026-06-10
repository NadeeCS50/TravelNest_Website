const trips = {
    relaxation: [
        {
            name: "Colombo, Sri Lanka",
            text: "Pearl of the Indian Ocean, mesmerising nature and vibrant culture.",
            budget: "$800 flight + $60/night hotel",
            budgetLevel: "medium",
            image: "img/colombo.jpeg",
            places: [
                "Galle Face Green",
                "Gangaramaya Temple",
                "Viharamahadevi Park"
            ]
        },
        {
            name: "Bali, Indonesia",
            text: "Serene temples, lush rice terraces and majestic landscapes.",
            budget: "$900 flight + $70/night hotel",
            budgetLevel: "medium",
            image: "img/Bali.jpg",
            places: [
                "Ubud Monkey Forest",
                "Uluwatu Temple",
                "Tegallalang Rice Terrace"
            ]
        },
        {
            name: "Cancun, Mexico",
            text: "Turquoise waters and sunny Caribbean coast.",
            budget: "$500 flight + $90/night hotel",
            budgetLevel: "medium",
            image: "img/Cancun.jpg",
            places: [
                "Chichen Itza",
                "Isla Mujeres",
                "Xcaret Park"
            ]
        },
        {
            name: "Fiji",
            text: "Tropical islands with crystal-clear lagoons.",
            budget: "$1500 flight + $120/night hotel",
            budgetLevel: "high",
            image: "img/Fiji.jpg",
            places: [
                "Mamanuca Islands",
                "Coral Coast",
                "Garden of the Sleeping Giant"
            ]
        }
    ],

    adventure: [
        {
            name: "Cusco, Peru",
            text: "Gateway to Machu Picchu and Incan heritage.",
            budget: "$900 flight + $55/night hotel",
            budgetLevel: "medium",
            image: "img/Cusco.webp",
            places: [
                "Machu Picchu",
                "Sacsayhuaman",
                "Sacred Valley"
            ]
        },
        {
            name: "Cape Town, South Africa",
            text: "Stunning coastlines and Table Mountain views.",
            budget: "$1100 flight + $75/night hotel",
            budgetLevel: "high",
            image: "img/Cape Town.jpg",
            places: [
                "Table Mountain",
                "Cape Point",
                "V&A Waterfront"
            ]
        },
        {
            name: "Auckland, New Zealand",
            text: "City of sails with volcanoes and islands nearby.",
            budget: "$1400 flight + $100/night hotel",
            budgetLevel: "high",
            image: "img/Aukland.webp",
            places: [
                "Sky Tower",
                "Waiheke Island",
                "Mount Eden"
            ]
        }
    ],

    cultural: [
        {
            name: "Bangkok, Thailand",
            text: "Ornate shrines and vibrant street life.",
            budget: "$750 flight + $50/night hotel",
            budgetLevel: "medium",
            image: "img/Bangkok.jpg",
            places: [
                "Grand Palace",
                "Wat Arun",
                "Chatuchak Market"
            ]
        },
        {
            name: "Tokyo, Japan",
            text: "A dazzling blend of ultra-modern and traditional Japan.",
            budget: "$1100 flight + $110/night hotel",
            budgetLevel: "high",
            image: "img/Tokyo.webp",
            places: [
                "Shibuya Crossing",
                "Senso-ji Temple",
                "Shinjuku Gyoen"
            ]
        },
        {
            name: "Rome, Italy",
            text: "Famous for rich history, iconic art, and world-renowned cuisine.",
            budget: "$900 flight + $120/night hotel",
            budgetLevel: "high",
            image: "img/Rome.webp",
            places: [
                "Colosseum",
                "Trevi Fountain",
                "Pantheon"
            ]
        },
        {
            name: "Paris, France",
            text: "The city of love, fashion, and world-class art.",
            budget: "$950 flight + $130/night hotel",
            budgetLevel: "high",
            image: "img/Paris.jpg",
            places: [
                "Eiffel Tower",
                "Louvre Museum",
                "Montmartre"
            ]
        },
        {
            name: "Cairo, Egypt",
            text: "Ancient pyramids and rich Nile history.",
            budget: "$900 flight + $50/night hotel",
            budgetLevel: "medium",
            image: "img/Cairo.webp",
            places: [
                "Pyramids of Giza",
                "Egyptian Museum",
                "Khan el-Khalili"
            ]
        },
        {
            name: "Yangon, Myanmar",
            text: "The golden land of Asia.",
            budget: "$850 flight + $40/night hotel",
            budgetLevel: "low",
            image: "img/Yangon.png",
            places: [
                "Shwedagon Pagoda",
                "Sule Pagoda",
                "Inya Lake"
            ]
        }
    ],

    nature: [
        {
            name: "Bern, Switzerland",
            text: "Breathtaking natural beauty and charming towns.",
            budget: "$1200 flight + $150/night hotel",
            budgetLevel: "high",
            image: "img/Bern.jpg",
            places: [
                "Zytglogge",
                "Bear Pit",
                "Federal Palace"
            ]
        },
        {
            name: "Rio de Janeiro, Brazil",
            text: "Beaches, carnival, and iconic mountain views.",
            budget: "$950 flight + $80/night hotel",
            budgetLevel: "medium",
            image: "img/Rio de Janeiro.webp",
            places: [
                "Christ the Redeemer",
                "Copacabana Beach",
                "Sugarloaf Mountain"
            ]
        },
        {
            name: "Sydney, Australia",
            text: "Harbour city with beaches and iconic landmarks.",
            budget: "$1300 flight + $130/night hotel",
            budgetLevel: "high",
            image: "img/Sydney.avif",
            places: [
                "Sydney Opera House",
                "Bondi Beach",
                "Harbour Bridge"
            ]
        },
        {
            name: "Toronto, Canada",
            text: "Multicultural city on the shores of Lake Ontario.",
            budget: "$450 flight + $140/night hotel",
            budgetLevel: "medium",
            image: "img/Toronto.jpg",
            places: [
                "CN Tower",
                "Royal Ontario Museum",
                "Distillery District"
            ]
        }
    ]
};

let currentTrip = null;

function formatBudgetLevel(level) {
    return level.charAt(0).toUpperCase() + level.slice(1);
}

function generateTrip() {
    const btn = document.getElementById('generateBtn');
    
    btn.innerText = "Surprise Me Again";

    const type = document.getElementById('tripType').value;

    if (type === '') {
        alert('Please select a trip type');
        return;
    }

    const availableTrips = trips[type];
    
    if (!availableTrips || availableTrips.length === 0) {
        alert('No trips found for this type!');
        return;
    }

    const randomTrip = availableTrips[Math.floor(Math.random() * availableTrips.length)];
    displayTrip(randomTrip);
}

function displayTrip(trip) {
    currentTrip = trip;
    document.getElementById('tripName').innerText = trip.name;
    document.getElementById('tripText').innerText = trip.text;
    document.getElementById('tripBudget').innerText = 'Budget range: ' + formatBudgetLevel(trip.budgetLevel);

    const image = document.getElementById('tripImage');
    image.src = trip.image;
    image.style.display = 'block';

    const placesList = document.getElementById('placesList');
    placesList.innerHTML = '';
    trip.places.forEach(function (place) {
        const li = document.createElement('li');
        li.textContent = place;
        placesList.appendChild(li);
    });

    document.getElementById('tripResult').style.display = 'block';
    
    const wishlistBtn = document.getElementById('wishlistBtn');
    wishlistBtn.innerText = "Save to Wishlist";
    wishlistBtn.disabled = false;
}

function saveToWishlist() {
    if (!currentTrip) return;
    
    let wishlist = JSON.parse(localStorage.getItem('travelWishlist')) || [];
    
    const exists = wishlist.some(item => item.name === currentTrip.name);
    
    if (!exists) {
        wishlist.push({
            name: currentTrip.name,
            budget: formatBudgetLevel(currentTrip.budgetLevel),
            image: currentTrip.image
        });
        localStorage.setItem('travelWishlist', JSON.stringify(wishlist));
    }
    
    const wishlistBtn = document.getElementById('wishlistBtn');
    wishlistBtn.innerText = "Saved!";
    wishlistBtn.disabled = true;
    
    renderWishlist();
}

function renderWishlist() {
    const listContainer = document.getElementById('wishlistItems');
    if (!listContainer) return;
    
    const wishlist = JSON.parse(localStorage.getItem('travelWishlist')) || [];
    listContainer.innerHTML = '';
    
    if (wishlist.length === 0) {
        listContainer.innerHTML = '<p>Your wishlist is empty.</p>';
        return;
    }
    
    wishlist.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'wishlist-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="wishlist-info">
                <h4>${item.name}</h4>
                <p>${item.budget}</p>
            </div>
            <button onclick="removeFromWishlist(${index})" class="remove-btn">Remove</button>
        `;
        listContainer.appendChild(div);
    });
}

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('travelWishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('travelWishlist', JSON.stringify(wishlist));
    renderWishlist();
}

document.addEventListener('DOMContentLoaded', renderWishlist);

window.generateTrip = generateTrip;
window.saveToWishlist = saveToWishlist;
window.removeFromWishlist = removeFromWishlist;
