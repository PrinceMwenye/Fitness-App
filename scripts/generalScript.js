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