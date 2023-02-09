"use strict";
function copyText(doc) {
    const textarea = doc.getElementById("encoded");
    textarea.select();
    doc.execCommand("copy");
}
function clearText(doc) {
    const textarea = doc.getElementById("raw-text");
    textarea.value = "";
}
function scrollToElement(doc, id) {
    const textAreaToFocus = doc.getElementById(id);
    textAreaToFocus.scrollIntoView({ behavior: "smooth", block: "start" });
}
