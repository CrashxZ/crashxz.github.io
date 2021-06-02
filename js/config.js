function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var type = getParameterByName("type");
console.log(type)
var database = [];
//13351
query = "https://api.apispreadsheets.com/data/13368/?query=select*from13368wheredrone_varient='"+ type + "'"
fetch(query).then(res=>{
	if (res.status === 200){
		// SUCCESS
		res.json().then(data=>{
			database = data
            //console.log(data)
            data.data.forEach(element => {

                jQuery(document).ready(function($){
                    //var frame_container = document.getElementById("frame");
                    //console.log(frame_container);
                    if (element.part_type == 'Frame'){
                        $("#frame").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                        //console.log(element.part_name)
                        //frame_container.options[frame_container.options.length] = new Option(element.part_name, element.part_name);
                    }
                    if (element.part_type == 'FC'){
                        $("#FC").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'ESC'){
                        $("#ESC").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'Motor'){
                        $("#motor").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'Props'){
                        $("#props").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'VTX'){
                        $("#VTX").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'Camera'){
                        $("#camera").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'Battery'){
                        $("#battery").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                });
                
            });

		}).catch(err => console.log(err))
	}
	else{
		console.log(res)
	}
})


var price = 0
$(function(){
    if(type=='DID5'){
        $("#drone_name").text("5 Inch Drone")
    }
    if(type=='DID7'){
        $("#drone_name").text("7 Inch Drone")
    }
    if(type=='DID10'){
        $("#drone_name").text("10 Inch Drone")
    }
    $( "select" ).change(function(){
        // var selector = "#" + this.id + " " + "option:selected" 
        // console.log($(selector).val())
        // price = price + database.data[$(selector).val()-1].price
        // console.log(price)
        price = 0
        //console.log(this)
        $( "select" ).each(function(){
            //console.log(this)
            var selector = "#" + this.id + " " + "option:selected" 
            item_id = $(selector).val()
            //console.log(selector)
            //console.log(item_id)
            if(item_id != 0){
                item = database.data.find( item  => item.part_id == item_id)
                //console.log(item)
                price = price + item.price
            }
            
        })
        $("#total_price").text("₽"+price)
        //console.log(price)
    })
})

