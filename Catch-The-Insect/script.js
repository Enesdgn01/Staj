const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');
const game = document.getElementById('game');
let score = -1;
let seconds = 0;
let minutes = 0;
let selected_insect = {};

function initialize() {
    scoreEl.innerHTML = getFormattedScore();
    updateTime();
}

function getFormattedScore() {
    const formattedScore = String(score).padStart(2, '0');
    return `Score: ${formattedScore}`;
}

function getFormattedTime() {
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `Time: ${formattedMinutes}:${formattedSeconds}`;
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    timeEl.innerHTML = getFormattedTime();
}

document.getElementById("scrollBtn").addEventListener("click", function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

document.querySelectorAll(".insect").forEach(function (button) {
    button.addEventListener("click", function () {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth"
        });

        const img = button.querySelector('img'); 
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = { src, alt };
        
        increaseScore();
        createInsect();
    });
});

initialize();
setInterval(updateTime, 1000);

function increaseScore() {
    score++;
    if (score > 19) {
        message.style.opacity = '1';
    }
    scoreEl.innerHTML = `Score: ${score}`;
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

function createInsect() {
    const insect = document.createElement('img');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.position = 'absolute';
    insect.style.border = 'none';
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.src = selected_insect.src; 
    insect.alt = selected_insect.alt;
    insect.style.transform = `rotate(${Math.random() * 360}deg)`;

    insect.addEventListener('click', catchInsect);
    game.appendChild(insect);
}

function catchInsect() {
    setTimeout(createInsect, 500)
    setTimeout(createInsect, 500)
    this.style.display = 'none';
    increaseScore();
}
document.querySelectorAll('.insect').forEach(function (insect) {
    insect.addEventListener('mouseover', function () {
        this.style.backgroundColor = '';
        this.style.color = '';
    });

    insect.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'transparent'; // Varsayılan arka plan rengini geri getir
        this.style.color = 'white'; // Varsayılan renk geri getir
    });
});

