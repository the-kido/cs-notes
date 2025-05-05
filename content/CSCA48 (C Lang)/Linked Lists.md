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

# Implementation
You will need
-  A "Node" data structure 
	- Note: When adding a field for the "next" item, it should be of type `struct Compound_Data_Type` because otherwise you'd be using the alias before it was defined (it's the last line after all)
- 3 methods: insert, search, and remove

## Common things to implement

#### Creating a new node
1. Reserve memory for the new node
	1. If there isn't enough memory, we need to return some kind of error!
2. Initialize it (often paco does this in the outside code which is... fine i guess. So much for self-contained logic)
3. Return the new node

```c
Node* create_node(/*__ data */) 
{
	Node* new_node = (Node*) calloc(1, sizeof(Node));
	if (new_node == NULL)
	{
		printf("Memory is die.");
		return NULL;
	}
	
	// new_node->data = data;
	// more initializng here
	
	return new_node;
}
```
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
- This example was quite easy as the data itself is easily searchable. Indeed, we need a way to uniquely identify each individual item in the list to effectively search it - an "id" of sorts
	- We call this a "key". Think of a SIN number for each person.
	- 

#### Inserting
There are 3 ways to insert a new item:

##### At the head (easiest)
4. Pass the pointer to the head and the new node you want to add.
5. Make it point to the head of the list
6. Update the head in `main()` (or wherever else the linked list is stored) to the new head

```c
Node *insert_at_head(Node *head, Node *new)
{
	new->next = head;
	return new;	
}
```

##### At the tail (a bit more tedious)
1. Pass the head and new node
2. Ensure the head is not null. If it is null, then the new node should be the head!
3. Traverse via a while loop through the list until you hit the node with the "next" pointer as null.
4. Make the last node point to the new node!

```c
Node* insert_at_tail(Node *head, Node *new)
{
	if (head == NULL) return new;
	
	Node* node_at = head;
	while (node_at->next != NULL)
	{
		node_at = node_at->next;
	}
	node_at->next = new;
	return head;
}
```
##### In the middle (spicy!)
1. Pass the head. new node, and the "key", data we want to match with a item.
2. Let the new node be the head if the head is null.
3. Traverse through the list until we hit the item with the "key" we want 
4. Let the new node point to the node the matched node was pointing to, and let that node point to the new node. 

```c
Node* insert_in_middle(Node *head, Node *new, __ key)
{
	if (head == NULL) return new;
	
	Node *node_at = head;
	while (node_at != NULL && node_at->data != key)
	{
		node_at = node_at->next;
	}
	
	if (node_at != NULL) 
	{
		new->next = node_at->next;
		node_at->next = new;
	}
	return head;
}
```
#### Deleting
- Traverse through the list until you find the item to delete *and* the item right before it, too.
- If the item you're deleting is the *head*, then you'll need the item after it to become the new head. This means the "deleting" function should return the head of the updated list. 

```c
Node* delete_node(Node *head, __ key)
{
	if (head->next == NULL) return NULL; // This list is now empty
	
	Node *node_before = NULL;
	Node *node_at = head;
	
	while (node_at != NULL && node_at->data != key)
	{
		node_before = node_at;
		node_at = node_at->next;
	}	
	
	if (node_at != NULL)
	{
		node_before->next = node_at->next;
		free(node_at);
	}
	
	return head;
}
```

# A full example I made for fun
It should have all the behaviors you could ever want
```c
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

typedef struct Store_Item
{
	char name[1024];
	int count;
} Produce;

typedef struct Store_Item_Node
{
	Produce produce;
	struct Store_Item_Node *next;
} Produce_Node;


Produce_Node *create_new_node()
{
    Produce_Node *new_node = NULL;
    new_node = (Produce_Node*) calloc(1, sizeof(Produce_Node));
    if (new_node == NULL)
    {
        printf("Not enough memory. Bad things awry");
        return NULL;
    }
    return new_node;
}

void get_item_name(char name[1024])
{
    fgets(name, 1024, stdin);

    if (strlen(name) == 0) return;

    // This gets rid of the new line when pressing enter
    name[strlen(name) - 1] = '\0';
}

void print_all_nodes(Produce_Node *head)
{
    if (head  == NULL)
    {
        printf("There are no items!\n");
        return;
    }
    int item = 0;
    printf("Here are all the items: \n");
    while (head != NULL)
    {
        printf("\t#%d: Name: %s; Count: %d\n", item++, head->produce.name, head->produce.count);
        head = head->next;
    }
}


void populate_node_info(Produce_Node *node)
{
    printf("1. Give a name: \n");
    
    char name[1024];
    get_item_name(name);
    while (strlen(name) == 0)
    {
        printf("Please give a valid name: \n");
        get_item_name(name);
    }

    printf("2. Give a count: \n");
    int count = 0;
    scanf("%d", &count);
    while (count <= 0)
    {
        printf("Please give a valid count: \n");
        scanf("%d", &count);
    }
    getchar(); // For the next fgets to not go crazy.

    strcpy(node->produce.name, name);
    node->produce.count = count;
    printf("Added %d %s(s) \n", count, name);
}

// We will use the in-between one
Produce_Node *add_node(Produce_Node *head, Produce_Node *new)
{
    if (head == NULL)
    {
        return new;
    }

    Produce_Node *node_before = NULL;
    Produce_Node *node_at = head;
    while (node_at != NULL && node_at->produce.count < new->produce.count)
    {
        node_before = node_at;
        node_at = node_at->next;
    }
    
    if (node_before == NULL)
    {
        new->next = head;
        return new;
    }
    else 
    {
        node_before->next = new;
        new->next = node_at;
        return head;
    }
}

Produce_Node *remove_node(Produce_Node *head, char name[1024])
{
    if (head == NULL)
    {
        return NULL;
    }

    // Consider case where head gets removed
    if (strcmp(name, head->produce.name) == 0)
    {
        Produce_Node *new_head = head->next;
        free(head);
        return new_head;
    }

    Produce_Node *node_before = head; 
    Produce_Node *node_at = head->next;
    while (node_at != NULL && strcmp(name, node_at->produce.name) != 0)
    {
        node_before = node_at;
        node_at = node_at->next;
    }

    if (node_at != NULL)
    {
        node_before->next = node_at->next;
        free(node_at);
    }
    return head;
}

int get_list_length(Produce_Node *head)
{
    int count = 0;
    while (head != NULL)
    {
        head = head->next;
        count++;
    }
    return count;
}

int main()
{
    /*
    This code will:
        1. Make a linked list, sorted by count!
        2. Let the user update, remove, and print items from the list
        3. Frees the list at the very end.
    */

	Produce_Node *head = NULL;

    int instruction = -1;

    printf("Instructions:\n\t1: Add a node\n\t2: Remove a node\n\t3: List all nodes\n\t4: Close program\n");
    do 
    {
        printf("----------\nWhat do u wanna do?\n");
        scanf("%d", &instruction);
        getchar();
        if (instruction == 1)
        {
            printf("Adding node: \n");
            Produce_Node *new_node = NULL;
            new_node = create_new_node();
            if (new_node == NULL) {
                printf("Not enough memory. Aborting");
                return 2;
            }

            populate_node_info(new_node);
            head = add_node(head, new_node);
        }   
        if (instruction == 3)
        {
            print_all_nodes(head);
        }
        
        if (instruction == 2)
        {
            printf("Specify a node to remove: \n");
            char name_to_remove[1024];
            get_item_name(name_to_remove);
            
            int length = get_list_length(head);
            head = remove_node(head, name_to_remove);
            
            if (length == 0 || length == get_list_length(head)) printf("Nothing was removed.\n");
            else printf("Removed %s.\n", name_to_remove);
        }
    }
    while (instruction != 4);

    while (head != NULL)
    {
        Produce_Node *temp = head->next;
        free(head);
        head = temp;
    }
    printf("Freed data");
    // Free data
}
```


Reversing yeayea.

The thing returns the head (i.e. the tail) of the linked list
Once we reach the tail, we return the tail.
The node we were at before has the tail pointing to it.
The node we are are shouldn't point to anything else. 