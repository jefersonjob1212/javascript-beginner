//Exercício 4
class Valida
{
	static isNegative(num)
	{
		return num < 0;
	}

	static isPositive(num)
	{
		return num > 0;
	}

	static isNeutral(num)
	{
		return num == 0;
	}

	static isPar(num)
	{
		return num % 2 == 0;
	}

	static isImpar(num)
	{
		return num % 2 == 1;
	}

	static isNumeric(val)
	{
		return !isNaN(val);
	}

	static isNull(val)
	{
		return val == null;
	}

	static isInteger(val)
	{
		return Number.isInteger(val);
	}

	static isFloat(val)
	{
		var x = parseFloat(val);
		return x != NaN;
	}

	static isLengthThis(string, value)
	{
		return string.length == value;
	}

	static isNumberAt(num, start, end)
	{
		return num > start && num < end;
	}
}