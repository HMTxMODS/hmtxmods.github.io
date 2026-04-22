// Note: Is file mein bhi wahi appsData hona chahiye jo app.js mein hai.
const appsData = {
    "whatsapp": {
        name: "WhatsApp Mod (v2.24)",
        meta: "Version: 2.24.1 | Size: 45MB | Safe",
        image: "https://placehold.co/120x120/075E54/white?text=WA",
        desc: "Get extra privacy features like hide blue ticks, anti-delete messages, and much more in this version.",
        link: "https://example.com/files/whatsapp.apk"
    },
    "subway": {
        name: "Subway Surfers (Unlimited)",
        meta: "Version: v3.2 | Size: 120MB | Mod",
        image: "https://placehold.co/120x120/FF5733/white?text=SS",
        desc: "Enjoy the game with unlimited coins, keys, and all characters unlocked from the start.",
        link: "https://example.com/files/subway.apk"
    },
    "instagram": {
        name: "Instagram Pro",
        meta: "Version: v15.0 | Size: 60MB | Mod",
        image: "https://placehold.co/120x120/C13584/white?text=IG",
        desc: "Download any media, view stories anonymously, and enjoy ad-free browsing.",
        link: "https://example.com/files/insta.apk"
    }
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if(id && appsData[id]) {
    const app = appsData[id];
    document.getElementById('app-name').innerText = app.name;
    document.getElementById('app-meta').innerText = app.meta;
    document.getElementById('app-logo').src = app.image;
    document.getElementById('app-desc').innerText = app.desc;
    document.getElementById('download-btn').href = app.link;

    let sec = 10;
    let timer = setInterval(() => {
        sec--;
        document.getElementById('timer').innerText = sec;
        if(sec <= 0) {
            clearInterval(timer);
            document.getElementById('timer-box').style.display = 'none';
            document.getElementById('download-btn').style.display = 'inline-block';
        }
    }, 1000);
} else {
    document.body.innerHTML = "<center style='padding:50px;'><h1>App Not Found!</h1><a href='index.html'>Go Home</a></center>";
}
