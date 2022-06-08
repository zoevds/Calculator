let sum = " ";
function buildsum(char) {
  sum += char;
  document.innerHTML = sum;
  document.getElementById("output").innerHTML += char;
}

function calculate() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}
function clear_inputs() {
  document.getElementById("output").innerHTML = "";
}
