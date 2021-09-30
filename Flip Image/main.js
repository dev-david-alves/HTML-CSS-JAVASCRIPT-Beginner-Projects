var container = document.getElementsByClassName("container");
var box = document.getElementsByClassName("box");
var url_input = document.getElementById("set-url-input");
var card_box = document.getElementById("card-box");

var xScaled = false;
var yScaled = false;

const flipImage = (id, arrow) => {
    if(arrow == "up") {
        if(!xScaled) {
            container[id].children[2].style.transform = "scaleY(-1)";
        } else {
            container[id].children[2].style.transform = "scale(-1, -1)";
        }

        yScaled = true;
    } else if(arrow == "down") {
        if(!xScaled) {
            container[id].children[2].style.transform = "scaleY(1)";
        } else {
            container[id].children[2].style.transform = "scale(-1, 1)";
        }

        yScaled = false;
    }
    
    if(arrow == "left") {
        if(!yScaled) {
            container[id].children[2].style.transform = "scaleX(-1)";
        } else {
            container[id].children[2].style.transform = "scale(-1, -1)";
        }

        xScaled = true;
    } else if(arrow == "right") {
        if(!yScaled) {
            container[id].children[2].style.transform = "scaleX(1)";
        } else {
            if(xScaled) {
                container[id].children[2].style.transform = "scaleY(-1)";
            }
        }
        
        xScaled = false;
    }
}

const checkImage = () => {
    var img = new Image();
    img.src = url_input.value; 
    
    img.onload = () => {
        for(var i = 0; i < box.length; i++) {
            box[i].style.backgroundImage = "url('"+ url_input.value +"')";
        }
        url_input.value = "";
    };

    img.onerror = () => {
        card_box.style.display = "flex";
        setTimeout(() => {
            card_box.style.display = "none";
        }, 2000);
    };
}