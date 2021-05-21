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