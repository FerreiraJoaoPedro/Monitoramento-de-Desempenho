const calcular = document.getElementById('calcular');

	function calculo () {

	
		const nome = document.getElementById('nome').value;
		const peso = document.getElementById('peso').value;
		const distancia = document.getElementById('distancia').value;
		const horas = document.getElementById('horas').value;
		const minutos = document.getElementById('minutos').value;
		const segundos = document.getElementById('segundos').value;
		const resultado = document.getElementById('resultado');


		if(nome !== '' && peso !== '' && distancia !== '' && horas !== '' && minutos !== '' && segundos !== ''){
			const tempoHoras = (parseFloat(horas) + parseFloat(minutos / 60) + parseFloat(segundos / 360)).toFixed(2);
			const tempoMinutos = (parseFloat(horas * 60) + parseFloat(minutos) + parseFloat(segundos / 60)).toFixed(2);
			const velocidadeMedia = (distancia / tempoHoras).toFixed(2);
			const pace = (distancia / tempoMinutos).toFixed(2);
			const gastoCalorico = (velocidadeMedia * peso * 0.0175 * tempoMinutos).toFixed(2);
			
			resultado.textContent = 'Olá '+nome+'! Você percorreu '+distancia+' km em '+horas+' h, '+minutos+' min e '+segundos+' s. Isso quer dizer que a sua velocidade média foi de '+velocidadeMedia+' km/h, o que o corresponde a um pace de '+pace+' min/km. Com '+peso+' kg, você gastou cerca de '+gastoCalorico+' cal';
			}

			else{
			resultado.textContent = 'Por favor, preencha todos os campos!'
			}

	}

	calcular.addEventListener('click', calculo);