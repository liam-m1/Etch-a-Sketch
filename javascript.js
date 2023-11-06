document.addEventListener("DOMContentLoaded", function() {
console.log("js started");

const container = document.querySelector(".container");
let box = [];

for (i = 0; i < 256; i++) {
    const newBox = document.createElement("div");
    container.appendChild(newBox);
    box[i] = newBox;
}

box.forEach(box => {
    box.addEventListener("mouseover", () => {
    box.setAttribute("class", "boxOver")
    });
});

});