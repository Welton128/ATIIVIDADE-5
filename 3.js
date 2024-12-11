
let valorEmReais = parseFloat(prompt("Digite o valor em reais:"));
let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));


let valorEmDolares = valorEmReais / cotacaoDolar;


alert("O valor em dólares é: $ " + valorEmDolares.toFixed(2));
