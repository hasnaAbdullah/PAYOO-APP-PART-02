const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const account = document.getElementById("account-number").value;
  const pin = getInputValueById("pin-number");
  if (account.length === 11) {
    if (pin === 1234) {
      const repoName = window.location.hostname.includes("github.io")
        ? "/PAYOO-APP-PART-02"
        : "";
      window.location.href = repoName + "/src/home.html";
    } else {
      alert("wrong pin number");
    }
  } else {
    alert("account number must be 11 digit");
  }
});
