// FSJS - Random Quote Generator
let refresh = ''
// Create the array of quote objects and name it quotes
var quotes = [
  {
			quo: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quo:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt",
        year: '1942 *fake year'
	    },
	    {
	    	quo:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quo:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison",
        citation: 'The Edison Files'
	    },
	    {
	    	quo:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
      {
        quo:'If ya don\'t know now ya know',
        name:'-The Notorious B.I.G',
        citation: '',
        year: '1998'
  }
];

// Create the getRandomQuuote function and name it getRandomQuote
// takes 1 parameter which is the array

function getRandomQuote(quotes) {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var randomQuote = quotes[randomNumber];  //this allows the quotes to be randomized
  return(randomQuote);
  //getRandomQuote();
};

// Create the print Quote funtion and name it printQuote
function printQuote(){

  var getFunc = getRandomQuote(quotes); //random quote selector
  var quo = $(quotes.quo);
  var name = $(quotes.name);
  var citation  = $(quotes.citation);
  var year = $(quotes.year);

  $('#quote-box p').html(quotes);
    //need conditional statement for citation and year for span element
    $(getFunc).each((quotes)=> {
      if(quotes.hasOwnProperty("citation") || quotes.hasOwnProperty('year')) { //(quotes === citation || quotes === year )

        var paste = `<p class='quote'>${quotes.quo} </p> + <p class='name'> ${quotes.name} <span class='citation'> ${quotes.citation} </span><span class='yea'> ${quotes.year} </span></p>`;
        var pasteAlt = `<p class='quote'> ${quotes.quo} </p> + <p class='name'> ${quotes.name} </p>`;  //use template literl ${};

        return(paste);
    }
      else
    {
        return(pasteAlt);
    }
        //return(getFunc);
        return $('.container').html(getFunc);
  });
};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
printQuote();
