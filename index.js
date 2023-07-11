const keyboardMappingUa = {
    "a": "ф",
    "b": "и",
    "c": "с",
    "d": "в",
    "e": "у",
    "f": "а",
    "g": "п",
    "h": "р",
    "i": "ш",
    "j": "о",
    "k": "л",
    "l": "д",
    "m": "ь",
    "n": "т",
    "o": "щ",
    "p": "з",
    "q": "й",
    "r": "к",
    "s": "і",
    "t": "е",
    "u": "г",
    "v": "м",
    "w": "ц",
    "x": "ч",
    "y": "н",
    "z": "я",
    " ": " ",
    ";": "ж",
    ".": "ю",
    "\"": "є",
    "[": "х",
    "]": "ї",
    ",": "б"

};
const keyboardMappingEn = {
    "ф": "a",
    "и": "b",
    "с": "c",
    "в": "d",
    "у": "e",
    "а": "f",
    "п": "g",
    "р": "h",
    "ш": "i",
    "о": "j",
    "л": "k",
    "д": "l",
    "ь": "m",
    "т": "n",
    "щ": "o",
    "з": "p",
    "й": "q",
    "к": "r",
    "і": "s",
    "е": "t",
    "г": "u",
    "м": "v",
    "ц": "w",
    "ч": "x",
    "н": "y",
    "я": "z",
    " ": " ",
    "ж": ";",
    "ю": ".",
    "є": "\"",
    "х": "[",
    "ї": "]",
    "б": ","

};

const textArea = document.getElementById("textArea");
const result = document.getElementById("result");
const selectElement = document.getElementById("lang");
const overlayText = document.getElementById("overlayText");
const overlayTitle = document.getElementById("overlayTitle");
const copyButton = document.getElementById("copyButton");


const getText = () => {
    const text = textArea.value;
    if (text === "") {
        showAlert();

    } else {
        result.textContent = convertToLang(text);
        textArea.value = "";
        showResult();
    }
}

const convertToLang = (text) => {
    const charArray = Array.from(text);
    const langArray = [];
    for (let i = 0; i < charArray.length; i++) {
        let letter = charArray[i].toLowerCase();
        let langLetter;
        if (selectElement.selectedIndex === 0) {
            langLetter = keyboardMappingUa[letter] || letter;
        } else {
            langLetter = keyboardMappingEn[letter] || letter;
        }
        langArray.push(langLetter);
    }
    return langArray.join("");
}

const showAlert = () => {
    overlayText.textContent = "Введіть текст"
    overlayTitle.textContent = "Сталася помилка"
    document.getElementById('overlay').style.display = "flex";
}

const hideAlert = () => {
    document.getElementById("overlay").style.display = "none";
}

const showResult = () => {
    document.getElementById("resultPane").style.display = "flex";
}

const copyText = () => {
    navigator.clipboard.writeText(result.textContent)
    copyButton.innerText = "Скопійовано!";

    setTimeout(function() {
        copyButton.innerText = "Копіювати";
      }, 2000);
}
