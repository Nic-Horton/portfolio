document.getElementById("emailCopy").addEventListener("click", () => {
  var copyText = document.getElementById("myEmail");
  copyText.select();
  document.execCommand("copy");
  showSnackBar();
});

function showSnackBar() {
  var sb = document.getElementById("snackbar");
  //this is where the class name will be added & removed to activate the css
  sb.className = "show";
  setTimeout(() => {
    sb.className = sb.className.replace("show", "");
  }, 2000);
}
