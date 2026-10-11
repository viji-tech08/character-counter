const message = document.getElementById("message");
const characterCount = document.getElementById("characterCount");
const remainingCount = document.getElementById("remainingCount");
const warning = document.getElementById("warning");

const maxCharacters = 200;

if (message) {
    message.addEventListener("input", function () {
        const typedCharacters = message.value.length;
        const remainingCharacters = maxCharacters - typedCharacters;

        characterCount.textContent =
            typedCharacters + "/" + maxCharacters + " characters";

        remainingCount.textContent =
            remainingCharacters + " remaining";

        if (typedCharacters >= maxCharacters) {
            warning.textContent =
                "Character limit reached! You cannot type more.";
        } else {
            warning.textContent = "";
        }
    });
} else {
    console.log("Textarea element not found!");
}