const searchBar = document.querySelector('.search-bar-input');

searchBar.addEventListener('keyup', () => {
	// if (searchBar.value.toLowerCase() === 'nacho') {
	// 	books.forEach(e => e.elt.style.display = 'none');

	// 	document.getElementById('nacho').style.display = 'inline-block';
	// 	return null;
	// } else {
	// 	document.getElementById('nacho').style.display = 'none';
	// }

	for (const book of books) {
		let title = book.title.toLowerCase();
		let category = book.category.toLowerCase();
		let input = searchBar.value.toLowerCase();

		if (title.includes(input) || category.includes(input)) {
			book.elt.style.display = 'block';
			continue;
		}
		book.elt.style.display = 'none';
	}
});
