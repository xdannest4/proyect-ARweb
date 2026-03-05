window.onload = function () {

  const params = new URLSearchParams(window.location.search);
  const producto = params.get("producto");

  const modelo = document.getElementById("modelo");

  const modelosDisponibles = {
    lechuga: "assets/Lechuga.glb",
    platoN: "assets/plato_nuevo.glb",
    cuboTest: "assets/Cube_Test.glb"
  };

  if (modelosDisponibles[producto]) {
    modelo.setAttribute("gltf-model", modelosDisponibles[producto]);
  } else {
    modelo.setAttribute("gltf-model", "assets/Lechuga.glb"); // default
  }

};
