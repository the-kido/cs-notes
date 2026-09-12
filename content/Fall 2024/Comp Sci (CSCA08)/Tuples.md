Immutable!!

### Making 1-element tuples
A comma after a value signifies you want to make a 1-element tuple
```python
a_math_expression = (1)
a_tuple = (1,)
a_concatenated_tuple = a_tuple + (2,3,4,5,8)[:-1] # Will be (1,2,3,4,5)
```

## Methods
- `.index(object)`
	- Gives the index of the first instance of an object in a tuple

You can do the slicing thing like with lists and strings. No methods that manipulate the tuple tho. (so no `reverse` method)

### Variable unpacking
Too less / many values will throw an error 
```python
a, b = ['a', 'b']
# a gets 'a' and b gets 'b'

a, b = ('a', 'b')

# A more practical example
person = ('john','doe', 1234567890)
first, last, number = person
```

Similarly to unpacking, you can return many variables with commas
```python
return 10, 20 30
# This would be (10, 20, 30) as a tuple
```
## Id stuff
```python
coordinates = (10, 20, 30)
id (coordinates) == id((10, 20, 30)) # False
```

Python may not optimize memory to combine the two tuples like it would some integer