const format = /[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
const letterFormat = /[a-zA-Z]+/;
const numberFormat = /[0-9]+/;
const emailFormat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

let nameErr = document.getElementById("name-error");
let surnameErr = document.getElementById("surname-error");
let phoneErr = document.getElementById("phone-error");
let mailErr = document.getElementById("mail-error");
let companyErr = document.getElementById("company-error");
let passwordErr = document.getElementById("password-error");

function removeClass(element, className, errorElement) {
  setTimeout(function () {
    element.classList.remove(className);
    errorElement.textContent = "";
  }, 2000);
}
function removeClass2(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}
function checkName(element) {
  if (element.value.length < 3) {
    element.classList.add("name-active");
    nameErr.textContent = "En az 3 karakter olmalı";
    state = true;
  } else {
    element.classList.remove("name-active");
    nameErr.textContent = null;
    state = true;
  }
}
function checkSurname(element) {
  if (element.value.length < 5) {
    element.classList.add("surname-active");
    surnameErr.textContent = "En az 5 karakter içermelidir";
    state = true;
  } else {
    element.classList.remove("surname-active");
    surnameErr.textContent = null;
    state = true;
  }
}
function checkPhone(element) {
  if (element.value.length < 11) {
    element.classList.add("phone-active");
    phoneErr.textContent = "Numaranızı kontrol ediniz";
    state = true;
  } else if (element.value.indexOf("0") !== 0) {
    element.classList.add("phone-active");
    phoneErr.textContent = "Numaranızı başında 0 ile girin";
  } else {
    element.classList.remove("phone-active");
    phoneErr.textContent = null;
    state = true;
  }
}
function checkMail(element) {
  if (!emailFormat.test(element.value)) {
    element.classList.add("mail-active");
    mailErr.textContent = "Formata uygun değil";
    state = true;
  } else {
    element.classList.remove("mail-active");
    mailErr.textContent = null;
    state = true;
  }
}
function checkCompany(element) {
  if (!numberFormat.test(element.value) || !letterFormat.test(element.value)) {
    element.classList.add("company-active");
    companyErr.textContent = "Şirket ismi harf ve rakam içermeli";
    state = true;
  } else {
    element.classList.remove("company-active");
    companyErr.textContent = null;
    state = true;
  }
}
function checkPassword(element) {
  if (element.value.length < 5) {
    element.classList.add("password-active");
    passwordErr.textContent = "En az 5 karakter olmalıdır";
    state = true;
  } else if (!format.test(element.value)) {
    element.classList.add("password-active");
    passwordErr.textContent = "Özel karakterler içermelidir";
    state = true;
  } else if (!numberFormat.test(element.value)) {
    element.classList.add("password-active");
    passwordErr.textContent = "Rakam bulunmalı";
  } else {
    element.classList.remove("password-active");
    passwordErr.textContent = null;
    state = true;
  }
}

function clearPreviousClass() {
  var inputs = form.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.classList.remove(
      "name-active","phone-active","surname-active",
      "mail-active","company-active","password-active"
    );
  });
}

function checkCredentials(event) {
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let email = document.getElementById("mail");
  let phone = document.getElementById("phone");
  let company = document.getElementById("company");
  let password = document.getElementById("password");

  checkName(name);checkSurname(surname);checkCompany(company);
  checkMail(email);checkPassword(password);checkPhone(phone);

  if (state) {
    event.preventDefault();
  }
}
