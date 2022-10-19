const container = document.querySelector('main');

for (const e of links) {
	const book = new Book(e);
	container.appendChild(book.render());
}
