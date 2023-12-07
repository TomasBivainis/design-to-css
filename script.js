const pickerBackgroundColor = document.getElementById("background-color");
const pickerForegroundColor = document.querySelector("#foreground-color");
const inputText = document.getElementById("text");
const inputWidth = document.querySelector("#width");
const inputHeight = document.querySelector("#height");
const inputRadius = document.querySelector("#radius");
const btnSandbox = document.querySelector("#sandbox button");

inputText.addEventListener("change", (event) => {
  btnSandbox.innerHTML = inputText.value;
});

pickerBackgroundColor.addEventListener("change", (event) =>{
  btnSandbox.style.backgroundColor = `${pickerBackgroundColor.value}`;
});

pickerForegroundColor.addEventListener("change", event => {
  btnSandbox.style.color = `${pickerForegroundColor.value}`;
})

inputWidth.addEventListener("change", event => {
  btnSandbox.style.width = `${inputWidth.value}px`;
})

inputHeight.addEventListener("change", event => {
  btnSandbox.style.height = `${inputHeight.value}px`;
})

inputRadius.addEventListener("change", event => {
  btnSandbox.style.borderRadius = `${inputRadius.value}%`;
})