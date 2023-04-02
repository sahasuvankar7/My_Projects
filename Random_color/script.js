let myButton = document.getElementById('btn');
let colors = [
  '#f9f9f9',
  '#3c3c3c',
  '#3cb371',
  '#0000ff',
  '#ff0000',
  '#ee82ee',
  '#ffa500',
  '#6a5acd',
  '#00b600',
  '#8a2aff',
  '#91afff',
  '#91ff00'
];

myButton.addEventListener("click", (e) => {
  if (e.target.innerHTML == "Reset") {
    document.body.style.backgroundColor.reset();
  } else {
    let x = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[x];
  }
});
