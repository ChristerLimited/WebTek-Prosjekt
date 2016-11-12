window.onload = function () {
    checkForEmptyFields()
};

//Adds a new li node to UL with message as text node.
function addNewLiNodeToUL(message, UL) {
    const newLINode = document.createElement("LI");
    const newTextNode = document.createTextNode(message);
    newLINode.appendChild(newTextNode);
    UL.appendChild(newLINode);
}

//This function adds a new li node to UL if it is empty.
function checkFieldIsEmpty(field, message, UL) {
    if (field == null || field == "") {
        addNewLiNodeToUL(message, UL);
    }
}

//Initializes the check list and adds
function initializeCheckList() {
    const fornavn = document.getElementById("First_name").value;
    const etternavn = document.getElementById("Last_name").value;
    const email = document.getElementById("mail").value;
    const skriv = document.getElementById("Melding").value;

    return [fornavn, etternavn, email, skriv];

}

//Checks if the form contains any empty fields and displays it on the "Henvendelser" page.
function checkForEmptyFields() {
    const checklist = initializeCheckList();
    const formUL = document.getElementById("formliste");

    //Empty the list before checking the fields.
    formUL.innerHTML = "";

    for (i = 0; i < checklist.length; i++) {
        const currentField = checklist[i];
        const message = "er ikke utfylt";
            checkFieldIsEmpty(currentField, message, formUL);
    }

    //Checks whether there are any empty fields.
    if (formUL.innerHTML == ""){
        const readyText = document.createTextNode("Klar til å sendes");
        formUL.appendChild(readyText);
    }
}

//Notifies the user if the submit button is clicked.
function send() {
    return window.alert("Takk for hendvendelsen");
}
