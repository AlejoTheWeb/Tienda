document.getElementById("btnMenu").addEventListener("click",
  function () {
    let contenido = document.getElementById("contenido");
    let elemento = document.getElementById("navbar");
    if (elemento.classList.contains("navbar")) {
      elemento.classList.remove("navbar")
      elemento.classList.add("no_navbar");
      contenido.classList.add("contenido_principal-modificado")
    } else {
      elemento.classList.remove("no_navbar");
      elemento.classList.add("navbar");
      contenido.claslitt.remove("contenido_principal-modificado")
    }

  });