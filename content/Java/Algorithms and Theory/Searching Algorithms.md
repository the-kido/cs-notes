# Types of search algorithms

## Linear search
- Iterating though every item. If the item is valid, return that item
- `O(n) complexity`
```java
for (int i = 0; i < items.length; i++) {
}
```
## Binary search
* Starting in the center and splitting depending on if the item is on the left or right
* Only works if the list is ordered
* The index is $\frac{max + min}{2}$
* Useful for finding the index of a certain value
* `O(logn) complexity`
at i
```java
// the function returns the index of the item
int mid;
int target;
int min = 0;
int[] array;
while (min <= max) {
	if array[mid] == target return mid;
	if target > arr[mid]
		min = mid + 1;
		mid = max + min / 2
	if target < arr[mid]
		min = mid - 1;
		mid = max + min / 2
}
return -1;
```

# Worst case 
The worst case is that the item isn't even in the array.