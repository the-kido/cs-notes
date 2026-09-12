An array of keys and values. Ordered AND Unordered!!1. Mutable. 
Mostly unordered though. 

Keys must be immutable
```python
dict = {} # Empty dictionary
dict = {
	'Red':1,
	'Blue':2,
	'Yellow':3,
	12:'Teal'
}
dict['Red'] # This would be '1'
dict[12] # This would be 'Teal'
```

### Adding pairs to a dictionary
```python
dict = {'A1':100}
dict['A4'] = 100 # Adds key 'A4' and value 100
```

Iterating over keys
```python
dict = {
	'Red':1,
	'Blue':2,
	'Yellow':3,
	12:'Teal'
}

for key in dict:
	print(key) # Prints red, blue, yellow, and 12
```

Typed dictionaries
```python
from typing import Dict?
Idk i didnt fill this out lol
```


## Methods
#### Using `in`
- Checks if the value is a key in the dictionary
```python
dict = {1:"yes", 2:"no"}

1 in dict # True, since 1 is a key in the dictionary
```

- `.keys()`
	- Returns all keys of the dictionary as an enumerable
- `.values()`
	- Returns all values of the dictionary as an enumerable
- `.get(key)`
	- Gets the value of the key safer than doing `dict[key]`


(All the methods are: 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values')
## Functions
- `len(dictionary)`
	- Gives the # of pairs

##### Exercise: Inverting dictionaries
- Making the keys --> values, and values --> key
- This means if a key goes to many values, then that value must go to many keys (i.e. a list of keys)
- This assumes all the dictionaries' values are immutable (since they must become keys)
```python

dict = {...} # Stuff

inverted = {}

for key in dict:
	value = dict[key]
	if value not in inverted:
		inverted[value] = []
	
	inverted[value].append(key)
```

##### Edge-case: Many entries for the same key
```python
dict = {1: 10, 1: 20, 1: 30}
# This will simply take the last assignment of the key (so 1: 30)
```


###### Personal notes on dictionaries for TT2:
- get(key) safely returns the key
- If i have an empty dictionary `test` and do `test["key"] = 10`, this will *not* throw an error and instead is the only way to actually add that new key into the dictionary!