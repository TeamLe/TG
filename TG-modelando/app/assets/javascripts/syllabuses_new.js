var columns = [];

$(function () {
	var c = createColumnWithContent('leonardo');
	addColumn(c);
	var d = createColumnWithContent('daora?');
	addColumn(d);
});

function createColumnWithContent(content) {
	var columnHtml = '<div class="syllabus-container" id="column_' + columns.length + '">' + content + '</div>';
	return columnHtml;
};

function addColumn(column) {
	var container = $('#syllabus-container');
	container.append(column);
	var columnJquery = $('#column_' + columns.length);
	var columnDictionary = {"jquery":columnJquery, "cells":[] };
	columns.push(columnDictionary);
};