//hack for multiple constructors
function Node(titleOrJSON,x,y) {
    if (arguments.length == 3) {
        this.title = titleOrJSON;
        this.x = x;
        this.y = y;
    } else if (arguments.length == 1) {
        this.title = titleOrJSON.title;
        this.x = titleOrJSON.x;
        this.y = titleOrJSON.y;
    } else {
        throw new Error("Invalid arguments");
    }
}


function loadNodelistFromServer(){
    //this is to set up what the json might look like on the server
    var nodelistFromServer = [];
    var n1 = new Node("Peter",750,750);
    var n2 = new Node("Mike",750,250);
    var n3 = new Node("Jossy",750,500);
    var n4 = new Node("GMA",500,500);
    nodelistFromServer.push(n1);
    nodelistFromServer.push(n2);
    nodelistFromServer.push(n3);
    nodelistFromServer.push(n4);

    //we would get this variable from the server
    var unparsedNodelistJSON = JSON.stringify(nodelistFromServer);

    var parsedNodelistJSON = jQuery.parseJSON(unparsedNodelistJSON);
    return createNodesFromParsedJSON(parsedNodelistJSON);
}

function createNodesFromParsedJSON(parsedJSONNodelist) {
    var nodes = [];
    for (var i = 0; i < parsedJSONNodelist.length; ++i) {
        var node = new Node(parsedJSONNodelist[i]);
        nodes.push(node);
    }
    return nodes;
}

function visualizeVisuall(processing) {
   var nodelist = [];

    processing.setup = function() {
        processing.size(1000,1000);
        processing.background(125);
        processing.fill(255);
        processing.strokeWeight(2);
        processing.noLoop();

        nodelist = loadNodelistFromServer();
    }

    processing.draw = function() {
        processing.background(100);
        for (var i = 0; i < nodelist.length; i++) {
            draw(nodelist[i]);
        }
    }

    function draw(node) {
        processing.stroke(255);
        processing.fill(0,121,184);
        processing.ellipseMode(processing.CENTER);
        processing.ellipse(node.x, node.y,100,100);
        processing.fill(255);
        processing.textAlign(processing.CENTER);
        processing.text(node.title, node.x, node.y);
    }
}

//This sets up the canvas to allow processing to do all of our drawing
var canvas = document.getElementById("canvas1");
var processing = new Processing(canvas, visualizeVisuall);
