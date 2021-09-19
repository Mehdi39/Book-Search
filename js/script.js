// HTML Tag Reference
const searchResult = document.getElementById('search_result');
const searchBtn = document.getElementById('search_btn');
const bookContainer = document.getElementById('book_container');
const unknown = "unknown";
const noBooksFound = 000;
const noImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"

// Fetching DATA from API/SERVER
const getImages = (searchText) => {
  fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then(response => response.json())
    .then(data => showBooks(data.docs))
    .catch(err => console.log(err));
}


// Arrow Function for creating dynamic HTML to show search results.
const showBooks = (books) => {

    // Variable to store total search results.
    let counter = 0;
    // cleaning previous search results.
    bookContainer.innerHTML = '';
    // Loop throung all individual search result.
    books.forEach(book => {
    counter++;
    let imgURL = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`

    const div = document.createElement('div');
    div.classList = "col-lg-4 col-12 col-md-6 p-0";

    div.innerHTML = `
    <div class="col-lg-3 col-12 col-md-4 p-2">
      <div class="card" style="width: 25rem;">
        <img class="card-img-top w-100" src=${book.cover_i ? imgURL : noImage} alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">${book.title}</h3>
          <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author_name ? book.author_name : unknown}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Publisher: ${book.publisher}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Year of Publisher: ${book.first_publish_year ? book.first_publish_year : unknown}</h6>

          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>  
    </div> 
    `
    bookContainer.appendChild(div)
  })

  // 
  searchResult.innerText = `About ${counter>0 ? counter : noBooksFound} books found`;

}

// Search Button
searchBtn.addEventListener('click', function () {
  const search = document.getElementById('search');
  getImages(search.value)
});

// Enter Button
const searchEnterBtn = document.getElementById('search');
searchEnterBtn.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    const search = document.getElementById('search');
    getImages(search.value)
  }
});