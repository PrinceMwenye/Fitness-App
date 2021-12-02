function writeStory() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("story");

    var firstName = document.getElementById('exampleFormControlInput1').value;
    var lastName = document.getElementById('exampleFormControlInput2').value;
    var email = document.getElementById('exampleFormControlInput3').value;
    var sStoey = document.getElementById('exampleFormControlInput4').value;

    console.log(firstName + " " + lastName + " " + email + sStoey)




    hikesRef.add({ //add to database, autogen ID
        fn: firstName + "",
        ln: lastName + "",
        e: email + "",
        s: sStoey + ""
    })

    document.getElementById('exampleFormControlInput1').style.display = "none"
    document.getElementById('exampleFormControlInput2').style.display = "none"
    document.getElementById('exampleFormControlInput3').style.display = "none"
    document.getElementById('exampleFormControlInput4').style.display = "none"
    document.getElementById('label1').style.display = "none"
    document.getElementById('label2').style.display = "none"
    document.getElementById('label3').style.display = "none"
    document.getElementById('label4').style.display = "none"
    document.getElementById('send_button').style.display = "none"
    document.getElementById('thank').style.display = "inline"

    // window.location.href = "thanks.html"
}