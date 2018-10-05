# [Trees](/datastructures/tree.js)
A tree is a data structure composed of nodes.
* Each tree has a root node. 
* The root node has zero or more child nodes.
* Each child node has zero or more child nodes, and so on.
* The tree cannot contain cycles. (That's a graph)

## [Binary Tree](/datastructures/tree.js)
A binary tree is a tree in which each node has up to two children.
A node is called a"leaf"node if it has no children.

### [Binary Search Tree](/datastructures/tree.js)
A binary search tree is a binary tree in which for each node, its left descendents are less than or equal to the current node, which is less than the right descendents.
* Note that this inequality must be true for all of a node's descendents, not just its immediate children.

#### Balanced vs. Unbalanced
Balancing a tree does not mean the left and right subtrees are exactly the same size, but means something more like not terribly imbalanced: 

It's balanced enough to ensure O(log n) times for insert and find, but it's not necessarily as balanced as it could be.

Two common types of balanced trees are red-black trees and AVL trees.

#### Complete Binary Trees
A complete binary tree is a binary tree in which every level of the tree is fully filled, except for perhaps the last level. To the extent that the last level is filled, it is filled left to right.

#### Full Binary Trees
A full binary tree is a binary tree in which every node has either zero or two children. That is, no nodes have only one child.

#### Perfect Binary Trees
A perfect binary tree is one that is both full and complete. All leaf nodes will be at the same level, and this level has the maximum number of nodes.
* Note that perfect trees are rare in interviews and in real life, as a perfect tree must have exactly *2k - 1* nodes (where *k* is the number of levels). In an interview, do not assume a binary tree is perfect.

### Binary Tree Traversal
#### In-order Traversal
In-order traversal means to "visit" (often, print) the left branch, then the current node, and finally, the right branch.
* When performed on a binary search tree, it visits the nodes in ascending order (hence the name "in-order").
```javascript

/**
 * @description the left branch, then the current node, and finally, the right branch.
 * @param {Node} node 
 * @param {function} visit is a callback function (can print or push to array or something)
 */
inOrderTraversal(node, visit) { 
  if (node != null) {
    inOrderTraversal(node.left);
    visit(node);
    inOrderTraversal(node.right);
  }
}
```

#### Pre-order Traversal
Pre-order traversal visits the current node before its child nodes (hence the name "pre-order").
* In a pre-order traversal, the root is always the first node visited.
```javascript

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
```

#### Post-order Traversal
Post-order traversal visits the current node after its child nodes (hence the name "post-order").
* In a post-order traversal, the root is always the last node visited.
```javascript

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
```

### [Heap](/datastructures/tree.js)
#### Min-Heap
A [complete binary tree](#complete-binary-tree) where each node is smaller than its children. 
* The root, therefore, is the minimum element in the tree.
We have two key operations on a min-heap: insert and extracting the minimum. 

##### Insert
When we insert into a min-heap, we always start by inserting the element at the bottom. We insert at the rightmost spot so as to maintain the complete tree property.

Then, we "fix" the tree by swapping the new element with its parent, until we find an appropriate spot for the element. We essentially bubble up the minimum element.
* This takes *0(log n)* time, where *n* is the number of nodes in the heap.

##### Extract
First, we remove the minimum element and swap it with the last element in the heap (the bottommost, rightmost element). Then, we bubble down this element, swapping it with one of its children until the min-heap property is restored.

Do we swap it with the left child or the right child? That depends on their values. There's no inherent ordering between the left and right element, but you'll need to take the smaller one in order to maintain the min-heap ordering.
* This algorithm will also take *0(log n)* time


#### Max-Heap
A [complete binary tree](#complete-binary-tree) where each node is larger than its children. 
* The root, therefore, is the maximum element in the tree.

## [Trie](/datastructures/tree.js)
A trie (sometimes called a prefix tree) is a variant of an n-ary tree in which characters are stored at each node. Each path down the tree may
represent a word.

The null nodes are often used to indicate complete words.

A trie can check if a string is a valid prefix in *0(K)* time, where *K* is the length of the string. 