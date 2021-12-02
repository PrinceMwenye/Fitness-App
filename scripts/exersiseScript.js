function showContent() {
  // create a template
  let CardTemplate = document.getElementById("CardTemplate"); 
  // create a page
  let params = new URL(window.location.href);
  let id = params.searchParams.get("id"); //parse "id"
  let collection = params.searchParams.get("collection"); //parse "collection"
  let subcollection = "workouts";
  console.log(subcollection)
  pageHeading = collection + ": " + id + " " // set page heading to collection name + id name
  $("#name-goes-here").text(pageHeading) // put the heading in
  db.collection(collection).doc(id).collection(subcollection).get().then(snap => {
      var i = 0
      snap.forEach(doc => {
              var name = doc.data().name; // get name field
              var length = doc.data().length; // get length filed
              var gif = "./images/workoutImages/" +id + "Gifs/"+ doc.data().gif + ".gif"; // get gif field
              let newcard = CardTemplate.content.cloneNode(true); // clone the template
              console.log(name);
              console.log(length);
              console.log(gif);
              // Put the data in the cloned template
              newcard.querySelector('.card-title').innerHTML = name;
              newcard.querySelector('.card-text').innerHTML = length;
              newcard.querySelector('.img-fluid').src = gif;
              
              console.log(newcard);   
              // add the template to the exercice div
              document.getElementById("exercise" + i).appendChild(newcard);
      })
  })
}
showContent();