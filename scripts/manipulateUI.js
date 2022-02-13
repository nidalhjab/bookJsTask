export function hideLoader() {
  document.getElementById("loader").classList.add("display");
}
export function showLoader() {
  document.getElementById("loader").classList.remove("display");
}
export function showError() {
  document.getElementById("error").classList.add("display");
}
export function showBooks(books) {
  let element = "";
  for (let book of books) {
    element += `<a href="/pages/bookDetails/bookDetails.html?id=${book.id}" class="book">
              <p>Name: ${book.volumeInfo.title}</p>
              <p>Authors: ${book.volumeInfo.authors}</p>
              </a>`;
  }
  document.getElementById("books-list").innerHTML = element;
}
