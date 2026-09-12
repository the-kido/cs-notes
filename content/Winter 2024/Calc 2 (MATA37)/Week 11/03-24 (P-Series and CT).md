So far, to prove convergence
1. Defn
	1. Conv (gives the sum)
	2. Div
2. The div-test 
	1. Just div
3. Geometric-series-test
	1. Conv (gives the sum)
	2. Div (?) #todo How does it show divergence
4. Integral-test
	1. Conv or div (same as how integrals work)
5. P-series test (NEW!)
	1. Conv 
	2. Div
6. CT (NEW!)
	1. Conv
	2. Div
	3. Signal: if the general term is super ugly and nothing else seems to work, and parts of it look like a geometric-series or p-series
#todo make a ranking of what the easiest to hardest tests are. That way I dont accidentally do IT on $\sum_{n=1}^\infty$ instead of p-series test lol
## P-series (page 619)
>[!defn] P-series!
>Let $p \in \mathbb R^+$.  A series of the form
>$$\frac{1}{1^p} + \frac{1}{2^p} + \frac{1}{3^p} + \dots = \sum_{n=1}^\infty \frac{1}{n^p}$$
>is a p-series. The number p is called the <span class="emphasis">p-value</span>
>- I<span class="hide"></span>t doesn't matter where the p series starts. All that matters is that it has that.. p power

To prove something is a p series, you give a p value
>[!example]
>1. Harmonic series: $\sum_{n=1}^\infty \frac{1}{n}$ 
>- is a p series! The p value is 1
>
>2. $\sum_{n=3}^\infty \frac{1}{n^{2.8+\pi}}$
>- Also a p-series. the p-value is $2.8 + \pi$
>
>3. $\frac{1}{\sqrt{1}} + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \dots$
>- Can be written as $\sum_{n=1}^\infty \frac{1}{\sqrt{n}}$
>- This is a p series with a p-value of $p=\frac 1 2$
>
>4. $\sum_{n=1}^\infty \frac {1}{n^n}$
>- NOT a p-series; the p-value is not fixed.

##### The p-series test!
- Checks both convergence and divergence

>[!thm] The P-series test (pg. 620)
>Give a p-series $\sum_{n=1}^\infty \frac{1}{n^P}, p \in \mathbb R^+$
>IF $p \leq 1$, then $\sum \frac{1}{n^p}$ *diverges*
>IF $p > 1$, then $\sum \frac{1}{n^p}$ *converges*
>
>
><span class="hide">(we can alter the sum to not start at n=1, similarly to that other test i forget tho -- I remember, it was IT! For the interval which we integrate and see decreasing)</span>
>>[!proof]
>>Given $\sum_{n=1}^\infty \frac{1}{n^P}, p \in \mathbb R^+$
>>
> >>We will use a previously proved test; in our case the IT seems the best because it gives off the right signal: 
> >>- It's not a GS, the div-test is a no-go as something becomes 0 idk, we could maybe use defn.
> >>- IT seems the obvious since we can easily integrate the general term (by inspection)
> >
> >We check the 3 hypotheses for IT:
> >1. Define $a_n = \frac{1}{n^p} = f(n), \forall n \in \mathbb N$
> >So $f(x) = \frac{1}{x^p}$ on $[1, \infty)$
> >2. <span class="hide">(show positive)</span> For $x \in [1, \infty), f(x) = \frac{1}{n^p} > 0$ 
> > As both the top and bottom are positive! So the function is positive!
> >3. <span class="hide">(show decreasing)</span> For $x \in [1, \infty), f'(x) = -px^{-p-1}$
> $=-px^{-(p+1)}$
> $< 0$ (as $-p < 0$ and $x^{-(p+1)}>0$)
> >so f is decreasing ($\downarrow$) on $[1, \infty)$
> >(and we also get that continuity on this interval as diff-->cont; we don't have to write that out!)
> >
> >Consider $\int_1^\infty f(x)\;dx$
> >$=\int_1^\infty x^{-p}\;dx$
>> The rest is an exercise! The solution will be posted too, after a10 results r released
>> We assume P <= 1 and P > 0, then show conv and div. 
>> There are 2 ways to prove improper integrals div/conv
>> - Defn (oh ur type 1, let's find your limit! Evaluation time!)
>> - CT (let us simplify u and then we find a simple limit)
>> #todo Recommend u do this in a10


>[!example] Prove $\sum_{n=1}^\infty \frac 1 n$ conv or div!? Prove
>This looks like the harmonic series, which beckons the p-series test.
>>[!proof]
>>This is a p-series with a p-value of $p=1$ (boom, we've proved it's a p-series)
>>Note that $p=1\leq1$
>>$\therefore$ by p-series test, $\sum \frac 1 n$ diverges
>>
>>Easy >:)
## (Direct) Comparison Test (CT)!
>[!thm] Direct Comparison Test (pg. 626)
>Given a(n ugly) series $\sum a_n$ (we just use the generic def'n where $n =1$ by default) 
>and $\sum b_n$ and $\sum c_n$ series, too. These will be our "good and explicit comparisons"
>#### (convergence case) 
>IF 
>- $0 \leq a_n \leq b_n, \forall x \in \mathbb N$, and  
>- $\sum b_n$ converges
>
>THEN $\sum a_n$ also converges
>
>#### (divergence case)
>IF 
>1. $0 \leq c_n \leq a_n, \forall n \in \mathbb N$, and
>2. $\sum c_n$ diverges
>
>THEN $\sum a_n$ also diverges
>
>>[!explanation] Déjà vu to comparison theorem for integrals


##### Example time
if a piece of the ugly looks to be a p-series or geometric-series, we can do some special things

>[!example] $\sum \frac{\tan^{-1}(n)}{n^{1/2} + 4^n}$ conv or div?
>Defo not p-series or geo-series
>Defo not div-test since the thing goes to 0. 
>Defo not defn: not telescoping, not re-writeable.
>Defo not IT (am not tryna integrate all that)
>We gotta do CT (and also it kinda looks like we have a bit of p-series in there)
>
>>[!proof]
>>We check le hypotheses
>>(1) for $n \in \mathbb N$, $a_n = \frac{\tan^{-1}(n)}{\sqrt{n} + 4^n}$
>>- The top half is positive for $n>0$
>>- The two bottom terms are positive; the sum will be positive
>>- So the whole fraction is positive!
>>
>>(2)
>>- We find a good and explicit comparison 
>>- This guy looks to converge, so let us find a $b_n$ that converges and is bounded below $a_n$
>>- (roadblock: getting rid of the top is obvious. But, do we get rid of the $\sqrt n$ and get a geometric series, or get rid of the $4^n$ and get a p-series? how do we know?)
>>	- To figure out what to choose, we figure out the dominating terms to make an educated guess. 
>>	- Both of the bottom terms are going to infinity, but $4^n$ is going much faster. So we can get rid of the $\sqrt n$
>>	- We'd have something like $\frac+ {4^n}$ which will converge if we use GS. 
>>	- #todo Try this again but eliminating the $4^n$. What will be the roadblock I hit? Idk
>>(we find a suitable $b_n$)
>>for $n \in \mathbb N, a_n = \frac{\tan^{-1}}{\sqrt{n} + 4^n}$
>>$\leq \frac{\pi/2}{\sqrt n + 4^n}$ since $-\pi/2 \leq \tan^{-1}(n) \leq \pi/2$
>>$\leq \frac \pi 2\frac{1}{4^n}$ min denom b/c $\sqrt n + 4^n > 4^n$
>>$= b_n$
>>
>>Consider $\sum_{n=1}^\infty b_n = \sum_{n=1}^\infty \frac \pi 2 (1/4)^n$ 
>>It is a GS with $r = 1/4$
>>So |r| = 1/4 < 1.
>>$\therefore$ by GS test, $\sum_{n=1}^\infty b_n$ converges.
>>
>>Now we've gotten all of the hypotheses for CT!
>>$\therefore$ by CT, the series $\sum_{n=1}^\infty \frac{\tan^{-1}(n)}{\sqrt n + 4^n}$ converges!
> 
>>[!explanation] Now instead of dropping $\sqrt n$, let's drop $4^n$
> >Then $b_n = \frac \pi 2\frac{1}{\sqrt{n}}$
> >This is a p-series, with a p-value of $1/2<1$.... but that means it diverges by the P-series test. Although this result sort of contradicts our intuition that the whole thing converges. It must be that we should NOT have dropped

>[!proof] Proof of CT: Just the convergence case. 
><span class="hide">The divergence case is a little bit easier</span>
>Given $\sum a_n$ 
>Suppose $0 \leq a_n \leq b_n \forall n \in \mathbb N$ (1)
>and $\sum b_n$ converges (2)
>
>WTS $\sum a_n$ converges
>How do we show convergence? Which methods do we have?
>- Defo not GS-test, div-test, p-series. no IT cuz we can't integrate a thing
>- So ig we have to use... the definition
>
>For a definition proof, we WTS $\lim \limits_{n\to\infty} S_n$ exists.
>WTS $\set{S_n}$ converges <span class="hide">(?) ohh now i get it. we are tryna use BMCT</span>
>Let $n \in \mathbb N$ be arbitrary.
>Consider $S_{n+1} = S_n + a_{n+1}$ by def'n of partial sum
>- Note $a_{n+1} \geq 0$ by (1) and $S_n \geq 0$ by (1) and def'n of $S_n$ as the sum of non-negative terms is non-negative
>
>$\geq S_n$ by minimizing sum
>So $\forall n \in \mathbb n$, $S_{n+1} \geq S_n$
>$\therefore$ $\set{S_n}$ is increasing 
>Now if we show it's bounded above, then $\set{S_n}$ converges!
>Note (1) $\implies \sum_{n=1}^\infty a_n \leq \sum_{n=1}^\infty b_n$
>$\sum_{n=1}^\infty b_n= t$ for some $t \in \mathbb R^{\geq 0}$, by (2) and (1), $b_n \geq 0$
>but $S_n \leq \sum_{n+1}^\infty a_n$ by maximizing sum as $a_n \geq 0$ 
>$\implies S_n \leq t, \forall n \in \mathbb N$ by "transitivity" of $\leq$
>$\therefore \set{S_n}$ is bounded above by $t$
>
>$\therefore$ by BMCT, $\set{S_n}$ converges
>$\therefore \lim \limits_{n\to\infty} S_n$ exists
>$\therefore$ by definition, $\sum a_n$ converges!


#todo note that def proofs are nice when we know the general term is decreasing 
