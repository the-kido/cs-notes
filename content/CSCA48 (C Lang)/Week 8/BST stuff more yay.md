# deleting

There are 3 cases
1. The item to be deleted is a leaf node (no children).
	1. Just find the node and keep track of it's parent
	2. Remove the pointer to the child
	3. Free the child
2. The item deleted has only 1 child
	1. The parent links to the child of the deleted node.
3. The item deleted has two children.
	1. Find the node we wanna delete
	2. Find the successor of the node 
	3. The node we were going to delete becomes the successor (copy the data from the successor into the deleted)
	4. Delete the successor node (either case a or b)