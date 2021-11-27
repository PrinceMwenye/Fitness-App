// Insert the name of the user in the title
function insertName() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
      // Do something for the current logged-in user here: 
      console.log(user.uid);
      //go to the correct user document by referencing to the user uid
      currentUser = db.collection("users").doc(user.uid);
      //get the document for current user.
      currentUser.get()
        .then(userDoc => {
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
  let CardTemplate = document.getElementById("CardTemplate");
  console.log(CardTemplate)
  var muscleAreas = [];
  var difficulty = "test";

  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
      // Do something for the current logged-in user here: 
      console.log(user.uid);
      //go to the correct user document by referencing to the user uid
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then(userDoc => {
        difficulty = userDoc.data().workoutDifficulty;
        console.log(difficulty);
        muscleAreas = userDoc.data().muscleAreas;
        console.log(muscleAreas);
        db.collection(difficulty).get().then(snap => {
          var i = 0
          console.log("inside");
          snap.forEach(doc => {
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