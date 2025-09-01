# 1. `vector<T>`
- Your list! But closer to a *dynamic array*
- `push_back` is your $O(1)$ `insert` method (amortised -- can be $O(n)$)
- `pop_back` is just $O(1)$  (removes last item)
- Inserting in the middle (`insert`), and linear searching is $O(n)$ (unless sorted, then use bin search ofc)

### Using `std::find()`
- Since it requires a pointer to the first and last item *plus* the item you want to find (3 args total) you can use `vector.begin()` and `vector.end()` to return "iterators" (basically pointers to the element in the container). 
	- Note, `vector.end()` returns *one past the last element*

## `.size()` gives you the size

# 2. `sort` 
- Does quick sort for you!

# 3. `unordered_set<int>`
- A hashmap for c++!
```c

vector<int>

unordered_set<int> seen;

for (int num : nums) {
	if (seen.count(num)) {
		return true;
	}
	seen.insert(num); 
}
return false;
```


## `.count`
- This is $O(1)$ by nature of hashing. Lets you count the # of instances of an item fast.
## `.insert` 
- Your `.add()` for hashmaps
- Still $O(1)$

## `.find` I think returns the iterator of the item


# 4. `unordered_map<int, int>`
- Stores key value pairs as a hashmap
- Can 


### `.insert({key, val})` vs.  `map[key] = val`
- `.insert` will *not* override contents. It will simply "attempt" to add the pair