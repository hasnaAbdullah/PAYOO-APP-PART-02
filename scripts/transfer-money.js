const transferForm = document.getElementById("transfer-form");
const transferImg = document.getElementById("transferImg");
transferForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const mainBalance = document.getElementById("main-balance");
  const balance = parseFloat(mainBalance.innerText);
  const account = document.getElementById("transfer-number").value;
  const amount = getInputValueById("transfer-amount");
  const pin = getInputValueById("transfer-pin");
  if (account.length === 11) {
    if (pin === 1234) {
      let newBalance = balance - amount;
      mainBalance.innerText = newBalance;
      addTransaction("Transfer Money", transferImg.src);
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("account number must be 11 digit");
  }
});
