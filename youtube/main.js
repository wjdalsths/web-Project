const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

const thumbsUp = document.querySelector(".info .action .thumbUp");
const thumbsDown = document.querySelector(".info .action .thumbDown");

const subscribe = document.querySelector(".info .channel .subscribe");
const alarm = document.querySelector(".info .channel .alarm");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

thumbsUp.addEventListener("click", () => {
  thumbsUp.classList.toggle("active");
});
thumbsDown.addEventListener("click", () => {
  thumbsDown.classList.toggle("active");
});

subscribe.addEventListener("click", () => {
  subscribe.classList.toggle("clicked");
  alarm.classList.toggle("clamp");
});
