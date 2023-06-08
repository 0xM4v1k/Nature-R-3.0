window.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los elementos de input de cantidad
    const quantityInputs = document.querySelectorAll('.product-quantity input[type="number"]');

    // Obtener todos los elementos de precio
    const priceElements = document.querySelectorAll('.product-price');

    // Actualizar el total en la columna "Total"
    const totalElement = input.parentElement.nextElementSibling;
    totalElement.textContent = isNaN(total) ? '' : total.toFixed(2);

    // Agregar el evento click al botón "Actualizar Compra"
    updateButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Recorrer todos los elementos de input de cantidad
        quantityInputs.forEach(function(input, index) {
            const priceElement = priceElements[index];
            const price = parseFloat(priceElement.textContent.replace('$', '')); // Obtener el precio como un número

            // Obtener el valor del spinner de cantidad y calcular el total
            const quantity = parseInt(input.value);
            const total = quantity * price;

            // Actualizar el total en la columna "Total"
            const totalElement = input.parentElement.nextElementSibling;
            totalElement.textContent = total.toFixed(2);

            // También puedes mostrar el total en la consola para verificarlo
            console.log('Total:', total);
        });
    });
});
// Función para actualizar la compra
function actualizarCompra() {
    const rows = document.querySelectorAll('.table-body-row');
    let subtotal = 0;

    rows.forEach((row, index) => {
        const priceElement = row.querySelector('.product-price');
        const quantityElement = row.querySelector('.product-quantity input');
        const totalElement = row.querySelector('.product-total');

        const price = parseFloat(priceElement.textContent.slice(1)); // Obtener el precio como número
        const quantity = parseInt(quantityElement.value); // Obtener la cantidad como número

        const total = price * quantity;
        subtotal += total;

        totalElement.textContent = isNaN(total) ? '' : total.toFixed(2);

        // Guardar el valor de cantidad en el almacenamiento local
        localStorage.setItem(`quantity_${index}`, quantity);
    });

    const subtotalElement = document.querySelector('.total-data:nth-child(1) td:last-child');
    const totalElement = document.querySelector('.total-data:nth-child(3) td:last-child');

    subtotalElement.textContent = '$' + subtotal.toFixed(2);
    totalElement.textContent = '$' + (subtotal + 45).toFixed(2); // Sumar el envío
}

// Función para restaurar los valores de los campos de cantidad al cargar la página
function restaurarCantidad() {
    const rows = document.querySelectorAll('.table-body-row');

    rows.forEach((row, index) => {
        const quantityElement = row.querySelector('.product-quantity input');

        // Obtener el valor de cantidad del almacenamiento local y establecerlo en el campo
        const quantity = localStorage.getItem(`quantity_${index}`);
        if (quantity !== null) {
            quantityElement.value = quantity;
        }
    });
}

// Llamar a la función restaurarCantidad al cargar la página
restaurarCantidad();

function enviarWhatsApp() {
  // // Verificar si hay productos en el carrito
  // if (productosEnCarrito.length === 0) {
  //   alert("El carrito está vacío");
  //   return;
  // }

  // Obtener los detalles de los productos en el carrito
  let mensaje = "¡Hola! Quiero comprar los siguientes productos:\n";
  productosEnCarrito.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.titulo} - Cantidad: ${
      producto.cantidad
    }\n`;
  });

  // Generar el enlace de WhatsApp con el mensaje
  const enlaceWhatsApp = `https://wa.me/51940895049?text=${encodeURIComponent(
    mensaje
  )}`;

  // Abrir el enlace en una nueva pestaña
  window.open(enlaceWhatsApp, "_blank");
}
