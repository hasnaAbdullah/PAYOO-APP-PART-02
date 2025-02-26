const bonusBtn = document.getElementById("bonus");
bonusBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const mainBalance = document.getElementById("main-balance");
  const balance = parseFloat(mainBalance.innerText);
  const bonus = getInputValueById("bonus-cupon");

  if (bonus) {
    const bonusMoney = balance * (bonus / 100);
    console.log(bonusMoney);
    const newBalance = balance + bonusMoney;
    mainBalance.innerText = newBalance;
  } else {
    alert("give your cupon code");
  }
});
