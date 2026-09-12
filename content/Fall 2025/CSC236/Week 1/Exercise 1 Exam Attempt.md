More tracing! 

### 1.
algo(7) = 21
- algo(5) = 15
	- algo(3) = 9
wow that was almost too easy. like stealing the life from a baby

For the tree it'll just be 
```
algo(7)
  |
algo(5)
  |
algo(3)
```
Okay i'll use `a` instead of `algo` next time
### 2.

a(4)
- a(3)
	- a(2) = 4
	- a(1)
		- a(0)
			- a(-1)
				- ....
I'm goated for real
### 3.
First thing we see with big args like this is if the recursive calls change the args
in this case they don't change `x` nor `L`, so we're not gonna rewrite those

`x = 3` and `L = [3, 1, 4, 1, 5, 9]`

c(0, 5) `[c = (7//3=2)]` = 2
- c(0, 2) `[c = 1]` = 1
	- c(0, 1) = 0
	- c(1, 2) = 1
- c(2, 5) `[c = 3]` = 1
	- c(2, 3)  = 0
	- c(3, 5) `[c = 4]` = 1
		- c(3, 4) = 1
		- c(4, 5) = 0

This one was always tricky

The tree would just show `c(0, 5)` or `c(2, 3)` etc

### 4.

b(0, 4) `[m = 2]` = true
- b(0, 2) = true

### 5.

`x = 314`
`L = [123 ,156 ,234 ,289 ,300 ,320 ,456 ,567 ,678 ,789]`

b(0, 10) `[m = 5]` = false
- b(0, 5) `[m = 2]` = false
	- b(3, 5) `[m = 4]` = false
		- b(5, 5) = false

### 6.

r(11, 5) = (1, 1, 0, 1, 0)
- r(5, 4) = (1, 0, 1, 0)
	- r(2, 3) = (0, 1, 0)
		- r(1, 2) = (1, 0)
			- r(0, 1) = (0)
				- r(0, 0) = ()

Call tree is just a line


### 7.

Potential trace
V() $\stackrel{7}{=}$ 3
- V() $\stackrel{6}{=}$ 9 
	- V() $\stackrel{5}{=}$ 3

Call Tree is just 
```
V()
|
V()
|
V()
```
### 8.
Potential trace

`T() = ('1', ('-', ('-', '2')))`
- T() $\stackrel{5}{=}$ `'1'`
- T() $\stackrel{7}{=}$ `('-', ('-', '2'))`
	- T() $\stackrel{7}{=}$` ('-', '2') `
		- T() $\stackrel{6}{=}$ `'2'`

