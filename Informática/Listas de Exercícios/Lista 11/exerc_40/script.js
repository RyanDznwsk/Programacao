function apresentar() {
  let lotes = [];
  let loteAcima1k = 0;
  let unidadesTotal = 0;
  for (let i = 1; i <= 10;) {
    let unidades;
    while (unidades < 0 || isNaN(unidades)) {
      unidades = parseFloat(prompt(`Digite a quantidade de unidades produzidas no lote ${i}:`));
      if (unidades < 0 || isNaN(unidades)) {
        alert("Valor Inválido");
      }
    }
    if (faturamento >= 1000) {
      loteAcima1k++;
    }
    lotes.push(unidades);
    unidadesTotal += unidades;
    i++;
  }
  alert(``);
}