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
