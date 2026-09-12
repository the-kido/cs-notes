Review of week 1 happening

To confirm valid call, we check if precondition is true! Now we know that we "get *something* back"
How do we know that what we get back makes sense? How do we know that Post(t, s, n) is always true, when n is a valid argument?
- e.g. how do we know 17 works? Well because 14 does, and we're just adding 3 to it (that's the "inductive thinking")
- We know it stops cuz it gets smaller (since the structure is valid)

### The algo
In order to justify that a ***recursive function returns correct values***
- Assume RH (recursion hypothesis)
	- That means, every valid call on a smaller input satisfies its post condition (i.e. the Post is true) 
	- This goes right after you define `size` as you do when showing valid rec. structure
	- This just makes it *explicit* we are assuming this for each recursion call.
	- By assuming RH, after every call, you *have* Post($\bar a, \bar b$) holding (where n is the arg and $size(b) < size(n)$... smaller!)
- Show that the *return is valid*
	- "`# correct return value because....`"
- Validity of non-recursive calls!
	- Calls include built-in things (like addition, `=`, `==` and comparisons, etc.)
		- For instance, in Python you can compare any two objects. How do we show the call is valid? How do we show we're, idk, comparing two numbers? Think `n == 12`
		- Another instance: `n - 3` only makes sense if `n` is a number (we can grab that by `Pre(n)` if it gives that)
		- `(a, b) = change(...)` is valid because change returns `t,s` (and that's a tuple!)
		- `a + 1` is valid as `a` is a number by Post of recursive call!

#### (Lecture 2 of week 2)
- "Tracing the proof" is just like your regular trace
	- The justifications are given via # hashtags for the return value


- He didn't define `m` since it's part of the informal $\exists a_o, \dots, a_m$ "object" definition that represents a sequence of numbers.  
- We create helpers when we need to do a task that's irrelevant to what you're solving for (e.g. if trying to find all prime numbers, giving 1 possible prime number is a separate task)
- "for all $\forall$ something, exists something" is kind of like functions. It takes "anything", and returns "something"
- Sequence = Tuple
- $\text{Pre}_\text{prime}$ would be the right notation for several functions

# Readings
- In order to be convinced that the recursive function is correct, we only need to be sure that any occurring recursive call returns what we expect.
- To check this, we show that Post holds with whatever we are returning. Usually our RH helps, too!
	- For every recursive call, you can assert `# Post(a, b, n - 3) holds (by RH)` so use that
- Finally, we justify the non-recursive calls the function makes are valid as well. Things we check for include:
	- `==`, `=`, `+`, `-`, etc. operators
	- `if, elif` conditional operators
	- other `func(...)` calls
	- This lets us use the post conditions of the operators

1. For every recursive call, must be valid
2. For every recursive call, must shrink
3. For all returns, must be valid
4. For all calls, must be valid

![[Turning an expression into a recursive function.png]]


### me and amals algorithm

```python
func(n):
	# valid measure
	# assume RH (every good recursive call satisfies its post)
	# for every call, show it's legal (pre holds; gives post of call)
	# If it's recursive, show it's recursive (size thing)
	# for every return, show the returned value is valid (i.e Post holds) (after the call, usually to invoke RH)
```


# Questions
## Exercise 3
### Question 1
>[!caution] Notes
>1. For returns, specify "correct return value" then justify why.
>2. If helper functions, specify which pre/post you are using!
>3. Instead of saying "valid `a_factor` call" I can just state "$\text{Pre}_\text{a\_factor}(n) \because \dots$"
>4. If "n is divisible by d", that means that `n//d = n/d`
>5. They make "notes" (i.e. statements about returned variables instead of invoking Post all the time) with $\therefore$ but frick that I'm just gonna write `Note:`
>6. After every valid call, we can assume the return is valid by RH. You can use that to make statements *directly after the calls* rather than later just so you can have more information!
>7. "correct return value" text goes *after* the return
```python
def factored(n):
	# Assume RH
	
	# valid call and if b/c n \in N by Pre_prime and prime(n) is a boolean by Post_prime 
	# The way the answer phrased it: Pre_prime(n) b/c n \in N (by Pre), therefore also valid if b/c prime produces boolean
	if prime(n):
		# "correct return value"
		return (n,)
		# valid return as n is prime (by condition) so n has no other factors than itself. So, (n,) is a sequence of primes where n = n (its own product)
	else: # (C)
		# Pre_a_factor(n) b/c n \in N >= 2 by Pre and not prime by (C). 
		d = a_factor(n)
		# Note: d \in N and d >= 2 and d < n and d divides n (means n//d = n/d)
		
		as = factored(d)
		# By RH, as = (a_0, ..., a_m) where a_0 * ... * a_m = d
		
		# Valid // as d > 0
		bs = factored(n // d)
		# By RH, bs = (b_0, ..., b_l) where a_0 * ... * a_m = d
		
		# "correct return value"
		
		# valid + as as, bs are sequences of prime numbers by Post 
		return as + bs
		# valid return as d * (n/d) = n and all factors of d, n/d are prime.
		# They also showed n = d * n /d = a_0 * ... * a_m * b_o * ... * b_l but idk if that's rlly necessary tbh
```



### Question 2
>[!caution] Notes
>For sum questions, it's always helpful to *write out the sum*
>The Quotient-Remainder decomposition of an integer is as follows:
>`n = 2(n // 2) + n % 2` but replace that `2` with any non-zero natural number

```python
def rep(n, m):
	# let size....
	# Assume RH
	
	# valid == and if since m \in N by Pre and == returns a boolean
	if m == 0:
		return ()
		# valid return as m == 0 (by condition) and n < 1 <= 0.
		# and () is of size m = 0 and n = sum(..) = 0*2^0 = 0 
	else: # (C) m >= 1
		
		return (n % 2,) + rep(n // 2, m − 1)
		# correct return value
		
		# By RH, rep(n // 2, m - 1) gives a tuple "c" (a_0, ..., a_m-1) of size m - 1 where n//2 = sum^m-2_i=0c[i]*2^i
		# b = (n % 2, a_0, ..., a_m,). note size of b is m since m-1+1 = m
		# then sum_i=0^m-1 b[i]*2^i = b[0]2^0 + b[1]2^1 + ... b[m-1]2^m-1
		# = n % 2 + 2(b[1])2^0 + ... + b[m-1]2^m-2)
		# = n % 2 + 2(c[0]2^0 + ... + c[m-2]2^m-2)
		# = n % 2 + 2(n // 2)
		# = n
```

### Question 3
>[!caution] Note
>1. A "Witness" is just an instance that satisfies an existentially quantified statement

```python
def v():
	# Assume RH
	
	# Valid if as maybe() \in B by Post_maybe. Valid maybe call b/c no args
	if maybe():
		return 3
		# correct return value
		# Choose k = 1. Then 3 = 3 ** 1
	 # valid elif for same reason as if
	 elif maybe():
		 # valid ** call as V() is a valid call and a number by Post (RH)
		 return V() ** 2
		 # correct return value
		 # let a = V(). Then a = 3 ** l for some l \in Z.
		 # then V() ** 2 = (3 ** k) ** 2 = 3^2l
		 # choose k = 2l \in Z as l \in Z
		 # then V() ** 2 = 3**k
	 else:
		 return V() / 3 # (exact division... no rounding)
		 # let l witness V() = 3^l
		 # then V() / 3 = (3^l/3) = 3^l-1
		 # Correct return value b/c l - 1 \in Z and V()/3 = 3^l-1
		 
```


### Question 4
```python
def E():
	# Assume RH
	# By RH, every E() call returns a string whose first and last char is x,y or z and # of x,y, or z's = # of *'s or -'s - 1
	
	# all maybe() calls are valid as it has no args. Also all if, elifs are valid b/c call gives a boolean by Post_maybe
	if maybe():
		return 'x'
		# correct return value as the first (and last) char is the x variable, there are 0 -'s or *'s and 1 x,y, or z's
	elif maybe():
		return 'y'
		# Similar reason to abv but with 'y' as the variable
	elif maybe():
		return 'z'
		# again
	elif maybe():
		# valid string concat. because E() is a string by Post and '*' is a string
		return E() + '*' + E()
		# Let a be the first E() call and b be the second E() call. By RH, we have Post(a) and POst(b)
		# Then by RH, a has n occurances of variables and n-1 occurances of operators.
		# similar for b: m occurances of variables and m-1 occurances of operators
		# a = 'l...p' and b = 'q...r' where l,p,q,r are any of x,y,z 
		# then E() + '*' + E() = 'l...p*q...r' which starts/ends with x,y,z!
		# Also (n-1) + 1 + (m-1) = n + m - 1 which is 1 less than n + m
		
		# correct return value
	else:
		return E() + '-' + E()
		# Therefore Post(a) and Post(b) by RH where a, b are for the discrete callsuu
		
		# correct return value
		# Similar reason to above, except using the - operator instead of * 
```

## Exercise 4
### Question 1
```python
def g(s):
	# let size(s) = len(s). Valid measure since len(s) is natural and s is a string by Pre
	# Assume RH
	
	# Valid == because s is a string by Pre and '' is a string. 
	# Valid if because == makes a boolean
	if s == '':
		return True
		# correct return value b/c '' ends with 0 b's
	else: # (C) s is non-empty
		# valid slicing because s is a string by Pre and and len(s) >= 1 by (C)
		# valid call b/c s[:-1] is a string with all but the last char (by (C)), and because it's a substring of s which only contains a's and b's (again by Pre)
		# Valid recursively b/c size(s[:-1]) = len(s[:-1]) = len(s) - 1 < len(s) = size(s)
		c = g(s[:-1])
		# by RH we have Post(s[:-1])
		
		# valid == and if b/c s[-1] is a valid string by (C) and 'a' is a string. Also == produces a boolean
		if s[-1] == 'a':
			
			return True
			# correct return value b/c True \in B and s ends with an 'a', meaning there are 0 'b's at the end, which is even. 
		else: # (D) s ends with a 'b'
			
			# valid not since c is a boolean by RH
			return not c
			# correct return value
			# by RH, we have a boolean c iff s[:-1] ends with an even number of b's 
			# if c, then s[:-1] ends with an even number of b's, say 'n', b's. then by (D), s ends with n + 1 b's, which is odd.
				# therefore False = not c \in B is returned
			# if not c, then s[:-1] ends with an odd, say 'n', number of b's. By (d), s ends with n + 1 b's, which is even.
				# therefore True = not c is returend
```
### Question 2
```python
def countless(x, L):
	
	def helper(b, e):
		# let size(b, e) = e - b (in that the size of the array must decrease!)
		# Assume RH (helper calls return the # of elements in L[b:e] less than x)
		
		# valid +, == calls as b \in N by Pre and so b + 1 \in N, matching e \in N
		# valid if since == produces boolean
		if e == b + 1: # (C)
			
			# valid indexing since L is a list (by countless Pre) and b \in N by Pre
			# valid < since L[b], x are a comparable values by Pre_countless 
			# valid if since < produces a boolean
			if L[b] < x: # (D)
				return 1
				# correct return value b/c L[b:e] only has 1 element by (C) and that one element is less than x (D)
				# 1 \in N
		else: # (E) e != b + 1 => e > b + 1
			# valid +, *, /// since b,e \in N by Pre		
			c = (2 * b + e + 2) // 3
			
			# valid calls b/c b,e \in N by Pre anddd
			# algebra time
			# (i did it below. It's pretty obvious. I will just refer to it with (*) and (**))
			# therefore 0 <= b < c < e <= len(L) by Pre
			# Valid recursively because...
			# size(b,c) = c - b < e < b = size(b, e)
			# and 
			# size(c, e) = e - c < e - b = size(b, e) 
			
			# valid + call since by Post, helper produces natural numbers. 
						
			return helper(b,c) + helper(c,e)
			# We have Post(c_1, b, c) and Post(c_2, c, e) for the two recursive calls by RH. Since L = L[b:c] + L[c:e], c_1, c_2 counts the comparables less than x for both halves, the sum would be the counts of both halves.
			# Also c_1, c_2 \in N by Post so c_1 + c_2 \in N too.
	# valid call since 0 <= 0 < len(L) <= len(L) since L is non-empty by Pre
	return helper(0, len(L))
	# correct return value b/c helper returns a natural number and the number is all elements of L = L[0:len(L)] less than X
	
		
```

and this was the very rough math I had to do
$$c = \frac{2 * b + e + 2}{3}$$
$$c = \frac{2 * (b + 1) + e }{3}$$
$$3c = 2 * (b + 1) + e < 2e + e < 3e$$
c < e we have now, yay!

$$c = \frac{2 * (b + 1) + e }{3}>$$

