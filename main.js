// Pega o elemento input com name "tela", do arquivo index
let tela = document.querySelector('input[name=tela]');

// Variavel do tipo array com os numeros que tem na calculadora
let numeros = [0,1,2,3,4,5,6,7,8,9];

let operadores = ['+', '-', '*', '/'];

// Pega a tabela do arquivo index.html
let inputs = document.querySelector('table');

//Esta função encontrar o elemento que você clicar na area
//da tabela. Tudo que está dentro da tabela.
inputs.addEventListener('click', function(event){

	//Busca o valor do elemento que foi clicado
	button = event.target.value;
	
	for(numero of numeros){
		//console.log(typeof numero);
	}

	//Se o valor for diferente de undefined ou name "resultado",
	//esse codigo executara.
	if(button !== undefined){
		//O que irá mostrar na tela.
		//Qualquer botão diferente do OK.
		if(event.target.name !== 'resultado'){
			//console.log(button);
			tela.value += button;

			//Transforma em numero
			num = parseInt(button);

			//Verifica se é um numero
			let pos = 0;
			let nums;
			let somar;
			if(typeof num === 'number' && isNaN(num) === false){
				nums = button;
			}else{
				if(button.value === "+"){
					for(num of nums){
						somar += num;
						//tela.value = somar;
						console.log(somar);
					}
				}
			}
		}
	}
});

