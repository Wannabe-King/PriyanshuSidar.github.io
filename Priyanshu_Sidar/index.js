setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
document.getElementById("tie").innerHTML = date.toLocaleTimeString();
}