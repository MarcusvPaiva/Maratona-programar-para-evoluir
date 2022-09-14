// let nomeVariável = variável (string, números, etc.), pode ser alterado posteriormente
// const nomeVariável = variável, não pode ser alterado, dando erro
// String - texto (entre aspas)
const Nome01 = "Marcus"
let Nome02 = "Leandro"
console.log(Nome01);

//Nome01 = "João"
console.log(Nome01);

//Number - número (inteiro, decimal)
let idade = 25;
let altura = 1.64;

// boolean - Verdadeiro ou falso (true or false, ou 1 e 0) sem aspas

let Humano = true;
const gostaDeAlgo = false;

//outros

let indefinido = undefined; // Dado indefinido
let nulo = null; // Nenhum dado

// Tipos de estrutura de dados
let tipoArray = [] // Primeira posição é sempre 0
let tipoObjeto = {}
let arrayMarcus = ["Marcus", 1.64, 25, false, true];
let notasTurma = [10,8,6,7,9,1,0]
console.log(arrayMarcus);
let objetoMarcus = {
    nome:"Marcus",
    idade:25,
    altura:1.64,
    Humano:true
}
console.log(objetoMarcus);

//=========================================================
/*Operadores lógicos
Igualdade: == (em conteudo) ou === (em tipo de dados)
Diferente: != (em conteudo) ou !== (em tipo de dados)
> : maior
< : menor
>=: maior ou igual
<=: menor ou igual
&&: e
||: ou
*/
let comparacao = 6 == 6
console.log(5==5); // true
console.log(comparacao); //true
console.log(5==comparacao); // false
console.log(5=="5");//true
console.log(5==="5");//false
console.log("Marcus" == "Marcus");//true
console.log("Marcus" == "Marcus Vinicius");//false

console.log(5!=5);//false
console.log(5!=6);//true
console.log(5!=comparacao);//true
console.log(5!=="5");//true

console.log(5>6);//false
console.log(5<6);//true

console.log(5>=5);//true
console.log(5<=6);//true
console.log(5 == 5 && 6 == 7)//false
console.log(5 == 5 || 6 == 7)//true

let idadePessoa = 17;

console.log(idadePessoa >= 18);//true

/* Operadores matemáticos
+ : Soma
- : Subtração
* : Multiplicação
/ : Divisão
*/

let soma = 6 + 4;
console.log(soma);// 10

let n1 = 9;
let n2 = 3;
let soma2 = n1 + n2;
console.log(soma2);//12

let subtracao = n1 - n2;
console.log(subtracao);//6

let multiplicacao = n1 * n2;
console.log(multiplicacao);//27

let divisao = n1 / n2;
console.log(divisao);//3

/* Condicionais
if 
else if (Se houver mais de duas condições)
else: (Não é obrigatório se não houver código)
se (atende esta condição){executa este bloco;}
caso (atenda esta condição) {executa este bloco;} 
caso contrário {executa este bloco;}
for:
para (tal condição){executa este bloco}
while:
*/
if(idade>=18){// idade = 25
    console.log("Pode tirar CNH");
} else {
    console.log("NÃO, não pode tirar CNH");
}

// Exemplo de um banco
let salario = 10000
if (salario >= 10000){
    console.log("Você será OURO");
} else if (salario >= 5000 && salario <10000){
    console.log("Você será PRATA");
} else {
    console.log("Você será BRONZE");
}

for (let index=0; index<20;index++){
    console.log("volta "+index);
}
console.log("saimos do for");

let letras = ["a", "b", "c", "d", "e", "f"]
console.log(letras); // Exibe todo o array
console.log(letras[2]); // Letra c

for (let i = 0; i < letras.length; i++){
    console.log("Letra "+letras[i]);
}