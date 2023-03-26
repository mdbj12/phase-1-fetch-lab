function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json())
    .then(json => renderBooks(json))
return fetch("https://anapioficeandfire.com/api/books");
}

function renderBooks(json) {
  const main = document.querySelector("main");
  json.forEach(book => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  fetchBooks();
});
