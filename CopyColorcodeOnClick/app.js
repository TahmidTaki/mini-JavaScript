window.onload = () => {
  run();
};

const run = () => {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const btn = document.getElementById("change-btn");
  const btnCopy = document.getElementById("copy-btn");

  btn.addEventListener("click", function () {
    const hexCode = generateHexRandom();
    output.value = hexCode;
    root.style.backgroundColor = hexCode;
  });

  btnCopy.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    alert("Hex code copied to clipboard!");
  });
};

const generateHexRandom = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return hex;
};
