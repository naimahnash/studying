class Node{
  constructor(value = null){
    this.value = value;
  }
}

class Tree{
  constructor(rootValue = null){
    this.root = new Node(rootValue);
  }

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
}

class BinarySearchTree extends Tree{
  constructor(){
    super();
    this.left = null;
    this.right = null;
  }

  insert(value){
    let node = this.root;
    if(!this.left || value < this.left){

    }
  }
}


class Trie extends Tree{
  constructor(){
    super();
    this.children = [];
  }

  insert(data){
    let node = this.root;
  }
}

