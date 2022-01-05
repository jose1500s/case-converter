

function toUpperCase() {
    document.getElementById("upper-case").addEventListener('click', function () {
        let textArea = document.getElementById("text");
        textArea.value = textArea.value.toUpperCase();
    });
}
toUpperCase();

function toLowerCase() {
    document.getElementById("lower-case").addEventListener('click', function () {
        let textArea = document.getElementById("text");
        textArea.value = textArea.value.toLowerCase();
    });
}
toLowerCase();


function properCase() {
    document.getElementById("proper-case").addEventListener('click', function () {
        let textArea = document.getElementById("text").value;
        // convertir string a array
        let textArray = textArea.split(" ");
        // si el primer caracter es minuscula, lo pone en mayuscula
        for (let i = 0; i < textArray.length; i++) {
            if (textArray[i].charAt(0) === textArray[i].charAt(0).toLowerCase()) {
                textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
            }
        }
        // convertir array a string
        let text = textArray.join(" ");
        document.getElementById("text").value = text;
    });
}
properCase();

function sentenceCase() {
    document.getElementById("sentence-case").addEventListener("click", function sentenceCase() {
        let sentenceCase = document.querySelector("textarea").value.toLowerCase();
        let string = sentenceCase.split('. ')
        for (let i = 0; i < string.length; i++) {
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        }
        document.querySelector("textarea").value = string.join('. ');

    });
}
sentenceCase();

function downloadText(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function saveText() {
    document.getElementById("save-text-file").addEventListener("click", function saveText() {
        let text = document.querySelector("textarea").value;
        let textArea = document.getElementById("text");
        textArea.value = text;
        if (textArea.value === "") {
            alert("No text to save");
        } else {
            downloadText("Text.txt", textArea.value);
        }
    });
}
saveText();