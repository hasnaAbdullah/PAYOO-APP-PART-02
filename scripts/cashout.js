const cashoutForm = document.getElementById("cashout-form");
const cashImg = document.getElementById("cashImg");
cashoutForm.addEventListener("sumbit", function (event) {
  event.preventDefault();

  const mainBalance = document.getElementById("main-balance");
  const balance = parseFloat(mainBalance.innerText);
  const account = document.getElementById("cashout-number").value;
  console.log(account.length);
  const amount = getInputValueById("cashout-amount");
  console.log(amount);
  const pin = getInputValueById("cashout-pin");
  if (account.length === 11) {
    if (pin === 1234) {
      let newBalance = balance - amount;
      mainBalance.innerText = newBalance;
      addTransaction("Cashout", cashImg.src);
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("account number must be 11 digit");
  }
});
