// Yahi wo Master List hai jahan aap naye apps add karenge
const appsData = {
    "whatsapp": {
        name: "WhatsApp Mod",
        meta: "Social • 45MB",
        image: "https://placehold.co/120x120/075E54/white?text=WA",
        desc: "Best WhatsApp mod with privacy features."
    },
    "subway": {
        name: "Subway Surfers",
        meta: "Games • 120MB",
        image: "https://placehold.co/120x120/FF5733/white?text=SS",
        desc: "Unlimited coins and keys for Subway Surfers."
    },
    "instagram": {
        name: "Instagram Pro",
        meta: "Social • 60MB",
        image: "https://placehold.co/120x120/C13584/white?text=IG",
        desc: "Download photos and videos directly from Instagram."
    }
};

const grid = document.getElementById('appGrid');

// 1. Apps ko screen par dikhana
function displayApps() {
    grid.innerHTML = "";
    for (let id in appsData) {
        let app = appsData[id];
        grid.innerHTML += `
            <a href="download.html?id=${id}" class="card-link">
                <div class="app-card">
                    <img src="${app.image}" alt="${app.name}">
                    <h3>${app.name}</h3>
                    <p>${app.meta}</p>
                </div>
            </a>`;
    }
}

// 2. Search Logic
document.getElementById('search').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let cards = document.querySelectorAll('.card-link');
    cards.forEach(card => {
        let name = card.querySelector('h3').innerText.toUpperCase();
        card.style.display = name.includes(filter) ? "" : "none";
    });
});

displayApps();
