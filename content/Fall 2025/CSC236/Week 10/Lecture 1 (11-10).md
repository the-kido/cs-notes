Continuing from [[Lecture 2 (11-07)#Example 2]]

Basically, since we found that $T(n) = n + T(\lfloor n/2 \rfloor) + T(\lceil n/2 \rceil)$, and since we saw that array sizes like 2, 4, 8, 16 are easily dividable by 2 (and therefore nice to work with) we first find what $T(2^k)$ is and then do some fancy stuff later to find the closed-form for $T(n)$ at the very end 

We use the fact that no matter if you have ceil or floor, the $n/2$ will be an integer since $2^k$ is divisible by $2$ (the exact reason why it's so nice to work with) SO that means $T(\lfloor n/2 \rfloor) + T(\lceil n/2 \rceil) = 2 \cdot T(2^{k-1})$
The rest is just algebra:
![[Example 2 substitutions.png]]
- Note: we substituted $3$ times here. At the third substitution, the pattern became obvious. For $i$ substitutions, it seems the form it will take is $i \cdot 2^k + 2^i \cdot T(2^{k-i})$
- And once we substitute $k=i$ times, then $k-i = 0$ and $2^0 = 1 \implies T(1) = 1$ 
- Therefore at $T(2^k) = 2^k(k + 1)$
	- $\implies$in the case where $n = 2^k$, then $T(n) = n(\lg n + 1)$
	- Yay, that's the speed! So $\Theta$ is probably $n \lg n$ for this function

#### But this isn't the closed form for our desired $T(n)$!
We "claim" that $T$ is non-decreasing, and therefore the form of the graph is always increasing meaning we can predict what the interpolated input values might me
![[Example 2 interpolation claim.png]]
- This means between, say 8 and 16, the point, say, 10, cannot go above 16 nor below 8. It'll have a bounded time.
#### The final step: Showing that $T(n) \in \Theta(n \lg n)$
- *(1) We claim that $T$ is *non-decreasing* such that $\forall m \leq n, T(m) \leq T(n)$ (this is what we must prove!)
- proved this before oops.- (2)We also know that $\forall k \in \mathbb N, T(2^k) = 2^k(k+1)$ via our unwrapping

We show this via a proof!

- From the def of $\Theta$: 
- Let $n \in \mathbb N$. Assume $n \geq 1$ (list always has at least 1 element so let's choose that for now) (Later this is updated to $n \geq 2$, and then again to $n \geq 4$)
- Case: $\exists k \in \mathbb N, n = 2^k$ 
	- Then $T(n) = T(2^k) = 2^k(k+1)$
	- $=n(\lg(n) +1)$ 
		- Note $2^k = n \implies k = \lg n$
	- $\therefore T(n) = n(\lg n + 1) \geq n \lg n$
	- $\therefore T(n) = n(\lg n + 1) \leq n(\lg n + \lg n) = 2n \lg n$ so long as $lg n \geq 1 \equiv n \geq 2$
		- Ah ha, we can fix what we assume! 
	- So we got both sides. Yay!
- Case: $n$ is NOT a power of $2$
	- Then $\exists k \in \mathbb N, 2^k < n < 2^{k+1}$ (reads as "then $n$ must be between two points that are a power of $2$. He said we can prove this with well-ordering... I don't see it. Apparently it's 'obvious' so no proof required)
	- Then $T(2^k) \leq T(n) \leq T(2^{k+1})$ by non-decreasing `(1)`
	- $\equiv 2^k(k+1) \leq T(n) \leq 2^{k+1}(k+2)$
		- We're not done yet!
		- For the left side: We ***want*** that $c_1 n \lg n \leq 2^k(k+1)$ which transitively means $\leq T(n)$ 
			- We know $\lg n < k+1$ by applying $lg n$ and since everything $\geq 2$ 
			- We know $n/2 < 2^k$ as well
			- So $\frac{1}{2} n \lg n < 2^k (k+1) \leq T(n)$
		- For the right side: We ***want*** that $T(n) \leq 2^{k+1}(k+2) \leq c_2n\lg n$
			- We know $2^{k+1} < 2n$ and $k +2 < \lg n + 2$
			- so $2^{k+1}(k+2) < 2n(\lg n+2)$
				- $= 2n(\lg n + \lg n)$ since $4 \leq n \implies 2 \leq \lg n$ 
				- $= 4n \lg n$ 
In conclusion, we just showed that 
$\forall n \geq 4, \frac 1 2 n \lg n \leq T(n) \leq 4n \lg n$ 
$\therefore T \in \Theta (n \lg n)$

### Things I'm just figuring out right now LOL
#### $\lg$
It's the same as $\log_2$ for us comp sci people:
$$\lg(n) = \log_2(n)$$
#### Big $\Theta$ 
It's a *set of functions*. For instance, $\Theta(n \lg n)$ is the set of functions that grow at the same rate as $n \lg n$ does

Formally:
$$\Theta(g(n)) = \set{ f(n) | \forall n \geq n_0, \exists c_1, c_2 > 0, \exists n_0, \text{s.t. } c_1g(n) \leq f(n) \leq c_2g(n)}$$
- Reads as "after some $n_0$ time, every $n$ point in $f(n)$ grows above and below $g(n)$, given it's scaled a bit by constants $c_1$ and $c_2$"

# Readings (`recursive-runtime-I`)
Covered in [[Lecture 2 (11-07)]]

