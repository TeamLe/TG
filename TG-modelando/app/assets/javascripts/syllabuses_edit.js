$(function () {

	registerEvents();

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

function registerEvents() {
	$(document).on('click', '.button-up', function() {
		var courseId = $(this).attr('course_id');
		changeCourseWithId(courseId, 'up');
	});

	$(document).on('click', '.button-down', function() {
		var courseId = $(this).attr('course_id');
		changeCourseWithId(courseId, 'down');
	});
};

function changeCourseWithId(courseId, operation) {
	var syllabusId = $('#syllabus_id').val();
	var majorId = $('#major_id').val();
	var url = '/majors/'+majorId+'/syllabuses/' + syllabusId +  '/change.json';
	$.ajax({
		url: url,
		type: 'put',
		data: {course_id:courseId, operation:operation},
		success: function (data) {
			createTableWithSyllabus(data);
		}
	});
};

function createTableWithSyllabus(syllabus) {
	var lastCourse = syllabus.courses[syllabus.courses.length - 1];
	var lastColumn = lastCourse.column;

	createCoursesContainers(lastColumn);
	createCourses(syllabus.courses);

};

function createCoursesContainers(numberOfPeriods) {
	var i = 0;
	var courseContainer;
	var syllabusContainer = $('#syllabus-container');
	syllabusContainer.html('');
	for (i = 0; i < numberOfPeriods; i++) {
		courseContainer = '<div class="course-container" id="course-container-' + i +'"></div>';
		syllabusContainer.append(courseContainer);
	}
};

function createCourses(courses) {

	var course;
	var i = 0;
	var courseElement;
	for (i = 0; i < courses.length; i++) {
		course = courses[i];
		courseElement = createCourseElement(course, i);
		insertCourseElement(courseElement, course);
	}

};

function insertCourseElement(courseElement, course) {
	var courseContainerId = '#course-container-' + course.column;
	var courseContainer = $(courseContainerId);
	courseContainer.append(courseElement);

};

function createCourseElement(course, index) {
	var courseElement = '<div class="course-element" id="'+generateElementId(course, index)+'">'+insideOfCourseElement(course)+'</div>'
	return courseElement;
};

function generateElementId(elementName, index) {
	return elementName + '-' + index;
};

function insideOfCourseElement(course) {
	var r = '<div class="course-element-content">'+course.course_description.name+'</div><div class="course-element-control">'+insideOfCourseControl(course)+'</div>'
	return r;
};

function insideOfCourseControl(course) {
	var r = '<div class="button-up" course_id="'+course.id+'"></div><div class="button-down" course_id="'+course.id+'"></div>';
	return r;
}
