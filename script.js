const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
// let notes= document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img= document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable",true);
    img.src= "images/delete.png";
    img.className="delete-btn"
    img.style.cursor = "pointer";
    
    notesContainer.appendChild(inputBox).appendChild(img);
    
})
notesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        // Remove the parent 'p' element (the note)
        event.target.parentElement.remove();
        updateStorage();
    }
   

    
});




