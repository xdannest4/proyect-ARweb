document.querySelector("a-scene").addEventListener("loaded", function () {

  const params = new URLSearchParams(window.location.search);
  let producto = params.get("producto");

  if (!producto) producto = "lechuga";
  producto = producto.toLowerCase();

  const modelosDisponibles = {
    lechuga: "assets/Lechuga.glb",
    plato: "assets/plato_nuevo.glb",
  };

  const modelo = document.querySelector("#modelo");

  if (modelo && modelosDisponibles[producto]) {
    modelo.setAttribute("gltf-model", modelosDisponibles[producto]);
  }

});
