const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", () => {
    // Create new note
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", true);

    // Set delete icon image
    img.src = "images/delete.png";
    img.className = "delete-btn";
    img.style.cursor = "pointer";

    // Append new note and delete button
    notesContainer.appendChild(inputBox).appendChild(img);
});

// Event delegation for deleting a note
// notesContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("delete-btn")) {
//         // Remove the parent 'p' element (the note)
//         event.target.parentElement.remove();
//     }
// });
