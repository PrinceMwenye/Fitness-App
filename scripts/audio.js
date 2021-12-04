
// function to extract spotify links from the DB
function getVideoLinks() {

    let val;
    //get access to the motivational collection and go to audio_links document 
    db.collection("motivational").doc("audio_links").onSnapshot(el => {
        val = el.data().links;
        for (i = 0; i < val.length; i++) {
            //extract the links
            console.log(val[i])
            console.log("source" + i.toString())
            document.getElementById("source" + i.toString()).src = val[i]
        }
    })
}

//call the function
getVideoLinks();