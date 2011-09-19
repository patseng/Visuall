int WINDOW_WIDTH = 1000;
int WINDOW_HEIGHT = 1000;
int NODE_WIDTH = 100;
int NODE_HEIGHT = 100;

class Node {
    int x;
    int y;
    int width;
    int height;
    String title;

    Node(String _title, int _x, int _y, int _width, int _height) {
        title = _title;
        x = _x;
        y = _y;
        width = _width;
        height = _height;
    } 

    boolean containsMouseClick(int mouseX, int mouseY) {
        return (mouseX < x + width / 2 
            && mouseX > x - width / 2
            && mouseY < y + height / 2
            && mouseY > y - height / 2)
    }

    void draw() {
        stroke(255);
        fill(0,121,184);
        ellipseMode(CENTER);
        ellipse(x, y, width, height,1);
        fill(255);
        textAlign(CENTER);
        text(title, x, y);
    }
}

ArrayList nodes;

void setup() {
    size(WINDOW_WIDTH, WINDOW_HEIGHT);
    background(125);
    fill(255);
    strokeWeight(2);
    noLoop();
    PFont fontA = loadFont("Arial")
    textFont(fontA, 32);
    nodes = new ArrayList();
}

void draw() {
    background(100);
    for (int i = 0; i < nodes.size(); ++i) {
        Node node = (Node) nodes.get(i);
        node.draw();
    }
}

boolean didTapOnExistingNode(int mouseX, int mouseY) {
    for (int i = 0; i < nodes.size(); ++i) {
        Node node = (Node) nodes.get(i);
        if (node.containsMouseClick(mouseX, mouseY)) {
            return true;
        }
    }
    return false;
}
void mousePressed() {
    if(didTapOnExistingNode(mouseX,mouseY)) {
        println("old node")
    } else {
        nodes.add(new Node("New Node", mouseX, mouseY, NODE_WIDTH, NODE_HEIGHT));
        redraw();
    }
}
