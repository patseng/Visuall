function Node(title, x, y) {
	this.title = title;
	this.x = x;
	this.y = y;
}

var n1 = new Node("Mike", 1, 1);
var myNodeStr = JSON.stringify(n1);
//alert(myNodeStr);
//alert(n1.title);
myjson = JSON.parse(myNodeStr);
alert(myjson);	



// 
// function Node() {
// 	this.id=-1;
// 	this.title = "blank title";
// 	this.x = -1;
// 	this.y = -1;
// 	this.edges=[ ]; //edge Ids
// 	
// 	Node.prototype.init = function(_id, _title, _x, _y, _edges){
// 		this.id = _id;
// 		this.title = _title;
// 		this.x = _x;
// 		this.y = _y;
// 		this.edges = _edges;
// 	}
// 	/*
// 	if(typeof this.setTitle !== "function") {
// 		Node.prototype.setTitle = function( newTitle ) {
// 		this.title = newTitle;
// 		}
// 	}
// 	if(typeof this.getTitle !== "function") {
// 		Node.prototype.getTitle = function() {
// 		return this.title;
// 		}
// 	}
// 	*/
// }
// 
// function Edge() {
// 	this.id = -1;
// 	this.title = "blank edge title";
// 	this.nodeId_1 = "blank node1";
// 	this.nodeId_2 = "blank node2";
// 	
// 	Edge.prototype.init = function(_id, _title, _nodeId_1, _nodeId_2){
// 		this.id = _id;
// 		this.title = _title;
// 		this.nodeId_1 = _nodeId_1; //starting node
// 		this.nodeId_2 = _nodeId_2; //ending node
// 	}
// }
// 
// 
// 
// /* MAIN */
// var helloWorld = new Node();
// helloWorld.init(0, "Hello World", 64, 128, [1] );
// 
// var grandma = new Node();
// grandma.init(1, "Grandma", 128, 128, [0, 1, 2] );
// 
// var michael = new Node();
// michael.init(2, "Michael", 96, 192, [1] );
// 
// var peter = new Node();
// peter.init(3, "Peter", 160, 192, [2] );
// 
// var edgeTop = new Edge();
// edgeTop.init(0, "Top edge", 0, 1 );
// 
// var edgeLeft = new Edge();
// edgeLeft.init(1,"Left edge", 1, 2);
// 
// var edgeRight = new Edge();
// edgeRight.init(2, "Right edge", 1, 3)
// 
// 
// alert(grandma.edges);
// alert(edgeLeft.nodeId_2);

//myNode.setTitle("Testing my first node");
//alert(myNode.getTitle());
//alert("Hello vvorld!");
