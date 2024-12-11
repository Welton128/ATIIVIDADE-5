function calcularMedia() {
    let nota1 = parseFloat(prompt("Nota 1:"));
    let nota2 = parseFloat(prompt("Nota 2:"));
    let nota3 = parseFloat(prompt("Nota 3:"));
    let media = (nota1 + nota2 + nota3) / 3;
    alert("Média: " + media.toFixed(2));
  }
  
  calcularMedia();
  