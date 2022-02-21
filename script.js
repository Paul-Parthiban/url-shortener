const urlInput = document.querySelector("input");
function getUrl() {
  fetch(`https://api.shrtco.de/v2/shorten?url=${urlInput.value}`)
    .then((shortenedUrl) => {
      return shortenedUrl.json();
    })
    .then(displayResults);
}

function displayResults(shortenedUrl) {
  let urlp = document.querySelector(".shortened-url");
  urlp.innerText = `This is your shortend URL: https://${shortenedUrl.result.short_link}`;
}
