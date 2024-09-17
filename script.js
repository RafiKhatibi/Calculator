const output = document.querySelector(".text");
const vals = document.querySelectorAll(".val");
const clearBtn = document.querySelector(".Ac");
const deleteBtn = document.querySelector(".Del");
const equalBtn = document.querySelector(".equal");

vals.forEach((val) => {
  val.addEventListener("click", () => {
    output.value += val.value;
  });
});

clearBtn.addEventListener("click", () => {
  output.value = "";
});

deleteBtn.addEventListener("click", () => {
  output.value = output.value.slice(0, -1);
});

equalBtn.addEventListener("click", () => {
  try {
    output.value = eval(output.value);
  } catch (error) {
    output.value = "Error";
  }
});
