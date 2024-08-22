const toggle = document.querySelector('.toggle');
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// (click) 
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    
    // Eğer HTML dark ise
    if (html.classList.contains('dark')) {
        // 'dark' kaldır
        html.classList.remove('dark');
        // Butonun içeriğini 'Dark mode' olarak değiştir
        e.target.innerHTML = 'Dark mode';
    } else {
        // Eğer 'dark' yoksa, onu ekle
        html.classList.add('dark');
        // Butonun içeriğini 'Light mode' olarak değiştir
        e.target.innerHTML = 'Light mode';
    }
});

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30; 
    let mm = day.getMinutes() * deg; 
    let ss = day.getSeconds() * deg; 

    // Saat, dakika ve saniye ibrelerini döndürme
    hr.style.transform = `rotateZ(${(hh)-180 + (mm / 12)}deg)`; 
    mn.style.transform = `rotateZ(${(mm)-180}deg)`; 
    sc.style.transform = `rotateZ(${(ss)-180}deg)`; 
}, 1000); 

function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // 12 saatlik format
    hours = hours % 12;
    hours = hours ? hours : 12; // Saat 0 olduğunda, onu 12

    // Dakikayı iki basamaklı yapmak için kontrol
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
}

function updateTime() {
    const timeDiv = document.querySelector('.time');
    timeDiv.innerHTML = getFormattedTime();
}
updateTime();
setInterval(updateTime, 60000);

function getFormattedDate() {
    const now = new Date();
    let day = now.getDay(); 
    let month = now.getMonth(); 
    let date = now.getDate(); 
    
    // Gün ve ay adları
    const formattedDay = daysOfWeek[day];
    const formattedMonth = monthsOfYear[month];

    // Formatlanmış tarih
    const formattedDate = `${formattedDay}, ${formattedMonth} ${date}`;
    return formattedDate;
}

function updateDate() {
    const dateDiv = document.querySelector('.date');
    dateDiv.innerHTML = getFormattedDate();
}

updateDate();
setInterval(updateDate, 60000);

