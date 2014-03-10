$(document).ready(function() {
	$(".grade-item").click(function(event) {
		var gradeId = objectIdForElementId($(this).attr("id"));
		var gradeStatus = $(this).attr("status");

		$.ajax({
			url: 'grades/' + gradeId + '/change.json',
			type: 'put',
			data: {grade:{ status: gradeStatus}},
			success: function (data) {
				updateElementWithGrade(data);
			}
		});
	});
});

function updateElementWithGrade(grade) {
	var elementId = elementIdForObjectIdWithName(grade.id, "grade");

	var elementBeingUpdated = $(elementId);

	elementBeingUpdated.removeClass();
	var newClassName = "status_" + grade.status;
	elementBeingUpdated.addClass('grade-item');
	elementBeingUpdated.addClass(newClassName);

	elementBeingUpdated.attr("status", grade.status);

};

function elementIdForObjectIdWithName(objectId, name) {
	var elementId = "#" + name + "_" + objectId;

	return elementId;
};

function objectIdForElementId(elementId) {
	var separatorPosition = elementId.indexOf('_');
	var elementIdLength = elementId.length;

	var objectIdString = elementId.substring(separatorPosition + 1, elementIdLength);

	console.log("objectIdForElementId returns: " + objectIdString);
	return parseInt(objectIdString);
};

