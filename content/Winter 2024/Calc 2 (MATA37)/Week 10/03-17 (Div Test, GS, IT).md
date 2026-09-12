$\sum$ 
series time 

<span class="emphasis">Series</span> conv/div tests:
1. By def
	1. For convergence we find $S$
		1. finding the partial sum
		2. Best used when we have a [[Telescoping Series]]
	2. can prove divergence too but i cannot recall how exactly. should be from the previous lecture
2. The divergence test (div-test)
	1. Only checks for divergence tho
	2. Best used for easily evaluable limits
3. Geometric Series Test
	1. Proves both convergence and divergence very easily
	2. but you needa show the series is geometric first
	3. It even gives the sum if it does converge! stellar!
4. IT (integral test)
	1. Proves both convergence and divergence 
>[!note] These do not work for not-series (i don't remember exactly what)
>- Improper Integrals
>- Sequence
>- Series
>we have unique tools to prove conv/divergence
>
>but eventually we will learn how these relate with integrals!

## Test 2: the div test!
- This is basically a contrapositive of the vanishing point thing from [[03-13 (series)]]
>[!thm] Divergence Test
>Given $\sum a_n$
>IF $\lim \limits_{a\to\infty} a_n\neq 0$ (i.e. not vanishing)
>THEN $\sum a_n$ diverges 
>
>>[!explanation] We cannot say the converse is true. Consider $a_n = \frac 1 n$. Then $\lim \limits_{a\to\infty} a_n = 0$, but it does NOT converge as it is the harmonic series.  
>
>>[!explanation]
>>If we add up *numbers* forever, of course we will get a big sum! If the limit goes to some constant like 1, then $a_{n+1}$ will probably also be about 1. this means we infinitely add 1... the series will never settle at some value.
>>> Think of the contrapositive: if the series converges, then the biggest elements of the series vanish!
>
>>[!proof] Proof
>>...
>>why is proof poof? We've already proved it >:)
>>Refer to [[03-13 (series)]] where we proved the contrapositive

>[!example] $\sum_{n=3}^\infty \frac{\sqrt{5n^3 + 1}}{n^2 + 3}$... does it converge or diverge?
>
>✨When do we use the div-test? well if the general term is something we can evaluate the limit of, and it looks like it's not approaching zero.
>
>So we use the div test. That means evalulating the limit (that is easy!)
>
>$\lim \limits_{n\to\infty} a_n = \lim \limits_{n\to\infty}  \frac{\sqrt{5x^4 + 1}}{n^2 + 3}$
>$=  \lim \limits_{n\to\infty} \frac{\sqrt{n^4} \sqrt{5 + \frac{1}{n^4}} }{n^2(1 + \frac{3}{n^2})}$
>$=  \lim \limits_{n\to\infty} \frac{  \sqrt{5 + \frac{1}{n^4}} }{(1 + \frac{3}{n^2})}$
>$=  \sqrt{5}$
>$\neq 0$
>
>THATS ALL THAT IT IS!
>
>$\therefore$ our series diverges by div-test.




# Now for a detour: special types of series
These guys have fun properties
>[!defn] Geometric Series  🥲 (G.S.)
>Let $a, r \in \mathbb R, a\neq 0$
>A series of the form $$a + ar + ar^2 + ar^3 + \dots + ar^n + \dots$$
>$$=\sum_{n=0}^\infty ar^n$$
>is called a geometric series!
>
>We are multiplying each next term by "r". When there exists such an r, then it's a geometric series! The $r$ is called the <span class="emphasis">ratio</span> of a G.S. because dividing any item with the item before will be $r$
>
>>[!note] It does NOT matter if the series starts at $n=0$ or not. 
>
>>[!note] $a$ is the value of the FIRST non-zero summand of the series. 
>>If we have $\sum_{n=10}^\infty 2(\frac{1}{2})^n$, the $a \neq 2$. Instead, $a = 2\cdot(\frac{1}{2})^{10}$


>[!example] Are these G.S. or nah
>$$1 - e + e^2 - e^3 + \dots$$
>- This is a geometric series: The $r = -e$
>
>
>$$\sum_{n=2}^\infty \pi(3/7)^{n+1}$$
>- This guy is also geometric. $r = \frac 3 7$
>- Some possible messups:
>	- "the exponent is not just $n$!"
>	- "the series doesn't start at $0$!"
>- but writing out the sum makes it look WAY more obvious
>	- $\pi(3/7)^3 + \pi(3/7)^4 + \pi(3/7)^5 + \dots$
>
>$$\sum_{n=3}^\infty ne^{-n}$$
>- Not geometric 
>- $3/e^3 + 4/e^4 + 5/e^4 + \dots$
>- The numerator gives problems when trying to find an $r$.
>
>
>>[!explanation] Lesson learned: It's prolly best you always write sums out to see if it's a geometric series

>[!example] Given $\sum_{n=0}^\infty ar^n, a, r \in \mathbb R, a \neq 0$.
>For what $r$ values does the G.C converge or diverge?
>(We will prove this by def'n -- $\lim \limits_{n\to\infty} S_n$ -- as div-test will NOT work here... but this doesn't look very telescope-y!)
>
>>[!proof] 
>>We know that $S_n = a + ar + ar^2 + \dots + ar^n$
>>... what if we multiply by $r$?
>>$rS_n = ar + ar^2 + \dots + ar^n + ar^n + 1$
>>Using both equations, with elimination (i.e. subtracting both equations) we get
>>$S_n - rS_n = a - ar^{n+1}$
>>$\implies S_n(1 - r) = a(1 - r^{n+1})$
>>$\implies S_n = \frac{a(1 - r^{n+1})}{1-r}$ so long as $r \neq 1$
>>- Yay we have a closed-form description! Kind of...
>>
>>However what if $r=1$? Is this a contradiction!? Well.. no
>>$S_n = a + a + a + \dots + a= (n+1)a$ 
>>- Yay we have a closed-form description for any value of $r$!
>>
>>
>>Now that we have these closed-form descriptions, we need to evaluate limits.
>>
>>>Case 1: $r =1$
>>>$\lim \limits_{n\to\infty} S_n =\lim \limits_{n\to\infty} (n+1)a = \pm \infty$ (as a could be negative or positive)
>>Since the limit doesn't exist (doesn't evaluate to a number) by defn the series diverges.
>
>>Case 2: $r \neq 1$
>>$\lim \limits_{n\to\infty} S_n = \lim \limits_{n\to\infty} \frac{a}{1-r}(1 - r^{n+1})$
>>$= \frac{a}{1-r} \lim \limits_{n\to\infty} (1 - r^{n+1})$
>>$= \frac{a}{1-r}  (1 - \lim \limits_{n\to\infty} r^{n+1})$
>>Now we have an issue... $r$'s base.
>>From EE8, we had $\set{r^n}$ and we proved it converged/diverged for certain $r$ values.
>>- When $-1 < r < 1$, the exponential function will decay.
>>- When $r > 1$ then the exponential function will grow!
>>
>>SO
>>$$=\begin{cases} 0 &  |r| < 1 & \text{e.g. } (1/2)^n  \\
  \infty & r > 1  & \text{e.g. } 2^n \\
 1 &  r < -1  & \text{e.g. } (-4)^{n}\\
 1 & r = -1 & \text{e.g. } (-1)^{n+1}  
>>\end{cases}$$ 
>>by sequence epsilon proof we hypothetically did before :>
>>$\therefore$ by def'n, of series converges w/ sum $\frac{a}{1-r}$ if $|r| < 1$
>>or diverges if $r > 1, r < 1$ or $r = -1$


### Summary of the Geometric Series (G.S) test

>[!thm] GS-Test
>Given $\sum_{n =0}^\infty ar^n, a,r \in \mathbb R, a \neq 0$
>If  |r| < 1, then the series converges with the sum $\frac{a}{1-r}$
>If $|r| > 1, then the series diverges.

>[!example] Do the following converge or diverge? Find the sum if the series does actually converge
>
>a. $\sum_{n=1}^\infty n!$
>- Defo div-test! The numbers r getting big.
>>[!proof]
>>$\lim \limits_{n\to\infty} a_n = \lim \limits_{n\to\infty} n! = \infty \neq 0$
> $\therefore$ by div test the series diverges
> #todo how do u justify that
> 
>
>b. $\sum_{n=1}^\infty 7(5/6)^n$
>- Lookin like G.S. test. 
>>[!proof]
>>First we gotta show this is a G.S.; we need $r$.
>>It seems $r = 5/6$
>>So $|r| = 5/6 < 1$
>>So this series converges with a sum $\frac{a}{1-r}$. But what is $a$?
>>> The $a$ is <span class="emphasis">NOT</span> 7! The $a$ from the def'n is the FIRST non-zero term in the series when $n=0$
>>> The FIRST non-zero term is $7(5/6)^4$ 
>>
>>So the sum of the series is $=\frac{7(5/6)^4}{1-5/6} = \frac{7\cdot 5^4}{6^3}$.
>
>c. $\sum_{n=2}^\infty ((1/2)^n - \pi(6/10)^n)$
>- Not geometric as is, but it seems like we could split it up via our series properties
>>[!proof] 
>>Consider $\sum_{n=2}^\infty (1/2)^n$. Consider $\sum_{n=2}^\infty \pi(6/11)^n$. If both of these converges, then the sum will converge. 
>>
>>The first one is G.S. as $r = 1/2. |r| = 1/2 < 1$. So this thing converges at $\frac{1/4}{1 - 1/2} = \frac{1}{2}$
>>
>>The second one is G.S. as $r = 6/11$. |r| = 6/11 < 1. So this thing converges w/ a sum of $\frac{\pi(6/11)^2}{1-6/11}$
>>
>>But "conv-conv = conv". So the huge sum converges with a sum $\frac{1}{2} -\frac{\pi(6/11)^2}{1-6/11}$
>>#todo find where I write that, alongside "conv+div = div" and $div - div = div or conv sometimes" 
>


#todo i am so braindead. "strictly less than" means ONLY LESS THAN. WHAT IS WRONG WITH ME. Fix my previous errors


## Test #4 yayaya wait what the THE INTEGRAL TEST!!?!?!

>$$\sum_{n=3}^\infty ne^{-n}$$

Remember this guy? We can't prove it with the other 3 tests. So we have to resort to hells fruits: integrals

>[!thm] Integral Test (IT)
>Given a series $\sum_{n=1}^\infty a_n$
>IF $f(x)$ is positive (sign checks aren't bad...), continuous (ehhh), and decreasing (whyyy) on $[1, \infty)$ (???) such that $a_n = f(n),\ \forall n \in \mathbb N$ 
>
>... THEN $\sum_{n=1}^\infty a_n \text{ converges}\iff \int_1^\infty f(x)\;dx \text{ converges}$ 
>And it works with divergences by taking the contrapositive 
>
>>[!explanation] Best use case for IT (integral test) is if you could easily find the anti-derivative of the general term. 
>>If u can integrate the general term, go ahead. But there are so many hypotheses. 

#todo Note that the interval starts at 1 cuz n starts at 1. I think it's safer to have a constant, maybe k, so the interval is more clear and that presumably always $[1, \infty)$


>Prove $\sum_{n=3}^\infty ne^{-n}$ via IT.
>For hypotheses 1 and 2: We DONT have to prove continuity. Thats cuz we'll be differentiating it when proving decreasing, and that will imply continuity.
>Hypotheses 3: We define $f(x) = a_x$
>
