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