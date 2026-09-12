>[!note] Def'n of squeeze theorem
>Let $L, c ∈ R$ and suppose there exists $d > 0$ so that $f$, $g$ and $h$ are defined on a d-punctured interval centered at $c$. If
>1. $g(x) \leq f(x) \leq h(x) \text{ for all } x \in (c - d, c) \cup (c, c + d)$
>2. $\lim \limits_{x\to c} g(x) = \lim \limits_{x\to c} h(x) = L$
>
>then $\lim \limits_{x\to c} f(x) \ =L$

>[!note] Def'n of squeeze theorem going to infinity
>Let $L, c ∈ R$ and suppose there exists $a > 0$ so that $f$, $g$ and $h$ are defined on $(a, \infty)$ . If
>1. $g(x) \leq f(x) \leq h(x) \text{ for all } x > a$
>2. $\lim \limits_{x\to \infty} g(x) = \lim \limits_{x\to \infty} h(x) = L$
>
>then $\lim \limits_{x\to \infty} f(x) \ =L$
#### Proving the squeeze theorem
![[Pasted image 20241030124557.png]]

tl;dr:
- You can apply squeeze if two functions exist around a some punctured interval of radius d and the limits of those functions exist and are equal to each other (i.e. variable L).  
- Idk why you gotta include d or a in the choice for delta but it is there!

# Cards #calc-5
What is the squeeze theorem's hypotheses?
?
There is an L and c in the reals. There is a d (delta sorta) such that on the interval x in (c-d, c) U (c, c+d) we have g(x) <= f(x) <= h(x) for all x in the previous interval. ALSO. We must have $\lim \limits_{x\to c} g(x)$ =  $\lim \limits_{x\to c} h(x)$. Only *then* can we say the limit fully for f(x). Got it.


What is the proof?
?
Use the def'n of limit cuz that's what we want to prove (that lim f(x) = L).
Then Let epsilon be arb.
Before choosing delta we need stuff:
- Use assumption 2 to get two limits
- Choose the epsilons to be the big epsilon
- Let delta > 0 for both deltas.
- Then observe that...
	- (the intuition is that we need L - e < f(x) < L + e so we show those inequalities)
	- Just do some simple rough work to get them
- Then we choose our delta to be the min of delta_1 delta_2 and d (idrk why but whatever) 
- Observe the antecedents are true.
- Then whatever this is
- ![[Pasted image 20241115115909.png]]
	- Oh because of the interval.... something....
	- The last step is obvious it's just algebra.


