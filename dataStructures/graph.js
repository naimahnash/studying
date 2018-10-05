class Node{
  constructor(value){
    this.value = value;
    this.visited = false;
    this.children = [];
  }
}
class Graph{

  /**
   * 
   * @param {Node} root 
   * @param {function} visit a callback for what to do when root is visited
   */
  depthFirstSearch(root, value) {
    if (root == null) return;
    if (node.value === value)
      return node;
    root.visited = true;
    for(let n of root.adjacent) {
      if (n.visited == false) {
        this.depthFirstSearch(n, value);
      }
    }
  }

  breadthFirstSearch(value){
    let queue = [this.root];
    queue[0]['visited'] = true;
    while(queue.length){
      for (let i = 0; i < queue.length; i++) {
        let node = queue.shift();
        if (node.value === value)
          return node;
        if(node.adjacent && node.adjacent.length){
          for(let i = 0; i < adjacent.length; i++)
            queue.push(adjacent);
        }
      }
    }
    return null;
  }
}