var userData = [
  {
    id: 101,
    name: "jatin",
    email: "jatin@gmail.com",
    mobile: "+91-8467849784",
    age: 0,
  },
  {
    id: 102,
    name: "sonu",
    email: "sonu@gmail.com",
    mobile: "+91-8700274294",
    age: 0,
  },
  {
    id: 103,
    name: "monu",
    email: "monu@gmail.com",
    mobile: "+91-9560413315",
    age: 0,
  },
];


function renderTable() {

  const tBody = document.getElementById("userTableBody")
  let stringData = ``;


  userData.forEach(function (row, i) {
    stringData = stringData + `
      <tr>
          <td>${i + 1}</td>
          <td>${row.name}</td>
          <td>${row.email}</td>
          <td>${row.mobile}</td>
          <td>
              <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#viewUserModal" onclick="viewUser(${i})">View</button>
              <button class="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#editUserModal" onclick="editusers(${i})">Edit</button>
              <button class="btn btn-sm btn-danger" onclick="deleteUser(${i})">Delete</button>
          </td>
      </tr>
    `;
  });



  tBody.innerHTML = stringData;
}


const newUserForm = document.getElementById('addUserForm');

newUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = newUserForm.name.value;
  // debugger
  const email = newUserForm.email.value;
  const mobile = newUserForm.mobile.value;
  const age = newUserForm.age.value;

  const data = {
    name: name,
    email: email,
    mobile: mobile,
    age: age,
  }

  userData.push(data);
  renderTable();
})

function viewUser(selectedUserIndex) {
  const selectedUserData = userData[selectedUserIndex]
  document.getElementById("viewUserInfo").innerHTML = `<div>${JSON.stringify(selectedUserData)}</div>`

  // debugger
}

const deleteUser = (deleteIdx) => {

  var newData = userData.filter((item, i) => {
    return deleteIdx !== i
  })

  userData = newData;
  renderTable();
  console.log("check Data:: ", newData);
}


renderTable();



// function editusers(i) {
//   const newUserForm = document.getElementById('addUserForm');
//   const name = newUserForm.name.value;
//   const email = newUserForm.email.value;
//   const mobile = newUserForm.mobile.value;
//   const age = newUserForm.age.value;
  

// }

//////////////////////////////old/////////////////
// function editusers(i) {
//   // Get the user data
//   const user = userData[i];

//   // Fill the form with the user data
//   const newUserForm = document.getElementById('editUserForm');
//   newUserForm.editname.value = user.name;
//   newUserForm.editemail.value = user.email;
//   newUserForm.editmobile.value = user.mobile;
//   newUserForm.editage.value = user.age;


//   userData.splice(i, 1);
//   renderTable()
// }
// old end///////////////////////////////


function editusers(i) {
      // get userData
  const user = userData[i];

  // Fill the form with the user data
  const editUserForm = document.getElementById('editUserForm');
  editUserForm.editname.value = user.name;
  editUserForm.editemail.value = user.email;
  editUserForm.editmobile.value = user.mobile;
  editUserForm.editage.value = user.age;



  // Add an event listener to the form to handle updates
  editUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the updated values from the form
    const updatedName = editUserForm.editname.value;
    const updatedEmail = editUserForm.editemail.value;
    const updatedMobile = editUserForm.editmobile.value;
    const updatedAge = editUserForm.editage.value;

    // Update the user data
    user.name = updatedName;
    user.email = updatedEmail;
    user.mobile = updatedMobile;
    user.age = updatedAge;

    // Re-render the table
    renderTable();
  });
}
