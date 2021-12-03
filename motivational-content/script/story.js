function readStory() {

    db.collection('story')
        .get()
        .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => doc.data())
            let r = documents[Math.floor(Math.random() * documents.length)]
            document.getElementById("name").innerHTML = r.firstname + " " + r.lastname;
            document.getElementById("story_detail").innerHTML = r.story;
            console.log(r)

        })

}