// Pega o elemento input com name "tela", do arquivo index
let tela = document.querySelector('input[name=tela]');

// Pega a tabela do arquivo index.html
let inputs = document.querySelector('table');

//Esta função encontrar o elemento que você clicar na area
//da tabela. Tudo que está dentro da tabela.
inputs.addEventListener('click', function(event){

	//Busca o valor do elemento que foi clicado
	button = event.target.value;

	//Se o valor for diferente de undefined ou name "resultado",
	//esse codigo executara.
	if(button !== undefined && 
		event.target.type !== 'text' &&
		event.target.name !== 'ac' &&
		event.target.name !== 'somar'){
		
		//O que irá mostrar na tela.
		//Qualquer botão diferente do OK.
		tela.value += button;

		
		
		
	}else if(event.target.name === 'somar'){
		if(tela.value !== ''){
			let valor = eval(tela.value);
			tela.value = valor;
		}
	}

});

//localStorage('nums', numeros);
