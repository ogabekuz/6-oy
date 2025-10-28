const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const nameList = document.getElementById("nameList");

const STORAGE_KEY = "namesList";

let names = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(names));
}
addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) return alert("Ism kiriting!");

    names.push(name);
    nameInput.value = "";
    saveToStorage();
    renderList();
});

function renderList() {
    nameList.innerHTML = "";

    if (names.length === 0) {
        nameList.innerHTML = "<p>Hozircha ism yo‘q</p>";
        return;
    }

    names.forEach((name, index) => {
        const li = document.createElement("li");
        li.textContent = name;

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.onclick = () => editName(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.onclick = () => deleteName(index);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(actions);
        nameList.appendChild(li);
    });
}

function editName(index) {
    const newName = prompt("Yangi ism kiriting:", names[index]);
    if (newName && newName.trim()) {
        names[index] = newName.trim();
        saveToStorage();
        renderList();
    }
}

function deleteName(index) {
    if (confirm("Haqiqatan ham o‘chirmoqchimisiz?")) {
        names.splice(index, 1);
        saveToStorage();
        renderList();
    }
}

renderList();
