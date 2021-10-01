var selectedRow = null

function onFormSubmit() {
    if (validatename() && validateage()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Gender"] = document.querySelector('input[name="Gender"]:checked').value;
    formData["Hobby"] = document.getElementById("Hobby").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Hobby;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Age").value = "";
    var Gender = document.getElementsByClassName("Gender");
    for(index = 0; index<Gender.length; index++)
        Gender[index].checked = false;
    document.getElementById("Hobby").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[1].innerHTML;
    var Gender = selectedRow.cells[2].innerHTML;
    if(Gender=="Male")
        document.getElementById("Male").checked=true;
    else
        document.getElementById("Female").checked=true;
    document.getElementById("Hobby").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Age;
    selectedRow.cells[2].innerHTML = formData.Gender;
    selectedRow.cells[3].innerHTML = formData.Hobby;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

const validatename = () => {
    //function for firstname validation
    let letters = /^[a-zA-Z]+$/;
    const fname = document.getElementById("fullName").value;
    if (fname.match(letters) && fname != "" ) {
      document.getElementById("fullName").focus();
      return true;
    }
    alert("Please enter valid first name");
    document.getElementById("fullName").focus();
    return false;
  }
  const validateage = () => {
    //function for age validation
  
    const year = document.getElementById("Age").value;
    const formatage = /^[0-9]{1,2}$/;
    if (year.match(formatage)) {
      document.getElementById("Age").focus();
      return true;
    }
  
    alert("Please enter correct age");
    document.getElementById("Age").focus();
    return false;
  }
 
  
