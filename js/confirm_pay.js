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