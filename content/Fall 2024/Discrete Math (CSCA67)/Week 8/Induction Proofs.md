> Contents
"As long as we know \[the pattern] exists, we can call it a proof" 

### Process for Simple Induction (or "induction")
1. Let P(x) stand for something
2. Show what we want to prove (that $\forall n \geq y, P(n))$ or something like that)  
3. Prove the <span class="emphasis">Base Case</span>
	1. Show that P(base case) is true where "base case" is the first number where the pattern starts. 
4. Prove $\forall k \geq 1, P(k) \to P(k+1)$ (<span class="emphasis">Induction Step</span>)
	2. Take arbitrary k and suppose $k \geq 1$
	3. Suppose P(k) (<span class="emphasis">Induction Hypothesis (IH)</span>)
	4. Prove P(k+1)
5. Conclude that what we wanted to prove in Step 2 is true "by induction"

>[!example] Prove that for all positive integers n, that $\sum_{i=0}^x 2\cdot (-7)^i = \frac{1 - (-7)^{x+1}}{4}$ is true:
![[Pasted image 20241103115729.png]]
> - Note that the 4, IH step should be on the line right after (5)
> - This was from assignment 4, q 2.a)


#todo the slides only showed how to prove the second premise for the [[Rules of Inference for Induction]]

There's a pretty common tactic for the infinite sum ones (like you see on the slide) like how i wrote in my notebook for the 2^n question


[Slides](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week08/induction_pre_lecture.pdf)

### Odd thing
- This was in the slides 
- Maybe get rid of this if it makes no sense #todo
$1 + 3 + \dots{} + (2k - 1) = k^2$
$1 + 3 + \dots{} + (2k - 1) + (2k + 1) = k^2 + 2k + 1 = (k+1)^2$

1. Let P(n) stand for $1 + 3 + \dots{} + (2n - 1) = n^2$
	- Another way we could say that is $\sum^n_{i+1} (2i -1) = n^2$
	- Remember, we aren't saying this because we *know* it's true. It's just that, for any valid value of n, if $\sum^n_{i+1} (2i -1) = n^2$ is true, then P(n) is true!
2. If P(k) is true, then P(k+1) is true
3. P(1) is true

# Cards
Prove that $∀n ∈ \mathbb{N}, (3 | (n^3 − n))$ (pg. 264)
?
> The `a|b` means a can divide b

Here are the steps:
- Prove that P(1) is true (base case for natural numbers)
- Suppose there exists a k such that 3k = n^3 - n. This is the induction hypothesis. 
- Prove P(k+1) 
```
Let n be a arbitrary natural number.
P(1) = 3 | (1-1) = true? erm

Suppose there exists a k such that 3k = n^3 - n
	(n+1)^3 - n - 1 = (n^3 + 3n^2 + 3n + 1) - n - 1
					= 3k + 3n^2 + 3n 
					= 3(k + n^2 + n)
					= 3j
	P(n+1)

The way they wrote their proof is wack 
```
#todo The proof in the textbook is weird.




Prove that, for every integer n ≥ 3, 2n < 2^n .
?
(This question is in the induction slides)

Let $P(n) = 2n < 2^n$
Base case: P(3)
- 6 < 8 is true
Induction Step
	- Must prove $\forall k, k \geq 3, P(k) \to P(k+1)$
IH: 2n < 2^n is true.
```
Take arbitrary integer k
	Suppose k >= 3
		Suppose P(k)
			2k < 2^k
			2(k+1)  = 2k + 2
					< 2^k + 2
					< 2^k + 2^k  (since k >= 3)
					< 2^(k+1)
		P(k) --> P(k+1)
	k >= 3 --> (P(k) --> P(k+1))
forall k, k >= 3 --> (P(k) --> P(k+1))
```

Prove that, for every integer n ≥ 5, n^2 < 2^n
?
(This question is in the induction slides)

Let $P(n) = n^2 < 2^n.$
We wanna show that forall n >= 5, P(n) is true.
Base case: 5^2 = 25 < 32 = 2^5, so P(5) is good.
Induction Step: We needa prove forall k >= 5, P(k) --> P(k+1)
```
Take arbitrary n
	Suppose n >= 5
		Suppose P(k) (IH)
			k^2 < 2^k (assumption)
			(k+1)^2 = k^2 + 2k + 1 
					< 2^k + 2k + 1 (By the IH)
					
			P(k+1) (def'n of p)
		P(k) --> P(k+1)
	k >= 5 --> (P(k) --> P(n+k))
for all n, x >= 5 --> (P(n) --> P(n+1))
```
#todo WHERE DOES THE 1 GO


For any positive integer $n$, the sum of the first $n$ odd positive integers is $n^2$
?
P(n) = The sum of the first $n$ odd positive integers is $n^2$
Base case: 1 = 1, so P(1)

```
Take arbitrary integer n
	Suppose n >= 1
		Suppose P(n)
			1 + 3 + 5 + ... (2n - 1) = n^2
			1 + 3 + 5 + ... (2n-1) + (2(n-1)+1) = n^2 + 2(n-1) + 1
											= n^2 + 2n + 1
											= (n+1)^2
			P(n+1)
		P(n) --> P(n+1)
	 (n >= 1) -> (P(n) --> P(n+1))
forall n >= 1 -> (P(n) --> P(n+1))
```

