//this function is used to extra user storys from the DB
function readStory() {

    //go to the story collection
    db.collection('story')
        .get()
        .then(querySnapshot => {
            //loop trhough the documents 
            const documents = querySnapshot.docs.map(doc => doc.data())
            let r = documents[Math.floor(Math.random() * documents.length)]
            //get the first name and last name of the person who wrote the story
            //and display it 
            document.getElementById("name").innerHTML = r.firstname + " " + r.lastname;
            //get the story and display it
            document.getElementById("story_detail").innerHTML = r.story;
            console.log(r)

        })

}