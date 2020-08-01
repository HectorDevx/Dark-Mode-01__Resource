var setTheme = localStorage.getItem("theme");

if (setTheme == null) {
  swapStyle("light.css");
} else {
  swapStyle(setTheme);
}

function swapStyle(sheet) {
  document.getElementById("myStyleSheet").href = sheet;
  localStorage.setItem("theme", sheet);
}
