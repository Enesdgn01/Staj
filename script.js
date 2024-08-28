const imgs = document.getElementById('imgs');
const left = document.getElementById('left');
const right = document.getElementById('right');
const img = document.querySelectorAll('#imgs img');
const a = document.querySelectorAll('#imgs a')
let interval = setInterval(run, 6000);
let index = 0;

function run() {
    index++;
    changeImage();
    changeClick()
}

right.addEventListener('click', () => {
    index++;
    changeImage();
    changeClick()
    resetInterval();
});

left.addEventListener('click', () => {
    index--;
    changeImage();
    changeClick()
    resetInterval();
});

function changeImage() {
    if (index > img.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = img.length - 1;
    }
    imgs.style.transform = `translateX(${-index * 500}px)`;
}
function changeClick() {
    if (index > a.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = a.length - 1;
    }
    imgs.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 6000);
}
document.getElementById("scroll").addEventListener("click", function() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
});
