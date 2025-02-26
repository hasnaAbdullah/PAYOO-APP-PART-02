const latestPaymentSection = document.getElementById("latest-payment");
const addMoneySection = document.getElementById("addMoney-container");
const cashoutSection = document.getElementById("cashout-container");
const addMoneyFeature = document.getElementById("add-money-feature");
const cashoutFeature = document.getElementById("cashout-feature");
cashoutSection.style.display = "none";
addMoneySection.style.display = "none";

addMoneyFeature.addEventListener("click", function () {
  /* latestPaymentSection.style.display = "none";
  cashoutSection.style.display = "none";
  addMoneySection.style.display = "block";

  //feature border style
  addMoneyFeature.style.border = "2px solid skyblue";
  cashoutFeature.style.border = "none"; */
  // using toggle handler
  toggleHandler("latest-payment", "none");
  toggleHandler("cashout-container", "none", "cashout-feature", false);
  toggleHandler("addMoney-container", "block", "add-money-feature", true);
});

cashoutFeature.addEventListener("click", function () {
  /* latestPaymentSection.style.display = "none";
  addMoneySection.style.display = "none";
  cashoutSection.style.display = "block";

  //feature border style
  cashoutFeature.style.border = "2px solid skyblue";
  addMoneyFeature.style.border = "none"; */

  toggleHandler("latest-payment", "none");
  toggleHandler("addMoney-container", "none", "add-money-feature", false);
  toggleHandler("cashout-container", "block", "cashout-feature", true);
});
