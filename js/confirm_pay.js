//logic
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// var type = getParameterByName("type");
// console.log(type)
// var database = [];
// var price = 0
// var configured_item = []
// var extra_batt = 'no'
// var batt_price = 0

jQuery(document).ready(function($){
    slected_items = localStorage.getItem("user_config");
    slected_items = JSON.parse(slected_items);

    $('#frame_selected').text(slected_items[0].part_name + " -- ₽" + slected_items[0].price)
    $('#fc_selected').text(slected_items[1].part_name + " -- ₽" + slected_items[1].price)
    $('#esc_selected').text(slected_items[2].part_name + " -- ₽" + slected_items[2].price)
    $('#motor_selected').text(slected_items[3].part_name + " -- ₽" + slected_items[3].price)
    $('#prop_selected').text(slected_items[4].part_name + " -- ₽" + slected_items[4].price)
    $('#vtx_selected').text(slected_items[5].part_name + " -- ₽" + slected_items[5].price)
    $('#camera_selected').text(slected_items[6].part_name + " -- ₽" + slected_items[6].price)
    $('#battery_selected').text(slected_items[7].part_name + " -- ₽" + slected_items[7].price)
    $('#charger_selected').text(slected_items[8].part_name + " -- ₽" + slected_items[8].price)
    $('#transmitter_selected').text(slected_items[9].part_name + " -- ₽" + slected_items[9].price)
    $('#reciever_selected').text(slected_items[10].part_name + " -- ₽" + slected_items[10].price)
    $('#goggles_selected').text(slected_items[11].part_name + " -- ₽" + slected_items[11].price)
    $('#extra_bat_selected').text(slected_items[12].extra_battery)
    $('#comments').text(slected_items[13].comments)
    $('#total_price').text("₽" + slected_items[14].total_price)


});

function confirm_and_buy(){
    final_selection = localStorage.getItem("user_config");
    final_selection = JSON.parse(final_selection);
    final_selection.push({ name : $('#name').val() });
    final_selection.push({ email : $('#email').val() });
    final_selection.push({ phone : $('#phone').val() });
    final_selection.push({ add1 : $('#add1').val() });
    final_selection.push({ add2 : $('#add1').val() });
    final_selection.push({ zip : $('#zip').val() });
    final_selection.push({ state : $('#state').val() });
    final_selection.push({ city : $('#city').val() });
    final_selection.push({ country : $('#country').val() });

    final_selection_text = JSON.stringify(final_selection)

    fetch("https://api.apispreadsheets.com/data/18182/", 
    {
        method: "POST",
        body: JSON.stringify({"data": {"order_id":"#","order_status":"-","name":$('#name').text,"email":$('#email').text,"phone":$('#phone').text,"country":$('#country').text},"order_chunk":final_selection_text}),
    }).then(res =>{
	if (res.status === 201){
		document.location.replace("order_placed.html");
	}
	else{
		// ERROR
        alert("Something Went Wrong ! Please refresh the page and try again! ");
	}
})
}