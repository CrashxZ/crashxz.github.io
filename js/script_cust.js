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
var language = "";
function translate(){
  if (localStorage.getItem("localSet") === "ru"){
    document.location.replace("index.html");
    localStorage.setItem("localSet","en");
    console.log("English Version")
  }
  else if (localStorage.getItem("localSet") === "en"){
    document.location.replace("ru_index.html");
    localStorage.setItem("localSet","ru");
    console.log("Russian Version")
  }

}

document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready

  if (localStorage.getItem("localSet") === null){
    if(locale === "ru-RU"){
      localStorage.setItem("localSet","ru");
      document.location.replace("ru_index.html");
    }else{
      localStorage.setItem("localSet","en");
    }

  }
  // if(locale === "ru-RU"){
  //   language = "en"
  // }
  // else{
  //   language = "ru"
  // }
  //console.log(language)
  $('#english_version').click(translate);
  $('#russian_version').click(translate)


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
