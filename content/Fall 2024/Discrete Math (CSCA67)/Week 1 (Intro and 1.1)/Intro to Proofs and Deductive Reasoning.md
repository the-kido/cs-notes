Deductive Reasoning is how math questions are figured out at a university level. Deductive reasoning is presented in the form of **proofs**

### Proving 2 odd numbers *always* add to an even number

>This is not formal btw; done in lecture 1

(First step: definitions)
- Even: $2x$ where $x$ is an integer
	- Or Even: 2x, $x\in\mathbb{Z}$
- Odd: $2x + 1$ 
(Then, go through the logic)
- Every pair of odd integers can be written as 
$$2x + 1, 2y + 1,\ where\ x, y\in\mathbb{z}$$$$(2x +1) + (2y + 1) = 2x + 2y + 2$$
$$= 2(x+y+1)$$
So the sum is 2 times an integer
So it is even

(Go through every step and make sure everything you did can ALWAYS be true)
- 1 + 1 is always true
- 2x + 2y will always be 2x + 2y
- Factoring by 2 will always be true
- 2 times an integer will be an even number (as by its definition)
- **Therefore that last statement will ALWAYS be true**



### The Prime Proof
The textbook (pg 17) makes two [[Conjectures]]
![[Pasted image 20240908093536.png | 400]]
**Conjecture 1.** Suppose n is an integer larger than 1 and n is prime. Then 2n − 1 is prime. **Conjecture 2.** Suppose n is an integer larger than 1 and n is not prime. Then 2n − 1 is not prime.

These conjectures are based on the data from the table they made. We can already show how conjecture 1 is incorrect because if n = 11, then $n^2 - 1$ is 2047, which is composite (23 * 89). However conjecture 2 may still be true. 

We can be certain with a **[[Proof]]** that will check over an infinite number of values with the power of variables, instead of manually checking examples.
- The proof they wrote is mysterious, so we'll ignore that. Just know that it proves than $2^n - 1$ is a composite number for any composite value of n since n = ab (a multiple of two numbers)\

>[!quote] pg. 16
>In some cases you may be able to follow many of the steps of the proof, but you may be puzzled about why the steps are combined in the way they are, or how anyone could have thought of the proof. If so, we ask you to be patient

> This textbook is reading my mind. The answers to those questions will be in Chapter 3

### Euclid's proof of infinite prime numbers
Let $p_1, p_2, p_3 ... p_n$ be a list of currently identifiable prime numbers
Let $m = p_1p_2p_3...p_n + 1$. It is known that m cannot be divided by $p_1$ because it would have a quotient of $p_2p_3...p_n$ and a remainder of $1$
Since m is obviously greater than 1, m is either a prime number or a product of prime numbers

~Here's the spicy part
Now, let's assume m *is* a prime number. That means it's a totally new prime number not on the list (considering that m is 1 greater than the product of *all* prime numbers). It contradicts the assumption that the list contains *all* the prime numbers we know. 

Let's then assume m is a composite number. That would mean m is divisible by any integer $q$. However, we already know m cannot be divided by any number in the list, so once again we have a contradiction with the assumption that this list included all prime numbers.


### Mersenne primes
Euclid proved that if $2^n − 1$ is prime, then $2^{n−1}(2^n − 1)$ is perfect

For example, if n = 5, then $2^n - 1 = 31$ and $2^n-1 = 16$
$31 \times 16 = 496$
496 is perfect
1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248