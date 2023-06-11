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

  if (user) {
    // Los datos son válidos
    return true;
  } else {
    // Los datos no son válidos
    return false;
  }
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
    window.location.href = "index.html";
  } else {
    // Los datos no son válidos
    alert("Credenciales inválidas. Inténtalo de nuevo.");
  }
});

const saveBtn = document.getElementById("save_btn");
saveBtn.addEventListener("click", function handlerClick(event) {
  event.preventDefault();

  //----Input Value Collect
  let nameValue, email, password, confirmPassword;
  nameValue = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirmPassword").value;

  // Validar campos obligatorios
  if (
    nameValue.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  //Set Value Local Storage
  localStorage.setItem("name", nameValue);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("confirmPassword", confirmPassword);

  // Almacenar los datos en el array usersData
  usersData.push({ name: nameValue, email, password, confirmPassword });

  // Guardar los datos actualizados en el LocalStorage
  localStorage.setItem("usersData", JSON.stringify(usersData));

  // Función de limpiar formulario
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
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

signinBtn.onclick = function () {
  const username = document.querySelector(
    ".signinFrom input[type='text']"
  ).value;
  const password = document.querySelector(
    ".signinFrom input[type='password']"
  ).value;

  // Verificar si los datos ingresados coinciden con los datos registrados
  const user = usersData.find(
    (user) => user.name === username && user.password === password
  );

  if (user) {
    // Aquí puedes redirigir al usuario a la página deseada después del inicio de sesión exitoso
    alert("Inicio de sesión exitoso");
    // Redirigir al usuario a otra página
    window.location.href = "index.html";
  } else {
    // Aquí puedes mostrar un mensaje de error o realizar otra acción en caso de credenciales inválidas
    alert("Credenciales inválidas. Inténtalo de nuevo.");
  }
};
