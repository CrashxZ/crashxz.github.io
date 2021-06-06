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

document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready
  var locale = navigator.language;
  console.log(locale);


  $('#drone5').hover(function(){
    $(this).text("$200")
  },function(){
    $(this).text("Buy Now")
  })
  $('#drone7').hover(function(){
    $(this).text("$300")
  },function(){
    $(this).text("Buy Now")
  })
  $('#drone10').hover(function(){
    $(this).text("$400")
  },function(){
    $(this).text("Buy Now")
  })




});



// Set the date we're counting down to
var countDownDate = new Date("June 17, 2021 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
console.log(distance);
if ( distance > 0){
  //document.location.replace("commingsoon.html");
}
