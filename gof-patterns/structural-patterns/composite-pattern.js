// the Composite pattern is useful for creating objects with deeply nested structures
// ie a tree where the nodes contain a leaf (single obj) or a branch of nodes (array of obj)

function Node(name) {
  this.name = name;
  this.children = [];
}

// all the nodes have the same props and methods so they should go on the prototype
Node.prototype = {
  add(child) {
    this.children.push(child);
  },
  remove(child) {
    this.children = this.children.filter(_child => _child !== child);
  },
  hasChildren() {
    return this.children.length > 0;
  },
  getChild(i) {
    return this.children[i];
  }
}


/**********************************************************************************************/

// usage 
const tree = new Node("root");
const left = new Node("left");
const right = new Node("right");
const leftleft = new Node("left-left");
const leftright = new Node("left-right");
const leftrightright = new Node("left-right-right");

tree.add(left);
tree.add(right);
left.add(leftleft);
left.add(leftright);
leftright.add(leftrightright);

console.log(JSON.stringify(tree, null, 2))