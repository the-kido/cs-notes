> Immutability = thingy cannot change
> again i swear i've typed this at least 4 times at this point

strings, ints, floats, bools, are all immutable objects (cuz you cannot change their value, only set their value to new values)
Lists *are* mutable in Python. Wacky isn't it?

always do `string = ....` to "change" a string (you're not really changing it; you're setting it to another value)


## Aliasing
- When two variables refer to the same object in memory
```python
list1 = [1,2,3]
list2 = list1
list2[1] = 99

print(list1[1]) # Will now be 99, too!
```

## Immutability
Changing a list passed as a parameter will change the list outside the function, too. This is because lists are mutable! Most data types are not mutable and are "copied" into the function instead.