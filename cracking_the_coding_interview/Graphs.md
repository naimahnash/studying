# Graphs
A tree is actually a type of graph, but not all graphs are trees. Simply put, a tree is a connected graph without cycles 

A graph is simply a collection of nodes with edges between (some of) them.

* Graphs can be either directed or undirected. While directed edges are like a one-way street, undirected edges are like a two-way street.
* The graph might consist of multiple isolated subgraphs. lf there is a path between every pair of vertices, it is called a "connected graph"
* The graph can also have cycles (or not). An "acyclic graph" is one without cycles.

## Ways to represent a graph
### Adjacency List
This is the most common way to represent a graph. Every vertex (or node) stores a list of adjacent vertices.

In an undirected graph,an edge like (a, b) would be stored twice: once in a's adjacent vertices and once in b's adjacent vertices.

A simple class definition for a graph node could look essentially the same as a tree node.

```javascript
class Node{
  constructor(){
    this.name = '';
    this.children = []; //array of nodes
  }
}
class Graph{
  constructor(){
    this.nodes = []; //array of nodes
  }
}
```

You don't necessarily need any additional classes to represent a graph. An array (or a hash table) of lists (arrays, arraylists, linked lists, etc.) can store the adjacency list. A graph above could be represented as:

```
0: 1
1: 2
2: 0, 3 // node with two adjacent nodes
3: 2 
4: 6
5: 4 
6: 5
```
### Adjacency Matrix
An adjacency matrix is an *NxN* boolean matrix (where *N* is the number of nodes), where a true value at *matrix[i][j]*
indicates an edge from node *i* to node *j* .(You can also use an integer matrix with Os and 1s.)
In an undirected graph, an adjacency matrix will be symmetric. In a directed graph, it will not (necessarily) be.

## Graph Search
Breadth-first search and depth-first search tend to be used in different scenarios. DFS is often preferred if we want to visit every node in the graph. Both will work just fine, but depth-first search is a bit simpler.

However, if we want to find the shortest path (or just any path) between two nodes, BFS is generally better.

### Depth-first search
In depth-first search (DFS), we start at the root (or another arbitrarily selected node) and explore each branch completely before moving on to the next branch. 

That is, we go deep first (hence the name depth-first search) before we go wide.

In DFS, we visit a node *x* and then iterate through each of *x*'s neighbors. When visiting a node *y* that is a neighbor of *x*, we visit all of *y*'s neighbors before going on to *x*'s other neighbors. That is, *x* exhaustively searches *y*'s branch before any of its other neighbors.

* Note that pre-order and other forms of tree traversal are a form of DFS. The key difference is that when implementing this algorithm for a graph, we must check if the node has been visited. If we don't, we risk getting stuck in an infinite loop.
```javascript
/**
 * 
 * @param {Node} root 
 * @param {any} value the value we're searching for
 */
depthFirstSearch(root, value) {
  if (root == null) return;
  if (node.value === value)
    return node;
  root.visited = true;
  for(let n of root.adjacent) {
    if (n.visited == false) {
      depthFirstSearch(n, value);
    }
  }
}
```
### Breadth-first search
In breadth-first search (BFS) we start at the root (or another arbitrarily selected node) and explore each neighbor before going on to any of their children. 

That is, we go wide (hence breadth-first search) before we go deep.

BFS is a bit less intuitive, and many interviewees struggle with the implementation unless they are already familiar with it. The main tripping point is the (false) assumption that BFS is recursive. **It's not. Instead, it uses a queue.**

In BFS, node a visits each of a's neighbors before visiting any of their neighbors. You can think of this as searching level by level out from a. An iterative solution involving a queue usually works best.

```javascript
/**
 * 
 * @param {any} value the value we're searching for
 */
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
```