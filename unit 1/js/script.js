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
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quo:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quo:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
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
  console.log(randomQuote);
  getRandomQuote();
};

// Create the print Quote funtion and name it printQuote
function printQuote(){
  var getFunc = getRandomQuote(quotes); //random quote selector
  $('#quote-box p').html(quotes);
    //need conditional statement for citation and year for span element
    $(getFunc).each((quotes)=> {
      if(quotes === citation || quotes === year ){
        return(getFunc);//"<p> post  + ' ' + name </p> + ' ' + <span> citaion  + ' ' + year </span> "
    }
      else
    {
        return(getFunc); // $('.quote .name').html(randomQuote);
    }
        return(getFunc);

  });
};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
printQuote();
