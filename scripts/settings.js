function populateInfo() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {

      //go to the correct user document by referencing to the user uid
      currentUser = db.collection("users").doc(user.uid)
      //get the document for current user.
      currentUser.get()
      .then(userDoc => {
        //get the data fields of the user
        var name = userDoc.data().name;
        var preferredLocation = userDoc.data().preferredLocation;
        var workoutDifficulty = userDoc.data().workoutDifficulty;
        var equipment = userDoc.data().equipment;
        var minutesPerWorkout = userDoc.data().minutesPerWorkout;
        var workoutsPerWeek = userDoc.data().workoutsPerWeek;
        var muscleAreas = userDoc.data().muscleAreas;
        var userCity = userDoc.data().city;
        console.log(muscleAreas)
        console.log(document.forms[1][1].value)
        console.log(muscleAreas.includes(document.forms[1][1].value))

        //if the data fields are not empty, then write them in to the form.
        if (preferredLocation != null) {
          document.getElementById("location").value = preferredLocation;
        }
        if (minutesPerWorkout != null) {
          document.getElementById("rangePerWeek").value = minutesPerWorkout;
        }
        if (name != null) {
          document.getElementById("name").value = name;
        }
        if (equipment != null && equipment == "no equipment") {
          document.getElementById("noEquipment").checked = true;
        }else{
          document.getElementById("hasEquipment").checked = true;
        }
        if ( workoutDifficulty != null) {
          document.getElementById("difficulty").value = workoutDifficulty;
        }
        if ( workoutsPerWeek != null) {
          document.getElementById("rangePerWorkout").value = workoutsPerWeek;
        }
        var i;
        for (i = 0; i < document.forms[1].length; i++) {
          if (muscleAreas.includes(document.forms[1][i].value)) {
            document.forms[1][i].checked = true;
          }
        }
      })
    }
  })
}
populateInfo()


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
function saveUserInfo() {
  firebase.auth().onAuthStateChanged(user => {

    currentUser = db.collection("users").doc(user.uid) // gets user collection
    console.log(currentUser);
    var name = document.getElementById("name").value;
    var workoutDifficulty = document.getElementById('difficulty').value;
    var workoutsPerWeek = document.getElementById('rangePerWeek').value;
    var minutesPerWorkout = document.getElementById('rangePerWorkout').value;
    console.log(workoutDifficulty);

    var location = document.getElementById('location').value;
    var equipment = null;
    if (document.getElementById('noEquipment').checked) {
      equipment = document.getElementById('noEquipment').value;
    } else {
      equipment = document.getElementById('hasEquipment').value;
    }
    console.log(document.forms.length);
    var focusMuscleAreas = [];
    var muscleAreas = document.forms[1];
    console.log(muscleAreas);
    var i;
    for (i = 0; i < muscleAreas.length; i++) {
      if (muscleAreas[i].checked) {
        focusMuscleAreas.push(muscleAreas[i].value)
      }
    }
    console.log(focusMuscleAreas)
    console.log(location)
    console.log(equipment)

    currentUser.update({
        "name": name,
        "workoutDifficulty": workoutDifficulty,
        "workoutsPerWeek": workoutsPerWeek,
        "minutesPerWorkout": minutesPerWorkout,
        "preferredLocation": location,
        "equipment": equipment,
        "muscleAreas": focusMuscleAreas
      })
      .then(() => {
        document.getElementById("saveAnswer").innerHTML = "Your settings were successfully saved!"
        console.log(document.getElementById("saveAnswer").innerHTML)
      })
  });
}