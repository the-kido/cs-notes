We are proving that algorithms are correct. 

### 1.
Showing it ENDS with an even number of b's

```python
# Pre(s): s is a string with a's and b's
# Return c s.t. c \in B and c iff s ends with an even number of bs
def g(s):
	# Let size(s) = len(s) \in N therefore valid measure
	# Assume RH
	
	# Valid == and if since s is a string by Pre, '' is a string, and == returns bool
	if s == '':
		return True
		# Valid return since s has 0 b's (which is even)
	else: # (C1): s is non-empty (by case and Pre)
		# Valid slice since -1 is a valid index (s has a last character by (C1)) and s is a string
		# Valid g call since sliced string is a string
		# Valid recursively since size(s[:-1]) = len(s[:-1]) = len(s) - 1 < len(s) = size(s)
		c = g(s[:-1])
		# By RH, c iff s[:-1] ends with an even number of 'b's
		
		# Valid index since s is a string and non-empty
		# Valid == comparing two strings. Valid if since == returns a boolean
		if s[-1] == 'a':
			return True
			# Correct return since if s ends with 'a', it ends with 0 b's, which is  even 
		else:
			return not c
			# Correct return since s ends with one 'b', and
			# Case: c = true
				# Then s[:-1] ends in an even number of 'b's, so s must have one more b, making an odd amount
			# Case: c = false
				# Then s[:-1] ends in an odd number of b's, so s should be an even number
			# Therefore c <-> even number of 'b's
```

### 2.
```python
# Pre(x, L): x is a value, and L is a non-empty list of values
# Post: return c where c \in N and c = number of elements in L smaller than x
def countless(x, L):
	# Pre(b, e): b, e \in N and 0 <= b < e <= len(L)
	# Return c where c = number of elements in L[b:e] smaller than x
	def helper(b, e):
		# Let size(b, e) = e - b. e - b \in N since e > b by Pre. therefore valid measure
		# Assume RH
		
		# Valid + since b, 1 \in N and valid if since valid == comparing two nums and returning bool
		if e == b + 1:
			# This case means L[b, e] has only one element
		
			# Valid index since 0 <= b < len(L) and L is a list.
			# Valid < since L[b] by comparable stuff in Pre
			if L[b] < x: 
				return 1
				# Valid return since L[b, e] has only 1 element, and it's less than x
			else:
				return 0
				# Same reason as above, but > x
		else:
			# Valid +, * // since b, e \in N and the operations all return N's
			c = (2 * b + e + 2) // 3
			
			# Valid helper call b/c 0 <= b < c <= len(L) and 0 <= c < e <= len(L)
			# Valid recursive calls because
			# size(b, c) = c - b = .... i'll do this below
			return helper(b, c) + helper(c, e)
	
	
	# Valid len since L is a list by Pre
	# Valid helper call since 0 <= 0 < len(L) <= len(L)
	return helper(0, len(L))
	# Valid return since by Post_helper, it returns the number of elements in L[0, len(L)] smaller than x, and L[0, len(L)] = L
```

hfuwahfguoahguoahguohuaowgawuh
gonna give up. gonna let you down
#todo if i have time i can try this again ?


Oh that was the last example. Sweet