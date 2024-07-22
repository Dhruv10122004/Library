const addBook = document.getElementById('add');
const dialog = document.getElementById('dialog');
const close = document.getElementById('close');
const bookName = document.getElementById('book_name');
const authorName = document.getElementById('author_name');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const confirm = document.getElementById('confirm');
const main = document.querySelector('.main');
const btn = document.getElementById('delete');

confirm.addEventListener('click', makeCard);

addBook.addEventListener('click', () => {
    dialog.showModal();
});

close.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
});

let bookContainer = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function makeCard() {
    let title = bookName.value;
    let author = authorName.value;
    let page = pages.value;
    let isRead = read.checked;

    let book = new Book(title, author, page, isRead);
    bookContainer.push(book);
    display(bookContainer);
    dialog.close();
}

function display(bookContainer) {
    // Clear the main container before displaying new cards
    main.innerHTML = '';
    for (let i = 0; i < bookContainer.length; i++) {
        buildDOM(bookContainer[i]);
    }
}

function buildDOM(bookObject) {
    const card = document.createElement('div');

    const title = document.createElement('p');
    title.textContent = `Title: ${bookObject.name}`;
    card.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${bookObject.author}`;
    card.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `Number of pages: ${bookObject.pages}`;
    card.appendChild(pages);

    const label = document.createElement('label');
    label.htmlFor = 'readStatus';
    label.appendChild(document.createTextNode('Read'));
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'readStatus';
    checkbox.checked = bookObject.isRead; // Set the checkbox state
    label.appendChild(checkbox);
    card.appendChild(label);

    const del = document.createElement('span');
    const del_btn = document.createElement('button');
    del_btn.id = 'delete';
    del_btn.textContent = 'Delete'; // Add text to the delete button
    del.appendChild(del_btn);
    card.appendChild(del);

    main.appendChild(card); // Append the card to the main container
}
