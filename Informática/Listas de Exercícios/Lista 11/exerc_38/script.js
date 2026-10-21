function apresentar() {
  let lotes = [];
  for (let i = 1; i <= 6;) {
    let lote;
    while (isNaN(lote)) {
      lote = parseFloat(prompt(`Digite o peso do lote ${i}:`));
      if (isNaN(lote)) {
        alert("Valor Inválido");
      }
    }
    lotes.push(lote);
    i++;
  }
  let maior = Math.max(...lotes);
  let menor = Math.min(...lotes);
  alert(`O maior valor é ${maior}. \nO menor valor é ${menor}.`)
}