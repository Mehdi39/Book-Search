const searchBtn = document.getElementById('search_btn');
const bookContainer = document.getElementById('book_container');

const getImages = (searchText) => {
  fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then(response => response.json())
    .then(data => showBooks(data.docs))
    .catch(err => console.log(err));
}



const showBooks = (books) => {
  books.forEach( book => {
    const div = document.createElement('div');
    div.classList = "col-lg-4 col-12 col-md-6 p-0 border";

    div.innerHTML = `
    <h1>${book.title}</h1>
    <img src="https://covers.openlibrary.org/b/id/2662946-M.jpg" alt="Cover Picture">
    <h2>${book.author_name}</h2>
    <h5>${book.publisher}</h5>
    `
    bookContainer.appendChild(div)
    console.log(book)
  })
}


searchBtn.addEventListener('click', function () {
  const search = document.getElementById('search');
  getImages(search.value)
});

const searchEnterBtn = document.getElementById('search');
searchEnterBtn.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    const search = document.getElementById('search');
    getImages(search.value)
   }
});