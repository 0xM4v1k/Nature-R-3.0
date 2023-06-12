const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const fromBx = document.querySelector(".fromBx");
const body = document.querySelector("body");

// Obtener los datos almacenados en el LocalStorage
let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

// Función que valida los datos ingresados en el formulario signinFrom
function validateLoginForm(username, password) {
  // Verificar si los datos ingresados coinciden con los datos registrados
  const user = usersData.find(
    (user) => user.name === username && user.password === password
  );

  return user;
}

// Obtener los valores de usuario y contraseña del formulario
const loginForm = document.querySelector(".signinFrom form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector(
    ".signinFrom input[type='text']"
  ).value;
  const password = document.querySelector(
    ".signinFrom input[type='password']"
  ).value;

  // Validar los datos ingresados
  const isValid = validateLoginForm(username, password);

  if (isValid) {
    // Los datos son válidos
    alert("Inicio de sesión exitoso");
    // Redirigir al usuario a otra página
    window.location.href = "index-sesion.html";
    // Guardar el nombre del usuario en el LocalStorage
    localStorage.setItem("username", user.name);
  } else {
    // Los datos no son válidos
    alert("Credenciales inválidas. Inténtalo de nuevo.");
  }
});

const saveBtn = document.getElementById("save_btn");
saveBtn.addEventListener("click", function handlerClick(event) {
  event.preventDefault();

  //----Input Value Collect
  let nameValue, email, password, address;
  nameValue = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  address = document.getElementById("address").value;

  // Validar campos obligatorios
  if (
    nameValue.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    address.trim() === ""
  ) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  //Set Value Local Storage
  localStorage.setItem("name", nameValue);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("address", address);

  // Almacenar los datos en el array usersData
  usersData.push({ name: nameValue, email, password, address });

  // Guardar los datos actualizados en el LocalStorage
  localStorage.setItem("usersData", JSON.stringify(usersData));

  // Función de limpiar formulario
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("address").value = "";
  }

  clearForm();
});

signupBtn.onclick = function () {
  fromBx.classList.add("active");
  body.classList.add("active");

};
signinBtn.onclick = function () {
  fromBx.classList.remove("active");
  body.classList.remove("active");
};

window.addEventListener("DOMContentLoaded", function () {
  const usernameSpan = document.getElementById("username");
  const storedUsername = localStorage.getItem("username");

  if (storedUsername) {
    usernameSpan.textContent = storedUsername;
  }
});
