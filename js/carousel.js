start_index=1;
end_index=3;
current_index=0;

prefix = "bgg";
extension = ".jpg";

slider_image=null;

function slider(direction="left"){
    
    if(direction=="left"){
        --current_index;
        if(current_index<start_index){
            current_index=end_index;
            console.log(current_index);
        }
    }
    if(direction=="right"){
        ++current_index;
        if(current_index>end_index){
            current_index=start_index;
        }
    }

    file_name = "imgs/" + prefix + current_index + extension;
    console.log(file_name);

    if(!slider_image){
        slider_image = document.getElementById("sliderimage");
    }
    
     slider_image.src = file_name;
}

function slider_right(){
    slider("right");
}