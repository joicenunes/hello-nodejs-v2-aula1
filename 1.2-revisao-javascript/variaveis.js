//declarando variáveis

var a = 5
console.log(a); //saída do valor de 'a' (5) declarado na linha anterior
var a = 7
console.log(a); //saída do novo valor de 'a' (agora 7)
// 'var' é mutável mesmo em escopos diferentes

let b = 15
console.log(b); //saída do valor de 'let b' declarado na linha anterior
let b = 20 //SyntaxError: redeclaration of let b
console.log(b); //saída do valor de 'let b' declarado na linha 9
// let é imutável apenas dentro de cada escopo
// podendo ser redeclarado somente quando em escopos diferentes

const c = 859
console.log(c); //859
const c = 15 //SyntaxError: redeclaration of const c
// const é completamente imutável
