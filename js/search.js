const searchBar = document.querySelector('.search-bar-input');

function search(value) {
	let empty = true;
	value = Common.normalize(value);

	if (value === 'nacho') {
		books.forEach(e => e.elt.style.display = 'none');
		document.getElementById('nacho').style.display = 'block';
		empty = false;
		return;
	} else {
		document.getElementById('nacho').style.display = 'none';
	}

	for (const book of books) {
		let title = Common.normalize(book.title);
        let tags = book.tags.map(e => Common.normalize(e));
        let includesTag = false;
		// let finded = false;

		if (title.includes(value) || book.category.includes(value)) {
			book.elt.style.display = 'flex';
			empty = false;
			continue;
		}

		// if (!finded) {
			for (const tag of tags) {
				if (tag.includes(value)) {
					book.elt.style.display = 'flex';
					includesTag = true;
					empty = false;
					break;
				}
			}
		// }

        if (includesTag) continue;

		book.elt.style.display = 'none';
	}
	
	if (empty) {
		document.getElementById('empty-search').style.display = 'flex';
	} else {
		document.getElementById('empty-search').style.display = 'none';
	}
}

searchBar.addEventListener('keyup', () => {
	search(searchBar.value);
});
