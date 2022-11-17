const blockquotes = document.querySelector("#quote");
const button = document.querySelector("#load-quote");
const author = document.querySelector("#author");

button.addEventListener("click", loadQuotes);

function loadQuotes() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())

    .then((data) => {
      let quoteText = data.data[0].quoteText;
      let authorText = data.data[0].quoteAuthor;

      quote.innerText = quoteText;
      author.innerText = authorText;
    });
}
loadQuotes();
