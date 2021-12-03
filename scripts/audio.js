function getVideoLinks() {

    let val;
    db.collection("motivational").doc("audio_links").onSnapshot(el => {
        val = el.data().links;
        for (i = 0; i < val.length; i++) {
            console.log(val[i])
            console.log("source" + i.toString())
            document.getElementById("source" + i.toString()).src = val[i]
        }
    })
}

getVideoLinks();