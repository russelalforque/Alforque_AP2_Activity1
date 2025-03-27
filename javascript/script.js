document.getElementById("copyBtn").addEventListener("click", function() {
    let text = document.getElementById("text").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    });
});
