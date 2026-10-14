function apresentar() {
  let num;
  do {
    num = parseInt(prompt("Digite um número:"));
    if (num < 0 || isNaN(num)) {
      alert("Número Inválido.")
    }
  } while (num < 0 || isNaN(num));
  for (let i = 1; i <= 10; i++) {
    alert(`Tabuada do ${num} \n${num} x ${i} = ${num * i}`);
  }
}