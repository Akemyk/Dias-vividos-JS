var idade = parseInt(prompt("Digite a sua idade expressa em anos"))
var meses = parseInt(prompt("Digite a quantidade de messes até o seu aniversário"))
var dias = parseInt(prompt("Digite os dias desed o último mêsversário"))
var totalAnos = 365 * idade
var totalMeses = 30 * meses
var resultado = totalAnos + totalMeses + dias
alert("A sua idade em dias são "+resultado)
