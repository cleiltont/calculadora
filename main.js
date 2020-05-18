// Pega o elemento input com name "tela", do arquivo index
let tela1 = document.querySelector('input[name=tela1]');
let tela2 = document.querySelector('input[name=tela2]');

// Pega a tabela do arquivo index.html
let inputs = document.querySelector('table');

let numeros = [];

//Esta função encontrar o elemento que você clicar na area
//da tabela. Tudo que está dentro da tabela.
inputs.addEventListener('click', function(event){

	//Busca o valor do elemento que foi clicado
	button = event.target.value;

	//Se o valor for diferente de undefined ou name "resultado",
	//esse codigo executara.
	if(button !== undefined && 
		event.target.type !== 'text' &&
		event.target.name !== 'ac'){
		
		//O que irá mostrar na tela.
		//Qualquer botão diferente do OK.
			tela1.value += button;

			//Transforma em numero
			num = parseInt(button);

			//Verifica se é um numero
			if(typeof num === 'number' && isNaN(num) === false){
				numeros.push(num);
				localStorage.setItem('numero1', numeros);
			}
			if(button.value === "+"){
				//
			} else if(button.value === "-"){
				//
			}

			tela2.value = localStorage.getItem('numeros');
		
	}

});

//localStorage('nums', numeros);
