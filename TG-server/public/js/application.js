$(document).ready(function () {
});

$('.matrix-item').click(function() {
	var rgbColor = $(this).css('backgroundColor');
	var hexColor = rgb2hex(rgbColor);

	var elementId = $(this).attr('id');

	sendColor(hexColor, elementId);
});

function sendColor(color, elementId) {
	$.ajax({
		url: 'http://localhost:3000/matrix/change.json',
		type: 'GET',
		data: {color:color,
			matrix_id: elementId},
			success: function (data) {
				changeColor(data.color, data.matrix_id);
			}
		});
};

function changeColor(color, elementId) {
	$('#' + elementId).css('background-color', color);
};

var hexDigits = new Array
("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}