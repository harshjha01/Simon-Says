let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "blue"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress", () => {
  if (started == false) {
    started = true;
    console.log("started");
    levelup();
  }
});
function btnfalsh(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userfalsh(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}
function levelup(params) {
  userseq = [];
  level++;
  h2.innerHTML = `Level ${level}`;

  let ramdidx = Math.floor(Math.random() * 3);
  let randcolour = btns[ramdidx];
  let randbtn = document.querySelector(`.${randcolour}`);
  //   console.log(ramdidx);
  //   console.log(randcolour);
  //   console.log(randbtn);
  gameseq.push(randcolour);
  console.log(gameseq);
  btnfalsh(randbtn);
}
function cheakans(idx) {
  if (gameseq[idx] == userseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerText = `Game over!! Press any key to start.`;
    reset()
  }
}
function btnpressed(params) {
  // console.log(this);
  let btn = this;
  userfalsh(this);
  usercolour = btn.getAttribute("id");
  console.log(usercolour);
  userseq.push(usercolour);
  cheakans(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpressed);
}
function reset(params) {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
