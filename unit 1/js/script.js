// FSJS - Random Quote Generator
let refresh = ''
// Create the array of quote objects and name it quotes
var colorWheel = [
  "#16a085",
   "#27ae60",
   "#2c3e50",
   "#f39c12",
   "#e74c3c",
   "#9b59b6",
   "#FB6964",
   "#342224",
   "#472E32",
   "#BDBB99",
   "#77B1A9",
   "#73A857"
];

var quotes = [
  {
			quo: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quo:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt",
        year:'1942'
	    },
	    {
	    	quo:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quo:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison",
        citation:'The Edison Files'
	    },
	    {
	    	quo:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
      {
        quo:'If ya don\'t know now ya know',
        name:'-The Notorious B.I.G',
        citation: 'A song I heard on the radio',
        year: '1998'
  }
];

// Create the getRandomQuuote function and name it getRandomQuote
// takes 1 parameter which is the array

function getRandomQuote(quotes) {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var randomQuote = quotes[randomNumber];  //this allows the quotes to be randomized
  return(randomQuote);
};

function getRandomColor(){
  var randomColor = Math.floor(Math.random() * colorWheel.length);
  var screenColor = colorWheel[randomColor];
  //getRandomQuote();
};



// Create the print Quote funtion and name it printQuote
function printQuote(){
  var getFunc = getRandomQuote(quotes); //random quote selector
  var getColor = getRandomColor(colorWheel)
  var quoteString = `<p class="quote"> ${getFunc.quo} </p><p class="name"> ${getFunc.name} </p>`;

function $swapColor(getColor){
  $("body").css({ backgroundColor: colorWheel[getColor]});
  return getColor;
  };

    //need conditional statement for citation and year for span element

      if(getFunc.hasOwnProperty("citation") || getFunc.hasOwnProperty("year")) { //(quotes === citation || quotes === year )

        $('#quote-box').html(quoteString +=  `<span class="citation"> ${getFunc.citation} </span><span class="year"> ${getFunc.year} </span>`);

        }

      else
    {
        $('#quote-box').html(quoteString);
        $swapColor();
        //quoteString;//when i log quotes, an index number shows in the console
    }
        //return(getFunc);

};

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
printQuote();
