// truy van HTML element
let titleElem = document.getElementById("title");

console.log(titleElem);

//truy van noi dung (inner HTML) cua element
console.log(titleElem.innerHTML);

titleElem.innerHTML = "Average Mark Calculation";
titleElem.style.color = "red";

// them element moi vao student-list

//tao the li moi
let newItemElem = document.createElement("li");

//setup noi dung cho element moi
newItemElem.innerHTML = "3. Evan - 9 - 8 - 8.5";
 
let studentListElem = document.getElementById("student-list");
studentListElem.appendChild(newItemElem);

let studentFormElemn = document.getElementById("student-form");
studentFormElemn.remove();