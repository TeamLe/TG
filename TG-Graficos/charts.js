
$(function () { 

    loadChart1();
    loadChart2();
    loadChart3();


});


function loadChart1(){
    var temp= enrollments.enrollments;
    var coursesArray = new Array();
    var enrollmentsArray = new Array();
    var failedArray = new Array();
    
    $.each(temp, function(i, item){
       coursesArray[i] = temp[i].course;
       enrollmentsArray[i] = parseInt(temp[i].enrollments);
       failedArray[i] = parseInt(temp[i].failed);
    })

    
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Matriculados por Disciplina'
        },
        xAxis: {
            categories: coursesArray
        },
        yAxis: {
            title: {
                text: 'Numero de Matriculas'
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.x +'</b><br/>'+
                    this.series.name +': '+ this.y +'<br/>'+
                    'Total: '+ this.point.stackTotal;
            }
        },
        plotOptions: {
                column: {
                    stacking: 'normal',
                }
        },
        series: [{
            name: 'Alunos Matriculados',
            data: enrollmentsArray        
 
        }, {
            name: 'Alunos Reprovados',
            data: failedArray,
            color: '#DD4B39'
        }]



    });

};


function loadChart2(){
    var temp= courses.score;
    var semesterArray = new Array();
    var iraArray = new Array();
    

    $.each(temp, function(i, item){
       semesterArray[i] = temp[i].year + '/' + temp[i].semester;
       iraArray[i] = parseFloat(temp[i].ira);
    })

  
       
    $('#container2').highcharts({
        chart: {
          type: 'line'  
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Aluno: ' + courses.name
        },
        xAxis: {
            categories: semesterArray
        },
        yAxis: {
            min: 0,
            max: 1,
            title: {
                text: 'IRA'
            }
        },
        series: [{
            name: 'IRA',
            data: iraArray
        }]
    });

}

function loadChart3(){
    var temp= courses2.enrollments,
        coursesData = [],
        drilldownData = [];

    $.each(temp, function (i) {
        coursesData.push({ 
            name : temp[i].code,
            y : parseInt(temp[i].enrollments[0].enrollments)
            
        });
    });


    $('#container3').highcharts({
        chart: {
            type: 'column'
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Matriculados por Disciplina'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Numero de Matriculas'
            }
        },
        series: [{
            name: 'Matriculas',
            colorByPoint: true,
            data: coursesData
        }]



    });

};





var enrollments = {   
    "year": "2013",
    "semester": "2", 
    "enrollments": [
        {"course":"CI000", "name":"Disciplina 1", "enrollments":"23", "failed":"14"},
        {"course":"CI001", "name":"Disciplina 1", "enrollments":"23", "failed":"21"},
        {"course":"CI002", "name":"Disciplina 2", "enrollments":"45", "failed":"19"},
        {"course":"CI003", "name":"Disciplina 3", "enrollments":"50", "failed":"50"},
        {"course":"CI004", "name":"Disciplina 4", "enrollments":"11", "failed":"11"},
    ]
};

var courses = {
    "student": "GRR00000001",
    "name" : "teste 1",
    "score": [
        { "year": "2008", "semester": "1", "ira": "0.6521"},
        { "year": "2008", "semester": "2", "ira": "0.6600"},
        { "year": "2009", "semester": "1", "ira": "0.6780"},
        { "year": "2009", "semester": "2", "ira": "0.7200"},
        { "year": "2010", "semester": "1", "ira": "0.7002"},
        { "year": "2010", "semester": "2", "ira": "0.6700"},
        { "year": "2011", "semester": "1", "ira": "0.6570"},
        { "year": "2011", "semester": "2", "ira": "0.6599"},
        { "year": "2012", "semester": "1", "ira": "0.6521"},
        { "year": "2012", "semester": "2", "ira": "0.6200"},
        { "year": "2013", "semester": "1", "ira": "0.6000"},
        { "year": "2013", "semester": "2", "ira": "0.5110"}
    ]
};

var courses2 = {   
    "enrollments": [
        {"code":"CI000", "name":"Disciplina 2", "enrollments": [
            { "year": "2008", "semester": "1", "enrollments": "10"}, 
            { "year": "2008", "semester": "2", "enrollments": "15"},  
            { "year": "2009", "semester": "1", "enrollments": "17"},  
            { "year": "2009", "semester": "2", "enrollments": "22"},  
        ]},
        {"code":"CI001", "name":"Disciplina 2", "enrollments": [
            { "year": "2008", "semester": "1", "enrollments": "5"}, 
            { "year": "2008", "semester": "2", "enrollments": "25"},  
            { "year": "2009", "semester": "1", "enrollments": "12"},  
            { "year": "2009", "semester": "2", "enrollments": "11"},  
        ]},
        {"code":"CI002", "name":"Disciplina 2", "enrollments": [
            { "year": "2008", "semester": "1", "enrollments": "14"}, 
            { "year": "2008", "semester": "2", "enrollments": "15"},  
            { "year": "2009", "semester": "1", "enrollments": "13"},  
            { "year": "2009", "semester": "2", "enrollments": "32"},  
        ]},
        {"code":"CI003", "name":"Disciplina 2", "enrollments": [
            { "year": "2008", "semester": "1", "enrollments": "61"}, 
            { "year": "2008", "semester": "2", "enrollments": "62"},  
            { "year": "2009", "semester": "1", "enrollments": "6"},  
            { "year": "2009", "semester": "2", "enrollments": "33"},  
        ]},
        {"code":"CI004", "name":"Disciplina 2", "enrollments": [
            { "year": "2008", "semester": "1", "enrollments": "56"}, 
            { "year": "2008", "semester": "2", "enrollments": "32"},  
            { "year": "2009", "semester": "1", "enrollments": "17"},  
            { "year": "2009", "semester": "2", "enrollments": "53"},  
        ]}
]};


