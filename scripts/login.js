const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const account = document.getElementById("account-number").value;
  const pin = getInputValueById("pin-number");
  if (account.length === 11) {
    if (pin === 1234) {
      window.location.href = "/PAYOO-APP-PART-02/src/home.html";
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("account number must be 11 digit");
  }
});
