Bubble:
- Each pass bubbles the biggest number to the top
- Uses swapping
```python
L = [5,2,4,7]
end = len(L) - 1
while end != 0:
	for i in range(end):
		if L[i] > L[i+1]:
			L[i], L[i+1] = L[i+1], L[i]
	end = end - 1
```

Selection
- Find the smallest then swap the first number with the smallest
- Repeat until all is sorted
```python
def get_index_of_smallest(l: list, i: int):
	smallest_index = i # Assume the first number is the smallest
	for j in range(i + 1, len(L)): # Start checking for the next smallest *after* the first assumed number
		if L[j] < L[smallest_index]:
			smallest_index = j
	return smallest_index

def selection_sort(l: list):
	for i in range(len(l)):
		smallest_index = get_index_of_smallest(l, i)
		l[i], l[smallest_index] = l[smallest_index], l[i] 

```

Insertion sort (the weird one)
- yeah u got it
```python
def insert(L:list, i:int):
	value = L[i]
	j = i
	while j != 0 and L[j - 1] > value:
		L[j] = L[j - 1]
		j = j - 1
	
	L[j] = value

def insertion_sort(L: list):
	for i in range(len(L)):
		insert(L, i)
	
```