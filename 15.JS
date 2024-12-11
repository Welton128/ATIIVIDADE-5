let idade = parseInt(prompt("Digite a idade do nadador:"));

if (idade >= 18) {
    alert("Adulto");
} else if (idade >= 14) {
    alert("Juvenil");
} else if (idade >= 9) {
    alert("Infantil");
} else {
    alert("Mirim");
}
