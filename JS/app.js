window.onload = function () {

  const params = new URLSearchParams(window.location.search);
  const producto = params.get("producto");

  const modelo = document.getElementById("modelo");

  const modelosDisponibles = {
    lechuga: "models/Lechuga.glb",
    plato: "models/mesa.glb",

  };

  if (modelosDisponibles[producto]) {
    modelo.setAttribute("gltf-model", modelosDisponibles[producto]);
  } else {
    modelo.setAttribute("gltf-model", "models/Lechuga.glb"); // default
  }

};