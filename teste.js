let tela = document.querySelector('input');
let num1 = document.querySelector('button[name=num1]');
let adicao = document.querySelector('button[name=mais]');
let num2 = document.querySelector('button[name=num2]');
let resultado = document.querySelector('button[name=somar]');

num1.onclick = function(){
	tela.value += num1.value;
}

adicao.onclick = function(){
	tela.value += adicao.value;
}

num2.onclick = function(){
	tela.value += num2.value;
}

//num1.onclick = function(){
//	tela.value = num1.value;
//}