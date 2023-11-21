const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);


});

notesContainer.addEventListener("click", function(e){
    //here img is delete option
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }

});

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// event.preventDefault();:

// This prevents the default behavior of the "Enter" key, which is usually to create a new paragraph or submit a form. By calling event.preventDefault(), the default behavior is suppressed.

// In summary, this event listener captures the "keydown" event on the document and, when the "Enter" key is pressed, it inserts a line break at the cursor position and prevents the default behavior of the "Enter" key. This can be useful in scenarios where you want the "Enter" key to behave differently, such as in a content-editable area where you want a line break instead of a new paragraph.






