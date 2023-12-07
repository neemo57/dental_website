function go(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    query = document.getElementById("query").value;

    if(!fname){
        show_error_box("Please type a valid first name.");
        return;
    }

    if(!lname){
        show_error_box("Please type a valid last name.");
        return;
    }

    if(!email){
        show_error_box("Please type a valid email address.");
        return;
    }

    if(!query){
        show_error_box("Please type your query.");
        return;
    }

    var txt = document.getElementById("thankyoumsg");
    txt.textContent = "Thank you " + fname + " " + lname + ". Your query has been submitted and will soon be processed by our staffs.";

    var card = document.getElementById("thankscard");
    card.style.display="block";
}

function show_error_box(msg){
    var txt = document.getElementById("errormsg");
    txt.textContent = msg;

    var card = document.getElementById("errorcard");
    card.style.display="block";
}

function hide_thankyou_card(){
    var card = document.getElementById("thankscard");
    card.style.display="none";
}

function hide_error_card(){
    var card = document.getElementById("errorcard");
    card.style.display="none";
}