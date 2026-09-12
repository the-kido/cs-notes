A string literal can either be created with '' or ""
- When typing something like `you're`, you'd want to use "" because the `'` would end the string literal early.
- You can also use the \ escape character to treat quotes as literal quotes and not the beginning / end of a string literel
```python
status = 'I'm doing terribly!' # This is problematic. See how the string stops at the "I"?

status = 'I\'m doing great!' # This string is full
status = "I'm doing great!" # This also works
```

Cased characters are letters (they can either be upper case or lower case)
## Concatenation 
`string + string` will combine the two strings. uhh yeah.

`string * int` will multiply the string by `int` amount

You cannot add strings to numbers because they are incompatible data types. Cast them with `str()`. Python doesn't do this implicitly unlike other languages

### Multiline strings (and comments, technically)
```python

'''
Multiline 
String
''' 

# or 

""" 
Multiline 
String
"""
```

>[!note] Multiline strings will automatically add `\n`'s for you when you go to a new line
## Operators
You have your >, < , = , etc.
`in` - Checks if a string is in another string
`len(string)` gives length of string


### Indexing
`string[start:end:skip]`
You can index with negative numbers (they start from the end of the string)

You can chain indexes
```python
string = "Hello world!"
new = string[0:9][1:5] # This is "ello"

```

# Methods

### .lower()
###.count()

### .capitalize()

### .find()
 - Returns -1 if no index is found
 - there is also .rfind() to find the index from the right

### `.lstrip()` 
- Removes any spaces from the left
- Similar to `.rstrip()` but for the right spaces
- Or just `.strip()` both sides

### `.isalnum`
- Returns true if all letters in a string are alphanumeric
- No spaces or any other characters (`.` included)