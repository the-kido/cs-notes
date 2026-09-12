More poofs. I lummy some poofs
It's helpful to use implications after forall (like in question 1.3 for assignment 2)

Suppose = If. It could be used in an implication, but there are other use cases.

Example
![[Pasted image 20241016112831.png]]
1. Suppose n = ab
2. ....
3. $a \leq \sqrt{n}$ or $b \leq \sqrt{n}$
Using contrapositive is much easier tho
1. Suppose $a > \sqrt{ n }$
2. Suppose $b >\sqrt{ n }$
3. ...
4. $n \neq ab$
### prove x is even iff x^2 is even, for x in z
The way he's doing it is via cases
###### Case 1: n >= 1 (Premise 1)
n >= 1
n * n >= 1 * n  (multiply by positive number)
n^2 >= n
boom
###### Case 2: n = 0 (Premise 2)
n^2 = 0 = n
So n^2 >= n

###### Case 3: n <= -1 (Premise 3)
n <= -1
n^2 >= 0 (squaring both sides)
n^2 >= n

### Prove if p ∈ Z and $2^p - 1$ is prime, then so is p
He did proof by contradiction (we wanna show that 2^p - 1 is *not* prime while assuming p is not prime)
Case 1: $P \leq 1$
$2^p - 1 \leq 2^1 - 1$
$2^p - 1 \leq 1$
So, $2^p - 1$ is not prime

Case 2: $P \geq 2$ and P is not prime
- p = ab  where a, b in N, $1 < a,b<p$

... just look at the slides

