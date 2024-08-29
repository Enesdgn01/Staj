
function spawnText() {
    const textElement = document.querySelector('.text');
    const textElement2 = document.querySelector('.text2');
    const messages = "Hello World! "; 

    
    for (let i = 0; i < 10; i++) { 
        const span = document.createElement('span');
        span.textContent = messages;
        textElement.appendChild(span);
    }

    
    for (let i = 0; i < 10; i++) { 
        const span = document.createElement('span');
        span.textContent = messages;
        textElement2.appendChild(span);
    }
}

// Mesajları oluştur
spawnText();
