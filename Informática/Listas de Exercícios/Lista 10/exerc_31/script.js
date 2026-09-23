function apresentar() {
  let setor = 1;
  let totalCusto = 0;
  let setores8t = 0;
  let setoresTaxados = 0;
  let maiorPeso = 0;
  let menorCusto = Infinity;
  let continuar = true;
  while (continuar === true) {
    let nomeSetor;
    while (nomeSetor === null) {
      nomeSetor = prompt(`Digite o nome do setor ${setor}:`);
      if (nomeSetor === null) {
        alert("Nome do setor inválido. Digite um valor válido.");
      }
    }
    let refugo;
    while (refugo < 0 || refugo > 100 || isNaN(refugo)) {
      refugo = parseFloat(prompt(`Digite o refugo do setor ${setor}:`));
      if (refugo < 0 || refugo > 100 || isNaN(refugo)) {
        alert("Valor de refugo inválido. Digite um valor entre 0 e 100.");
      }
    }
    setor++;
    let custo;
    if (refugo <= 8) {
      custo = refugo * 120;
      setores8t++;
    } else if (refugo <= 20) {
      custo = 960 + (refugo - 8) * 250;
    } else {
      custo = 3960 + (refugo - 20) * 450;
    }
    if (refugo > 25 || custo > 10000) {
      custo = custo * 1.25;
      setoresTaxados++;
    }
    if (refugo > maiorPeso) {
      maiorPeso = refugo;
    }
    if (custo < menorCusto) {
      menorCusto = custo;
    }
    totalCusto += custo;
    continuar = confirm("Deseja continuar?");
  }
  let media = totalCusto / (setor - 1);
  let percentualSetores8t = (setores8t / (setor - 1)) * 100;
  let percentualSetoresTaxados = (setoresTaxados / (setor - 1)) * 100;
  alert(`Média de custo: R$ ${media.toFixed(2)}\nPercentual de setores com refugo até 8%: ${percentualSetores8t.toFixed(2)}%\nPercentual de setores taxados: ${percentualSetoresTaxados.toFixed(2)}%`);
}