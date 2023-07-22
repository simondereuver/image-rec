//Module for fetching a random motivational quote

function fetchRandomQuote(textElement) {
    fetch('/api/random-quote')
    .then(response => response.json())
    .then(data => {
        console.log('Response data:', data);
        const randomQuote = data.text;
        textElement.textContent = randomQuote;
    })
    .catch(error => {
        console.log('Error: ', error);
    });
}

module.exports = {
    fetchRandomQuote
};