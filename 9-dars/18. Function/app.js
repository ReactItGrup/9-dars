function number(click) {
  const number = document.getElementById("number");
  const natija = parseInt(number.innerText) + click;
  console.log(natija + click);
  number.innerText = natija;
}
