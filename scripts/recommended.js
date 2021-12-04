// Get recommended beach workout (random)  populate recommended workouts page with random workout which has been recommended 


db.collection("Reviews").where("Recommend", "==", "Yes")
    .get()
    .then(recom => {

        size = recom.size;
        recomendations = recom.docs;
        var code = recomendations[0].data()['code'];
        console.log(code.slice(0, 3))

        function read_recommended() {

            // get recommended home workout
            if (code.slice(0, 3) == 'hom') {
                db.collection("Workouts").doc("Indoor Workouts")
                    .onSnapshot(RecommendedDoc => {
                        console.log(RecommendedDoc.data()[code])
                        document.getElementById("recommended").src = RecommendedDoc.data()[code]
                    })


                //  get recommended beach workout       
            } else if (code.slice(0, 3) == 'bea') {
                db.collection("Workouts").doc("Beach workouts")
                    .onSnapshot(RecommendedDoc => {
                        console.log(RecommendedDoc.data()[code])
                        document.getElementById("recommended").src = RecommendedDoc.data()[code]
                    })

            }


        }

        read_recommended()

    })