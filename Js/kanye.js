const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then (data =>displayQuote(data));
}
// loadQuotes();
const displayQuote = quote => {
    const quteElement = document.getElementById('quote');
   quteElement.innerText= quote.quote;
       
    }
