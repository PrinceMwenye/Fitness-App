function showContent() {
  // create a URL object
  let CardTemplate = document.getElementById("CardTemplate"); 
  let params = new URL(window.location.href);
  let id = params.searchParams.get("id"); //parse "id"
  let collection = params.searchParams.get("collection"); //parse "collection"
  let subcollection = "workouts";
  console.log(subcollection)
  pageHeading = collection + ": " + id + " "
  $("#name-goes-here").text(pageHeading)
  db.collection(collection).doc(id).collection(subcollection).get().then(snap => {
      var i = 0
      console.log("inside");
      snap.forEach(doc => {
          console.log("inside for each");
              var name = doc.data().name;
              var length = doc.data().length;
              var gif = "./images/workoutImages/" +id + "Gifs/"+ doc.data().gif + ".gif";
              let newcard = CardTemplate.content.cloneNode(true);
              console.log(name);
              console.log(length);
              console.log(gif);

              newcard.querySelector('.card-title').innerHTML = name;
              newcard.querySelector('.card-text').innerHTML = length;
              newcard.querySelector('.img-fluid').src = gif;
              
              console.log(newcard);   
              document.getElementById("exercise" + i).appendChild(newcard);
      })
  })
}
showContent();