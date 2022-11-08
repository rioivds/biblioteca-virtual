const searchBar = document.querySelector('.search-bar-input');

function search(value) {
	value = Common.normalize(value);

	if (value === 'nacho') {
		books.forEach(e => e.elt.style.display = 'none');

		document.getElementById('nacho').style.display = 'block';
		return null;
	} else {
		document.getElementById('nacho').style.display = 'none';
	}

	for (const book of books) {
		let title = Common.normalize(book.title);
		let category = book.category;
        let tags = book.tags.map(e => Common.normalize(e));
        let includesTag = false;
		let finded = false;

		if (title.includes(value) || category.includes(value)) {
			book.elt.style.display = 'flex';
			finded = true;
			continue;
		}

		if (!finded) {
			for (const tag of tags) {
				if (tag.includes(value)) {
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
