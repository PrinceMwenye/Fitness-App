// Get recommended beach workout (random)  populate recommended workouts page with random workout which has been recommended 


db.collection("Reviews").where("Recommend", "==", "Yes")
    .get()
    .then(recom => {

        size = recom.size;
        recomendations = recom.docs;
        var code = recomendations[0].data()['code'];
        console.log(code)

        function read_recommended() {

            db.collection("Workouts").doc("Indoor Workouts")
                .onSnapshot(RecommendedDoc => {
                    console.log(RecommendedDoc.data()[code])
                    document.getElementById("recommended").src = RecommendedDoc.data()[code]
                })
        }

        read_recommended()

    })