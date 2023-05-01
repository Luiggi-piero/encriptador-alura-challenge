// ****************************************
// Llaves de encriptacion
// ****************************************


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// ****************************************
// ****************************************

const inputText = document.querySelector(".input-text");
const txtareaResult = document.querySelector(".textarea-result");
const encryptionMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function handleEncrypt() {
    const encryptedText = encrypt(inputText.value);
    txtareaResult.style.backgroundImage = 'none';
    txtareaResult.value = encryptedText;
    inputText.value = "";
}

function encrypt(text) {
    text = text.toLowerCase();

    for (let i = 0; i < encryptionMatrix.length; i++) {
        if (text.includes(encryptionMatrix[i][0])) {
            text = text.replaceAll(encryptionMatrix[i][0], encryptionMatrix[i][1])
        }
    }
    return text;
}

function handleDecrypt() {
    const decryptedText = decrypt(inputText.value);
    txtareaResult.value = decryptedText;
    txtareaResult.style.backgroundImage = 'none';
    inputText.value = "";
}

function decrypt(textB) {
    textB = textB.toLowerCase();

    for (let i = 0; i < encryptionMatrix.length; i++) {
        if (textB.includes(encryptionMatrix[i][1])) {
            textB = textB.replaceAll(encryptionMatrix[i][1], encryptionMatrix[i][0])
        }
    }
    return textB;
}

function copy() {
    navigator.clipboard.writeText(txtareaResult.value);
    txtareaResult.value = "";
    alert("Texto copiado");
}

