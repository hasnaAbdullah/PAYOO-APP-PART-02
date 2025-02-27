function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const valueAsNumber = parseInt(value);
  return valueAsNumber;
}

function toggleHandler(id, status, borderElm, border) {
  const element = document.getElementById(id);
  const borderElement = document.getElementById(borderElm);
  element.style.display = status;
  if (border) {
    borderElement.style.border = "2px solid skyblue";
  } else if (border !== undefined && border === false) {
    borderElement.style.border = "none";
  }
}

function addTransaction(transaction, imgSrc) {
  const transactionHistorys = document.getElementById("transaction-historys");
  const container = document.createElement("div");
  const leftContentContainer = document.createElement("div");
  const rightMenuContainer = document.createElement("div");
  const img = document.createElement("img");
  const innerContainer = document.createElement("div");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const i = document.createElement("i");
  container.className =
    "bg-white rounded-lg border border-gray-300 flex justify-between items-center py-3 px-5";
  leftContentContainer.className = "flex justify-between items-center gap-3";
  img.className = "p-3 bg-sky-100 rounded-full";
  img.src = imgSrc;
  h4.className = "font-bold text-gray-600 mb-1";
  h4.innerText = transaction;
  p.className = "text-xs text-gray-500";
  p.innerText = "Today 01:44 AM";
  i.className = "fa-solid fa-ellipsis-vertical text-xl";
  innerContainer.append(h4, p);
  leftContentContainer.append(img, innerContainer);
  rightMenuContainer.appendChild(i);
  container.append(leftContentContainer, rightMenuContainer);
  transactionHistorys.appendChild(container);
}

/*
 <div
   class="bg-white rounded-lg border border-gray-300 flex justify-between items-center py-3 px-5"
 >
   <!-- left content -->
   <div class="flex justify-between items-center gap-3">
     <img
       class="p-3 bg-sky-100 rounded-full"
       src="../assets/wallet.png"
       alt=""
     />
     <div>
       <h4 class="font-bold text-gray-600 mb-1">Mobile Recharge</h4>
       <p class="text-xs text-gray-500">Today 01:44 AM</p>
     </div>
   </div>
   <div>
     <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
   </div>
 </div> */
