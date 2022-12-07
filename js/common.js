class Common {
	/**
	 * @param {string} letter
	 * @returns {string}
	*/
	static normalizeLetter(letter) {
		const letters = {
			'á': 'a',
			'Á': 'A',
			'é': 'e',
			'É': 'E',
			'í': 'i',
			'Í': 'I',
			'ó': 'o',
			'Ó': 'O',
			'ú': 'u',
			'Ú': 'U'
		};
		return letters[letter] ?? letter;
	}

	/** @param {string} text */
	static normalize(text, {normalizeLetters = true, validChars = 'aábcdeéfghiíjklmnñoópqrstuúvwxyz0123456789'} = {}) {
		let t = '';
		for (let letter of text.toLowerCase()) {
			if (validChars.includes(letter)) {
				t += normalizeLetters ? this.normalizeLetter(letter) : letter;
			}
		}
		return t;
	}
}
