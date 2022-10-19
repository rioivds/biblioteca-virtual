class Common {
	/** @param {string} text */
	static normalize(text) {
		let t = '';
		for (let c of text.toLowerCase()) {
			if ('aábcdeéfghiíjklmnñoópqrstuúvwxyz0123456789'.includes(c)) {
				t += c;
			}
		}
		return t;
	}
}
