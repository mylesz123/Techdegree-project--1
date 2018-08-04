// FSJS - Random Quote Generator
let refresh = ''
// Create the array of quote objects and name it quotes
var myQuotes = [
  {
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
      {
        quote:'If ya don\'t know now ya know',
        name:'-The Notorious B.I.G',
        citation: '',
        year: '1998'
  }
];

//random quote selector
let randomQuote = Math.floor( Math.random() * (myQuotes.length));

// Create the getRandomQuuote function and name it getRandomQuote
// takes 1 parameter which is the array

function getRandomQuote(myQuotes) {
refresh = $(myQuotes).html(randomQuote);
return myQuotes; //may or may not need
};

// Create the print Quote funtion and name it printQuote
function printQuote(e){
return getRandomQuote;
$('#loadQuote').on('click', (e)=>{ //using jquery as an ID selector
  e.preventDefault();
  $('#quote-box p').html(refresh);
  if(myQuotes === year){
    return year;
  }
  else {
    return myQuotes;
  }
});
/*let container = $('div .container');
  var post = $('.quote');
  var name = $('myQuotes.name');
  var citation = $("myQuotes.citation");
  var year = $("myQuotes.year");
  //<span class="citation"> myQuotes.citation </span>
  //<span class="year"> myQuotes.year </span>
</p>
$.each('.citation .year', ()=>{
  container += (post + name)
});


//need conditional statement for citation and year for span element
if(randomQuote === citation || randomQuote === year ){
  return citaion + year;
}
else
{
  return name;
}
//$('quote-box').html(variable created to hold string values)
return(myQuotes +=);
};
*/
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
printQuote();
