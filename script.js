// DOM elements
const createButton = document.getElementById("create");
const updateButton = document.getElementById("update");
const deleteButton = document.getElementById("del");
const productList = document.getElementById("list");
// Input fields
const CodeInput = document.querySelector(".code input");
const NameInput = document.querySelector(".name input");
const quantityInput = document.querySelector(".quan input");
const costInput = document.querySelector(".cost input");
// Current row being edited
let currentRow = null;
// Create new product
function createProduct() {
    if (validateInputs()) {
        const newRow = list.insertRow();
        
        newRow.insertCell(0).textContent = CodeInput.value;
        newRow.insertCell(1).textContent = NameInput.value;
        newRow.insertCell(2).textContent = quantityInput.value;
        newRow.insertCell(3).textContent = costInput.value;
        
        newRow.onclick = () => selectRow(newRow); // Select row on click

        clearInputs();
    }
}
// Update selected product
function updateProduct() {
    if (currentRow && validateInputs()) {
        currentRow.cells[0].textContent = CodeInput.value;
        currentRow.cells[1].textContent = NameInput.value;
        currentRow.cells[2].textContent = quantityInput.value;
        currentRow.cells[3].textContent = costInput.value;
        
        clearInputs();
        currentRow = null;
    }
}
// Delete selected product
function deleteProduct() {
    if (currentRow) {
        list.deleteRow(currentRow.rowIndex - 1); // Delete row from table
        clearInputs();
        currentRow = null;
    }
}
// Select row for editing
function selectRow(row) {
    currentRow = row;
    CodeInput.value = row.cells[0].textContent;
    NameInput.value = row.cells[1].textContent;
    quantityInput.value = row.cells[2].textContent;
    costInput.value = row.cells[3].textContent;
}
// Clear input fields
function clearInputs() {
    CodeInput.value = "";
    NameInput.value = "";
    quantityInput.value = "";
    costInput.value = "";
}
// Validate inputs
function validateInputs() {
    if (!CodeInput.value || !NameInput.value || !quantityInput.value || !costInput.value) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
// Event listeners
createButton.addEventListener("click", createProduct);
updateButton.addEventListener("click", updateProduct);
deleteButton.addEventListener("click", deleteProduct);









