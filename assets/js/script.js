// find index of selected state vs user selection
// used index number (position in array) to return selected values

var userStateChoice = document.querySelector(".browser-default");
var userStateChoiceValue =
  userStateChoice.options[userStateChoice.selectedIndex].value;

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
        if (stateCode == data[i].state) {
          console.log("THE STATE YOU JUST PICKED: \n", data[i]);
        }
      }
      console.log(data);
    });
} // end api call function definition

//-------------------------------- sign-in function starts here --------------------------------//
$(document).ready(function () {
  $(".modal").modal();
});
//--------------------------------- sign-in function ends here ---------------------------------//
userStateChoice.addEventListener("change", changeHandler);
// test
