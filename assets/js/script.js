// find index of selected state vs user selection
// used index number (position in array) to return selected values



var userStateChoice = document.querySelector(".browser-default");
var userStateChoiceValue =
  userStateChoice.options[userStateChoice.selectedIndex].value;
//-------------------------------- global parameter for the mailchimp function starts--------------------------------//
let cta = document.getElementById("subscribe");
let email = document.getElementById("user-email");
//-------------------------------- global parameter for the mailchimp function ends--------------------------------//
console.log(userStateChoiceValue);

function changeHandler() {
  var selected = this.options[this.selectedIndex].value;

  console.log("this is the State value :" + selected);

  apiCall(selected);
} //end changeHandler fct def

function apiCall(stateCode) {
  fetch("https://covidtracking.com/api/states")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if ((stateCode == data[i].state)) {
          var positive = data[i].positive;
          var death = data[i].death;
          var recovered = data[i].recovered;
          
          document.getElementById("confirmed-cases").innerHTML = "Tested Positive: " + positive;
          document.getElementById("death").innerHTML = "Deaths: " + death;
          document.getElementById("recovered").innerHTML = "Recovered: " + recovered;
          
          if (data[i].recovered == null) {
            document.getElementById("recovered").innerHTML = "Recovered: Data Not Available"; 
          }
          if (data[i].death == null) {
            document.getElementById("death").innerHTML = "Deaths: Data Not Available"; 
          }
          if (data[i].positive == null) {
            document.getElementById("positive").innerHTML = "Tested Positive: Data Not Available"; 
          }

          console.log("Tested Positive: \n" ,positive);
          console.log("Died: \n", death); 
          console.log("Recovered: \n", recovered);
          console.log("THE STATE YOU JUST PICKED: \n",data[i])

        }
// start chart for api data 
Highcharts.chart('container', {
  chart: {
      type: 'column',
      styledMode: true,
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50
      }
  },
  title: {
      text: ''
  },
  plotOptions: {
      column: {
          depth: 25
      }
  },
  xAxis: {
      categories: ['state', 'state', 'state', 'state',]
  },
  series: [{
      data: [29.9, 71.5, 106.4, 129.2,],
      colorByPoint: true
  }]
});

      }
      console.log(data);
// <<<<<<< HEAD
    });
} // end api call function definition

//-------------------------------- sign-in function starts here --------------------------------//
$(document).ready(function () {
  $(".modal").modal();
});
//--------------------------------- sign-in function ends here ---------------------------------//
//-------------------------------- mailchimp function starts here --------------------------------//
cta.addEventListener("click", (event) => {
  event.preventDefault();
  debugger;
  if (email.value == null || email.vlue == "") {
    alert("please provide an valid email address");
  }
});
//-------------------------------- mailchimp function ends here --------------------------------//
userStateChoice.addEventListener("change", changeHandler);
// test
// =======
 
    
//     });
// } // end api call function definition


// userStateChoice.addEventListener("change", changeHandler);         
// //Current Date 
// //var currentDate = moment().format("dddd, MMMM Do YYYY");
// //document.getElementsByClassName("card-title").innerHTML = "Today: " + currentDate;
// >>>>>>> alex/api2
