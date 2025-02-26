function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const valueAsNumber = parseInt(value);

  return valueAsNumber;
}
