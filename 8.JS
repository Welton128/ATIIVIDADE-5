let salario = parseFloat(prompt("Digite o salário:"));
let percentualAumento = parseFloat(prompt("Digite o percentual de aumento (%):"));

let aumento = salario * (percentualAumento / 100);

let novoSalario = salario + aumento;

alert("O valor do aumento é: R$ " + aumento.toFixed(2) + "\nO novo salário é: R$ " + novoSalario.toFixed(2));
