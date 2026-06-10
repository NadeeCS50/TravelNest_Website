const moodDestinations = {
    relaxed: [
        {
            name: "Maldives",
            text: "Relax on peaceful beaches with crystal clear waters.",
            image: "https://untoday.org/wp-content/uploads/2025/03/15_LEISURE-1.webp"
        },
        {
            name: "Bali, Indonesia",
            text: "Serene temples, rice terraces, and calm tropical shores.",
            image: "https://www.goatsontheroad.com/wp-content/uploads/2019/08/lovina-beach-bali.jpg"
        },
        {
            name: "Colombo, Sri Lanka",
            text: "Pearl of the Indian Ocean with laid-back coastal charm.",
            image: "https://assets.cntraveller.in/photos/64ec81607751da540426cd89/16:9/w_4928,h_2772,c_limit/1288609237"
        }
    ],
    excited: [
        {
            name: "New York, USA",
            text: "Enjoy vibrant nightlife and energetic city life.",
            image: "https://jessieonajourney.com/wp-content/uploads/2024/01/Times-Square-Night-View.jpg"
        },
        {
            name: "Tokyo, Japan",
            text: "Neon streets, busy districts, and nonstop energy.",
            image: "https://www.esim4.com/wp-content/uploads/2025/06/Best-Time-To-Visit-Japan-For-Cherry-Blossoms.webp"
        },
        {
            name: "Bangkok, Thailand",
            text: "Street markets, temples, and buzzing nightlife.",
            image: "https://media.istockphoto.com/id/1369978340/photo/night-life-in-thailand-walking-street-in-pattaya-go-go-bars-and-strip-clubs.jpg?s=612x612&w=0&k=20&c=gVQdxFQWs71mwAMOV8DQGcxXOC8VT_z5vdN3aOasIow="
        }
    ],
    romantic: [
        {
            name: "Paris, France",
            text: "Experience romance in the city of love.",
            image: "https://ladyhattan.com/wp-content/uploads/2014/03/paris-france-photograph.jpg"
        },
        {
            name: "Rome, Italy",
            text: "Historic streets, candlelit dinners, and timeless beauty.",
            image: "https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK-1280-80.jpg.webp"
        },
        {
            name: "Bern, Switzerland",
            text: "Charming old town and scenic views for couples.",
            image: "https://ciaobambino.com/wp-content/uploads/2018/02/switzerland-with-kids-mannlichen.jpg"
        }
    ],
    adventurous: [
        {
            name: "Swiss Alps",
            text: "Discover mountains, hiking, and adventure sports.",
            image: "https://www.muchbetteradventures.com/magazine/content/images/2019/07/10083602/iStock-499263804.jpg"
        },
        {
            name: "Cusco, Peru",
            text: "Hike to Machu Picchu and explore Incan trails.",
            image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800"
        },
        {
            name: "Rio de Janeiro, Brazil",
            text: "Mountains, beaches, and bold outdoor adventures.",
            image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800"
        }
    ]
};


let audioCtx = null;
let currentSound = null;
let currentVolume = 0.6;
let activeNodes = [];

function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}


function makeNoise(ctx, masterGain) {
    const bufferSize = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.connect(masterGain);
    src.start();
    return src;
}

function startBeach(ctx, masterGain) {
    const nodes = [];

    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 600;
    lp.Q.value = 1;
    lp.connect(masterGain);

    const swellGain = ctx.createGain();
    swellGain.gain.value = 0.4;
    swellGain.connect(lp);

    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.12;   
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.35;
    lfo.connect(lfoGain);
    lfoGain.connect(swellGain.gain);
    lfo.start();
    nodes.push(lfo);

    const noise = makeNoise(ctx, swellGain);
    nodes.push(noise);
    return nodes;
}

function startForest(ctx, masterGain) {
    const nodes = [];

    
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 800;
    bp.Q.value = 0.5;
    const windGain = ctx.createGain();
    windGain.gain.value = 0.3;
    windGain.connect(masterGain);
    bp.connect(windGain);
    const windNoise = makeNoise(ctx, bp);
    nodes.push(windNoise);

    
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.08;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.2;
    lfo.connect(lfoGain);
    lfoGain.connect(windGain.gain);
    lfo.start();
    nodes.push(lfo);

    
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 3000;
    const shimmerGain = ctx.createGain();
    shimmerGain.gain.value = 0.06;
    shimmerGain.connect(masterGain);
    hp.connect(shimmerGain);
    const shimmerNoise = makeNoise(ctx, hp);
    nodes.push(shimmerNoise);

    return nodes;
}


function startCity(ctx, masterGain) {
    const nodes = [];

    
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 300;
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.value = 0.5;
    rumbleGain.connect(masterGain);
    lp.connect(rumbleGain);
    const rumble = makeNoise(ctx, lp);
    nodes.push(rumble);


    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1200;
    bp.Q.value = 0.8;
    const crowdGain = ctx.createGain();
    crowdGain.gain.value = 0.15;
    crowdGain.connect(masterGain);
    bp.connect(crowdGain);
    const crowd = makeNoise(ctx, bp);
    nodes.push(crowd);

    
    function scheduleWhoosh() {
        if (currentSound !== 'city') return;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.4);
        g.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.8);
        g.connect(masterGain);
        const f = ctx.createBiquadFilter();
        f.type = 'bandpass';
        f.frequency.value = 500 + Math.random() * 400;
        f.Q.value = 0.6;
        f.connect(g);
        const n = makeNoise(ctx, f);
        nodes.push(n);
        setTimeout(scheduleWhoosh, 3000 + Math.random() * 4000);
    }
    scheduleWhoosh();
    return nodes;
}

function startPiano(ctx, masterGain) {
    const nodes = [];
    
    function playNote(freq, startTime, duration) {
        if (currentSound !== 'romantic') return;
        
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.2, startTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        osc.connect(gain);
        gain.connect(masterGain);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
        
        nodes.push(osc);
    }
    
    function loop() {
        if (currentSound !== 'romantic') return;
        const notes = [261.63, 329.63, 392.00, 440.00, 523.25]; // Pentatonic notes
        const freq = notes[Math.floor(Math.random() * notes.length)];
        playNote(freq, ctx.currentTime, 4);
        setTimeout(loop, 1500 + Math.random() * 2000);
    }
    
    loop();
    return nodes;
}

const soundEngines = { beach: startBeach, forest: startForest, city: startCity, romantic: startPiano };
let masterGainNode = null;

function startAmbientSound(type) {
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') ctx.resume();

    masterGainNode = ctx.createGain();
    masterGainNode.gain.value = currentVolume;
    masterGainNode.connect(ctx.destination);

    activeNodes = soundEngines[type](ctx, masterGainNode);

    const btn = document.getElementById("pauseAudioBtn");
    if (btn) btn.innerText = "Pause Audio 🔊";
}

function stopAmbientSound() {
    const oldGain = masterGainNode;
    const oldNodes = activeNodes;
    
    masterGainNode = null;
    activeNodes = [];

    if (oldGain) {
        oldGain.gain.setValueAtTime(oldGain.gain.value, audioCtx.currentTime);
        oldGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.3);
    }
    setTimeout(() => {
        oldNodes.forEach(n => { try { n.stop(); } catch (e) { } });
        if (oldGain) { oldGain.disconnect(); }
    }, 350);
}

function toggleSound(type) {
    if (currentSound === type) {
        stopAmbientSound();
        currentSound = null;
    } else {
        if (currentSound) stopAmbientSound();
        currentSound = type;
        startAmbientSound(type);
    }
}

function togglePauseAudio() {
    if (!audioCtx) return;

    const btn = document.getElementById("pauseAudioBtn");

    if (audioCtx.state === 'running') {
        audioCtx.suspend();
        btn.innerText = "Play Audio 🔇";
    } else if (audioCtx.state === 'suspended') {
        audioCtx.resume();
        btn.innerText = "Pause Audio 🔊";
    }
}

function setVolume(value) {
    currentVolume = parseFloat(value);
    if (masterGainNode) masterGainNode.gain.value = currentVolume;
}

window.addEventListener('beforeunload', () => {
    if (currentSound) stopAmbientSound();
});

let currentSelectedDestination = null;

function findDestination() {
    const mood = document.getElementById("moodSelect").value;
    if (mood === "") {
        alert("Please select your mood");
        if (currentSound) {
            stopAmbientSound();
            currentSound = null;
        }
        return;
    }

    const moodToSound = {
        relaxed: 'beach',
        excited: 'city',
        romantic: 'romantic',
        adventurous: 'forest'
    };
    
    const targetSound = moodToSound[mood];
    if (currentSound !== targetSound) {
        if (currentSound) stopAmbientSound();
        currentSound = targetSound;
        startAmbientSound(targetSound);
    }

    const results = moodDestinations[mood];
    const container = document.getElementById("moodResults");
    container.innerHTML = "";
    currentSelectedDestination = null;

    results.forEach(function (dest) {
        const card = document.createElement("div");
        card.className = "mood-result-card";
        card.innerHTML =
            '<img src="' + dest.image + '" alt="' + dest.name + '">' +
            '<h3>' + dest.name + '</h3>' +
            '<p>' + dest.text + '</p>';
            
        card.onclick = function() {
            const allCards = container.querySelectorAll('.mood-result-card');
            allCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            currentSelectedDestination = dest.name;
        };
        
        container.appendChild(card);
    });

    document.getElementById("moodResult").style.display = "block";
    document.getElementById("actionButtons").style.display = "flex";
    document.getElementById("pauseAudioBtn").style.display = "inline-block";
}


function removeSavedDestination(status, destination) {
    const key = status === 'visited' ? 'visitedDestinations' : 'plannedDestinations';
    const list = JSON.parse(localStorage.getItem(key)) || [];
    const updatedList = list.filter(item => item !== destination);

    localStorage.setItem(key, JSON.stringify(updatedList));
    loadDestinations();
}

function buildSavedDestinationItem(destination, status) {
    const li = document.createElement('li');
    li.className = 'saved-destination-item';

    const label = document.createElement('span');
    label.className = 'saved-destination-label';
    label.textContent = destination;

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove-destination-btn';
    removeBtn.textContent = '×';
    removeBtn.setAttribute('aria-label', 'Remove destination');
    removeBtn.onclick = () => removeSavedDestination(status, destination);

    li.appendChild(label);
    li.appendChild(removeBtn);
    return li;
}

function loadDestinations() {
    const visitedList = JSON.parse(localStorage.getItem('visitedDestinations')) || [];
    const plannedList = JSON.parse(localStorage.getItem('plannedDestinations')) || [];

    const visitedContainer = document.getElementById('visitedList');
    const plannedContainer = document.getElementById('plannedList');

    if (!visitedContainer || !plannedContainer) return;

    visitedContainer.innerHTML = '';
    plannedContainer.innerHTML = '';

    visitedList.forEach(dest => visitedContainer.appendChild(buildSavedDestinationItem(dest, 'visited')));
    plannedList.forEach(dest => plannedContainer.appendChild(buildSavedDestinationItem(dest, 'planned')));
}

function saveDestinationStatus(status) {
    if (!currentSelectedDestination) {
        alert("Please select a destination first.");
        return;
    }

    const key = status === 'visited' ? 'visitedDestinations' : 'plannedDestinations';
    const list = JSON.parse(localStorage.getItem(key)) || [];

    if (!list.includes(currentSelectedDestination)) {
        list.push(currentSelectedDestination);
        localStorage.setItem(key, JSON.stringify(list));
        loadDestinations();
        alert(`${currentSelectedDestination} marked as ${status}!`);
    } else {
        alert(`You already marked ${currentSelectedDestination} as ${status}.`);
    }
}


window.toggleSound = toggleSound;
window.togglePauseAudio = togglePauseAudio;
window.setVolume = setVolume;
window.findDestination = findDestination;
window.saveDestinationStatus = saveDestinationStatus;


window.onload = loadDestinations;