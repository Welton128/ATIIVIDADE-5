function converterDolarParaReal() {
    let cotacao = 5.25;
    let valorDolar = parseFloat(prompt("Valor em dólares:"));
    let valorReal = valorDolar * cotacao;
    alert(`${valorDolar} USD = ${valorReal.toFixed(2)} BRL`);
  }
  
  converterDolarParaReal();

  