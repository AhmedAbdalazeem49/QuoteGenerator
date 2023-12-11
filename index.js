// Get Main Elements
const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button.new");

const author = document.querySelector(".author .name");

const soundBtn = document.querySelector(".sound");

const copyBtn = document.querySelector(".copy");

const twitterBtn = document.querySelector(".twitter");

// random quote function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerHTML = `Loading Quote...`;
  // Fetching random quotes/data from the Api and parsing it into JS object.
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerHTML = result.content;
      author.innerHTML = result.author;
      quoteBtn.innerHTML = `New Quote`;
      quoteBtn.classList.remove("loading");
    });
}

quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
  // the SpeechSynthesisUtterance is a web speech api that represents a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerHTML} by ${author.innerHTML}`
  );
  // Speak method of speechSynthesis speaks the utterance
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  // copying the quote text on copyBtn click
  // writeText() property writes the specified text string to the system clipboard.
  navigator.clipboard.writeText(quoteText.innerHTML);
});

twitterBtn.addEventListener("click" , ()=> {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
  // open a new twitter tab with passing quote in the url.
  window.open(tweetUrl , "_blank");
})
