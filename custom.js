// Obtener los elementos necesarios
var userImg = document.getElementById("userImg");
var userMenuContainer = document.getElementById("userMenuContainer");

// Agregar evento de clic a la imagen
userImg.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar comportamiento predeterminado del enlace

  // Alternar la clase 'show' en el contenedor del menú
  userMenuContainer.classList.toggle("show");
});
