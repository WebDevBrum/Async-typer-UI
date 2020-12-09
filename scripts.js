function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min, max, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

function draw(element) {
  console.log(element);
}

const els = document.querySelectorAll("[data-type]").forEach(draw);

// els.forEach((el) => draw(el));
// els.forEach(draw); now chained
