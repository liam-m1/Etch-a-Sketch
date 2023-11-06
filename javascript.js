document.addEventListener("DOMContentLoaded", function() {
console.log("js started");

const container = document.querySelector(".container");
let box = [];

function boxSize(size) {
for (i = 0; i < 256; i++) {
    const newBox = document.createElement("div");
    container.appendChild(newBox);
    box[i] = newBox;
}
}

boxSize(16);

box.forEach(box => {
    box.addEventListener("mouseover", () => {
    box.setAttribute("class", "boxOver")
    });    
});

const buttonSize = document.querySelector("button");
buttonSize.addEventListener("click", () => {
    box.forEach(box => {
    box.classList.remove("boxOver");

    });
});

});