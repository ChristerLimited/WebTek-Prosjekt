/**
 * Created by snotu on 10.11.2016.
 */

window.onload = function() {
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
    const fieldValue = field.value;
    if (fieldValue == null || fieldValue == "") {
        addNewLiNodeToUL(message, UL);
    }
}

//Initializes the check list and adds
function initializeCheckList() {
    const fornavn = document.getElementById("Fornavn");
    const etternavn = document.getElementById("Etternavn");
    const email = document.getElementById("Email");
    const skriv = document.getElementById("Melding");

    return [fornavn, etternavn, email, skriv];

}

//Checks if the form contains any empty fields and displays it on the "Henvendelser" page.
function checkForEmptyFields() {
    const checklist = initializeCheckList();
    console.log(checklist);
    const formUL = document.getElementById("formliste");

    //Empty the list before checking the fields.
    formUL.innerHTML = "";

    for (i = 0; i < checklist.length; i++) {
        const currentField = checklist[i];
        console.log(currentField);
        console.log(currentField.id);
        const message = (currentField.id.toString() + " er ikke utfylt");
        checkFieldIsEmpty(currentField, message, formUL);
    }

    //Checks whether there are any empty fields.
    if (formUL.innerHTML == "") {
        const readyText = document.createTextNode("Alle felter er utfylt");
        formUL.appendChild(readyText);
    }
}

//Notifies the user if the submit button is clicked.
function send() {
    return window.alert("Takk for hendvendelsen");
}
