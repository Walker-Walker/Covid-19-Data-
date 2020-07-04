// find index of selected state vs user selection 
// used index number (position in array) to return selected scoped in values onto html

var stateChoice = document.querySelector(".browser-default");
function changeHandler () {
    console.log(stateChoice.value);
}

fetch('https://covidtracking.com/api/states') 
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        for(var i=0; i< data.length;i++) {
            if (stateChoice = data[i].state){
                console.log(data.indexOf(data[i].state))
                console.log("hello");
            }
        
        }
        console.log(data);
    })


    stateChoice.addEventListener("change", changeHandler) 