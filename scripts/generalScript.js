function goBack() {
    window.history.back();
}


//Log out and redirects to the index page
function logOut() {
    firebase.auth().signOut().then(() => {
        console.log("logged out");
        window.location.assign("index.html");
    })
}



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
                    // document.getElementById("locationpreference").innerHTML = location;

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
        } else {

        }
    });
}




// Beach workouts
function read_display_beach_workout_one() {
    console.log("Hello")
    db.collection("Workouts").doc("Beach workouts") //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(BeachWork => { //arrow notation
            console.log("current document data: " + BeachWork.data().beachone); //.data() returns data object
            document.getElementById("beachone").src = BeachWork.data().beachone; //using javascript to display the data on the right place

        })


}

function read_display_beach_workout_two() {
    db.collection("Workouts").doc("Beach workouts") //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(BeachWork => { //arrow notation
            // console.log("current document data: " + BeachWork.data().trailtwo); //.data() returns data object
            document.getElementById("beachworktwo").src = BeachWork.data().beachworktwo; //using javascript to display the data on the right place

        })
}

function read_display_beach_workout_three() {
    db.collection("Workouts").doc("Beach workouts") //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(BeachWork => { //arrow notation
            // console.log("current document data: " + BeachWork.data().trailthree); //.data() returns data object
            document.getElementById("beachthree").src = BeachWork.data().beachthree; //using javascript to display the data on the right place

        })
}



function setWorkoutData(id) {
    localStorage.setItem('WorkoutID', id);
}



// function display_Workouts() {
//     db.collection("Workouts").get()
//         .then(allWorkouts => {
//             allWorkouts.forEach(doc => {
//                 var Workoutname = doc.data().name; //gets the name field
//                 var WorkoutID = doc.data().code; //gets the unique ID field
//                 document.getElementById("beachthree").innerText = Workoutname;
//             })

//         })
// }
// display_Workouts();


read_display_beach_workout_one();
read_display_beach_workout_two();
read_display_beach_workout_three();



// Get recommended beach workout (random)
const recommended = db.collection("Reviews").where("Recommend", "==", "Yes")
    .get()
    .then(recom => {

        size = recom.size;
        recomendations = recom.docs;
        var code = recomendations[0].data()['code'];
        // console.log(code)

        function read_recommended() {
            db.collection("Workouts").doc("Beach workouts")
                .onSnapshot(RecommendedDoc => {
                    console.log(RecommendedDoc.data()[code])
                    document.getElementById("recommended").src = RecommendedDoc.data()[code]
                })
        }

        read_recommended()

    })