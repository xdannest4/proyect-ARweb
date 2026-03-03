document.querySelector("a-scene").addEventListener("loaded", function () {

  console.log("URL:", window.location.href);

  const params = new URLSearchParams(window.location.search);
  let producto = params.get("producto");

  if (!producto) producto = "lechuga";
  producto = producto.toLowerCase();

  const modelosDisponibles = {
    lechuga: "assets/Lechuga.glb",
    plato: "assets/plato_nuevo.glb",
  };

  const modelo = document.querySelector("#modelo");
  console.log("Elemento modelo:", modelo);

  if (modelo && modelosDisponibles[producto]) {
    modelo.setAttribute("gltf-model", modelosDisponibles[producto]);
  }

});
