// FSJS - Random Quote Generator
let randomQuote = Math.floor( Math.random() * 6) + 1;
// Create the array of quote objects and name it quotes
let quotes {
  quo: "If ya don't know now ya know",
  author: 'The Notorious B.I.G',
  date:
}


// Create the getRandomQuuote function and name it getRandomQuote

funtion getRandomQuote() {
  $.each(quotes,function (i, quotes) {
    console.log(i + ': ' + quotes );
  });
};

// Create the printQuote funtion and name it printQuote
funtion printQuote() {
  console.log(getRandomQuote);
};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
