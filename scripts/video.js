//this function is used to extract video links from youtube
function getVideoLinks() {

    let val;
    //go to the motivatioal collection and then go to the video_links document 
    db.collection("motivational").doc("video_links").onSnapshot(el => {
        val = el.data().links;
        //loop through the links stored in the databse and add them to their respective iframe
        for (i = 0; i < val.length; i++) {
            console.log(val[i])
            console.log("source" + i.toString())
            document.getElementById("source" + i.toString()).src = val[i]
        }
    })
}
//call the function
getVideoLinks();