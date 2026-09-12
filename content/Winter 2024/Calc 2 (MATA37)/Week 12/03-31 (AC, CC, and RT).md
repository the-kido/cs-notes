i hope i get the courses i want :)

There are different types of convergence

>[!defn] Absolute Convergence (AC) (pg. 645)
>Given a series $\sum a_n$, we say the series absolutely converges (AC's) IF $\sum |a_n|$ converges. 
>

>[!defn] Conditional Convergence (CC)
>Given a series $\sum a_n$, we say it conditionally converges (CC's) IF $\sum |a_n|$ diverges *AND* $\sum a_n$ converges

>[!example] $\sum_{n=1}^\infty \frac{\sin(6n)}{4^n}$. Does it CC, AC, or div?
>We could go "top-down": We *could* check that the series absolutely converges first. but if it diverges, then we'd have to do more work...
>The "bottom-up" approach we do if we think the guy diverges. If it looks like it'll diverge, we'll not do the fancy absolute stuff. But if it is convergent, then flip, we got more work to do to show specifically AC or CC.
>
>>[!proof] "top down" approach.
>>Consider $\sum_{n=1}^\infty|a_n| = \sum_{a=1}^\infty \left|\frac{\sin(6n)}{4^n} \right| = \sum_{a=1}^\infty \frac{\left|\sin(6n)\right|}{4^n}$ by defn of `| |`
>>We see it's kinda hinting at a geometric series, so perhaps we can get rid of that top via *CT*!
>>(1) for $n \in \mathbb N$, $|a_n| \geq 0$ ✅
>>> In our head, we know this will converge as the fraction looks really like the GS test with a ratio of r = 1/4
>>
>>(2) for $n \in \mathbb N$, $|a_n| = \sum_{a=1}^\infty \frac{\left|\sin(6n)\right|}{4^n} < \frac{1}{4^n} = b_n$
>>
>>Consider $\sum_{n=1}^\infty b_n = \sum_{n=1}^\infty(\frac 1 4)^n$. 
>>It is a GS where $r = 1/4 < 1$
>>So by GS test, $\sum_{n=1}^\infty b_n$ converges.
>>This satisfies (2), so we can apply CT.
>>Therefore by CT, $\sum_{n=1}^\infty |a_n|$ converges!.
>>Therefore $\sum a_n$ absolutely converges by defn.  


>[!example] $\sum_{n=2}^\infty \frac{(-1)^{n-1}}{n}$. Does it CC, AC, or div?
>If we tried to prove absolute converges,  it looks to be the harmonic series. It also looks like an alternating series. 
>We check if it is an AS: $b_n = \frac{1}{n}>0$ 
>We check the first hypothesis: $\lim \limits_{n\to\infty} b_n = \frac 1 n = 0$ so (ii) holds.
>To prove the first hypothesis, we *could* use induction but plz do not that if you don't need it.
>For any $n \in \mathbb N, n \geq 2$, we *know* that $0 \leq 1 < n < n + 1\implies \frac{1}{n} > \frac{1}{n+1} \implies b_n > b_{n+1}$
>- So the idea is that we prove the thingy by letting n be arbitrary!
>
>Therefore by AST, the series $\sum_{n=2}^\infty \frac{(-1)^{n-1}}{n}$ converges.
>
>Consider $\sum_{n=2}^\infty |a_n| = \sum_{n=2}^\infty \frac{1}{n}$ is a p-series! $p = 1$. 
>Since $p =1 \leq 1$. by P-series test, $\sum_{n=2}^\infty |a_n|$ diverges
>Therefore the OG series CC's


### absolute convergence is powerful
- Well it implies convergence, that's one thing.
- convergent series are linear 
- But we've never multiplied!
- We can prove that the product of two absolute series converges.

We know that sequences have unit limits, but for series.... it's NOT UNIQUE!
- If you have a CC series, the sum is not unique. You can rearrange the terms to make the sum equal -7 or 21 or $\pi^{12}$
	- Conditionally converging series are affected by the rearrangement of terms!
	- You can prove that by rearranging the terms of a CC series, you can get *any sum you want*
- However, AC series have unique sums. 
- Just to clarify, sequences are also unique #todo find where i proved that !


### Ratio Test

>[!thm] Ratio Test (RT)
>Given $\sum a_n$, $a_n \neq 0, \forall n \in \mathbb N$
>Define $L = \lim \limits_{n\to\infty} |\frac{a_{n+1}}{a_n}|$
>> Note that $L \in [0, \infty)  \cup \set \infty$ in a sense. 
>> She wrote it like this cuz we can't include $\infty$ like a number in an interval
>
>IF L < 1, then $\sum a_n$ AC (and therefore converges)
>IF $L > 1$, then $\sum a_n$ diverges
>>IF $L = 1$, then this test is *inconclusive*; you gotta use another test
>
>>[!explanation]
>>1. Observe that L will always be non-negative as the limit of an absolute expression will be non-negative
>
>>[!proof] 
>>Given $\sum a_n$, $a_n \neq 0, \forall n \in \mathbb N$
>>Define $L = \lim \limits_{n \to \infty} | \frac{a_{n+1}}{a_n}|$
>>We have to do cases
>>IF L < 1, then we bond and use PMI (induction) w/ GS + CT to prove $\sum a_n$
>>IF L > 1 then bound and use div test to prove $\sum a_n$ diverges
>
>>[!purpose] The signal to use the RT is when we have factorials, awkward products, or exponentials.
>>It MIGHT be useful for recursive series, but I've never seen that

>[!example] $\sum_{n=0}^\infty \frac{e^n}{(2n)!}$
>- Not geo or p series (factorial is wack), div test is no, defn is no (telescoping is die), integrate that? nahhh, CT?  wait idk why we couldn't use CT #todo
> #todo note factorial grows faster than exponential
> 
> >[!proof] 
> >Find $L = \lim \limits_{n\to\infty} | \frac{a_{n+1}}{a_n}| = \lim \limits_{n\to\infty} |\frac{e^{n+1}}{2(n+1)!} / \frac {e^n}{(2n)!}|$ 
> >$= \lim \limits_{n\to\infty} |\frac{e^{n+1}\cdot (2n)! }{e^n\cdot(2n+2))!}|$
> >$= \lim \limits_{n\to\infty} e\cdot(2n)!\cdot \frac{1}{(2n+2)(2n+1)(2n)!}$ by def | | and factorial
> >$=\lim \limits_{n\to\infty} \frac{e}{(2n+2)(2n+1)} = 0$
> >So $L = 0 < 1$
> >
> >So by RT, $\sum a_n$ AC's, and so converges.

Awkward product example (and exam question!)

>[!example]  $\sum_{n=1}^\infty \frac{2\cdot 4\cdot 6\cdot 8 \cdot \cdots \cdot (2n)}{3\cdot 5 \cdot 7 \cdot 9 \cdot \dots \cdot (2n+1)}$
>Now THAT is an awkward product.
> #todo attempt this, but also try using CT and seeing how worse it might be.



#todo Factoring and cancelling out too much WILL change your L value.

#todo if AC, then does the series "regular" converge?
Ans: Lol this is what we prove this in A12. We prove that AC => Convergence. 

# Generalization of our series tests
- we studied sequences! and we added the terms to get a series! 
- What about infinite series that have variables in there
# Power series (chapter 8)
We're only going over the basics tho (8.1)

>[!defn] Power Series
>Let $a \in \mathbb R$. Let $\set{c_n}_{n=0}^\infty \subseteq \mathbb R$. A series of the form 
>$$c_0 + c_1(x-a) + c_2(x-a)^2 + \dots + c_n(x-a)^n + \dots = \sum_{n=0}^\infty c_n(x-a)^n$$
>is a power series (PS) with expanded about "$a$".
>
>- $a$ = center of the PS 
>- $c_n =$ the $n^{th}$ term coefficient of the PS
>- $c_n(x-a)^n$ is the general term of the PS
>
>>That starting number doesn't really matter, as with all things sequence-related so far.

We've already seen one though!?

>[!example] These are all PS's!
>$$1 +x + x^2 + x^3 + \cdots + x^n + \dots$$
>The $a=0$ and $c_n = 1$
>
>$$\sum_{n=2}^\infty \frac{(x-3)^n}{4^n}$$
>The $a = 3$ and $c_n = \frac{1}{4^n}$
>
>$$\sum_{n=1}^\infty \frac{(4x+1)^n}{2^n\sqrt{n}}$$
>$= \sum_{n=1}^\infty \frac{4^n (x+\frac 1 4)^n}{2^n\sqrt{n}}$ by algebra
>$a = -1/4$ and $c_n = \frac {1} {2^n\sqrt{n}}$
