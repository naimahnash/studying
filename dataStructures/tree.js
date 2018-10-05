"use strict";

class Node{
  constructor(value){
    this.value = value;
  }
}

class Tree{
  constructor(rootValue){
    if(rootValue)
      this.root = new Node(rootValue);
    else this.root = null;
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

class BinaryNode extends Node{
  constructor(value){
    super(value);
    this.left = null;
    this.right = null;
  }
}
/**
 * @description A binary tree is a tree in which each node has up to two children.
 * A node is called a "leaf" node if it has no children.
 */
class BinaryTree extends Tree{
  constructor(rootValue){
    super();
    if(rootValue){
      this.root = new BinaryNode(rootValue);
    }else
      this.root = null;
  }

  getRootNode(){
    return this.root;
  }  
}

/**
 * @description A binary search tree is a binary tree in which every node fits a specific ordering property: 
 *  all left descendents <= n < all right descendents. 
 *  This must be true for each node n.
 */
class BinarySearchTree extends BinaryTree{
  constructor(rootValue){
    super(rootValue);
  }

  insert(value) {
    const newNode = new BinaryNode(value);
    if(this.root === null)
      this.root = newNode;
    else{
      let current = this.root;
      let parent;
      while(true) {
        parent = current;
        if (value < current.value) {
          current = current.left;
          if (current === null) {
            parent.left = newNode;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = newNode;
            break;
          }
        }
      }
    }
    return this;
  }
  /**
   * @description the left branch, then the current node, and finally, the right branch.
   * @param {Node} node 
   * @param {function} visit is a callback function (can print or push to array or something)
   */
  inOrderTraversal(node, visit) {
    while(node != null) {
      this.inOrderTraversal(node.left, visit);
      visit(node); //either printing or doing some other kind of something.
      this.inOrderTraversal(node.right, visit);
      break;
    }
    return
  }

  /**
   * @description visits the current node before its child nodes
   * @param {Node} node 
   * @param {function} visit is a callback function (can print or push to array or something)
   */
  preOrderTraversal(node, visit) { 
    while(node != null) {
      visit(node); //either printing or doing some other kind of something.
      this.preOrderTraversal(node.left, visit);
      this.preOrderTraversal(node.right, visit);
      break;
    }
  }
  
  /**
   * @description visits the current node after its child nodes.
   * @param {Node} node 
   * @param {function} visit is a callback function (can print or push to array or something)
   */
  postOrderTraversal(node, visit) { 
    while(node != null) {
      this.postOrderTraversal(node.left, visit);
      this.postOrderTraversal(node.right, visit);
      visit(node); //either printing or doing some other kind of something.
      break;
    }
  }
}

class TrieNode extends Node{
  constructor(value){
    super(value);
    this.children = {};
  }
}
const TERMINALNODE = '*';

class Trie extends Tree{
  constructor(){
    super();
    this.root = new TrieNode();
  }

  insert(value){
    let node = this.root;
    for(let char of value){
      if(!node.children[char]){
        node.children[char] = new TrieNode(char);
      }
      node = node.children[char];
    }
    node.children[TERMINALNODE] = null;
    return this; //so we can chain inserts
  }
}

class Heap extends BinarySearchTree{
  constructor(rootValue){
    super(rootValue);
  }

  insert(value){

  }
}