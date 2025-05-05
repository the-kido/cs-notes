
Recursion is used for smaller but similar "sub-problems".

#### Cases
Recursion is best suited for recursive structures. 
- BST's are one such recursive structure.
and divide-and-conquer methods
- merge sort!
and also functional programming, graphics, and file-system organization (directories!)

#### How to identify when to use it
- When a problem can be broken down into a smaller (in *quantity*) problem while still maintaining the same problem
	- For instance, splitting an array into 2 gives two arrays, but to sort each array is the same as sorting that 1 big array, but now it's smaller!
- These parts are then eventually small enough to have some work done on them
	- I.e. an array of size 2 can be sorted *easily* by swapping some numbers around

#### A more formal structure

1. Base case: The smallest (meaningful) version of problem
	1. The solution is obvious
	2. Example: Arrays
		1. For a float array, the size could be 1 or empty
		2. For strings, it could be the string delimiter or a single character
		3. etc.
	3. For graphs:
		1. 1 node
		2. No edges
		3. Empty
		4. etc.
2. The Recursive case
	4. Breaks the problem into smaller ones and recursively applies this step.
	5. Reconstruct the full problem

 

#### Some typical scenarios
1. For arrays, when recursing we split the array (usually) into either halves or an array with 1 element and the rest of the array.
2. Recursion and for loops have to be in the same complexity class when implemented correctly.
	1. There will be a way to solve any problem via recursion or loops (but some ways are far uglier than others!!)

### Example: pathfinding
1. Base case: going from a node A-->B