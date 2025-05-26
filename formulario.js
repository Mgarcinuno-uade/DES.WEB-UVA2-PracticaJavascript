// Espera que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector(".formulario-contacto");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores ingresados
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación
    const errores = [];

    if (nombre === "") {
      errores.push("El campo 'Nombre' es obligatorio.");
    }

    if (!validarEmail(email)) {
      errores.push("Debe ingresar un correo electrónico válido.");
    }

    if (asunto === "") {
      errores.push("El campo 'Asunto' es obligatorio.");
    }

    if (mensaje === "") {
      errores.push("El campo 'Mensaje' es obligatorio.");
    }

    // Mostrar errores o mensaje de éxito
    if (errores.length > 0) {
      alert("Por favor corrige los siguientes errores:\n\n" + errores.join("\n"));
    } else {
      alert(`Gracias por tu contacto, ${nombre}.\nEn breve te estaré respondiendo.`);
      formulario.reset();
    }
  });

  // Función para validar el email
  function validarEmail(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }
});
