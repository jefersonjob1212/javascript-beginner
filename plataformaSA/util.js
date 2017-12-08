class Util
{
	static showPrompt(msg)
	{
		prompt(msg);
	}

	static getIntPrompt(msg)
	{
		return parseInt(prompt(msg));
	}

	static getFloatPrompt(msg)
	{
		return parseFloat(prompt(msg));
	}

	static showMessage(msg)
	{
		alert(msg);
	}

	static getElement(id)
	{
		return document.getElementById(id);
	}

	static getValue(id)
	{
		return document.getElementById(id).value;
	}

	static getInt(id)
	{
		return parseInt(this.getValue(id));
	}

	static getFloat(id)
	{
		return parseFloat(this.getValue(id));
	}

	static addHTML(id, html)
	{
		var tag = this.getElement(id);
		tag.innerHTML = html;
	}
}