function go(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    addr = document.getElementById("addr").value;
    pnum = document.getElementById("pnum").value;
    email = document.getElementById("email").value;
    dtime = document.getElementById("dtime").value;

    

    if(!fname){
        show_error_box("Please type a valid first name.");
        return;
    }

    if(!lname){
        show_error_box("Please type a valid last name.");
        return;
    }

    if(!email){
        show_error_box("Please type an email address.");
        return;
    }

    if(!isValidEmail(email)){
        show_error_box("Please type a valid email address.");
        return;
    }

    if(!pnum){
        show_error_box("Please type your phone number.");
        return;
    }

    if(!parseInt(pnum)){
        show_error_box("Please type a valid phone number.");
        return;
    }

    if(!addr){
        show_error_box("Please type your address.");
        return;
    }

    if(!dtime){
        show_error_box("Please choose an appointment date and time.");
        return;
    }

    // PROCESS DATE AND TIME

    date = dtime.split('T')[0];
    time = dtime.split('T')[1];

    hours = parseInt(time.split(':')[0]);
    minutes = time.split(':')[1];
    app_date = new Date(date);
    today = new Date();

    if(!date || !time){
        show_error_box("Please choose an appointment date and time.");
        return;
    }

    if(hours < 10 || hours > 17){
        show_error_box("Sorry we are only open 10 AM - 5 PM. Please choose a different time.");
        return;
    }

    if((app_date - today) <= 0){
        show_error_box("Please choose a date from the future. We cant get you an appointment back in time since we're not time travellers.");
        return;
    }

    // FIND AM / PM
    meridian = "am";
    if(hours > 12){
        meridian="pm";
        hours = hours % 12;
    }

    // PRINT INFO TO SCREEN
    var txt = document.getElementById("thankyoumsg");
    txt.textContent = "Thank you " + fname + " " + lname + 
                    ". Your appointment has been scheduled on " + date + " at " + hours + ":" + minutes + " " + meridian + " !";

    var card = document.getElementById("thankscard");
    card.style.display="block";
}

function isValidEmail(email) {
    // Function to check if an email address is valid by matching with a regular exp
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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