
const datalist = document.getElementById("countryList");
if (datalist) {
    destinations.forEach((dest) => {
        const option = document.createElement("option");
        option.value = dest.name;
        datalist.appendChild(option);
    });
}


let currentCalculation = null;

function calculateBudget() {
    const countryName = document.getElementById("countryInput").value.trim();
    const days      = parseFloat(document.getElementById("days").value);
    const dailyBudget = parseFloat(document.getElementById("dailyBudget").value);
    
    if (countryName === "") {
        alert("Please enter a destination.");
        return;
    }

    if (isNaN(days) || isNaN(dailyBudget)) {
        alert("Please fill in both days and daily budget fields.");
        return;
    }

    const total = days * dailyBudget;
    let dest = destinations.find(d => d.name.toLowerCase() === countryName.toLowerCase());
    if (!dest) {
        dest = {
            name: countryName,
            attractions: ["Plan your own custom itinerary!"]
        };
    }

    let status = "";
    let progress = 0;
    let color = "darkblue";
    if (dailyBudget < 50) {
        status = "Low Budget";
        progress = Math.min((dailyBudget / 50) * 33, 33);
    } else if (dailyBudget < 150) {
        status = "Moderate Budget";
        progress = 33 + Math.min(((dailyBudget - 50) / 100) * 33, 33);
    } else {
        status = "Luxury Budget";
        progress = 66 + Math.min(((dailyBudget - 150) / 300) * 34, 34);
    }
    
    currentCalculation = {
        destination: dest.name,
        days: days,
        daily: dailyBudget,
        total: total,
        status: status,
        date: new Date().toLocaleDateString()
    };

    const totalEl = document.getElementById("totalBudget");
    totalEl.innerText = `Total Budget for ${dest.name}: $0.00`;
    let start = 0;
    const step = total / 20;
    
    function animateCount() {
        start += step;
        if (start < total) {
            totalEl.innerText = `Total Budget for ${dest.name}: $${start.toFixed(2)}`;
            requestAnimationFrame(animateCount);
        } else {
            totalEl.innerText = `Total Budget for ${dest.name}: $${total.toFixed(2)}`;
        }
    }
    animateCount();
    
    document.getElementById("budgetStatus").innerText = "Status: " + status;
    document.getElementById("budgetStatus").style.color = "#89CFF0";
    
    const pBar = document.getElementById("progressBar");
    pBar.style.width = "0%";
    setTimeout(() => {
        pBar.style.width = progress + "%";
        pBar.style.backgroundColor = color;
    }, 50);

    const list = document.getElementById("placesList");
    list.innerHTML = "";
    dest.attractions.forEach(place => {
        const li = document.createElement("li");
        li.textContent = place;
        list.appendChild(li);
    });

    document.getElementById("resultBox").style.display = "block";
}

function saveBudget() {
    if (!currentCalculation) return;
    const budgets = JSON.parse(localStorage.getItem("savedTrips")) || [];
    budgets.push(currentCalculation);
    localStorage.setItem("savedTrips", JSON.stringify(budgets));
    alert("Trip budget saved successfully!");
    renderStoredBudgets();
}

function renderStoredBudgets() {
    const list = document.getElementById("savedBudgetsList");
    if (!list) return;
    list.innerHTML = "";
    const budgets = JSON.parse(localStorage.getItem("savedTrips")) || [];
    if (budgets.length === 0) {
        list.innerHTML = "<p style='color: var(--text-muted);'>No saved budgets yet.</p>";
        return;
    }
    budgets.forEach(b => {
        const card = document.createElement("div");
        card.className = "glass-box";
        card.style.padding = "20px";
        card.innerHTML = `
            <h3 style="color: var(--accent-cyan); margin-bottom: 10px;">${b.destination}</h3>
            <p><strong>Days:</strong> ${b.days} | <strong>Daily ($):</strong> ${b.daily} | <strong>Total:</strong> $${b.total.toFixed(2)}</p>
            <p style="margin-top: 10px; color: var(--text-muted);"><em>${b.status}</em> - Saved on ${b.date}</p>
        `;
        list.appendChild(card);
    });
}

window.onload = renderStoredBudgets;
window.calculateBudget = calculateBudget;
window.saveBudget = saveBudget;