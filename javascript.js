document.addEventListener("DOMContentLoaded", function() {
console.log("js started");

const container = document.querySelector(".container");
let box = [];
let check = false;

function boxSize(size) {
let size2 = size * size;
for (i = 0; i < size2; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = 500 / size + "px";
    container.appendChild(newBox);
    box[i] = newBox;
}
}

function boxSize2(size) {
    let size2 = size * size;
    let arrSize = box.length
    for (i = 0; i < size2; i++) {
        const newBox = document.createElement("div");
        newBox.style.width = 500 / size + "px";
        if (i < arrSize) {
        container.replaceChild(newBox, box[i]);
        }
        else {
        container.appendChild(newBox);
        }
        box[i] = newBox;
    }
}

function mouseEvent() {
    box.forEach(box => {
        box.addEventListener("mouseover", () => {
        if (check == true) {
            box.setAttribute("class", "rainbowTrail")
            let min = 0
            let max = 255
            let red = Math.floor(Math.random() * (max - min) + min);
            let yellow = Math.floor(Math.random() * (max - min) + min);
            let blue = Math.floor(Math.random() * (max - min) + min);
            box.style.backgroundColor = "rgb(" + red + ", " + yellow + ", " + blue + ")";
            "rgb(200, 0, 0)";
        }
        else {
        box.setAttribute("class", "boxOver")
        box.style.backgroundColor = "black";
        }
        });    
    });
}


const rainbowTrailButton = document.querySelector("#trailRainbow");
check = rainbowTrailButton.addEventListener("click", (e) => {
    box.forEach(box => {
    box.classList.remove("boxOver");
    box.classList.remove("rainbowTrail");
    box.style.backgroundColor = "blueviolet";
    });
    if (check == true) {
        return check = false;
    }
    else {
    return check = true;
    }
});


boxSize(16);
mouseEvent();

const buttonSize = document.querySelector("button");
buttonSize.addEventListener("click", () => {
    size = prompt("Select a new size parameter");
    box.forEach(box => {
    box.classList.remove("boxOver");
    box.classList.remove("rainbowTrail");
    });
    boxSize2(size);
    mouseEvent();
});


});