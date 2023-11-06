document.addEventListener("DOMContentLoaded", function() {
console.log("js started");

const container = document.querySelector(".container");
let box = [];

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
        box.setAttribute("class", "boxOver")
        });    
    });
}


boxSize(16);
mouseEvent();

const buttonSize = document.querySelector("button");
buttonSize.addEventListener("click", () => {
    size = prompt("Select a new size parameter");
    box.forEach(box => {
    box.classList.remove("boxOver");
    });
    boxSize2(size);
    mouseEvent();
});


});