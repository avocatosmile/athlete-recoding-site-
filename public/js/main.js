const server = 'http://localhost:3000';
var studentId;
var studentName;

var TIME ;
var DATE ;


var TYPE;
var sum;
var counter ;
var values=[]
var ref ;
id=1 ;

async function fetchStudents() {
    const url = server + '/students';
    const options = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    }
    const response = await fetch(url, options);
    const RUN= await response.json();
    populateContent(RUN);
    populateContent2(RUN);
    Graph(RUN);
    Graph2(RUN);
    
    
    
    document.getElementById("av").innerHTML = " 100m average :" + average(RUN);
  document.getElementById("a").innerHTML = "200m average :" + average2(RUN);
  
 
    

    
}





async function addStudent()  {
    const url = server + '/students';
    const run = { id: x, time: TIME, date: DATE  ,type :TYPE };
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(run)
    }
    const response = await fetch(url, options);
   
    var w = response.length ;
     
    
   

}
function del(RUN) {
    delete RUN ;
}
function populateContent(RUN) {
    var table = document.getElementById('content');
    table.innerHTML = "<tr><th>Time</th><th>date</th> </tr>";
    var i= 0 ;
    RUN.forEach(run=> {
       
        if( run.type == "100m"){

   
        
        var row = document.createElement('tr');
        var Id = document.createElement('td');
      
     
        var dataId = document.createElement('td');
        var textId = document.createTextNode(run.time);
       
        dataId.appendChild(textId);
        
        var dataName = document.createElement('td');
        var textName = document.createTextNode(run.date);
        dataName.appendChild(textName);
      
        row.appendChild(dataId);
        row.appendChild(dataName);
    
        table.appendChild(row);

        }
        
        
    });
    var id = RUN.length;
    x = id+1 ;
    
}





function populateContent2(RUN) {
    var table = document.getElementById('content2');
    table.innerHTML = "<tr><th>Time</th><th>date</th> </tr>";
    var i= 0 ;
    RUN.forEach(run=> {
        var w = document.createTextNode(run.type)
      
        if( run.type == "200m"){

        
        
        var row = document.createElement('tr');
        var Id = document.createElement('td');
      
     
        var dataId = document.createElement('td');
        var textId = document.createTextNode(run.time);
       
        dataId.appendChild(textId);
        
        var dataName = document.createElement('td');
        var textName = document.createTextNode(run.date);
        dataName.appendChild(textName);
      
        row.appendChild(dataId);
        row.appendChild(dataName);
    
        table.appendChild(row);

        }
        
        
    }); 
    
}

/*
function Delete (RUN){
var id = ID ;

RUN.forEach(run=>{
    if(run.id==1){

             delete run ;

    }
    




});






}*/



function average(RUN) {
    var i= 0;
    var sum = 0;
    
        RUN.forEach(run=>{
            if( run.type == "100m"){
            var time = run.time;
            sum=time +sum ;
            i++
    
    
            }
        });
    var a = sum / i;
    return a
    }



function average2(RUN) {
var i= 0;
var sum = 0;

    RUN.forEach(run=>{
        if( run.type == "200m"){
        var time = run.time;
        sum=time +sum ;
        i++


        }
    });
var a = sum / i;
return a
}

function Graph(RUN){
    var json =  [ ];
    var json2 =  [ ];
    var i= 0;
    RUN.forEach(run=>{ 
        if( run.type == "100m"){
        var time = run.time  ;
        var date = run.date;
        json[i] =time  ;
        json2[i] =date ;
        i++
        }
    });


    
  
    var xValues = [];
    var yValues = [];
    for (var i = 0; i < json.length; i++) {
        yValues[i]=json[i];  
    }
    for (var i = 0; i < json2.length; i++) {
        xValues[i]=json2[i];  
    }
     
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:100}}],
        }
      }
    });
    




}


function Graph2(RUN){
    var json =  [ ];
    var json2 =  [ ];
    var i= 0;
    RUN.forEach(run=>{ 
        if( run.type == "200m"){
        var time = run.time  ;
        var date = run.date;
        json[i] =time  ;
        json2[i] =date ;
        i++
        }
    });


    
  
    var xValues = [];
    var yValues = [];
    for (var i = 0; i < json.length; i++) {
        yValues[i]=json[i];  
    }
    for (var i = 0; i < json2.length; i++) {
        xValues[i]=json2[i];  
    }
     
    new Chart("myChart2", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:100}}],
        }
      }
    });
    




}
 








document.querySelector('form').addEventListener('submit', (e) => {
    TIME = document.getElementById('TIME').value;
    DATE = document.getElementById('DATE').value;
    TYPE = document.getElementById('TYPE').value;
    
    if (TIME && DATE && TYPE ) {
        TIME = parseInt(TIME);
        
        addStudent();
      
        fetchStudents();
    }
    e.preventDefault();

   



    

});

 


