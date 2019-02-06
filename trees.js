function Node(data) {
  // creating the root node. No parents. Children tbd
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  // this function creates the root node that takes in data
  var node = new Node(data);
  this._root = node;
}

Tree.prototype.traverseDF = function(callback) {
  // this is a recurse and immediately-invoking function
  (function recurse(currentNode) {
    // step 2
    for (var i = 0, length = currentNode.children.length; i < length; i++) {
      // step 3
      recurse(currentNode.children[i]);
    }

    // step 4

    callback(currentNode);

    // step 1
  })(this._root);
};
var tree = new Tree('Boss');

tree._root.children.push(new Node('Manager'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('Supervisor'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('Employee'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('son'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('baby'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('infant'));
tree._root.children[2].children[0].parent = tree._root.children[2];
