const addMoneyBtn = document.getElementById("add-money");
addMoneyBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const mainBalance = document.getElementById("main-balance");
  const balance = parseFloat(mainBalance.innerText);
  const account = document.getElementById("account-number").value;
  console.log(account.length);
  const amount = getInputValueById("amount");
  console.log(amount);
  const pin = getInputValueById("pin-number");
  if (account.length === 11) {
    if (pin === 1234) {
      let newBalance = balance + amount;
      mainBalance.innerText = newBalance;
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("account number must be 11 digit");
  }
});
