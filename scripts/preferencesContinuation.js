// Writes the user's information to the database
function saveUserInfo() {
  firebase.auth().onAuthStateChanged(user => {
      currentUser = db.collection("users").doc(user.uid);// gets user collection
      //get the data from the html file
      var location = document.getElementById('location').value;
      var equipment = null;
      if (document.getElementById('noEquipment').checked){
          equipment = document.getElementById('noEquipment').value;
      }else{
          equipment = document.getElementById('hasEquipment').value;
      }
      console.log(document.forms.length);
      var focusMuscleAreas = [];
      var muscleAreas = document.forms[1];
      console.log(muscleAreas);
      var i;
      for (i = 0; i < muscleAreas.length; i++){
          if (muscleAreas[i].checked) {
              focusMuscleAreas.push(muscleAreas[i].value)
          }
      }
      console.log(focusMuscleAreas)
      console.log(location)
      console.log(equipment)
      
      //updates the database 
      currentUser.update({
          "preferredLocation": location,
          "equipment": equipment,
          "muscleAreas": focusMuscleAreas
      })
      .then(() => {
          // go to the next page
          console.log("done")
          window.location.assign("../main.html");
      })
  });
}