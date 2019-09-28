console.log("it works");

$(document).ready(function () {
 $('.submit') .click(function (event)  {
  
  console.log('clicked button')


var email = $('.email') .val()
var subject = $('.subject') .val()
var message = $('.message') .val()
var statusElement = $('.status')
statusElement.empty()

if(email.length > 5 && email.includes ('@') &&  email.includes('.') ) { 
statusElement.append ('<div> Email is valid </div>')

} else {
    event.preventDefault()
    statusElement.append ('<div> Email is NOT valid </div>')
}

if(subject.length >= 3 ){
    statusElement.append ('<div> Subject is Valid </div>')
} else {
    event.preventDefault()
    statusElement.append ('<div> Subject is not Valid </div>')
}

if (message.length >= 20) {
    statusElement.append('<div>Message is valid</div>')
}else {
    event.preventDefault()
    statusElement.append('<div>Message is too short</div>')
}

})

})