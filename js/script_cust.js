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


var locale = navigator.language;
if (localStorage.getItem("translate_flag")===null){
  localStorage.setItem("translate_flag",'0');
  if(locale === "ru-RU"){
    localStorage.setItem("localSet","ru");
    document.location.replace("ru_index.html");
  }
}


function translate_to_english(){
  document.location.replace("index.html");
  localStorage.setItem("translate_flag",'1');
}
function translate_to_russian(){
  document.location.replace("ru_index.html");
  localStorage.setItem("translate_flag",'1');
}

document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready

  $('#english_version').click(translate_to_russian);
  $('#russian_version').click(translate_to_english);

  $('#drone5').hover(function(){
    temp = $(this).text();
    $(this).text("$200")
  },function(){
    $(this).text(temp)
  })
  $('#drone7').hover(function(){
    temp = $(this).text();
    $(this).text("$300")
  },function(){
    $(this).text(temp)
  })
  $('#drone10').hover(function(){
    temp = $(this).text();
    $(this).text("$400")
  },function(){
    $(this).text(temp)
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
