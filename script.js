const calcular = document.getElementById('calcular');

	function calculo () {

	
		const nome = document.getElementById('nome').value;
		const peso = document.getElementById('peso').value;
		const distancia = document.getElementById('distancia').value;
		const tempo = document.getElementById('tempo').value;
		const resultado = document.getElementById('resultado');


		if(nome !== '' && peso !== '' && distancia !== '' && tempo !== ''){
			const tempoCorte = tempo.split(':');
			const horas = parseInt(tempoCorte[0]);
			const minutos = parseInt(tempoCorte[1]);
			const segundos = parseInt(tempoCorte[2]);
			const tempoHoras = (horas + minutos / 60 + segundos / 3600).toFixed(2);
			const tempoMinutos = (horas * 60 + minutos + segundos / 60).toFixed(2);
			const velocidadeMedia = (distancia / tempoHoras).toFixed(2);
			const pace = (60 / velocidadeMedia).toFixed(2);
			const gastoCalorico = (velocidadeMedia * peso * 0.0175 * tempoMinutos).toFixed(2);
			
			resultado.textContent = 'Olá '+nome+'! Você percorreu '+distancia+' km em '+horas+' h, '+minutos+' min e '+segundos+' s. Isso quer dizer que a sua velocidade média foi de '+velocidadeMedia+' km/h, o que o corresponde a um pace de '+pace+' min/km. Com '+peso+' kg, você gastou cerca de '+gastoCalorico+' cal';
			}

			else{
			resultado.textContent = 'Por favor, preencha todos os campos!'
			}

	}

	calcular.addEventListener('click', calculo);