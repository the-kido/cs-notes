### 1.
```python
# Pre(n): n \in N
# Return b s.t. Post(b, n): b \in B and b iff n is prime
def prime(n):
	...
	
# Pre(n): n \in N and n >= 2 and not prime(n)
def a_factor(n):
	...
	
# Pre(n): n \in N and n >= 2
# Return a_0, ..., a_m s.t. Post(a_0, ..., a_m, n): a_0,...,a_m are prime and n = a_0 times ... times a_m
def factored(n):
	# Assume RH
	
	# Valid prime call since n \in N by Pre
	if prime(n):
		return (n,)
		# Valid return since n is prime and n = n
	else: # (C): not prime(n) 
		
		# Valid call since n \in N and n >= 2 and not prime(n)
		d = a_factor(n)
		# By post we have 2 <= d < n and d divides n, where n//d = n/d
		
		# Valid call alr shown
		as = factored(d)
		# By RH, we have a_0, ..., a_m prime numbers and d = a_0 x ... x a_m 
		
		# Valid n // d since n \in N by Post and d
		# Valid call alr shown
		bs = factored(n // d)
		# By RH, we have a_0, ..., a_m prime numbers and n//d = n/d = b_0 x ... x b_l 
		
		# Valid + since as, bs are both tuples 
		return as + bs
		# Valid return since n = n * n //d = (a_0 x ... x a_m) x (b_0 x ... x b_l) of which all are prime
		# and as + bs = (a_0, ..., a_m, b_0, ...., b_l)
```

### 2.
Remember `n = 2(n // 2) + n % 2` but swap `2` with any natural number

```python
# Pre (n, m): n, m \in N and n < 2**m
# Return b s.t. Post(b, n, m): b is a tuple of length m and n = sum_i=0^m-1 b[i]*2^i
def rep(n, m):
	# let size(n, m) = m \in N by Pre so valid measure
	
	# Valid if and == since m, 0 \in 0 and == returns a boolean
	if m == 0:
		return ()
		# Valid return since b = () is a tuple of size m = 0, and n < 2**0 = 1, so n = 0. Then sum_.... = 0 = n
	else: # (C) m >= 1 by Pre and m != 0
		
		# Valid % since n, 2 \in N.
		# Valid // since n, 2 \in N and 2 != 0. Valid - since m, 1 \in N.
		# Valid rep call (already given)
		# By RH, returns tuple a_1,...,a_{m-1} of size m - 1 where n//2 = sum... stuff
		# Valid + since (n % 2,) is a tuple, and rep returns a tuple by RH
		# Valid recursively (given)
		return (n % 2,) + rep(n//2, m - 1)
		# Valid return. The tuples added would be size 1 + (m-1) = m
		# Also n = (n % 2) + a_12^1 + a_2 2^2 + ... + a_{m-1} 2^m
		# = n % 2 + 2(a_1 2^0 + a_2 2^1 + .... + a_{m-1} 2^{m-1})
		# = n - 2(n // 2 - n // 2)
		# = n
```
yay

### 3.
We prove these algorithms are indeed correct.
```python
def V():
	# Assume RH
	
	# Valid maybe calls. There is no precondition for them. They return bools so valid if, elif checks, too.
	if maybe():
		return 3
		# Valid return since 1 witnesses 3 = 3**k 
	elif maybe():
		# Valid V() call.
		# By RH, V() returns an r where r = 3**k for some k \in Z.
		# Valid ** since r = 3 ** k > 0 for any k \in R and 2 \in R.
		return V() ** 2
		# Valid return since the V() returns an r = 3**l for some l, and (3**l)**2 = 3^2l. So 2l witnesses V() ** 2 = 3**k and 2l \in Z
		
	else:
		# Valid V() call. By RH, V() = 3**l for some l \in Z
		# Valid / since 3, V() \in R and 3 \in R != 0
		return V() / 3
		# Valid return since V()/3 = 3**(l-1) and l-1 \in Z so l-1 witnesses the Post
```


### 4.
We cannot validate the recursive structure here (again)
But we can still show the code does the right thing
```python

def E():
	# Valid maybe() calls. By post they return bools, so valid if, elif calls too.
	if maybe():
		return 'x'
		# Valid return since it's a non-empty string, the first char is x, the last is x, there are 1 occurences of vars, and 0 of operators, which is one less
	elif maybe():
		# same
		return 'y'
	elif maybe():
		# same
		return 'z'
	elif maybe():
		# Valid + concatenation since E(), '*' are both strings
		return E() + "*" + E()
		# We have Post(s_1) and Post(s_2) by RH
		# Where s_1 is the return for the first E() and s_2 is the return for the second.
		# s_1 starts with a var. s_2 ends with a var, so E() +'*' + E() starts and ends with a var
		# s_1 has 'x' vars and 'x-1' ops. s_2 has 'y' vars and 'y-1' ops.
		# so s_1 + '*' + s_2 has (x + y - 1) ops and (x + y) vars, as required 
	else:
		return E() + '-' + E()
		# same as above
```

