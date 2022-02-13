export async function getGoogleBooks(bookName) {
  const api = "https://www.googleapis.com/books/v1/volumes";
  let books;
  const response = await fetch(`${api}?q=${bookName}`);
  const data = await response.json();
  books = data.items;
  return books;
}
