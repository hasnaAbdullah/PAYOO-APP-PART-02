const bonusBtn = document.getElementById("bonus");
const bonusImg = document.getElementById("bonusImg");
bonusBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const mainBalance = document.getElementById("main-balance");
  const balance = parseFloat(mainBalance.innerText);
  const bonus = getInputValueById("bonus-cupon");

  if (bonus) {
    const bonusMoney = balance * (bonus / 100);
    const newBalance = balance + bonusMoney;
    mainBalance.innerText = newBalance;
    addTransaction("Bonus", bonusImg.src);
  } else {
    alert("give your cupon code");
  }
});
