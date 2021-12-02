  //The following scripts do not work outside of this file

  // Insert the name of the user in the title
  function insertName() {
    firebase.auth().onAuthStateChanged(user => {
      // Check if user is signed in:
      if (user) {
        console.log(user.uid);
        //go to the correct user document by referencing to the user uid
        currentUser = db.collection("users").doc(user.uid);
        //get the document for current user.
        currentUser.get()
          .then(userDoc => {
            // put the the name into the page's title
            var user_Name = userDoc.data().name;
            console.log(user_Name);
            $("#name-goes-here").text(user_Name);
          })
      } else {
        // No user is signed in.
        console.log("No user is signed in.");
      }
    });
  }
  insertName();

// Display main content of the page
function displayCards() {
  // clones the template
  let CardTemplate = document.getElementById("CardTemplate");
  var muscleAreas = [];
  var difficulty = "";

  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
      console.log(user.uid);
      //go to the correct user document by referencing to the user uid
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then(userDoc => {
        // get user's workout difficulty and muscle areas
        difficulty = userDoc.data().workoutDifficulty;
        console.log(difficulty);
        muscleAreas = userDoc.data().muscleAreas;
        console.log(muscleAreas);
        // go to the given difficulty collection to get the muscle areas documents
        db.collection(difficulty).get().then(snap => {
          var i = 0
          console.log("inside");
          snap.forEach(doc => {
            // if muscle area is in user preferences, put its fields in the cloned template
            if (muscleAreas.includes(doc.data().Name)) {
              console.log("inside for each");
              var title = difficulty + " " + doc.data().Name;
              var details = doc.data().Length + ", " + doc.data().NumberOfExercises;
              var image = "./images/workoutImages/" + doc.data().Image;
              var link = doc.data().Link;
              let newcard = CardTemplate.content.cloneNode(true);
              console.log(title);
              console.log(details);
              console.log(image);
              console.log(link);
              console.log(newcard);

              newcard.querySelector('.title-text-black').innerHTML = title;
              newcard.querySelector('.card-text').innerHTML = details;
              newcard.querySelector('.card-image').src = image;
              newcard.querySelector('.workout-link').href = "./exercise.html?collection=" + difficulty + "&id=" + doc.data().Name

              console.log(newcard);
              document.getElementById(doc.data().Name + "-goes-here").appendChild(newcard);
            }
            i++;
          })
        })
      })
    }
  })


}
displayCards();

// Allows button clicked to redirect user to their prefered location

function preferredLocation() {
  firebase.auth().onAuthStateChanged(user => {
      // console.log(user)

      if (user) {
        //go to the correct user document by referencing to the user uid
        currentUser = db.collection("users").doc(user.uid);
        //get the document for current user.
        currentUser.get()
            .then(userDoc => {
                // Get user's prefered location
                var location = userDoc.data()['preferredLocation'];
                // console.log(location);

                // change the link to workouts based on the preference
                if (location == "Home") {


                    window.location.assign("indoorworkouts.html");

                } else if (location == "Park") {

                    window.location.assign("outdoorworkouts.html")

                } else if (location == "Beach") {

                    window.location.assign("beach.html")
                } else {
                    console.log("invalid location")
                }
            })
      }else {
      }
  });
}



// display user's preferred location
function preferredLocation_display() {
firebase.auth().onAuthStateChanged(user => {
  // console.log(user)

  if (user) {

    //go to the correct user document by referencing to the user uid
    currentUser = db.collection("users").doc(user.uid);
    //get the document for current user.
    currentUser.get()
        .then(userDoc => {
            // Get user's prefered location
            var location = userDoc.data()['preferredLocation'];
            // console.log(location);
            // User's favourite location displayed
            document.getElementById("current-favourite").innerHTML = "Current favourite location: " + location

            // User's favourite location displayed on button
            document.getElementById("locationbutton").innerHTML = location + " Workouts"

        })
  }


});
}

preferredLocation_display();
