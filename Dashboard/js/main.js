google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Time', '',],
          ['10am',  57,],
          ['11am',  30,],
          ['12am',  60,],
          ['01am',  38,],
          ['02am',  22,],
          ['03am',  55,],
          ['04am',  14,],
          ['05am',  37,],
          ['06am',  65,],
          ['07am',  55,],
          ['08am', 75,]
        ]);

        var options = {
            title: 'Reports',
            curveType: 'function',
            legend: 'none',
            // selectionMode: 'multiple',
            // Trigger tooltips
            tooltip: {trigger: 'selection'},
            // Group selections
            // by x-value.
            role: 'style',
            colors: ['#fd5def'],
            
            aggregationTarget: 'category',
            
            
    

        };

        var chart = new google.visualization.LineChart(document.getElementById('dashboard-function-report-elem1'));

        chart.draw(data, options);
      };


    //   donout chart


    google.charts.setOnLoadCallback(drawChart2);
    function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Sale',     6],
        ['Distribute',      5.5],
        ['return',  5],
        ['',  4],
        
    ]);

    var options = {
        title: 'Analytics',
        pieHole: 0.7,
        colors: ['#FF8F6B','#5B93FF', '#FFD66B', '#FAFAFB'],
        
        legend: { position: 'bottom' },

    };

    var chart = new google.visualization.PieChart(document.getElementById('dashboard-function-report-elem2'));
    chart.draw(data, options);
    }


// heart beat
var width = 60;
var diff = 2;
var expandid = ""
var shrinkid = ""
var intervalvalId =0;
var cnt = 0;


function increase(id){
  expandid = id;

  
  intervalId = setInterval(expand, 10);
  clearInterval(intervalvalId);
}


function decrease(id){
  shrinkid = id;
  intervalId = setInterval(shrink, 10);
  
  clearInterval(intervalvalId);
}


function expand(){
  cnt = cnt + 1;
  if(width < 100){
    width = width + diff;
    document.getElementById(expandid).style.width=width;
    if(cnt%2==0){
      clearInterval(intervalvalId);
    }
    
    

  }
  else{
    clearInterval(intervalId);
  }
}
function shrink(){
  cnt = cnt + 1;
  if(width > 60){
    width = width - diff;
    document.getElementById(shrinkid).style.width=width;
    if(cnt%2==0){
      clearInterval(intervalvalId);
    }
    
    


  }
  else{
    clearInterval(intervalId);
  }
}
