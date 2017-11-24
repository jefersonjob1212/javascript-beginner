class Util
{
	static mostraMensagem(msg)
	{
		alert(msg);
	}

	static converteParaInteiro(numeroString)
	{
		return parseInt(numeroString);
	}

	static converteParaFloat(numeroString)
	{
		return parseFloat(numeroString);
	}

	static getElementoPorID(id)
	{
		return document.getElementById(id);
	}
}