document.addEventListener("DOMContentLoaded", () => {
  const btnClaro = document.getElementById("btn-claro");
  const btnOscuro = document.getElementById("btn-oscuro");
  const body = document.body;

  // Aplicar modo guardado al cargar
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "claro") {
    body.classList.add("modo-claro");
    body.classList.remove("modo-oscuro");
  } else if (modoGuardado === "oscuro") {
    body.classList.add("modo-oscuro");
    body.classList.remove("modo-claro");
  }

  btnClaro.addEventListener("click", () => {
    body.classList.remove("modo-oscuro");
    body.classList.add("modo-claro");
    localStorage.setItem("modo", "claro");
  });

  btnOscuro.addEventListener("click", () => {
    body.classList.remove("modo-claro");
    body.classList.add("modo-oscuro");
    localStorage.setItem("modo", "oscuro");
  });
});
