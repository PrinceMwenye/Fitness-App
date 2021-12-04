
//this function is used to submit user stories along with their credentials
function writeStory() {
    //go to the story collection
    var hikesRef = db.collection("story");


    //get user input from the fields displayed on the screen 
    var firstName = document.getElementById('exampleFormControlInput1').value;
    var lastName = document.getElementById('exampleFormControlInput2').value;
    var email = document.getElementById('exampleFormControlInput3').value;
    var sStoey = document.getElementById('exampleFormControlInput4').value;

    console.log(firstName + " " + lastName + " " + email + sStoey)



    //create an object containing the fields extracted from the html page
    //and store that object in the DB
    hikesRef.add({ //add to database, autogen ID
        firstname: firstName + "",
        lastname: lastName + "",
        emailaddress: email + "",
        story: sStoey + ""
    })


    //hide the html field elements(i.e., the form) and instead show a "thank you" message
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