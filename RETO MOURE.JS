function cuentaRegresiva(numeroInicial, tiempoEntreNumeros) {
  // Validar si los parámetros son números enteros
  if (!Number.isInteger(numeroInicial) || !Number.isInteger(tiempoEntreNumeros)) {
    console.log('Los parámetros deben ser números enteros.');
    return;
  }

  let contador = numeroInicial;

  const intervalo = setInterval(() => {
    console.log(contador);

    if (contador === 0) {
      clearInterval(intervalo);
    }

    contador--;
  }, tiempoEntreNumeros);
}

// Ejemplo de uso: cuenta regresiva del 5 al 0 con un intervalo de 1000 milisegundos (1 segundo)
cuentaRegresiva(5.1, 1000);