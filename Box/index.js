const boxContainer = document.querySelector(".box-container");
const boxes = document.querySelectorAll(".box");
let queue = [];

boxContainer.addEventListener("click", (e) => {
  let index = e.target.dataset.index;
  if (index !== undefined) {
    boxes[index].style.background = "green";
    queue.push(index);
  }

  if (queue.length === 7) {
    let cnt = 0;
    while (queue.length > 0) {
      let idx = queue.shift();
      cnt++;
      setTimeout(() => {
        boxes[idx].style.background = "";
      }, cnt * 1000);
    }
  }
});
