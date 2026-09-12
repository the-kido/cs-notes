## 

>[!def]  Intro Series (chapter 7.3; pg. 606)
>Let $\set{a_n}$ be a sequence.
>The formal sum $$a_1 + a_2 + \dots = \sum_{n=1}^\infty a_n$$
>is called a <span class="emphasis">series</span> (specifically an infinite series)
>
>($a_n$ is now  the general term... of the series!)




>For each $n\in\mathbb N$, the <span class="emphasis">finite sum</span> $S_n = a_1 + a_2 + \dots + a_n = \sum_{}$ is called the $n^{th}$ <span class="emphasis">partial sum</span> of $\sum a_n$
>- it adds all the values up to the $n^{th}$ value
>- e.g. $S_2 = a_1  + a_2$

>[!note] $\sum_{n=1}^\infty a_n \approx S_n$

If we can get a "finite sum" (by somehow adding up an infinite number of items) then the series converges. Otherwise it diverges.

$\sum a_n$ is the notation for a series by convention.
if no index for a sequence is given, it defaults to $n=1$

>[!defn] Given $\sum a_n$. We say $\sum a_n$ converges if $\set{S_n}$ converges 
>i.e. $\lim \limits_{n\to\infty} S_n$ exists
>where $S$ is some $S \in \mathbb R$
>- S is the sum of $\sum a_n$.
>If $\sum a_n$ does NOT converge (i.e. if the limit doesn't exist), then it diverges.
>
>>[!explanation]
>>We can write $\sum_{n=1}^\infty a_n= \lim \limits_{n\to\infty} S_n$

#### Example
We want to prove a series converges. 
But problem: How do we take a limit of infinitely many items as $S_n$ contains!?
Ans: We have some special series where we *can* write $S_n$ finitely.

The below example is one such series.
>[!example] Does $\sum_{n=1}^\infty \ln(\frac{n+1}{n})$ conv or div?
>>[!proof] 
>>We wanna find $\lim \limits_{n\to\infty} S_n$
>>
>>We know $\sum_{n=1}^\infty [ln(n+1) - \ln(n)]$ by log laws
>>- ... wait this is a [[Telescoping Series]]! 
>>(In order to evaluate the limit with $S_n$, we need to find a finite term to evaluate it with! Clearly evaluating infinite numbers is impossible!)
>>So $S_n = a_1 + a_2 + \dots + a_{n-1} + a_n$ by def'n
>>$=(\ln(2) - \ln(1)) +(\ln(3) - \ln(2)) + \dots+ (\ln(n) - \ln(n-1)  + (\ln(n+1) - \ln(n))$
>>$=-\ln(1) + \ln(n+1)$
>>$=\ln(n+1)$
>> Thus $\lim_{n\to\infty} S_n = \lim_{n\to\infty} \ln(n+1)$
>> $=\infty$
>> So the limit does not exist.
>> $\therefore$ our series $\sum_{n=1}^\infty \ln\frac{n+1}{n}$ diverges

Conclusion: The intro series / partial sums are convenient to use when we have telescoping series! 

>[!note] it's best to show the first two and last two items of a telescoping series as to make the pattern clear



Ohh limits don't exist if it evaluates a *number*. $\infty$ isn't a number. ohhhh. OHHHH


# tools to solve for convergence / divergence
holy frick
pg. 607

>[!thm] Properties of convergent series
>IF $\sum a_n$ and $\sum b_n$ both converge to $c, s \in \mathbb R$ respectively.
>THEN 
>1. $\sum(a_n + b_n)$ converges to $c+s$
>2. $\forall k \in \mathbb R, ka_n$ converges to $kc$
>	
>Woop woop convergent series are linear
>	
>3. ( Vanishing Condition ]
>- As  you keep summing, those last numbers, the googleplex number, gets infinitesimally small
>- $\lim \limits_{n\to\infty} a_n = 0$ 


>[!proof] Proof of property 3
>
>Suppose $\sum a_n$ converges to some $s$
>i.e. $\lim \limits_{n\to\infty}  S_n = s$ where $S_n = a_1 + \dots + a_n$
>
>Consider $\lim \limits_{n\to\infty} a_n$
>$=\lim \limits_{n\to\infty} [a_n + (a_1 + a_2 + \dots + a_{n-1}) - (a_1 + a_2 + \dots + a_{n-1})]$
>$=\lim \limits_{n\to\infty} [S_n - S_{n-1}]$ genius
>$=\lim \limits_{n\to\infty} S_n - \lim \limits_{n\to\infty} S_{n-1}$ 
>$=s - s$   `(***)`
>$=0$
>as required.

`(***)` special note
She's basically like, and this is not formal this is just for reasoning, that $S_n  = S_\infty$, so $S_{n-1} = S_\infty$ too!




