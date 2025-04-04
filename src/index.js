
const responses = document.querySelector(".response-container")
const userInput = document.getElementById("user-input")
const sendBTN = document.getElementById("search-btn")

const maxCharacterLimit = 500; //preventing extra-long inputs

document.addEventListener("DOMContentLoaded", () => {
    console.log("page has loaded")
    sendBTN.addEventListener("click", handleSendInput)
    // userInput.addEventListener("input", h)
    sendBTN.addEventListener("keypress", function(e) {
        if(e.key === "Enter" && !sendBTN.disabled) {
            handleSendInput
        }
    })
})

function handleSendInput() {
    const inputValue = userInput.value.trim() //validate: trim spaces

    console.log(`trying to send: "${inputValue}"`)
    //validate > remove extra space and avoid long entries
    if (inputValue === "") {
        console.warn("no input entered:")
        sendBTN.disabled = true
        const errorMsg = document.createElement("p")
        errorMsg.textContent = "Try Again!"
        responses.appendChild(errorMsg)
        return;
    }

    if (inputValue > maxCharacterLimit) {
        console.warn("input exceeds character limit1")
        sendBTN.disabled = true
        errorMsg.textContent = "Reduce the length of your message"
        return;
    }

    console.log("message validated, sending now ....")

    displayInputMsg(inputValue, "User");
        //clear input field after sennding msg to display
    userInput.value = ""
    sendBTN.disabled = true
}

function displayInputMsg(message, user) {
    const msgDIV = document.createElement("div")
    msgDIV.classList.add("sender-msg", user);
    msgDIV.textContent = message
    responses.appendChild(msgDIV)
}


