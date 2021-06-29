const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65,91)); // String.fromCharCode contém as definições de caracteres via codigo.
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = ',.;~^[]{}!@#$%*()_+=*-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){ //função exportada.
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){ //curto circuito(evita o uso excessivo de ifs)
        maiusculas && senhaArray.push(geraMaiuscula()); 
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    
    return senhaArray.join('').slice(0, qtd); //une e depois fatia da posição 0 até o tamanho
}


// console.log(geraSenha(5,true, true));