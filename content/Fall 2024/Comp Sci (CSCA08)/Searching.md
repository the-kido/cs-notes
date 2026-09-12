## Binary Search
- the list must be sorted already
#todo how the FRICK do you do this question

![[Pasted image 20241117101924.png]]

![[Pasted image 20241117162525.png]]
- A good question #todo 
- the ans is 6

# Code for all types of thingys
```python
# List to search
L = [1,2,3,4,5]
v = 4 # Value we want to find
```

```python
i = 0
# Their way is VERY strange but very understandable too!
# We keep looping until a suitable i is found.
while i != len(L) and L[i] != v:
	i = i + 1
# Then when we find said i, we determine what kind of result it represents
if i == len(L):
	return -1
else:
	return i
```

```python
b = 0
e = len(L) - 1
while b <= e: # While they haven't crossed
	m = (b + e) // 2 # The center
	if L[m] < v:
		b = m + 1 
	else:
		e = m - 1

if b == len(L) or l[b] != v:
	return -1
else:
	return b

```