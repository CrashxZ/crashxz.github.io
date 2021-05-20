function SubForm(){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/12678/',
        type:'post',
        data:$("#ContactUs").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}