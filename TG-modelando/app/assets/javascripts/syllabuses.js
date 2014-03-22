$(function () {
	var syllabusId = $('#syllabus_id').val();
	var majorId = $('#major_id').val();

	$.ajax({
		url: 'majors/'+majorId+'/syllabuses/' + syllabusId +  '.json',
		type: 'get',
		data: {},
		success: function (data) {
			alert(data);
		}
	});
});