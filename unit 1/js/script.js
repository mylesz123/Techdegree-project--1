// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

//random quote selector
let randomQuote = Math.floor( Math.random() * (myQuotes.length));

// Create the getRandomQuuote function and name it getRandomQuote
// takes 1 parameter which is the array

function getRandomQuote(myQuotes) {
$('#quote-box').html(myQuotes.randomQuote);
};

// Create the printQuote funtion and name it printQuote
function printQuote() {
return getRandomQuote;
};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
