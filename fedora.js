
// set up text to print, each item in array is new line
var aText = new Array(
"Think. Create. Improve."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row



function typewriter()
{
	
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerText = sContents + aText[iIndex].substring(0, iTextPos);

 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 450);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }

}

typewriter();


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");

}


// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.droppbtn')) {
  var myDropdown = document.getElementById("myDropdown");
  var myDropdown1 = document.getElementById("myDropdown1");
	
	if (myDropdown.classList.contains('show')) {
	  myDropdown.classList.remove('show');
	}
	else
	  myDropdown1.classList.remove('show');
	
  }
  

}
