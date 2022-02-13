export async function getBookDetails(bookId) {
  const api = "https://www.googleapis.com/books/v1/volumes";
  let book;
  const response = await fetch(`${api}/${bookId}`);
  const data = await response.json();
  book = data;
  return book;
}
