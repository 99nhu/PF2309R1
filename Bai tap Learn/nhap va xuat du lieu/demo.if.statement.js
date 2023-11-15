let btnAction = document.getElementById("btn=action");

btnAction.addEventListener("click",() => {
  let illValueInput = document.getElementById("bill-value");
  let billValueInput = document.getElementById("bill-value").value;
  alert(billValueInput);
  alert(typeof(billValueInput));
});