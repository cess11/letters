
const letters = ['A a', 'B b', 'C c', 'D d', 'E e', 'F f', 'G g', 'H h', 'I i', 'J j', 'K k', 'L l', 'M m', 'N n', 'O o', 'P p', 'Q q', 'R r', 'S s', 'T t', 'U u', 'V v', 'W w', 'X x', 'Y y', 'Z z', 'Å å', 'Ä ä', 'Ö ö'];
let i = 0;
let j = 0;
let n = letters.length;
let pos = 0;
let bgColour = [200, 180, 180];
let stColour = [50, 50, 50];
let fullscreen_on = false;

function rndColour(colour_array) {
    colour_array.forEach(function (element, index) {
        this[index] = random(254);
    }, colour_array);
}

function mousePressed() {
    rndColour(bgColour);
    rndColour(stColour);
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
        fullscreen_on = !fullscreen_on;
        fullscreen(fullscreen_on);
    }
    i++;
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(bgColour[0] + (j % 60), bgColour[1], bgColour[2] - (j % 60));
    strokeWeight(10);
    stroke(stColour[0], stColour[1], stColour[2]);
    ellipse((displayWidth / 2) + 20, (displayHeight / 2) - 30, 230, 230);
    strokeWeight(40);
    textSize(96);
    text(letters[(i % n + n) % n], (displayWidth / 2) - 60, displayHeight / 2);
    j++;
}
