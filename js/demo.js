const imagesArea = document.querySelector('.images');
const gallery = document.querySelector('.gallery');
const galleryHeader = document.querySelector('.gallery-header');
const searchBtn = document.getElementById('search-btn');

const getBooks = (searchText) => {
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
      .then(response => response.json())
      .then(data => displayBooks(data))
      .catch(err => console.log(err));
  }
  
  // show images 
  const displayBooks = (books) => {
    imagesArea.style.display = 'block';
    gallery.innerHTML = '';
    // show gallery title
    galleryHeader.style.display = 'flex';
  
    for (let i = 0; i < books.length; i++) {
      const image = books[i];
      // console.log(image.id);
      let div = document.createElement('div');
      div.className = 'col-lg-3 col-md-4 col-xs-6 img-item mb-2';
      div.innerHTML = `<h1>${books.author_name}</h1>`
    //   div.innerHTML = `<img class="img-fluid img-thumbnail" src="${image.webformatURL}" alt="${image.tags}">`;
      gallery.appendChild(div);
    }
  }

  searchBtn.addEventListener('click', function () {
    document.querySelector('.main').style.display = 'none';
    const search = document.getElementById('search');
    getBooks(search.value)
    console.log(search.value);
    console.log(search.value);
  });
  
  const searchEnterBtn = document.getElementById('search');
  searchEnterBtn.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      document.querySelector('.main').style.display = 'none';
      const search = document.getElementById('search');
      getBooks(search.value)
      console.log(search.value);
     }
  });