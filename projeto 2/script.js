console.log("Hello World")

















































var nome ="davi";


let idade = 20;
let altura = 1.80;


const cpf = "222.233.123-00"

var numeroNormal = 2;
var numeroQuebrado = 33.2;

var textoNormal ="este e um texto normal com aspas e variavel", numeroNormal;
var textoComVariaveis = `este e um texto com crase e variavel ${numeroNormal} desadasdasdas`

var verdadeiro = true;
var falso = false;


console.log(numeroNormal)
console.log(numeroQuebrado)
console.log("----------------------------")
console.log(textoNormal)
console.log(textoComVariaveis)
console.log("----------------------------")
console.log(verdadeiro)
console.log(falso)
console.log("-----------------------------")



var objeto = {
    nome:"Davi",
    idade: 13
};

console.log(objeto);





var a = "1";
var b = 2;


console.log("a e igual a b sem a tipagem:", a == b); 
console.log("a e igual a b sem a tipagem:", a === b);
console.log("a e diferente de b com a tipagem:", a !== b);
console.log("a e  diferente a b sem a tipagem", a != b);


var numero = 0;


function Cliquei() {
    console.log("cliquei aqui")
    console.log(`${numero} vez` );

}


const Arrow = () => {
    console.log("sou uma arrow function");
    console.log("eu funciono igual uma função normal, o que muda e a forma")

};






const Soma = (num1, num2) => {
    return num1 + num2;

}
const resultado = Soma(23,7);
console.log("este e o resultado", resultado)

