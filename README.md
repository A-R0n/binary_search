#Technical Domains to Cover

Binary Search Trees
Construction
Traversal and Manipulation
in-order, pre-order, post-order (depth first traversals)
Depth first vs. Breadth first traversals
search, delete, insert, remove operations
Balanced vs Unbalanced
Red or Black Trees? 
Search O(logn) O(n) 
Insert O(logn) O(n)
Remove O(logn) O(n)
AVL Trees? 
Splay Tree?

Today’s Agenda:
Go to udacity.com and watch Data Structures & Algorithms : L5 V5 - V14
Code Binary Search Tree from Scratch
Compare runtime code complexities (space and time) 


1 hr:
	If you’re 20 min. And you have no idea → find the solution in your language online, and go through line by line. 

Things to keep in mind:
When you start you should create a node class and a binary_tree class. 
Node class: Try to think about what attribute each node has to store (value, left_node, right_node, etc…) 
Binary_tree class: think about the following
Instantiating it. What happens when there is no root node? How do you check for it and what do you do? 
What are the requirements of every tree? (root node)
What are the requirements of every node? (binary, either L or R or neither or both exist)
How would you insert a value into a tree?
There should be an insert func in your binary_tree class. 
How would you display values in your tree?
There should be an display func in your binary_tree class. 
This display function should take different types of sort arguments like:
Pre-order traversal
Post-order traversal
In-order traversal
Hint: If you can figure out one traversal, the other two take the same code just rearranged order of lines. 

What is the overall runtime code complexity of binary search traversals? Answer adapted from SO Post.

In-order, Pre-order, and Post-order traversals are Depth-First traversals. 
Meaning they start from the ground up (from child to parent). They don’t go through every node in a level before finding the children, they go to the bottom-most left leaf in the entire graph. If you started from each level and only went deeper when all nodes at that level were displayed, then this would be called breadth first traversal.
For a Graph, the complexity of a Depth First Traversal is O(n + m), where n is the number of nodes, and m is the number of edges. Since a Binary Tree is also a Graph, the same applies here. The complexity of each of these Depth-first traversals is O(n+m).
This makes sense. You need to access a node and it’s edge. 
Since the number of edges that can originate from a node is limited to 2 in the case of a Binary Tree, the maximum number of total edges in a Binary Tree is n-1, where n is the total number of nodes.
The complexity then becomes O(n + n-1), which is O(n).
In runtime code complexity we don’t care about the amount of processing per action, but rather the growth of additional processing required from increasing the number of arguments passed into a given function overall. So non-determinant values, such as k (constants) or multipliers (2n -> n), or even in polynomial f(x) (x^2 + x + k -> x^2).
 
