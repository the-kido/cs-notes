With Strings

```python
word = "abcde"
for word in words:
	print(word)

# This will print every letter in its own line automagically
```

An <span class="definition">Accumulator</span> is a variable that accumulates over a for loop
In the below example, `num_vowels` is an accumulator
```python
sentence = "I love to eat spaghetti!1"
num_vowels = 0

for letter in sentence:
	if letter in "aeiouAEIOU":
		num_vowels += 1
```


### range(`start`, `[end,[step]]`)
- Returns an inerrable array of integers 

