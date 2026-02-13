const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let scale = 1;

document.getElementById("yes").onclick = function() {
  alert("Обещаю сделать тебя счастливой! 😘");
};

const hasHover = window.matchMedia("(hover: hover)").matches;

if (hasHover) {
  
  noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

} else {
  
  noBtn.addEventListener("click", function () {
    scale += 0.2;
    yesBtn.style.transform = `scale(${scale})`;
  });
}
