$(document).ready(function() {
	eventsListener();


	$('#button_create_grade').click(function() {
		var fieldNewGradeName = $("#field_new_grade_name");

		var newGradeName = fieldNewGradeName.val();

		$.ajax({
			url: 'grades.json',
			type: 'post',
			data: {grade:{name:newGradeName, status:"none"}},
			success: function (data) {
				addElementForGrade(data);
			}
		});
	});
});

function eventsListener() {
	$('body').on('mousedown','.grade-item', mouseDownHandler);
};

function mouseDownHandler(event) {
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
};

function addElementForGrade(grade) {
	var elementId = elementIdForObjectIdWithName(grade.id, "grade", false);
	var newClassName = "status_" + grade.status;

	var htmlToAppend = '<div id="' + elementId + '" class="grade grade-item '+ newClassName+'">'+grade.name+'</div>';

	$(".grade-container").append(htmlToAppend);



};

function updateElementWithGrade(grade) {
	var elementId = elementIdForObjectIdWithName(grade.id, "grade", true);

	var elementBeingUpdated = $(elementId);

	elementBeingUpdated.removeClass();
	var newClassName = "status_" + grade.status;
	elementBeingUpdated.addClass('grade-item');
	elementBeingUpdated.addClass(newClassName);

	elementBeingUpdated.attr("status", grade.status);

};

function elementIdForObjectIdWithName(objectId, name, hashtag) {
	if (hashtag) {
		var elementId = "#" + name + "_" + objectId;
	} else {
		var elementId = name + "_" + objectId;
	}

	return elementId;
};

function objectIdForElementId(elementId) {
	var separatorPosition = elementId.indexOf('_');
	var elementIdLength = elementId.length;

	var objectIdString = elementId.substring(separatorPosition + 1, elementIdLength);

	console.log("objectIdForElementId returns: " + objectIdString);
	return parseInt(objectIdString);
};

