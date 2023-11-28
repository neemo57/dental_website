// Change the background color of header based on the scroll Y level

function hideHeaderBackground(){
    headerBar = document.getElementById("header");
    if(window.scrollY >= (window.innerHeight/2) ){
        headerBar.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
    }
    else{
        headerBar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
}



function hideUnhideMenu(){
    sub_menu = document.getElementById("submenu");
    sub_menu_btn = document.getElementById("submenubtn");

    if(sub_menu.style.display == "none" || sub_menu.style.display == ""){
        sub_menu.style.display = "flex";
        sub_menu_btn.textContent = "\u25BC";
    }else{
        sub_menu.style.display = "none";
        sub_menu_btn.textContent = "\u25B2";
    }
}


window.addEventListener('scroll', hideHeaderBackground);