function copyText(button, elementId) {
    let textToCopy = document.getElementById(elementId).innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied: " + textToCopy);
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}
