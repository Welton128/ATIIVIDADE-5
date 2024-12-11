let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

let soma = num1 + num2;

if (soma > 20) {
    soma += 8;
} else {
    soma -= 5;
}

alert("O resultado é: " + soma);
