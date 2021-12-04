// Beach workouts displayed from database
function read_display_beach_workout_one() {
    console.log("Hello")
    db.collection("Workouts").doc("Beach workouts")
        .onSnapshot(BeachWork => {
            console.log("current document data: " + BeachWork.data().beachone);
            document.getElementById("beachone").src = BeachWork.data().beachone; //using javascript to display the data on the right place

        })


}

// display second beach workout
function read_display_beach_workout_two() {
    db.collection("Workouts").doc("Beach workouts")
        .onSnapshot(BeachWork => {

            document.getElementById("beachtwo").src = BeachWork.data().beachtwo; //using javascript to display the data on the right place

        })
}

// display third beach workout
function read_display_beach_workout_three() {
    db.collection("Workouts").doc("Beach workouts")
        .onSnapshot(BeachWork => {

            document.getElementById("beachthree").src = BeachWork.data().beachthree; //using javascript to display the data on the right place

        })
}


// local storage
function setWorkoutData(id) {
    localStorage.setItem('WorkoutID', id);
}



read_display_beach_workout_one();
read_display_beach_workout_two();
read_display_beach_workout_three();




// indoor  workouts
function read_display_home_workout_one() {
    db.collection("Workouts").doc("Indoor Workouts") //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(HomeWork => { //arrow notation
            console.log("current document data: " + HomeWork.data().homeone); //.data() returns data object
            document.getElementById("homeone").src = HomeWork.data().homeone; //using javascript to display the data on the right place

        })
}

function read_display_home_workout_two() {
    db.collection("Workouts").doc("Indoor Workouts") //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(HomeWork => { //arrow notation
            // console.log("current document data: " + BeachWork.data().trailtwo); //.data() returns data object
            document.getElementById("hometwo").src = HomeWork.data().hometwo; //using javascript to display the data on the right place

        })
}

function read_display_home_workout_three() {
    db.collection("Workouts").doc("Indoor Workouts") //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(HomeWork => { //arrow notation
            // console.log("current document data: " + BeachWork.data().trailthree); //.data() returns data object
            document.getElementById("homethree").src = HomeWork.data().homethree; //using javascript to display the data on the right place

        })
}


// Add workout data in the local storage

function setWorkoutData(id) {
    localStorage.setItem('WorkoutID', id);
}





read_display_home_workout_one();
read_display_home_workout_two();
read_display_home_workout_three();