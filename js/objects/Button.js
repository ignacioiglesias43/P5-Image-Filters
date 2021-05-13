class Button {
  constructor(coords, textContent) {
    this.x = coords.x;
    this.y = coords.y;
    this.width = 100;
    this.height = 50;
    this.textContent = textContent;
    this.color = COLORS[0];
  }

  draw() {
    textSize(15);
    fill(0);
    rect(this.x + 2, this.y + 2, this.width, this.height, 5);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0);
    text(this.textContent, this.x + 1, this.y + 30);
  }
}
