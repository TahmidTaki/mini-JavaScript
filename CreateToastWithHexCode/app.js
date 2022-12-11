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
    // alert("Hex code copied to clipboard!");
    createToast(output.value);
  });
};

const generateHexRandom = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return hex;
};

const createToast = (message) => {
  // console.log("f called");
  const div = document.createElement("div");
  div.innerText = `${message} copied to clipboard`;
  div.classList = "toast-message toast-message-slide-in";

  document.body.appendChild(div);
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
    });
  });
};
