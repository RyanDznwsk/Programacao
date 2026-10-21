function apresentar() {
  let faturamentoAcima5k = 0;
  let faturamentoTotal = 0;
  for (let i = 1; i <= 5;) {
    let faturamento;
    while (isNaN(faturamento)) {
      faturamento = parseFloat(prompt(`Digite o faturamento do dia útil ${i}:`));
      if (isNaN(faturamento)) {
        alert("Valor Inválido");
      }
    }
    if (faturamento > 5000) {
      faturamentoAcima5k++;
    }
    faturamentoTotal += faturamento;
    i++;
  }
  let media = faturamentoTotal / 7;
  alert(`O faturamento total foi de R$:${faturamentoTotal.toFixed(2)}. \nA média de faturamento foi de R$:${media.toFixed(2)}. \nHouveram ${faturamentoAcima5k} dias com faturamento acima de R$:5.000,00.`);
}