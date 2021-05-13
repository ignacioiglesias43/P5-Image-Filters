let img;

function preload() {
  img = loadImage("../assets/zoro.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  image(img, 0, 0, windowWidth, img.height);
}
