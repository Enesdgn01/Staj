const imgs = document.getElementById('imgs')
const left = document.getElementById('left')
const right = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')
let interval = setInterval(run, 2000)
let index = 0

function run() {
    index++
    changeImage()
}

right.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval()
})
//---------------------------------
left.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval()
})

function changeImage() {
    if(index > img.length - 1) {
        index = 0
    } else if(index < 0) {
        index = img.length - 1
    }
    imgs.style.transform = `translateX(${-index * 500}px)`
}
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

