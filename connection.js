var Connection = function(nextNode, condition) {
  this.nextNode = nextNode;
  this.condition = condition;
};

Connection.prototype.test = function (condition) {
  return this.condition == condition || !this.condition; 
}

module.exports = Connection;
