
var a = 2;
var b = 2; 

let entradas123 = document.querySelectorAll('input');
let resposta = document.querySelector('.resposta');
//let botao = document.querySelector('#btnsomar');
let btn = document.querySelector("#btnsomar");


peganumero1 = function(){
    return entradas123[0].value;
}

peganumero2 = function(){
    return entradas123[1].value;
}

testarentradasvazias = function(){
    if(peganumero1() === '' || peganumero2() === '')
        return true;
    else
        return false;
}

somar = function(){
     if(testarentradasvazias()){
         resposta.textContent = "erro: preencha os dois campos numericos";
         resposta.classList.remove('correta');
         resposta.classList.add('errada');
         return false;
     }
     else{
         atualizaresposta();
     }
}

atualizaresposta = function(){
    let num1 = parseInt(peganumero1());
    let num2 = parseInt(peganumero2()); 
    var soma = num1 + num2;
    resposta.textContent = num1 + '+'+ num2 + '=' + soma;
    resposta.classList.remove('errada');
    resposta.classList.add('correta');
}

btn.addEventListener('click',somar);