5.4: The degree is the # of neighbours. (this is for *average case*)
For list: We go to the node i's adj list and traverse through, in the worst case scenario, $N-1$ nodes, while summing. So O(N)
For adj matrix: You also have to iterate but through all $N$ entries in the row. So also O(N)


5.5. `in-degree(i))` is the degree of nodes pointing *into* a node $i$
For adj matrix, this simply as you summing `adj_mat[j][i]` where $0 \leq j < N-1$ (increment in for loop). 
- To be clear, i mean we're summing the *column* that $i$ represents. The row is variable; the column (for $i$) is constant. 
- This is simply $O(N)$

For adj list, you have to go thru EACH list, and for EACH traverse until you hit $i$ and increment. That will be $O(N^2)$


5.6
```
for i in N
	for j in N
		for -1 <= x-dir < 1		
			for -1 <= y-dir < 1
				attemp to move x,y dir. otherwise don't 
				if (mouse at cheese) we're done!
```
Wow that sucks 




5.8: This will suck.
Is this kinda right? I shoulda used a while loop instead.
```c

Node *temp_before;
Node *temp;

for (int i = 0; i < N; i++)
{ 
	for (int j = 0; j < N; j++)
	{
		if (temp->left == NULL) break;
		temp = temp->left;
	}
	printf(temp.data);
	print(temp_before.data)
	temp = temp_before->right;
}

```

5.9: Basically that one mars exercise we did

5.10 A3 had us implement this. 





![[Pasted image 20250420183216.png]]

1. values
	1. 22
2. values
	1. 289
3. values
	1. 3
4. ptrs
	1. &2
5. ptrs
	1. 2211 (size 5 array)
6. ptrs (added by line 12)
	1. 0
7. return

 
 line 12 is WACK. Let's assume it doesn't crash the program.
 line 15 would do something far away. could defo crash the program tho ngl

Things I learned
1. replacing a bit of memory w/ something you created does not make you own it, but you can still "change" it and access it so long as you don't own the data. 
2. Line 12 *can* work but sometimes a program owns that data and you'll be in for a treat when you get a segfault!



```c
void modify (Object* head, double position[2], double Colour[3], int depth, int type)
{
	if (head == NULL) return;
	head->position[0] = position[0];
	etc.
	head->color[0] = Colour[0]
	etc.
	head->depth = fiwahifwhipafhipwa
	u get the idea
}
```


```c
Object* removeDups(Object* head)
{
	if (head == NULL) return head; 
	
	Object *traverse = head;
	Object *compare = head;

	while (compare->next != NULL)
	{
		while (traverse->next != NULL)
		{
			if (compare != traverse && checkForDupe(compare, traverse) == 1)
		}
	}
	
	
}
```

5. If all N items are not dupes, we'd have to cycle through N nodes to check, as well as N nodes to compare the node we're checking with. 
6. Assuming these lists are not sorted, we'd have to compare all N songs with all N songs in the other list. so n^2?
7. By implementing a BST search, we can find a item is in a BST in log(2)
	1. oops sorry i said avg / best case
	2. For worst case, the two BSTs are just linked lists. so the same thing.
	3. #todo READ THE QUESITON CAREFULLY!
8. wack



15
1. C = not exclusive but related
2. Go through each medicine that can be taken with A
3. Compare it with every possible substitute of B
4. If the medicine matches a substitute, we found our C

As for complexity, assuming all but 1 drug is able to be taken with A and substitutes B, you would need to go through N-1 drugs with N comparisons until finding the right one. That gives $O(N^2)$

16.
Going through all N possible drugs takes N steps. For the ones that *are* non-exclusive, we can throw them into the matrix and see if they are a substitute of B at a constant O(1) speed.
Ans: O(N)

17
A tail recursive function, with a compiler that can notice the pattern, can optimize memory and overhead of dealing with the function call stack. It occurs if you return just the recursive call with no other operations done around it.