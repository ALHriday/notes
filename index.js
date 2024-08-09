let btn = document.querySelector(".btn");
let noteList = document.querySelector(".note-list");

let noteOutput = document.querySelector(".note-output");
let saveBtn = document.querySelector(".saveBtn");
let textarea = document.querySelector("#textarea");

function createEl() {

    const code = `
        <div class="note-item">
            <h4 class="note-text">${textarea.value}</h4>
            <div class="list-des">${textarea.value}</div> 
            <div class = "btn-parent"><button class="delBtn">Del</button></div>         
        </div>`;
    return code;
};

btn.addEventListener("click", function () {
    noteList.style.display = "flex";
});

        
function saveInfo() {
    const item = createEl();
    noteOutput.innerHTML += item;

    if (saveBtn) {
        noteList.style.display = "none";
        textarea.value = "";
    };
    let noteText = document.querySelectorAll(".note-text");

    noteText.forEach((e) => {
        let sibling = e.nextElementSibling;
        let sibling2 = sibling.nextElementSibling;

        let text = e.textContent;

        let textArr = text.split(" ");
        let titleText = textArr.splice(0, 3);

        e.innerHTML = titleText.join("\n");

        e.addEventListener("click", function () {

            if (sibling.style.display == "block" || sibling.style.display == "") {
                sibling.style.display = "none";
                sibling2.style.display = "none";
            } else {
                sibling.style.display = "block";
                sibling2.style.display = "block";
            }
        });

        sibling2.addEventListener("click", function () {
            let parent = sibling2.parentElement;
            noteOutput.removeChild(parent);
        });

    });
};

btn.addEventListener("click", function () {
    createEl();
});

saveBtn.addEventListener("click", function () {
    if (textarea.value !== "") {
        saveInfo();
    }
});

