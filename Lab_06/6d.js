
function add_company() {
    var data = document.getElementById("data").value;
    if(data === null || data === "") {
        window.alert("Enter some value");
        return;
    }

    var tbodyRef = document.getElementById('myTable');

    var newRow = tbodyRef.insertRow();
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(data);
    newCell.appendChild(newText);
}