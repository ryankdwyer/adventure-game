var Node = require('./node');

var Game = function() {
  this.nodes = {};
  this.startingPoint = null;
};

Game.prototype.addNode = function (key, value) {
  if (key in this.nodes){
    throw new Error(); // This will exit the method. You can catch this Error(). There is no return value.
  } else {
    var newNode = new Node(key,value);
    this.nodes[key] = newNode;
  }
  if (this.startingPoint == null){
    this.startingPoint = newNode;
  }
  return newNode;
}

Game.prototype.getNode = function (title) {
  return this.nodes[title]; // Will return undefined if the title doesnt exist
}

Game.prototype.connect = function(titleA,titleB,circumstance) {
  // if (!(node1 in this.nodes) && !(node2 in this.nodes)){
  //   throw new Error();
  // }
  // this.nodes[node1].connect(node2,circumstance);
  var nodeA = this.getNode(titleA);
  var nodeB = this.getNode(titleB);
  nodeA.connect(nodeB, circumstance);
}

module.exports = Game;
