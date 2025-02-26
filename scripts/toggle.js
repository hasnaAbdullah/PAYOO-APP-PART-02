const addMoneySection = document.getElementById("addMoney-container");
const cashoutSection = document.getElementById("cashout-container");
const transferSection = document.getElementById("transfer-container");
const bonusSection = document.getElementById("bonus-container");
const addMoneyFeature = document.getElementById("add-money-feature");
const cashoutFeature = document.getElementById("cashout-feature");
const transferFeature = document.getElementById("transfer-money-feature");
const bonusFeature = document.getElementById("bonus-feature");

cashoutSection.style.display = "none";
addMoneySection.style.display = "none";
transferSection.style.display = "none";

addMoneyFeature.addEventListener("click", function () {
  toggleHandler("latest-payment", "none");
  toggleHandler("cashout-container", "none", "cashout-feature", false);
  toggleHandler("transfer-container", "none", "transfer-money-feature", false);
  toggleHandler("bonus-container", "none", "bonus-feature", false);
  toggleHandler("addMoney-container", "block", "add-money-feature", true);
});

cashoutFeature.addEventListener("click", function () {
  toggleHandler("latest-payment", "none");
  toggleHandler("addMoney-container", "none", "add-money-feature", false);
  toggleHandler("transfer-container", "none", "transfer-money-feature", false);
  toggleHandler("bonus-container", "none", "bonus-feature", false);
  toggleHandler("cashout-container", "block", "cashout-feature", true);
});

transferFeature.addEventListener("click", function () {
  toggleHandler("latest-payment", "none");
  toggleHandler("addMoney-container", "none", "add-money-feature", false);
  toggleHandler("cashout-container", "none", "cashout-feature", false);
  toggleHandler("bonus-container", "none", "bonus-feature", false);
  toggleHandler("transfer-container", "block", "transfer-money-feature", true);
});
bonusFeature.addEventListener("click", function () {
  toggleHandler("latest-payment", "none");
  toggleHandler("addMoney-container", "none", "add-money-feature", false);
  toggleHandler("cashout-container", "none", "cashout-feature", false);
  toggleHandler("transfer-container", "none", "transfer-money-feature", false);
  toggleHandler("bonus-container", "block", "bonus-feature", true);
});
