let img;
let selected = -1;
let btnX = 100;
let btnY;
const buttons = [];

function preload() {
  img = loadImage("assets/zoro.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  btnY = height - 450;
  loadButtons();
}

const loadButtons = () =>
  FILTERS.forEach((filter, index) =>
    buttons.push(new Button({ x: (btnX + 20) * index + 20, y: btnY }, filter))
  );

function mouseClicked() {
  selected = -1;
  buttons.forEach((button) => {
    button.color = COLORS[0];
    if (
      mouseX > button.x &&
      mouseX <= button.x + button.width &&
      mouseY > button.y &&
      mouseY < button.y + button.height
    ) {
      selected = button.textContent;
      button.color = COLORS[1];
    }
  });
}

function draw() {
  clear();
  image(img, 0, 0);
  if (selected !== -1) {
    if (selected === POSTERIZE || selected === BLUR) {
      filter(selected, 3);
    } else {
      filter(selected);
    }
  }
  buttons.forEach((btn) => btn.draw());
}
