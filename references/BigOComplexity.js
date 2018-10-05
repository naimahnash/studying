// http://bigocheatsheet.com/
//       access	search	insertion	deletion	
// Array	O(1)	O(n)	O(n)	O(n)	                                                                        O(n)
// Stack	O(n)	O(n)	O(1)	O(1)	                                                                        O(n)
// Queue	O(n)  O(n)	O(1)	O(1)	                                                                        O(n)
// Singly-Linked List					                  O(n)	O(n)	O(1)	O(1)	                O(n)
// Doubly-Linked List					                  O(n)	O(n)	O(1)	O(1)	                O(n)
// Skip List					O(n)	      O(n)	O(n)	O(n)	                      O(n log(n))
// Hash Table					                            null	O(n)	O(n)	O(n)	                  O(n)
// Binary search Tree	Θ(log(n))	Θ(log(n))	Θ(log(n))	Θ(log(n))	  O(n)	O(n)	O(n)	O(n)	                O(n)
// Cartesian Tree	null	Θ(log(n))	Θ(log(n))	Θ(log(n))	            null	O(n)	O(n)	O(n)	                  O(n)
// B-Tree	Θ(log(n))	Θ(log(n))	Θ(log(n))	Θ(log(n))	O(log(n))	    O(log(n))	O(log(n))	O(log(n)) 	        O(n)
// Red-Black Tree	Θ(log(n))	Θ(log(n))	Θ(log(n))	Θ(log(n))	      O(log(n))	O(log(n))	O(log(n))	O(log(n))	O(n)
// Splay Tree	null	Θ(log(n))	Θ(log(n))	Θ(log(n))	null	            O(log(n))	O(log(n))	O(log(n))	          O(n)
// AVL Tree	Θ(log(n))	Θ(log(n))	Θ(log(n))	Θ(log(n))	O(log(n))	  O(log(n))	O(log(n))	O(log(n))	          O(n)
// KD Tree	Θ(log(n))	Θ(log(n))	Θ(log(n))	Θ(log(n))	O(n)	        O(n)	O(n)	O(n)	                      O(n)


const dataStructures = {
  timeComplexity: {
    average: {
    'Array' : [
      {'access'     : 'Θ(1)'},
      {'search'     : 'Θ(n)'},
      {'insertion'  : 'Θ(n)'},
      {'deletion'   : 'Θ(n)'},
    ],
    'Stack' : [
      {'access'     : 'Θ(n)'},
      {'search'     : 'Θ(n)'},
      {'insertion'  : 'Θ(1)'},
      {'deletion'   : 'Θ(1)'},
    ],
    'Queue' : [
      {'access'     : 'Θ(n)'},
      {'search'     : 'Θ(n)'},
      {'insertion'  : 'Θ(1)'},
      {'deletion'   : 'Θ(1)'},
    ],
    'Singly-Linked Lis' : [
      {'access'     : 'Θ(n)'},
      {'search'     : 'Θ(n)'},
      {'insertion'  : 'Θ(1)'},
      {'deletion'   : 'Θ(1)'},
    ],
    'Doubly-Linked List' : [
      {'access'     : 'Θ(n)'},
      {'search'     : 'Θ(n)'},
      {'insertion'  : 'Θ(1)'},
      {'deletion'   : 'Θ(1)'},
    ],
    'Skip List' : [
      {'access'     : 'Θ(log(n))'},
      {'search'     : 'Θ(log(n))'},
      {'insertion'  : 'Θ(log(n))'},
      {'deletion'   : 'Θ(log(n))'},
    ],
    'Hash Table' : [
      {'access'     : 'null'},
      {'search'     : 'Θ(1)'},
      {'insertion'  : 'Θ(1)'},
      {'deletion'   : 'Θ(1)'},
    ],
    'Binary search Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
    'Cartesian Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
    'B-Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
    'Red-Black Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
    'Splay Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
    'AVL Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
    'KD Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
    },
    worst: {
      'Array' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Stack' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Queue' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Singly-Linked Lis' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Doubly-Linked List' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Skip List' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Hash Table' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Binary search Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Cartesian Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'B-Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Red-Black Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'Splay Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'AVL Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
      'KD Tree' : [
      {'access'     : ''},
      {'search'     : ''},
      {'insertion'  : ''},
      {'deletion'   : ''},
    ],
    }
  },
  spaceComplexity: {
    'Array'               : 'O(n)',
    'Stack'               : 'O(n)',
    'Queue'               : 'O(n)',
    'Singly-Linked Lis'   : 'O(n)',
    'Doubly-Linked List'  : 'O(n)',
    'Skip List'           : 'O(n log(n))',
    'Hash Table'          : 'O(n)',
    'Binary search Tree'  : 'O(n)',
    'Cartesian Tree'      : 'O(n)',
    'B-Tree'              : 'O(n)',
    'Red-Black Tree'      : 'O(n)',
    'Splay Tree'          : 'O(n)',
    'AVL Tree'            : 'O(n)',
    'KD Tree'             : 'O(n)',
  }
}