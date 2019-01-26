// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const colorWheel = [
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

const quotes = [
  {
  			quo: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. ",
  			name:"Francis of Assisi "
	    },
	    {
	    	quo:"Believe you can and you're halfway there. ",
	    	name:"Theodore Roosevelt ",
        year:'1942'
	    },
	    {
	    	quo:"It does not matter how slowly you go as long as you do not stop. ",
	    	name:"Confucius"
	    },
	    {
	    	quo:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ",
	    	name:"Thomas A. Edison ",
        citation:'The Edison Files'
	    },
	    {
	    	quo:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. ",
	    	name:"Confucius"
	    },
      {
        quo:'If ya don\'t know now ya know ',
        name:'The Notorious B.I.G ',
        citation: 'A song I heard on the radio',
        year: '1998'
  }
];

// Create the getRandomQuuote function and name it getRandomQuote
// takes 1 parameter which is the array

function getRandomQuote(array) {
  return quotes[Math.floor(Math.random() * array.length)];
};

function getRandomColor(){
  return colorWheel[Math.floor(Math.random() * colorWheel.length)];
};

// Create the print Quote funtion and name it printQuote
function printQuote(){
  let getFunc = getRandomQuote(quotes); //random quote selector
  let quoteString = `<p class="quote"> ${getFunc.quo} </p><p class="name"> ${getFunc.name} `;
  let getColor = getRandomColor(colorWheel);

    //need conditional statement for citation and year for span element
    if(getFunc.hasOwnProperty('citation')) {
      $('#quote-box').html(quoteString += `<span class="citation"> ${getFunc.citation} </span></p>`);
      $("body").css({ backgroundColor: getColor}); // trying to use .css property to change background color {document.body.style.backgroundColor = getColor;
      $("#loadQuote").css({ backgroundColor: getColor});
    }
    if(getFunc.hasOwnProperty('year')) {
      $('#quote-box').html(quoteString += `<span class="year"> ${getFunc.year} </span></p>`);
      $("body").css({ backgroundColor: getColor});
      $("#loadQuote").css({ backgroundColor: getColor});
    }
    //close p tag
    $('#quote-box').html(quoteString += `</p>`);
    $("body").css({ backgroundColor: getColor});
    $("#loadQuote").css({ backgroundColor: getColor});
};

const loadQuote = document.getElementById('loadQuote');

function printAuto(){ //to set how long a quote stays before the next appears
  loadQuote.addEventListener("click", function() {
    setInterval(printQuote, 5500);
    $('#loadQuote').hide();
  });
};
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
loadQuote.addEventListener("click", printQuote, false);
printAuto();
