
const destinations = [
    {
        name: "Colombo, Sri Lanka",
        region: "Asia",
        text: "Pearl of the Indian Ocean, mesmerising nature and vibrant culture.",
        description: "Pearl of the Indian Ocean, mesmerising nature and vibrant culture.",
        image: "img/Colombo.jpeg",
        attractions: ["Galle Face Green", "Gangaramaya Temple", "Viharamahadevi Park"],
        costs: { Flight: "$800", Hotel: "$60/night", Food: "$25/day" }
    },
    {
        name: "Bangkok, Thailand",
        region: "Asia",
        text: "Ornate shrines and vibrant street life.",
        description: "Ornate shrines and vibrant street life.",
        image: "img/Bangkok.jpg",
        attractions: ["Grand Palace", "Wat Arun", "Chatuchak Market"],
        costs: { Flight: "$750", Hotel: "$50/night", Food: "$20/day" }
    },
    {
        name: "Yangon, Myanmar",
        region: "Asia",
        text: "The golden land of Asia.",
        description: "The golden land of Asia.",
        image: "img/Yangon.png",
        attractions: ["Shwedagon Pagoda", "Sule Pagoda", "Inya Lake"],
        costs: { Flight: "$850", Hotel: "$40/night", Food: "$15/day" }
    },
    {
        name: "Bali, Indonesia",
        region: "Asia",
        text: "Beautiful beaches and relaxing vibes.",
        description: "Serene temples, lush rice terraces and majestic landscapes.",
        image: "img/Bali.jpg",
        attractions: ["Ubud Monkey Forest", "Uluwatu Temple", "Tegallalang Rice Terrace"],
        costs: { Flight: "$900", Hotel: "$70/night", Food: "$30/day" }
    },
    {
        name: "Tokyo, Japan",
        region: "Asia",
        text: "Modern city mixed with tradition.",
        description: "A dazzling blend of ultra-modern and traditional Japan.",
        image: "img/Tokyo.webp",
        attractions: ["Shibuya Crossing", "Senso-ji Temple", "Shinjuku Gyoen"],
        costs: { Flight: "$1100", Hotel: "$110/night", Food: "$45/day" }
    },
    {
        name: "Bern, Switzerland",
        region: "Europe",
        text: "Breathtaking natural beauty and charming towns.",
        description: "Breathtaking natural beauty and charming towns.",
        image: "img/Bern.jpg",
        attractions: ["Zytglogge", "Bear Pit", "Federal Palace"],
        costs: { Flight: "$1200", Hotel: "$150/night", Food: "$60/day" }
    },
    {
        name: "Rome, Italy",
        region: "Europe",
        text: "Famous for rich history, iconic art, and world-renowned cuisine.",
        description: "Famous for rich history, iconic art, and world-renowned cuisine.",
        image: "img/Rome.webp",
        attractions: ["Colosseum", "Trevi Fountain", "Pantheon"],
        costs: { Flight: "$900", Hotel: "$120/night", Food: "$50/day" }
    },
    {
        name: "Paris, France",
        region: "Europe",
        text: "Romantic city with amazing culture.",
        description: "The city of love, fashion, and world-class art.",
        image: "img/Paris.jpg",
        attractions: ["Eiffel Tower", "Louvre Museum", "Montmartre"],
        costs: { Flight: "$950", Hotel: "$130/night", Food: "$55/day" }
    },
    {
        name: "New York, USA",
        region: "North America",
        text: "A dynamic, dense, and diverse metropolis.",
        description: "A dynamic, dense, and diverse metropolis.",
        image: "img/New York.jpg",
        attractions: ["Central Park", "Statue of Liberty", "Times Square"],
        costs: { Flight: "$400", Hotel: "$200/night", Food: "$70/day" }
    },
    {
        name: "Toronto, Canada",
        region: "North America",
        text: "Multicultural city on the shores of Lake Ontario.",
        description: "Multicultural city on the shores of Lake Ontario.",
        image: "img/Toronto.jpg",
        attractions: ["CN Tower", "Royal Ontario Museum", "Distillery District"],
        costs: { Flight: "$450", Hotel: "$140/night", Food: "$55/day" }
    },
    {
        name: "Cancun, Mexico",
        region: "North America",
        text: "Turquoise waters and sunny Caribbean coast.",
        description: "Turquoise waters and sunny Caribbean coast.",
        image: "img/Cancun.jpg",
        attractions: ["Chichen Itza", "Isla Mujeres", "Xcaret Park"],
        costs: { Flight: "$500", Hotel: "$90/night", Food: "$35/day" }
    },
    {
        name: "Rio de Janeiro, Brazil",
        region: "South America",
        text: "Beaches, carnival, and iconic mountain views.",
        description: "Beaches, carnival, and iconic mountain views.",
        image: "img/Rio de Janeiro.webp",
        attractions: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain"],
        costs: { Flight: "$950", Hotel: "$80/night", Food: "$30/day" }
    },
    {
        name: "Cusco, Peru",
        region: "South America",
        text: "Gateway to Machu Picchu and Incan heritage.",
        description: "Gateway to Machu Picchu and Incan heritage.",
        image: "img/Cusco.webp",
        attractions: ["Machu Picchu", "Sacsayhuaman", "Sacred Valley"],
        costs: { Flight: "$900", Hotel: "$55/night", Food: "$25/day" }
    },
    
    {
        name: "Buenos Aires, Argentina",
        region: "South America",
        text: "Tango, steak, and European-style boulevards.",
        description: "Tango, steak, and European-style boulevards.",
        image: "img/Buenos Aires.jpg",
        attractions: ["La Boca", "Recoleta Cemetery", "Teatro Colon"],
        costs: { Flight: "$1000", Hotel: "$70/night", Food: "$35/day" }
    },
    {
        name: "Cape Town, South Africa",
        region: "Africa",
        text: "Stunning coastlines and Table Mountain views.",
        description: "Stunning coastlines and Table Mountain views.",
        image: "img/Cape Town.jpg",
        attractions: ["Table Mountain", "Cape Point", "V&A Waterfront"],
        costs: { Flight: "$1100", Hotel: "$75/night", Food: "$30/day" }
    },
    {
        name: "Marrakech, Morocco",
        region: "Africa",
        text: "Colorful souks and historic medinas.",
        description: "Colorful souks and historic medinas.",
        image: "img/Marrakeh.webp",
        attractions: ["Jemaa el-Fnaa", "Bahia Palace", "Majorelle Garden"],
        costs: { Flight: "$950", Hotel: "$65/night", Food: "$25/day" }
    },
    {
        name: "Cairo, Egypt",   
        region: "Africa",
        text: "Ancient pyramids and rich Nile history.",
        description: "Ancient pyramids and rich Nile history.",
        image: "img/Cairo.webp",
        attractions: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili"],
        costs: { Flight: "$900", Hotel: "$50/night", Food: "$20/day" }
    },
    {
        name: "Sydney, Australia",
        region: "Oceania",
        text: "Harbour city with beaches and iconic landmarks.",
        description: "Harbour city with beaches and iconic landmarks.",
        image: "img/Sydney.avif",
        attractions: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"],
        costs: { Flight: "$1300", Hotel: "$130/night", Food: "$50/day" }
    },
    {
        name: "Auckland, New Zealand",
        region: "Oceania",
        text: "City of sails with volcanoes and islands nearby.",
        description: "City of sails with volcanoes and islands nearby.",
        image: "img/Aukland.webp",
        attractions: ["Sky Tower", "Waiheke Island", "Mount Eden"],
        costs: { Flight: "$1400", Hotel: "$100/night", Food: "$45/day" }
    },
    {
        name: "Fiji",
        region: "Oceania",
        text: "Tropical islands with crystal-clear lagoons.",
        description: "Tropical islands with crystal-clear lagoons.",
        image: "img/Fiji.jpg",
        attractions: ["Mamanuca Islands", "Coral Coast", "Garden of the Sleeping Giant"],
        costs: { Flight: "$1500", Hotel: "$120/night", Food: "$40/day" }
    }
];
