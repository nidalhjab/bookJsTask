import { getGoogleBooks } from "./getGoogleBooks.js";
import {
  hideLoader,
  showLoader,
  showBooks,
  showError,
} from "./manipulateUI.js";

window.onload = () => {
  const cachedBook = localStorage.getItem("books");
  const cachedBookName = localStorage.getItem("searchedTerm");
  if (cachedBookName) {
    document.getElementById("search").placeholder = cachedBookName;
  } else {
    document.getElementById("search").placeholder = "react";
  }
  if (JSON.parse(cachedBook)) {
    hideLoader();
    showBooks(JSON.parse(cachedBook));
  } else {
    getSearchedBooks("react");
  }
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = document.querySelector("input").value;
  if (searchTerm) {
    localStorage.setItem("searchedTerm", searchTerm);
    getSearchedBooks(searchTerm);
  } else {
    alert("Please inter the book name first !");
  }
});

async function getSearchedBooks(searchTerm) {
  showLoader();
  let books;
  try {
    books = await getGoogleBooks(searchTerm);
    localStorage.setItem("books", JSON.stringify(books));
  } catch (error) {
    showError();
  } finally {
    hideLoader();
  }

  showBooks(books);
}
