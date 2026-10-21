function apresentar() {
  let consumoTotal = 0;
  for (let i = 1; i <= 5;) {
    let consumo;
    while (isNaN(consumo)) {
      consumo = parseFloat(prompt(`Digite o consumo do dia ${i}:`));
      if (isNaN(consumo)) {
        alert("Valor Inválido");
      }
    }
    consumoTotal += consumo;
    i++;
  }
  let media = consumoTotal / 5;
  alert(`A média de de consumo diário foi de ${media}Kwh \nO consumo total foi de ${consumoTotal}Kwh.`);
}