You can use slice notation like with strings `[::]`

For any `list`, you can use 
len(`list`)
- Gives the size of the list
min(`list`)
- Gets the smallest value in the list
sum(`list`)
- Returns the sum of all numbers in the list

You can iterate over every item in a list using for loops (just like with characters and strings!)

#### Ways to mutate / modify lists
- List += and list = list + ....
- List methods
- idk if this is important but she is mentioning this and it could be important 
## Methods
- append(`object`)
	- adds an item to the list
- extend(`iterable`)
	- merges the iterable with the list
- pop(`[i]`)  
   Remove the item at the given position in the list, and return it. If no index is specified, pop()  
   removes and returns the last item in the list.
- remove(`object`)
	- Finds an item and removes the first instance of it
	- If it can't find one, it'll throw a valueerror
- sort()
	- sorts by an order
- insert(`index`, `item`)
	- Inserts an item at that index. Everything else gets shoved
#### Duplicating lists
- You can duplicate lists using `lst2 = lst[:]` 
	- You can also use a for loop and populate the list
	- You can also use .extend() to extend the empty list by the list you want to copy
	- You can also use the + operator like `lst2 = lst1 + []` 
	- She says not to use the `copy()` method which is infinitely better.

## Type-suggestions with lists
```python
from typing import List

def something(words: List[str]) -> int
	return len(words) #returns the number of words. wowza
```
You use the square brackets for the type. Kinda like `<>` in.... every other language. 
You have to use an Uppercase `List[]` instead of `list`
It's in a special module, so that is why it is uppercase List.
Lowercase list is for a list of *any* type, or even mismatch of types.


## `in`
Like with strings, you can use `in` to find if an item or items exist within a list.
`in` will find a value that *equals* a term in the list. This means if you do 
```python
fancy = [40, 50]

>>> 40 in fancy # This is true
>>> 40.0 in fancy # This is also true, since 40.0 == 40
>>> '40' in fancy # This is false, since you cannot compare strings with integers
```

## Comparison
Using `==` works just fine, so long as it's the same items in the same order. 

## Adding lists
```python
my_list = [1,2,3]
my_list = my_list + [4] # Creates a new list with the new element
my_list += [5] #  This also works. It better implies you are attemping to modify the original list. (instead of doing `other_list = my_list + [4]` or something)
```
This is different from .extend(), which mutates the original list. 

Refer to [[The += nuance]]

## List of lists
```python
nested_list = [['a', 'b'],[1,2]]
print(nested_list[0][0]) # prints 'a' 
```
Note that you can edit lists in lists and it'll be weird
```python
list = [['a', 'b']]
sub_list = [1,2]
list.append(sub_list)
# List is now [['a', 'b'],[1,2]]
sub_list.extend([[3,4]])
# List is now [['a', 'b'],[1,2,[3,4]]]

sub_list = [1,2,3,4] # This doesn not change sub_list since the old list's memory address has been overrided for this new list [1,2,3,4]

```