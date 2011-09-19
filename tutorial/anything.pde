int WINDOW_WIDTH = 200;
int WINDOW_HEIGHT = 200;
float radius = 50.0;
int X, Y;
int xVelocity, yVelocity;
int delay = 15;

void setup() {
    size(WINDOW_WIDTH, WINDOW_HEIGHT);
    strokeWeight(10);
    frameRate(delay);
    X = width / 2;
    Y = height / 2;
    xVelocity = 10;
    yVelocity = 3;
}

void draw() {
    X += xVelocity;
    Y += yVelocity;

    if (X - radius / 2 < 0 || X + radius / 2  > WINDOW_WIDTH) {
        xVelocity *= -1;
    } 

    if (Y - radius / 2 < 0 || Y + radius / 2 > WINDOW_HEIGHT) { 
        yVelocity *= -1;
    }
    background(100);
    fill(0,121,184);
    stroke(255);
    ellipse(X,Y,radius,radius);
}

void mouseMoved(){
    X = mouseX;
    Y = mouseY;
}
