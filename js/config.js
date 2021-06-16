//logic
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
var price = 0
var configured_item = []
var extra_batt = 'no'
var batt_price = 0

//13368
query = "https://api.apispreadsheets.com/data/13351/?query=select*from13351wheredrone_varient='"+ type + "'"
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
                    if (element.part_type == 'Charger'){
                        $("#charger").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'Transmitter'){
                        $("#transmitter").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'Reciever'){
                        $("#reciever").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    if (element.part_type == 'Goggles'){
                        $("#goggles").append(new Option(element.part_name + " - ₽" + element.price,element.part_id))
                    }
                    
                });
                
            });

		}).catch(err => console.log(err))
	}
	else{
		console.log(res)
	}
})

function populateOptimal(){
    $('option').each(function(){
        if(this.value != "0"){
            this.selected = true
        }
    })


    price = 0

    $( "select" ).each(function(){
        var selector = "#" + this.id + " " + "option:selected" 
        item_id = $(selector).val()
        if(item_id != 0){
            item = database.data.find( item  => item.part_id == item_id)
            if (item.part_type == 'Battery'){
                batt_price = item.price;
                console.log(batt_price)
            }
            price = price + item.price
        }
        
    })
    $("#total_price").text("₽"+price)




}



$(function(){
    if(type=='DID2'){
        $("#drone_name").text("TinyWhoop - 2-inch")
        $('#figure').attr("src","image/DID2.png")
        setTimeout(populateOptimal,2500);
    }
    if(type=='DID5'){
        $("#drone_name").text("5 Inch Drone")
        $('#figure').attr("src","image/DID5.png")
    }
    if(type=='DID7'){
        $("#drone_name").text("7 Inch Drone")
        $('#figure').attr("src","image/DID7.png")
    }
    if(type=='DID10'){
        $("#drone_name").text("10 Inch Drone")
        $('#figure').attr("src","image/DID10.png")
    }
    if(type=='DID5_OPT'){
        $("#drone_name").text("5 Inch Drone")
        $('#figure').attr("src","image/DID5.png")
        setTimeout(populateOptimal,2500);
    }
    if(type=='DID7_OPT'){
        $("#drone_name").text("7 Inch Drone")
        $('#figure').attr("src","image/DID7.png")
        setTimeout(populateOptimal,2500);
    }
    if(type=='DID10_OPT'){
        $("#drone_name").text("10 Inch Drone")
        $('#figure').attr("src","image/DID10.png")
        setTimeout(populateOptimal,2500);
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
                if (item.part_type == 'Battery'){
                    batt_price = item.price;
                    console.log(batt_price)
                }
                price = price + item.price
            }
            
        })
        $("#total_price").text("₽"+price)

    })

$('#extra_battery').click(function(){
    
    if ($('#extra_battery').is(':checked'))
    {
        extra_batt = 'yes';
        price = price + batt_price
        
    }
    else{
        extra_batt = 'no';
        price = price - batt_price
    }
    $("#total_price").text("₽"+price)
})


$("#confirm_buy").click(function(){
    $( "select" ).each(function(){
        var selector = "#" + this.id + " " + "option:selected" 
        item_id = $(selector).val()
        if(item_id != 0){
            item = database.data.find( item  => item.part_id == item_id)
            configured_item.push(item)
        }
    })
    
    configured_item.push({extra_battery : extra_batt})
    configured_item.push({comments : $('#comments').val()})
    configured_item.push({total_price : price})
    console.log(configured_item);
    configured_item = JSON.stringify(configured_item)
    localStorage.setItem("user_config", configured_item)
    $("#confirm_buy").prop('disabled', true)
    document.location.replace("confirmation.html");
})
})

//TODO : Reset Buton





