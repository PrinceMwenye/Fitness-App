let WorkoutID = localStorage.getItem("WorkoutID");



function writeReview() {

    console.log("inside");

    let Title = document.getElementById("title").value;
    let Recommend = document.getElementById("recommend").value;
    let Target = document.getElementById("target").value;
    let Description = document.getElementById("description").value;


    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid);
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {

                    //get user Email
                    var userEmail = userDoc.data().email;
                    // Start a new collection and add all data in it.
                    db.collection("Reviews").add({
                        code: WorkoutID,
                        UserID: userID,
                        UserEmail: userEmail,
                        Title: Title,
                        Target: Target,
                        Recommend: Recommend,
                        Description: Description

                    }).then(() => {
                        window.location.assign("/locationworkouts/Review_success.html");
                    })
                })
        } else {
            // No user is signed in.
            console.log("no user signed in");
        }
    });

}