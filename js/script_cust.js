function SubForm(){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/12715/',
        type:'post',
        data:$("#ContactUs").serializeArray(),
        success: function(){
          alert("Thank You for contacting us :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}


// Set the date we're counting down to
var countDownDate = new Date("June 17, 2021 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
console.log(distance);
if ( distance > 0){
  // document.location.replace("commingsoon.html");
}
