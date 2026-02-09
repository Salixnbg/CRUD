let users = [];
let editIndex = null;

// NAVIGATION
function showForm() {
  hideAll();
  document.getElementById("formSection").classList.remove("hidden");
}

function showList() {
  hideAll();
  document.getElementById("listSection").classList.remove("hidden");
  renderList();
}

function showDashboard() {
  hideAll();
  document.getElementById("dashboardSection").classList.remove("hidden");
  document.getElementById("total").textContent = users.length;
}

function hideAll() {
  document.getElementById("formSection").classList.add("hidden");
  document.getElementById("listSection").classList.add("hidden");
  document.getElementById("dashboardSection").classList.add("hidden");
}

// CREATE / UPDATE
function saveUser() {
  let user = {
    name: name.value,
    age: age.value,
    email: email.value,
    identifier: identifier.value
  };

  if (editIndex === null) {
    users.push(user);
  } else {
    users[editIndex] = user;
    editIndex = null;
  }

  resetForm();
  showList();
}

// READ
function renderList() {
  let table = document.getElementById("userTable");
  table.innerHTML = "";

  users.forEach((user, index) => {
    table.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.identifier}</td>
        <td>
          <a href="#" onclick="deleteUser(${index})">Effacer</a> |
          <a href="#" onclick="editUser(${index})">Éditer</a> 
          
        </td>
      </tr>
    `;
  });
}

// UPDATE
function editUser(index) {
  let user = users[index];
  name.value = user.name;
  age.value = user.age;
  email.value = user.email;
  identifier.value = user.identifier;
  editIndex = index;
  showForm();
}

// DELETE
function deleteUser(index) {
  users.splice(index, 1);
  renderList();
}

// RESET
function resetForm() {
  name.value = "";
  age.value = "";
  email.value = "";
  identifier.value = "";
}
