function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
     return fetch('https://anapioficeandfire.com/api/books')
          .then(response => response.json())
          .then(booksData => renderBooks(booksData))
    console.log('before fetch returns')

}

function renderBooks(books) {
  //console.log(books[0]['url'])
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function initialize (){
  fetchBooks()
  console.log('after fetch Books')
}
initialize()
