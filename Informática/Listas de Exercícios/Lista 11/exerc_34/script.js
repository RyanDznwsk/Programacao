function apresentar() {
  let N;
  while (N < 0 || isNaN(N)) {
    N = parseInt(prompt("Digite o valor de N:"))
    if (N < 0 || isNaN(N)) {
      alert("Valor Inválido!");
    }
  }
  let soma = 0;
  for (let i = 1; i <= N;) {
    soma += i;
    i++;
  }
  alert(soma);
}