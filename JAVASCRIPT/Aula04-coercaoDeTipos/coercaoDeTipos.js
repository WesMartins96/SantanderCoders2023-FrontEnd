
// COERÇÃO (CONVERSÃO) DE TIPOS

// Coerção explícita (Manual)
const numero = 10;
console.log(numero, typeof numero);
//Coerção realizada
const numeroString = String(numero);
console.log(numeroString, typeof numeroString);



// Coerção implícita (automática)

//SOMENTE QUANDO É SOMA ELE CONVERTE PARA STRING E REALIZA A CONCATENAÇÃO
console.log(10 + '1'); //desta forma, sempre é convertido em string, no caso está concatenando 10 com 1
console.log(10 - '1'); //desta forma, o javascript entende que são numbers, e realiza a subtração
