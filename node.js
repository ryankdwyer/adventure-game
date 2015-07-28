var Connection = require('./connection');
var inquirer = require("inquirer");
var Node = function(title, text) {
  this.title = title;
  this.text = text;
  this.connections = new Array();
};

Node.prototype.connect = function (nodeToConnect, circumstance) {
  // for (var i=0;i<this.connections.length;i++){
  //   if (circumstance in this.connections[i]){
  //     throw new Error();
  //   }
  // }
  // var obj = {};
  // obj[circumstance] = nodeToConnect;
  // this.connections.push(obj);

  // If a connection already exits
  if (this.connections.some(function (cxn){
    return cxn.condition == circumstance;
  })) {
    throw Error(); 
  }
  this.connections.push(new Connection(nodeToConnect, circumstance));
}

Node.prototype.route = function (circumstance) {
  for (var i=0;i<this.connections.length;i++){
    // if (circumstance in this.connections[i]){
    //   return this.connections[i][circumstance];
    // }
    if (this.connections[i].condition === circumstance) {
      return this.connections[i].nextNode;
    }
  }
}

Node.prototype.getConnectionStrings = function () {
  // var arr = [];
  // for (var i=0;i<this.connections.length;i++){
  //   arr.push(Object.keys(this.connections[i])[0]);
  // }
  // return arr;
  return this.connections.map(function(cxn){
    return cxn.condition;
  })
}

Node.prototype.hasConnectionCondition = function (condition) {
  // for (var i=0;i<this.connections.length;i++){
  //   if (circumstance in this.connections[i]){
  //     return true;
  //   }
  //   return false;
  // }
  return this.connections.some(function (cxn){
    return cxn.condition == condition;
  })
}

module.exports = Node;
