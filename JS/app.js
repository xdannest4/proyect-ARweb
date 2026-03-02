window.onload = function () {

  const params = new URLSearchParams(window.location.search);
  let producto = params.get("producto");

  console.log("Producto recibido:", producto);

  if (!producto) {
    producto = "lechuga";
  }

  producto = producto.toLowerCase();

  const modelo = document.getElementById("modelo");

  const modelosDisponibles = {
    lechuga: "models/Lechuga.glb",
    plato: "models/mesa.glb",
  };

  if (modelosDisponibles[producto]) {
    modelo.setAttribute("gltf-model", modelosDisponibles[producto]);
  } else {
    modelo.setAttribute("gltf-model", "models/Lechuga.glb");
  }

};