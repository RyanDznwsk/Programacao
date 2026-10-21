function apresentar() {
  let temperaturaElevada = 0;
  for (let i = 1; i <= 8;) {
    let temperatura;
    while (isNaN(temperatura)) {
      temperatura = parseFloat(prompt(`Digite a temperatura da medição ${i}:`));
      if (isNaN(temperatura)) {
        alert("Valor Inválido");
      }
    }
    if (temperatura > 5) {
      temperaturaElevada++
    }
    i++;
  }
  if (temperaturaElevada == 0) {
    alert("Não houveram temperaturas elevadas.")
  } else {
    alert(`Houveram ${temperaturaElevada} temperaturas elevadas.`);
  }
}