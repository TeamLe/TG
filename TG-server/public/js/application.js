$(document).ready(function () {
});

$('.matrix-item').click(function() {
	sendColor();
});

function sendColor() {
	$.ajax({
			url: 'http://localhost:3000/matrix/change.json',
			type: 'GET',
			data: {color:"red"},
			success: function (data) {
				alert(data.banana);
			}
		});
};