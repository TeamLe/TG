$(function () {
	var syllabusId = $('#syllabus_id').val();
	var majorId = $('#major_id').val();

	var url = '/majors/'+majorId+'/syllabuses/' + syllabusId +  '.json';
	$.ajax({
		url: url,
		type: 'get',
		data: {},
		success: function (data) {
			createTableWithSyllabus(data);
		}
	});
});

function createTableWithSyllabus(syllabus) {
	var lastCourse = syllabus.courses[syllabus.courses.length - 1];
	var lastColumn = lastCourse.column;

	createCoursesContainers(lastColumn);

};

function createCoursesContainers(numberOfPeriods) {
	var i = 0;
	var courseContainer;
	var syllabusContainer = $('#syllabus-container');
	for (i = 0; i < numberOfPeriods; i++) {
		courseContainer = '<div class="course-container" id="course-container-' + i +'">oi</div>';
		syllabusContainer.append(courseContainer);
	}
};