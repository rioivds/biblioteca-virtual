const categories = [];
const visibleCategories = [];
const books = [];

class Book {
    constructor({link, category = '', tags = [], title, visible = true}) {
        this.link = link;
        this.category = Common.normalize(category);
        this.tags = tags;
        this.title = Common.normalize(title);
		this.elt = document.createElement('div');
		this.elt.classList.add('book');
		this.elt.innerHTML = `
            <h1 class="book-title">${this.title}</h1>
            <p class="book-category">${this.category}</p>
            <a class="book-link" href="${this.link}" target="_blank">Descargar</a>
        `;

		books.push(this);

		if (!this.category) {
			return;
		}

        if (categories.indexOf(this.category) === -1) {
            categories.push(this.category);
        }
        if (visible && visibleCategories.indexOf(this.category) === -1) {
            visibleCategories.push(this.category);
        }
    }

	render() {
		return this.elt;
	}
}
