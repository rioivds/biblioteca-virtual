const searchBar = document.querySelector('.search-bar-input');

function search(value) {
	value = value.toLowerCase();

	if (value === 'nacho') {
		books.forEach(e => e.elt.style.display = 'none');

		document.getElementById('nacho').style.display = 'block';
		return null;
	} else {
		document.getElementById('nacho').style.display = 'none';
	}

	for (const book of books) {
		let title = book.title.toLowerCase();
		let category = book.category.toLowerCase();
        let tags = book.tags.map(e => e.toLowerCase());
		let input = value;
        let includesTag = false;
		let finded = false;

		if (title.includes(input) || category.includes(input)) {
			book.elt.style.display = 'flex';
			finded = true;
			continue;
		}

		if (!finded) {
			for (const tag of tags) {
				if (tag.includes(input)) {
					book.elt.style.display = 'flex';
					includesTag = true;
					break;
				}
			}
		}

        if (includesTag) continue;

		book.elt.style.display = 'none';
	}
}

searchBar.addEventListener('keyup', () => {
	search(searchBar.value);
});
