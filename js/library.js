const container = document.querySelector('main');

for (const e of links) {
	const book = new Book(e);
	container.appendChild(book.render());
}

window.addEventListener('load', () => {
	const parameter = window.location.href.split('=')[1];

	if (parameter) {
		search(parameter);
	}
});
