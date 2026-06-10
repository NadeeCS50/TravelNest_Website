
const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");

const modal = document.getElementById("destinationModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalAttractions = document.getElementById("modalAttractions");
const modalCosts = document.getElementById("modalCosts");

function renderDestinations(list) {
    grid.innerHTML = "";

    list.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.addEventListener("click", () => openModal(dest));

        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}">
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
            </div>
        `;


        grid.appendChild(card);
    });
}

function filterDestinations() {
    const searchValue = searchInput.value.toLowerCase();
    const regionValue = regionFilter.value;

    const filtered = destinations.filter(dest => {
        const matchesSearch = dest.name.toLowerCase().includes(searchValue);
        const matchesRegion = regionValue === "all" || dest.region === regionValue;
        return matchesSearch && matchesRegion;
    });

    renderDestinations(filtered);
}

function openModal(dest) {
    modalTitle.innerText = dest.name;
    modalDesc.innerText = dest.description;

    modalAttractions.innerHTML = "";
    dest.attractions.forEach(attr => {
        const li = document.createElement("li");
        li.innerText = attr;
        modalAttractions.appendChild(li);
    });

    modalCosts.innerHTML = "";
    for (const [category, cost] of Object.entries(dest.costs)) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${category}</td><td>${cost}</td>`;
        modalCosts.appendChild(tr);
    }

    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

window.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
});

searchInput.addEventListener("input", filterDestinations);
regionFilter.addEventListener("change", filterDestinations);

renderDestinations(destinations);

window.closeModal = closeModal;