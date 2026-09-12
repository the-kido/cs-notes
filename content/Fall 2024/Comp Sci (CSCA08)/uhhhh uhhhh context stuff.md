random story time yay

What to do with a context with no next words?
- Store an empty string (BAD)
- Store the first context (Not random) (BAD)
- Not store the last context. (Good)
	- Instead choose a randomly selected word. 

the data type they're using is a `dict<tuple<str>,List<str>>`


#### randomization
```python
import random
random.choice('any object thats a non-empty str, tuple, list(?)') # This returns a character !!
random.choice(['a', 'b', 'c']) #This returns 1 element of the iterable
random.choice(list(a_dictionary.keys())) # Returns one key of the dictionary. Make sure you use list() cuz .keys() does NOT return a "subscriptable" type!!!
```


```python
training_file, context_length, num_words

import random
random_number = random.choice("I love pani puri")

words = training_file.read().split()

contexts = {}
for i in range(len(words) - 1):
	key = (words[i], words[i + 1])
	value = []
	for j in range(len(words) - 1):
		if words[i + 1] = words[j]:
			value.append(words[j])
	words[key] = value

# random story time
current_context = words[random_number]
story = current_context
for i in range(num_words - 1):
	if (contexts.get(current_context) == None):
		current_context = contexts[random.choice('I love dosa')]
	else:
		current_context = contexts[current_context]
	story += current_context

```

there's also `list()` and `tuple()` 