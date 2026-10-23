function apresentar() {
  let lotes = [];
  let lotesAcima1k = 0;
  let unidadesTotal = 0;
  for (let i = 1; i <= 10;) {
    let unidades;
    while (unidades < 0 || isNaN(unidades)) {
      unidades = parseFloat(prompt(`Digite a quantidade de unidades produzidas no lote ${i}:`));
      if (unidades < 0 || isNaN(unidades)) {
        alert("Valor Inválido");
      }
    }
    if (unidades >= 1000) {
      lotesAcima1k++;
    }
    lotes.push(unidades);
    unidadesTotal += unidades;
    i++;
  }
  let maior = Math.max(...lotes);
  let posicaoMaior = lotes.indexOf(maior) + 1;
  alert(`A produção total foi de ${unidadesTotal} unidades. \nHouveram ${lotesAcima1k} lotes com pelo menos 1000 unidades. \nO lote com mais unidades foi o ${posicaoMaior} com ${maior} unidades.`);
}
