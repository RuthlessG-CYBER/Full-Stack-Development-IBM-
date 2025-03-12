async function getData() {
    try {
        let data = await fetch(`http://localhost:3000/SVU`);
        let response = await data.json();
        showData(response);
        console.log(response);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();

async function showData(arr) {
    let parentBox = document.getElementById("parentBox");
    parentBox.innerHTML = "";

    arr.forEach((el) => {
        let box = document.createElement("div");
        box.className = "parentBox";

        let title = document.createElement("h2");
        title.innerText = el.name;

        let id = document.createElement("p");
        id.innerText = "ID: " + el.id;

        // let update = document.createElement("p");
        // update.innerText = "Updated on: " + new Date().toLocaleString();

        
        let updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        updateBtn.onclick = () => updateData(el.id, el.name);

        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = async () => {
            await deleteData(el.id);
        };

        box.append(title, id, updateBtn, deleteBtn);
        parentBox.append(box);
    });
}

let button = document.getElementById("btn");

button.addEventListener("click", async () => {
    let value = document.getElementById("input").value.trim();

    if (!value) {
        alert("Please enter a valid name");
        return;
    }

    let obj = {
        name: value,
        id: Math.floor(Math.random() * 100)
    };

    try {
        let response = await fetch(`http://localhost:3000/SVU`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        if (response.ok) {
            getData();
            alert("Data Saved Successfully");
        } else {
            alert("Error saving data");
        }
    } catch (error) {
        console.log("Error:", error);
    }
});


async function updateData(id, currentName) {
    let newName = prompt("Enter new name:", currentName);

    if (!newName) {
        alert("Name cannot be empty!");
        return;
    }

    let obj = { name: newName };

    try {
        let response = await fetch(`http://localhost:3000/SVU/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        if (response.ok) {
            getData();
            alert("Updated Successfully");
        } else {
            alert("Error updating data");
        }
    } catch (error) {
        console.log("Error:", error);
    }
}


async function deleteData(id) {
    try {
        let response = await fetch(`http://localhost:3000/SVU/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            getData();
            alert("Deleted Successfully");
        } else {
            alert("Error deleting data");
        }
    } catch (error) {
        console.error("Error deleting data:", error);
    }
}
