https://q.utoronto.ca/courses/362238/files/33941784?wrap=1
- slides

### <span class="definition">Archimedean Property / Principle</span> 
$\text{For every } x,y \in \mathbb{R}\text{ with } x,y > 0,\text{ there exists n} \in \mathbb{N} \text{ such that } nx > y$
In more symbolic terms: 
$\forall x, y \in \mathbb{R}, x,y > 0 \implies \exists n \in \mathbb{N} \text{ s.t. } nx > y$
- For any positive x or y, you can multiply x by n to eventually surpass y. 
- Remember that now that we've proven this, we can apply it by choosing an x or y (
	- This is useful for the density proof below

> [!example] Proof
>- This uses contradiction since we cannot easily choose an `n`
>- We use the theorem below since it shows that the supremum of the set can be approximated by set elements. We use this to show that $\alpha$ is not an upper bound (which we said it is cuz it's the supremum)
>
![[Pasted image 20241031110532.png]]
> 
- Summary of above proof:
	- We assume the conditions that x, y are real and that x < y. We then assume the negation of the conclusion to get a contradiction.
	- We create a set S = {nx, n in N} so that y becomes an upper bound of set S.
	- We let a be the supremum of the set S which exists by Least Upper Bound property since S is not empty and S is bounded above.
	- We note that a - x < a, so a - x is NOT an upper bound.
	- In fact, there must be an element in S (an element must be nx) bigger than a - x, since it's sooo not an upper bound!
	- This means a - x < nx.
	- With some algebra we get a < x(n+1) and note how n+1 is N so x(n+1) is in S as well. But this shows that a, an upper bound, is less than an element in the set S! Contradiction!!!
	

The theorem "we proved last class" is this:
>[!note] Thm: Let $\mathscr{s}$ be an upper bound of a nonempty set $S \subseteq \mathbb{R}$. Then $\mathscr{s} = \sup(S) \Leftrightarrow \forall \epsilon > 0, \exists x \in S \text{ s.t. } \mathscr{s} - \epsilon < x$

> This theorem describes that the supremum of the set can be approximated by set elements.

>[!example] Proof of above theorem
>Note: Since S is not empty and is bounded above (since it has at least 1 upper bound, namely $\mathscr{s}$), sup(S) exists by Least Upper Bound Property
>We will need to write two proofs since definitions are bi-conditional
>
>Proof 
>(=>) 
>Assume $\mathscr{s} = \sup(S)$
>Let  $\epsilon > 0$ be arbitrary.  (this is coming from the theorem)
>(We cannot use an x that is in the set since we don't *know* what the set is! Instead, we use contradiction) (We are doing everything after $\forall \epsilon > 0$ since [[Fall 2024/Discrete Math (CSCA67)/Week 5/Quantifiers|everything after is an implication like in discrete]]) 
>By way of contradiction, suppose (assume opposite) $\forall x \in S, \mathscr{s} - \epsilon \geq x$
>Then $\mathscr{s} - \epsilon$ is an upper bound since $\forall x \in S, x \geq \mathscr{s} - \epsilon$ (by def'n of upper bound using $b = \mathscr{s} - \epsilon$)
>But $\mathscr{s} - \epsilon < \mathscr{s}$ since $\epsilon > 0$ (by inequality properties)
>This contradictions that $\mathscr{s}$ is the least upper bound.
>Thus, there exists $x \in S$ such that $\mathscr{s} -\epsilon < x$
>
>(<=) 
> Assume $\forall \epsilon > 0, \exists x \in S \text{ s.t. } \mathscr{s} - \epsilon < x$
> etc etc
- Unrelated: this is a good example of how contradiction doesn't have to flip *everything* about a statement! 
- This proof was written in 6b slides

### <span class="definition">Dense</span>

> `Def'n`
> Let $S\subseteq \mathbb{R}$. We say that S is <span class="emphasis">dense</span> in $\mathbb{R}$ if between any two distinct real numbers, there exists an element of S.

> In Krish terms: A set is dense in the reals if every element of S is in-between real numbers.

#### Density of Rationals
To say that $\mathbb{Q}\text{ is dense in }\mathbb{R}$ means that for every two real numbers a, b with a < b, there exists a rational number r satisfying a < r < b
- Between any two real numbers, there is a rational number in between. 
- That means between $\pi$ and a very small number $\epsilon$, there will *still* exist a rational number in between, even with all of the gaps in the rational number line. 

>[!example] Proof
>Note that we utilize Archimedean property to complete this proof.
>
>![[Pasted image 20241022222222.png]]
- Applying Archimedean property is obvious
- Any subset that's not empty of the natural numbers WILL have a smallest element
- Because of this fact, we can always find a natural number $m$  
	- Any real number can sit between two natural numbers (in this case, m-1 to m since m > na)
	- #todo Why is it than $na$ couldn't be between $m-2$ and m instead? Like, if $a$ was $2.5$ and $n$ was $1$, then $m$ would be $3$. However, if $n$ is $0$, then $na$ would be between $m - 3$ and $m$, right? 
- The rest makes sense it's just algebra
#### Density of Irrationals
- Between any two real numbers, there is a irrational number in between. 

### The Boundedness Theorem
> If f is continuous on $[a,b]$, then f is bounded on $[a,b]$

##### Def of bounded
> f is <span class="emphasis">bounded</span> on $[a, b]\text{ iff } \exists M\text{ s.t. } \forall x \in [a,b], |f(x) \leq M$
- If it *wasn't* bounded, then no M would work because the function would be going to infinity! 

On slide 6, he skips the absolute q^2 squaring step. 

Go back to video 7a and see how he explains these:

### Prove that $\sup(S) = \sqrt{2}$ if we let $S = \{q \in \mathbb{Q} | q^2 < 2\}$
>[!check] Proof.
>- (i) and (ii) show what we need to prove. Check [[Supremum and Infinium (and max and min)]]
>- To prove (i), we just show that $\sqrt{2}> q$ which is easy
>- To prove (ii)
>	- Assume $b \in \mathbb{R}$ is an upper bound of S as per (ii)
>	- We prove the contradiction: if b is an upper bound of S, then $\sqrt{2} > b$
>		- #todo is this just like discrete with the implications and stuff?
>	- We use the fact that 0 is in the set S (it's rational and 0 < 2)
>	- Since Q is dense in R (between any two real numbers, there is a rational number), there is a q rational number that is between b and $\sqrt{2}$
>	- We take the $q < \sqrt{2}$ part and square both sides to get $q^2 < 2$ to show that $Q \in S$ too!
>	- But wait... if there is a q that's bigger than b, and q is in the set, then that means b isn't the upper bound. Therefore, we have a contradiction (we assumed b was an upper bound above) 
>	
>![[Pasted image 20241031114814.png]]
>

# Cards #calc-7

What is the Archimedean property in symbolic terms? What is it in English?
?
$\forall x, y \in \mathbb{R}, x, y > 0 \implies \exists n \in \mathbb{N} \text{ s.t. } nx > y$
For all x or y values greater than 0, there exists an n natural number such that nx > y. 

What is Archimedean property good for?
?
It helps prove that Q is dense in R, and is useful for sup / inf problems (i.e. contradicting that a supremum is the biggest element of a set).

What does it mean for Q to be dense in R. And, is Q dense in R? 
?
It means "for every element of Q, it is surrounded by an element of R". That means, between 1/2, for instance, there will always be two real numbers surrounding it.


Let S = $\set{q \in \mathbb{Q} | q^2 < 2}$. Prove $\sup(s) = \sqrt{2}$
?
We need to show two things:
- $\sqrt{2}$ is an upper bound
- If b is a upper bound of S, then $\sqrt{2} \leq b$
	- As logic: $\forall b, b \text{ is upper bound } \implies \sqrt{2} \leq b$
1. 
For all $q \in S$, we have that $q < \sqrt{ 2 }$.
Thus, $\sqrt{2}$ is an upper bound of S (q is always less than it not leq)

2. 
(let b be arbitrary?)
Assume b is an upper bound
To derive a contradiction, suppose $b < \sqrt{2}$
> [!example] Thought process 
> - b is an upper bound of S (i.e. b >= any element of S)
> - b < sqrt{2} for contradiction purposes.
> The only info we have is that b is an upper bound of S. We need to contradict that somehow.
> We know that if b < sqrt{2} it shouldn't be an upper bound on S anymore. But, how do we prove that? How do we show there's a bigger number than b? We need to somehow show there is a number between b and sqrt{2}. That is where density comes in.

Since.. say $0 \in S$ (when q = 0) and b is an upper bound on S, it follows that $0 \leq b$ since b is an upper bound #todo Look below
Since Q is dense in R, there exists a $q \in \mathbb{Q} \text{ s.t. } b < q < \sqrt{2}$
Then 0 <= b < q < sqrt{2} implies $0 \leq b^2 < q^2 < 2$
> #todo just to confirm: we can only square everything in an inequality if all the terms are positive, yes?

Then q^2 < 2, thus $q \in S$. Hence, b < q.
This contradicts that b is an upper bound of S.
Therefore, $\sqrt{2} \leq b$

By 1 and 2, we have that $\sup(S) = \sqrt{2}$ undoubtably



