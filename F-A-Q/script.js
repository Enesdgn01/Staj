document.querySelectorAll(".toggle").forEach((button) => {
  button.innerHTML = "<i class='fas fa-chevron-down'></i>";

  button.addEventListener("click", () => {
    const box = button.parentElement;
    const text = box.querySelector(".text");

    const isActive = box.classList.contains("active");

    if (isActive) {
      // FAQ aktif ise
      box.classList.remove("active");
      text.style.display = "none";
      button.innerHTML = "<i class='fas fa-chevron-down'></i>";
    } else {
      // FAQ aktif değilse
      box.classList.add("active");
      text.style.display = "block";
      button.innerHTML = "<i class='fas fa-times'></i>";
    }
  });
});
