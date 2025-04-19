### Searching
The unit of work here is.... ? #todo

| Function                   | Avg. Big O    | W.C. Big O | Notes                                                                                                                         |
| -------------------------- | ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Array: Linear search       | $O(N)$        | -          | -                                                                                                                             |
| Array: Binary Search       | $O(\log(N))$  | -          | Assumes array is [[Table of Common Complexities#Sorting\|sorted]]                                                             |
| Linked List: Linear Search | $O(N^2)$      | -          | terrible.                                                                                                                     |
| BST: "Search"              | $O(\log(N) )$ | $O(N)$<br> | If data items are added in order to a BST, it will resemble a linked list and therefore will not have the advantages of a BST |

### Sorting
For these, we usually count the number of "comparisons" made. 

| Function                 | Avg. Big O           | W.C. Big O | Notes                                                                                                                                                                 |
| ------------------------ | -------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Array: Bubble Sort       | $O(N^2 )$<br>        | -          | The number of comparisons is $\frac{N}{2}(N-1)$                                                                                                                       |
| Array: Merge Sort        | $O(N \log (N) )$<br> | -          | Discussed in detail elsewhere #todo                                                                                                                                   |
| Linked List: Bubble Sort | $O(N^2 )$<br>        | -          | Swapping: Constant<br>Going to next node: Constant<br>Going through each node: N<br>Traversing through the N-1 nodes to find a smaller one: N<br><br>$N\cdot N = N^2$ |
| Linked List: Merge Sort  | $O(N \log(N))$<br>   | -          | "Traversing to the center node is not contribute to the complexity"<br>As we're only counting comparisons.                                                            |
| Creation of BST          | $O(N\log(N))$        | $O(N^2)$   | Creating a BST from an array sorts it for you!                                                                                                                        |

### Linked List Operations

Unit of work: Accessing a pointer (?)

| Function         | Avg. Big O | W.C. Big O | Notes |
| ---------------- | ---------- | ---------- | ----- |
| Insert (at head) | $O(1)$     | -          | -     |
| Insert (at tail) | $O(N)$     | -          | -     |
| Delete           | $O(N)$     | -          | -     |


### BST Operations

Unit of work: Accessing a pointer (?)

| Function | Avg. Big O   | W.C. Big O | Notes                                                                                                                                  |
| -------- | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Insert   | $O(\log(N))$ | $O(N)$     | Equivalent to "finding" a node (whose complexity we discussed above). The extra step of "adding" the node is a constant amount of work |
| Delete   | $O(log(N))$  | $O(N)$     | Same as above.                                                                                                                         |

[[03-12#Operations on graphs]]

### Graph Operations (Adjacency List) w/ lists stored in an array

Note: the edge lists are stored as an *array*

| Function                                      | Avg. Big O | W.C. Big O | Notes                                                                          |
| --------------------------------------------- | ---------- | ---------- | ------------------------------------------------------------------------------ |
| Adding Edge (insert at head)                  | O(1)       | -          | Inserting at tail will be $O(N)$                                               |
| Removing Edge                                 | $O(N)$     | -          | We traverse on average $N/2$ nodes before finding the one to delete            |
| Adding Node                                   | $O(N)$     | -          | We have to duplicate the array that holds the pointers to all the linked lists |
| Removing Node (rebuilding the array)          | $O(N^2)$   | -          | Free adj list: $N$<br>Rebuilding array: $N$                                    |
| Removing Node (setting entry to NULL instead) | $O(N)$     | -          | Free adj list: $N$<br>Removing pointer: $1$ (const)                            |
| Edge Query                                    | $O(N)$     | -          | Accessing node: $1$ (array indexing)<br>Finding edge: $N$                      |


### Graph Operations (Adjacency Matrix)

| Function                         | Avg. Big O | W.C. Big O | Notes                                           |
| -------------------------------- | ---------- | ---------- | ----------------------------------------------- |
| Adding Edge (insert at head)     | $O(1)$     | -          | Accessing an entry in a matrix is constant work |
| Removing Edge                    | $O(1)$     | -          | Same as abv                                     |
| Adding Node                      | $O(N^2)$   | -          | Rebuilding a matrix is $N^2$ work               |
| Removing Node (rebuild matrix)   | $O(N^2)$   | -          | Same as abv                                     |
| Removing Node (clearing out row) | $O(N)$     | -          | Going thru each entry in a row: $N$             |
| Edge Query                       | $O(1)$     | -          | Same as the top 2                               |



### Extra: Graph Operations (Adjacency List) w/ lists stored in a linked list

| Function                     | Avg. Big O | W.C. Big O | Notes                                                     |
| ---------------------------- | ---------- | ---------- | --------------------------------------------------------- |
| Adding Edge (insert at head) | $O(N)$     | -          | Traverse to the pointer: $N$<br>Add edge: $1$ (const)     |
| Removing Edge                | $O(N^2)$   | -          | Traverse to pointer +  traverse to edge: $N^2$            |
| Adding Node                  | $O(1)$     | -          | We can insert the new node at the head of the linked list |
| Removing Node                | $O(N^2)$   | -          | Traverse to the node, then free the adj list              |
| Edge Query                   | $O(N^2)$   | -          | Traverse to pointer + traverse to edge: $N^2$             |


