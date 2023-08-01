let section = document.getElementById("section");
section.style.display = "flex";
section.style.alignItems = "center";
section.style.flexDirection = "column";

const h1 = document.createElement("h1");
h1.innerHTML = "Google";
h1.style.fontSize = "5rem";
h1.style.color = "black";
h1.style.margin = 0;

const input = document.createElement("input");
input.type = "text";
input.placeholder = "How's the weather";
input.style.margin = "10px";
input.style.padding = "10px";
input.style.border = "2px solid #ccc";
input.style.borderRadius = "10rem";
input.style.width = "50%"

const but1 = document.createElement("button");
but1.innerHTML = "Google search"
but1.style.margin = "10px";
but1.style.padding = "10px";
but1.style.borderRadius = "4px";
but1.style.border = "1px solid #ccc";

const but2 = document.createElement("button");
but2.innerHTML = "i feel lucky"
but2.style.margin = "10px";
but2.style.padding = "10px";
but2.style.borderRadius = "4px";
but2.style.border = "1px solid #ccc";

const divbut = document.createElement("div");
divbut.style.display = "flex";
divbut.style.flexDirection = "row";

section.append(h1);
section.append(input);
section.append(divbut);
divbut.append(but1);
divbut.append(but2);
console.log(h1)