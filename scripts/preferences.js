// Slider functions
var sliderPerWeek = document.getElementById("rangePerWeek");
var outputPerWeek = document.getElementById("valuePerWeek");
outputPerWeek.innerHTML = sliderPerWeek.value; // Display the default slider value

var sliderPerDay = document.getElementById("rangePerWorkout");
var outputperDay = document.getElementById("valuePerDay");
outputperDay.innerHTML = sliderPerDay.value; // Display the default slider value

// Update the current slider value (each time slider handle is drugged)
sliderPerWeek.oninput = function () {
    outputPerWeek.innerHTML = this.value;
}
sliderPerDay.oninput = function () {
    outputperDay.innerHTML = this.value;
}

// Writes the user's information to the database
function saveUserInfo(){
    firebase.auth().onAuthStateChanged(user => {
        
        currentUser = db.collection("users").doc(user.uid) // gets user collection
        console.log(currentUser);
        // get the data from the html file
        var workoutDifficutly = document.getElementById('difficulty').value; 
        var workoutsPerWeek = document.getElementById('rangePerWeek').value;
        var minutesPerWorkout = document.getElementById('rangePerWorkout').value;

        console.log(workoutDifficutly);

        //update the database
        currentUser.update({
            "workoutDifficulty": workoutDifficutly,
            "workoutsPerWeek": workoutsPerWeek,
            "minutesPerWorkout": minutesPerWorkout
            
        })
        .then(() => {
            // go to the next page
            window.location.assign("preferences-continuation.html");
        })
    });
}