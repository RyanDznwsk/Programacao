function apresentar() {
  let N;
  while (isNaN(N)) {
    N = parseInt(prompt("Digite o valor de N:"))
    if (isNaN(N)) {
      alert("Valor Inválido!");
    }
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${N} x ${i} = ${N * i}`);
  }
}