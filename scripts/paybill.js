const billForm = document.getElementById("bill-form");
const billImg = document.getElementById("billImg");

billForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const mainBalance = document.getElementById("main-balance");
  const balance = parseFloat(mainBalance.innerText);
  const account = document.getElementById("bill-account-number").value;
  console.log(account.length);
  const amount = getInputValueById("bill-amount");
  console.log(amount);
  const pin = getInputValueById("bill-pin");
  if (account.length === 11) {
    if (pin === 1234) {
      let newBalance = balance - amount;
      mainBalance.innerText = newBalance;
      addTransaction("Pay Bill", billImg.src);
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("account number must be 11 digit");
  }
});
