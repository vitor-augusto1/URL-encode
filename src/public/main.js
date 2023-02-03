function copyText(doc) {
  const textarea  = doc.getElementById("encoded");
  textarea.select();
  doc.execCommand("copy");
}

function clearText(doc) {
  const textarea = doc.getElementById("raw-text");
  textarea.value = "";
}
