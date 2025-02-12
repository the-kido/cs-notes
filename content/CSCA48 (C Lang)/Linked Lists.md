>All items point to each other in a chain. One item is the *head*, which points to an item, which points to an item, which points to an item... 
>...eventually you get to the *tail* with no pointer to the next item inside. Phew, it's over.

![[Pasted image 20240721174246.png|500]]

It implements the list ADT by implementing:
- Creation
- Searching
- Adding (via insertion)
- Removing
## Searching
You will always have to traverse through the pointer maze until you reach the item you are looking for. No real way around it.
## Adding
- For singular items, you can just add it to the head! Make the item point to the head, and now the new item *is* the head
- You can also add it at the tail:
	- Get the last item, set its pointer to the new item, and that's it.
- If you wanna be a weirdo, then of course you can add an item in between two items
	- Traverse to the item that will be *before* this new item
	- Point the item to the new item
	- Point the new item to what the old item was pointing to before

## Implementation
You will need
-  A "Node" data structure 
	- Note: When adding a field for the "next" item, it should be of type `struct Compound_Data_Type` because otherwise you'd be using the alias before it was defined (it's the last line after all)
- 3 methods: insert, search, and remove

### Common things to implement
#### Traversing a Linked List
Here is an example of freeing a list. The common thing to consider is that you will need a `Node*` to cache what node you're traversing, and if you're ever gonna manipulate `traversed` (we did when freeing it) then you'll need another temporary value to hold the pointer to the next item in the linked list 
```c
Node* traversed = head;
while (traversed != NULL)
{
	Node* temp = traversed->next;
	free(traversed);
	traversed = temp;
}
```

#### Searching
Similar to the above, you'll have to traverse until you find the node you want
```c
Node* get_node_with_data(Node* head, int key) 
{
	Node* traversed = head;
	while (traversed != NULL)
	{
		if (traversed->data == key) return traversed;
		traversed = traversed->next;
	}
	return NULL;
}
```
#### Deleting
- Traverse through the list until you find the item to delete *and* the item right before it, too.
- If the item you're deleting is the *head*, then you'll need the item after it to become the new head. This means the "deleting" function should return the head of the updated list. 