function serompe() {
  return 3 + z;
}

try {
  serompe();
} catch (err) {
  console.log("Vaya, algo se ha roto...");
  console.log(err.message);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("esto de aqui esta al final");

function seRompeAsincrona() {
  setTimeout(function () {
    return 3 + z;
  }, 1000);
}

