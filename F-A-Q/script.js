document.querySelectorAll(".toggle").forEach(button => {
    button.innerHTML = "<i class='fas fa-chevron-down'></i>";
  
    button.addEventListener("click", () => {
        const box = button.parentElement;
        const text = box.querySelector(".text");
        const message = box.querySelector(".message");
  
        const isActive = box.classList.contains("active");
  
        if (isActive) {
            // FAQ aktif ise
            box.classList.remove("active");
            text.style.display = "none";
            button.innerHTML = "<i class='fas fa-chevron-down'></i>";
            message.style.display = "none";  // 'message' öğesini gizle
        } else {
            // FAQ aktif değilse
            box.classList.add("active");
            text.style.display = "block";
            button.innerHTML = "<i class='fas fa-times'></i>";
            message.style.display = "block";  // 'message' öğesini göster
        }
    });
});