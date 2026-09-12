Validity = checking for infinitely chains of recursion or errors.
Correctness = showing, given Pre, that Post holds
- Means all calls need to be legal as well iirc


Okay time for *validity* (recursive structure)
- If bad structure, show a case where it fails
### 1.
Looks good
```python
def algo(n):
	# Let size(n) = n
	# Valid measure since size(n) \in N by pre
	if n == 2: return 6
	elif n == 3: return 9
	elif n == 4: return 12
	else: # (C): n >= 5 since n \in N >= 2 by pre and n != 2, 3, 4
		# Valid call since n >= 5 => n - 3 >= 2, and n >= 5 by (C)
		# since n \in N and n - 3 >= 0, n - 3 \in N
		a = algo(n - 2)
		# Valid recursively since size(n - 2) = n - 2 < n = size(n)
		return a + 6
```


### 2.
WAKE UP!

It's not valid! Look at the pre. $n\geq 2$ must hold! But wait, `algo(n-2)` will easily violate that!

Counterexample:

> For the counterexamples, show the arg is valid by just showing the arg is a witness
> Literally subbing `n` with `3` in pre

n(3) // valid n since 3 \in N and 3 >= 2
- n(2) = 4
- n(1) // invalid call since 1 not >= 2

### 3.
 Looks valid. the `n` passed in is always >= 1, so the sqrt and floor is also >= 1
 sqrt usually decreases the input size so that's also good
```python
def aa(n):
	# Let size(n) = n
	# Valid measure since n \in N^= by Pre
	if n == 1: return 1
	else: # (C): n >= 2 since n >= 1 by Pre and n != 1
		
		# Valid call b/c n >= 2 by (C), so sqrt(n) >= sqrt(2) >= 1 \in Z
		# implying floor(sqrt(n)) >= 1. Also floor(sqrt(n)) \in Z so it's \in N, too
		
		# Valid recursively because n >= 2 > 1 => sqrt(n) < n
		# size(floor(sqrt(n)) = floor(sqrt(n)) < n = size(n)
		r = aa(floor(sqrt(n)))
		
		return r**2 + 2 * r
```

### 4.
The difference is that the Pre has changed. Means we need all recursive calls to have input n >= 2, and not just >= 1
```python
# Pre: n \in N and n >= 2
def ab():
	if type(n) is not int: raise TypeError()
	elif n < 2: raise ValueError()
	elif n == 2 || n == 3: return 3
	else:
		r = ab(floor(sqrt(n)))
		return r**2 + 2 * r
	
```
aa(2) = 3
- aa(1) = 1

aa(3) = 3
- aa(1) = 1
I'm not doing validity proof. It's obvious and a duplicate of the above one basically.

### 5.

s(3) `[r = 3. r = r + s(0). r = r + s(1). r = r + s(2)` r = 7
- s(0) = 0
- s(1) `[r = 1. r = r + s(0)` = 1
	- s(0) = 0
- s(2) = `[r = 2. r = r + 0. r = r + 1` = 3
	- s(0) = 0
	- s(1) = 1
		- s(0) = 0

FRICK. IT WAS ASKIGN FOR THE CALL TREEEEEEEEEEEE
But I did the trace right! I'm goated!

Validity time. Seems pretty valid to me
```python
# Pre(n): n \in N
def s(n):
	# size(n) = n
	# valid coz n \in N by Pre
	
	r = n
	for k in range(n): # (C): 0 <= k < n
		# Valid call since k \in Z and k >= 0 so k \in N
		# Valid recursively since size(k) = k < n = size(n) by (C)
		r = r + s(k)
	return r
```


### 6.
f(12) = (2, 3, 2)
- f(2) = (2,)
- f(6) = (3, 2)
	- f(3) = (3,)
	- f(2) = (2,)

f(12) = (2, 2, 3)
- f(4) = (2, 2)
	- f(2) = (2,)
	- f(2) = (2,)
- f(3) = (3,)

```python
# Pre: n \in N and n >= 2
# Returns (a_0, ...., a_m) where m \in N and a_0 times a_1 times ... times a_m = n
def factored(n):
	# let size(n) = n
	# valid measure since n \in N by Pre
	
	if prime(n): return (n,)
	else: # (C) n is NOT prime. Means n = a * b for some a, b >= 2
		d = a_factor(n)
		# By POST of a_factor, d \in N and 2 <= d < n and d divides n. d|n
		
		# Valid call since d \in N and d >= 2 by Post of a_factor
		# Valid recursively since size(d) = d < n = size(n)
		as = factored(d)
		
		# Valid call since 2 <= d < n, which implies 1 > n/d.
		# since d divides n, n/d \in Z. and since n/d > 1, it's also >= 2 so n/2 \in N
		# Valid recursively since size(n // d) = floor(n/d) <= n/d < n = size(n) since d >= 2 (positive) so n/d < n holds.
		bs = factored(n // d)
		
		return as + bs
```

### 7.

To show the size is invalid, we do a trace, and the trace will end up being all wrong and bad at the end

r(1, 3) # Valid since 1, 3 \in N and `1 < 2**3`
- r(0, 2)
	- r(0, 1) # Invalid recursively since size(0, 1) = 0 !< 0 = size(0, 2)

```python
# Pre(n, m): n, m \in N and n < 2**m
def r(n, m):
	# size(n, m) = m
	# Valid measure since m \in N by Pre
	
	if m == 0: return ()
	else: # (C): m >= 1 since m \in N by Pre and m != 0 by Case 
		# Valid call since m >= 1 => m - 1 >= 0, and n, m \in N so n//2, m-1 \in N too
		# also n//2 < 2**(m-1) by Pre and simple diving
		# Valid recursively since size(n//2, m - 1) = m - 1 < m = size(n, m)
		return (n % 2,) + r(n // 2, m - 1)
```


### 8.
```python
def strategy(m, n):
	if m == 0 or n == 0: return True
	else:
		(c, d) = advesary(min(m, n), min(m, n))
		# By Post...
		return strategy(c, d)
```
`adversary` returns one of the inputs as is, and the other input but "less" 

a)
Shouldn't be valid.
If adversary returns the `a` as is, the second call would have the same "m"?
No because adversary takes the min between both. calling strategy again would always mean BOTH args are shrunk. This is legit
Okay no actually i'm totally fricking wrong...

let m = 3 and n = 2 i guess?
then 
s(2, 3) is a valid call
- adv(2, 3) = (2, 1)
- s(2, 1) is a valid call but oh wow size(2, 1) !< size(2, 3)
	- adv(2, 1) = (0, 1)
	- s(0, 1)

ughughguhughughuguguhugh
How do i know how to solve this? 
ig worst case i'll find out when i'm trying to prove it and things go wrong

b)
surely this is wrong

s(2, 3) # Valid call, but 2 - 3 = -1 which is not a valid size

c)
The size always shrinks since either number decreases each time
Same for d). The size of the MAX for both terms shrink each time. (one term cannot be the larger one for more than one recursion)

I'll just do the max proof since it's more interesting 



```python
# Pre(m, n): m, n \in N and either a > 0, or b > 0
def strategy(m, n):
	if m == 0 or n == 0: return True
	else: # (C): m, n \in N >= 1 by Case and Pre
		# Let size(m, n) = max(m, n)
		# Valid size since m, n \in N so max(m, n) \in N
		
		(c, d) = advesary(min(m, n), min(m, n))
		# By Post_adversary, c, d \in N, and either c = min(m, n) and d < min(m, n), or c < min(m, n) and d = min(m, n)
		
		# Valid call and recursion. We'll do cases
		# Case #1: c = min(m, n) and d < min(m, n)
			# Valid call b/c c, d \in N by post, and c = min(m, n) >= 1 > 0 since both m, n >= 1.
			# Valid recursively since size(c, d) = max(c, d) = c = min(m, n) < max(m, n) = size(m, n)
		return strategy(c, d)
```

