var user = [];
var responses = [];

function question1 (){
	var name = prompt('What is your name?')
	return user.name = name;
	user.push(name);
}
question1();


function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}

question2();

function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {
    // your own answers
    case 'Java':
    	alert('The original name is: Java.');
    break;

    case 'LiveScript':
    	alert('The original name is: LiveScript.');
    break;

    case 'JavaLive':
    	alert('The original name is: JavaLive.');
    break;

    case 'ScriptyScript':
    	alert('The original name is: ScriptyScript.');
    break;

    default :
    	alert('The original name is: ScriptyScript.');
    break;
  }
  responses.push(js);
}

question3();

function evaluate(responses) {
// declare two variables to store the totals

// populate the “totals” variables from the “responsesArray”

// save the “totals” variables inside the user object

// call showResults

var total1 = [];
var total2 = [];

for (var key in responses){
	responses.push(total1);
	responses.push(total2);
}
total1.push(user);
total2.push(user);

evaluate();

function showResults() {
// display the user results
console.log(user);
}

// call the function, passing it the responses array
evaluate(responses);