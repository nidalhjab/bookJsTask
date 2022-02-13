import { getBookDetails } from "./getBookDetails.js";
import { hideLoader, showLoader } from "./manipulateUI.js";

const idParams = window.location.search.split("=");
showLoader();
let bookInformation = await getBookDetails(idParams[1]);
hideLoader();
let content = `
<div className="container">
<h2>The Details about ${bookInformation.volumeInfo.title}</h2>
<div className="info">
  <div className="description">
    <p>
      <strong>Book Title : </strong>
      ${bookInformation.volumeInfo.title}
    </p>
         <p>
        <strong>Book SubTitle : </strong>
        ${bookInformation.volumeInfo.subtitle}
      </p>
      <p>
        <strong>Book Description : </strong>
        ${bookInformation.volumeInfo.description}
      </p>
      <p>
        <strong>Book Puplished Date : </strong>Published in
        ${bookInformation.volumeInfo.publishedDate}
      </p>
      <p>
        <strong>Published BY : </strong>
        ${bookInformation.volumeInfo.publisher}
      </p>
  </div>
  <div className="images">
    <div className="book-img">
      <img src=  ${bookInformation.volumeInfo.imageLinks.thumbnail} />
    </div>
  </div>
</div>
</div>
`;
document.getElementById("book-details").innerHTML = content;
