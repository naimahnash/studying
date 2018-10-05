class Node{
  constructor(value = null){
    this.value = value;
  }
}

class Tree{
  constructor(rootValue = null){
    this.root = new Node(rootValue);
  }
  

  /*
  depthFirstSearch(value){
    let stack=[this.root];
    while(stack.length) {
      let node = stack.pop();
      if(node.value === value)
        return node;

      if (!node.children) 
        continue;      

      for (let i = node.children.length - 1; i>=0; i--) 
        stack.push(node.children[i]);
      
      return node;
    }
    return null;
  }
  */

  /*
  breadthFirstSearch(value){
    let queue = [this.root];
    while(queue.length){
      for (let i = 0; i < queue.length; i++) {
        let node = queue.shift();
        if (node.value === value) {
            return node
        }
        if(node.children && node.children.length){
          for(let i = 0; i < children.length; i++)
            queue.push(children);
        }
        //
        // if (node.left) {
        //   queue.push(tree[node.left])
        // }
        // if (node.right) {
        //   queue.push(tree[node.right])
        // }
      }
    }
    return null;
  }
  */
}
/**
 * @description A binary tree is a tree in which each node has up to two children.
 * A node is called a "leaf" node if it has no children.
 */
class BinaryTree extends Tree{
  constructor(rootValue = null){
    super(rootValue);
    this.root.left = null;
    this.root.right = null;
  }

  insert(value){
    let node = this.root;
    if(!node.left){
      node.left = new Node(value);
    }else if(node.left && !node.right){
      node.right = new Node(value);
    }else if(node.left && node.right){
      node = node.left;
    }
    return this; //so we can chain inserts
  }
  /**
   * @description the left branch, then the current node, and finally, the right branch.
   * @param {Node} node 
   * @param {function} visit is a callback function (can print or push to array or something)
   */
  inOrderTraversal(node, visit) { 
    if(!node) node = this.root;
    if (node != null) {
      inOrderTraversal(node.left);
      visit(node); //either printing or doing some other kind of something.
      inOrderTraversal(node.right);
    }
  }

  /**
   * @description visits the current node before its child nodes
   * @param {Node} node 
   * @param {function} visit is a callback function (can print or push to array or something)
   */
  preOrderTraversal(node, visit) { 
    if(!node) node = this.root;
    if(node != null) {
      visit(node); //either printing or doing some other kind of something.
      preOrderTraversal(node.left);
      preOrderTraversal(node.right);
    }
  }
  
  /**
   * @description visits the current node after its child nodes.
   * @param {Node} node 
   * @param {function} visit is a callback function (can print or push to array or something)
   */
  postOrderTraversal(node, visit) { 
    if(!node) node = this.root;
    if(node != null) {
      postOrderTraversal(node.left);
      postOrderTraversal(node.right);
      visit(node); //either printing or doing some other kind of something.
    }
  }
  
}

/**
 * @description A binary search tree is a binary tree in which every node fits a specific ordering property: 
 *  all left descendents <= n < all right descendents. 
 *  This must be true for each node n.
 */
class BinarySearchTree extends BinaryTree{
  constructor(rootValue = null){
    super(rootValue);
  }

  insert(data){
    
  }
}


class Trie extends Tree{
  constructor(){
    super();
    this.children = [];
  }

  insert(data){
    let node = this.root;

    return this; //so we can chain inserts
  }
}

class Heap extends BinarySearchTree{
  constructor(rootValue = null){
    super(rootValue);
  }

  insert(data){
    
  }
}