//Exercício 6
class Lacos
{
	//Aqui você informa um número e ele vai percorrer
	//do início até o número informado e mostrar pra você os números de 0 até n
	static allNumbersString(n) {
		var s = "";

		//vamos aqui percorrer todos os números entre o 0 e o n
		//exemplo: se eu passar número 10, ele vai de 0 até chegar no número 10
		for (var i = 0; i <= n; i++) {
			//concateno aqui cada número que passa pelo for
			s += i;

			//se eu não cheguei no final do for (nesse caso o n), ele coloca vírgula
			//exemplo: se n vale 10, enquanto o i não chegar no 10 ele vai colocar vírgula
			if(i != n)
				s += ",";
		}
		return "Números: " + s;
	}

	//Aqui você informa um número e ele vai percorrer
	//do início até o número informado e mostrar a soma de todos os números de 0 até o n.
	static sumNumber(n)
	{
		var x = 0;

		//vamos aqui percorrer todos os números entre o 0 e o n
		//exemplo: se eu passar número 10, ele vai de 0 até chegar no número 10
		for (var i = 0; i <= n; i++) {
			//vou somando no x cada i que passa por aqui.
			//exemplo: i vale 1, depois 2, 3 e assim sucessivamente
			x += i;
		}

		return "Soma: " + x;
	}

	//Aqui você informa um número e ele vai percorrer
	//do início até o número informado e mostrar a média ponderada
	//da soma de todos os números de m até o n.
	static media(m,n)
	{
		//variáveis que vão auxiliar no método
		var cont = 0;
		var total = 0.0;
		var resultado = 0.0;

		//vamos aqui percorrer todos os números entre o m e o n
		//exemplo: se eu quiser de 6 até 30, ele vai de 6 até chegar no número 30
		for (var i = m; i <= n; i++) {
			//vou contar quantas vezes ele entra aqui, o que seria a quantidade de números entre m e n
			//exemplo: entre 2 e 5, existem 4 números
			cont++;

			//vou somando e salvando em uma variável o somatório.
			total += i;
		}
		
		//a média é calculada e salva nessa variável
		resultado = total / cont;
		return "Média entre " + m + " e " + n + ": " + resultado;
	}

	//Aqui você informa um número e ele vai percorrer
	//do início até o número informado e mostrar
	//a quantidade de números pares e os múltiplos de 6.
	static multipleSix(start, end)
	{
		//variáveis contadoras - serve como ponteiro
		var contPares = 0;
		var contMultiplosSeis = 0;

		//vamos aqui percorrer todos os números entre o start e o end
		//exemplo: se eu quiser de 6 até 30, ele vai de 6 até chegar no número 30
		for (var i = start; i <= end ; i++) {
			//se dividir por dois e dá resto 0, é par e soma mais um no contador de pares
			if(i % 2 == 0)
				contPares++;
			
			//se dividir por 6 e dá resto 0, é múltiplo de seis e soma mais um no contador de múltiplos
			if(i % 6 == 0)
				contMultiplosSeis++;
		}

		var mensagem = "Números pares: " + contPares + "<br>Números múltiplos de 6: " + contMultiplosSeis;

		//retorna a mensagem
		return mensagem;
	}
}