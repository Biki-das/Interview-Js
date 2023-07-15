const starContainer = document.querySelector("#star-container");
const ratingNums = document.createElement("p");
starContainer.appendChild(ratingNums);
let filledImageSrc = "./assets/starOrange.svg";
console.log(filledImageSrc);
let unFilledImageSrc = "./assets/starWhite.svg";
let starImages = [];
let active = -1;

for (let i = 0; i < 5; i++) {
  let starImage = document.createElement("img");
  starImage.src = unFilledImageSrc;
  starImage.setAttribute("class", "star-img");
  starImages.push(starImage);
  starContainer.appendChild(starImage);

  starImage.addEventListener("mouseenter", () => {
    onStarHover(i);
  });
  starImage.addEventListener("mouseout", () => {
    onStarOut();
  });
  starImage.addEventListener("click", () => {
    onStarClick(i);
  });
}

function onStarHover(i) {
  fill(i);
}

function onStarOut() {
  fill(active);
}

function onStarClick(i) {
  active = i;
  ratingNums.textContent = active + 1;
  fill(active);
}

function fill(ratingValue) {
  for (let i = 0; i < 5; i++) {
    if (i <= ratingValue) {
      starImages[i].src = filledImageSrc;
    } else {
      starImages[i].src = unFilledImageSrc;
    }
  }
}
