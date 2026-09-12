# Todo list
- When do u gotta change the int limits during u-sub or trig-sub!
	- #todo ❗❗❗❗✨✨⭐🌟
	- Refer to [[Substitution Rule (u-sub)#Example 2]]
		- Why did we not need to sub u back and keep the limits as is? 
		- I mean it makes life easier. Then why was I subbing the u back every time?
		- It's allowed so long as we've changed our <span class="emphasis">limits of integration</span>
- Find that technique John and Abi were talking about for tan^-1 that was relevant for one of the mid-term questions.
- Explain how i can show $\ln(x) < x$ by differentiating $\ln(x) - x < 0$
- Find the place where I showed the value that a recursive sequence converged to. I used the technique abi showed (this was prolly a9, maybe a10)
	- I just wanna practice that cuz i haven't seen it much other places.
	- OH i explained it in [[Winter 2024/Calc 2 (MATA37)/Week 9/Summary|Summary]]
- Do the TB questions for the interval of the ps maybe? MAYBE?
- Worry about [[(02-13) Trig Sub]] if it's a problem
	- https://chatgpt.com/share/67fd5680-85f4-8012-b3d4-2dc62cfb0d20
	- This is the question I want to know how to do.


# Ways to do things

## Using FTOC II
This is used when we're given an $F$ and want to differentiate it to $f$ for DEFINITE integrals.
#todo does it work for indefinite ones? I dont think so
1. Define $f$ and ensure it's continuous on $[a,b]$
2. Define an area accumulation function $F(a) = \int_a^b f(x)\;dx, \forall x \in [a,b]$  
Then you get that 
- $F$ is diff on (a,b) (and therefore cont on $[a,b]$)
- $F'(x) = f(x)$


## Integrating
Try to remember [[Anti-Differentiation Formulas]] and [[Integrating and differentiating EVERY trig function]]

FTOC 1
- Used for evaluating $\int_a^b f(x)\;dx$
- NOT needed for finding an anti-derivative of $\int f(x)\;dx$

FTOC 2
- Used for the conclusion that $F'(x) = f(x)$
- Instructions are given in [[Fundamental Theorem of Calculus II (FTOC II)]]


Integration notes
1. $\sin^2(x) = \frac{1-cos(2x)}{2}$ makes it easier to find an antiderivative of sin^2(x) (and cos^2(x))
2. $\sqrt{x^2} = |x|$
	1. This is SUPER important for trig sub: $\sqrt{\tan^2(x)} = |tan(x)| = \tan(x)$ ONLY IF $0 \leq x \leq \pi/2$! 
3. For PFD, the $deg(p(x)) < deg(q(x))$
	1. Do division otherwise
4. Rule 1: $\frac{-}{a\cdot b} = \frac A a + \frac B b$
5. Rule 2: $\frac - {x^3} = \frac A x + \frac B {x^2} + \frac C {x^3}$
	1. I would advice you remember the above; it's not intuitive.
6. 
Integration technique tips!

|                      |                                                                                              |                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Integration By Parts | If integrant can be written as a product<br>Can't use u-sub<br>Log or inverse trig as factor | $\int u\cdot dv = u\cdot v - \int v\cdot du$                             |
| U-sub                | Product and diff                                                                             | $\int_a^b f(g(x))g'(x) = \int_{g(a)}^{g(b)} f(g(x))$<br>Note, $u = g(x)$ |
|                      |                                                                                              |                                                                          |
|                      |                                                                                              |                                                                          |


## Proving a improper integral converges
First, recognize *if a function will be undetermined* at a certain point(s)
- If it is, then the integral might be wack too!
- If it is, then you need to the use union interval property to isolate for the issue
- e.g. $\int_{-1}^{1} \frac{1}{x}\;dx$ is an improper integral.



- Goal: show that the expression $\int_a^bf(x)\;dx$ goes to a constant number (convergence) or a non-real number of either $\infty$ or $-\infty$
	- There is no "divergence theorem"; convergence and divergence are proven *the same way* but it's good to <span class="emphasis">predict</span> what you think will happen before continuing.
- Determine the type 
	- Type 1 has a $\infty$ in the int limits
	- Type 2 has a VA at one / both of the limits.
- Depending on the type, we rewrite the integral (it could be 1-sided for Type 2, or going to infinity for Type 1)
	- Remember, you can have TWO limits if both the int limits have problems.
	- If you have two mismatching types, then split the integral up so that you only deal with 1 problem type at a time.
- Now we solve the integral like any other, except with the added bonus of being able to use the <span class="emphasis">comparison theorem</span>
	- The theorem is like this: if $f(x)$ is cont on the interval / union of intervals we're working with, and $0 \leq f(x) \leq g(x)$ and $g(x)$ converges, then $f(x)$ converges.
	- Divergence is similar but $0 \leq h(x) \leq f(x)$ 
	- Here are the steps:
		1. Show f(x) is bounded by the $x$ axis
		2. Figure out how f(x) behaves to determine if conv or div.
		3. Find a <span class="emphasis">good and explicit comparison</span> by showing $\forall x \in [1, \infty), f(x) \leq \dots \leq g(x)$ (or $\geq h(x)$ of course)
	- Tips
		- While finding a good and explicit comparison, ensure that the explicit comparison also converges / diverges depending on what you think will happen.
		- When minimizing the denom and u have two choices of functions, chose the thing that increases *slower* than the other one. 

>[!note] A case for div/conv you might find: If $\int_0^1 \frac{1}{x^P}$ and $P < 1$ then it will converge. If $P \geq 1$ then it will diverge
>This is the OPPPOSITE logic to the P-series test for series. However notice that this is because we're sorta treating the y-axis as our x-axis. 
>
>If, at 0, the function shrinks exponentially *fast enough*, then it will *diverge* because the y-value has to get *far* larger to settle than if the function grows slower. 
>- For a function to shrink fast, we either decrease the top or increase the bottom. 
>- By increasing the exponent of the bottom, we're *decreasing*
> 
> #todo go over this cuz it makes my head hurt :p
>Look at these examples:
>![[Pasted image 20250413154535.png|300]]





## Proving a sequence converges
Refer to [[(before 03-06) Sequences!|these notes]]

>[!note] Proving Convergence
>For convergence:
>1. $\epsilon-\delta$ to prove $\lim \limits_{n\to\infty}a_n = \mathscr l$
>2. Convergent properties (basically limit rules for sequences)
>3. BMCT
> 

>[!note] Proving divergence:
> 1. If it goes to infinity, use a $M-N$ proof
> 2. If it oscillates (i.e. there is a product $\cos(\pi \cdot n)$ or $(-1)^n$), then use contradiction

### Convergence
We WTS that $\lim \limits_{n\to\infty}a_n = \mathscr l$. If this *does* hold, then $a_n$ converges. That is all!
More specifically, you have to prove the expression:
$\exists \mathscr l \in \mathbb R, \forall \epsilon, \exists N > 0, \forall n \in \mathbb N, n > N \implies |a_n-\mathscr l| < \epsilon$
If we aren't given the $\mathscr l$, then we can find it easily by calculating the limit $\lim \limits_{n\to\infty} a_n$ and see what that gives.

The rest is like any other limit question, and those are great!

For weird sequences (especially recursive ones) we can use BMCT so long as the sequence is bounded abv/below for some $C$ and inc/dec for all $n$

### Divergence

> If you want to prove *divergence*, then you prove the limit does not settle to a real number. This can be done two ways:
> 
> 1. (for MOST functions, like $a_n=\frac {n^2}{n+1}$ where the limit goes to $\pm \infty$)
> $$\lim \limits_{n\to\infty} a_n = \pm\infty$$
> $\forall M > 0, \exists N > 0, \forall n \in \mathbb N, n > N \implies a_n > M$
> 
> 
> 2. (for weird functions like $a_n = (-1)^n$ which don't go to infinity but are divergent still)
> $$\text{Contradiction!}$$
> Assume $a_n$ converges to *some number* and show that it's not possible. 
> > For the above example, use cases for $n$ being even and odd. Then get different inequalities and boom, contradiction. 
 
Remember the 3 [[(before 03-06) Sequences!#^c43a61|properties of convergent sequences!]]


<span class="emphasis">Some reminders</span>:
- Watch out for when $a_n$ is undefined. Then you have to work around it by choosing N differently.
- Remember we can make a quotient bigger since $\frac{A}{B+C} < \frac{A}{B}$ where $A, B, C > 0$. this is called <span class="emphasis">minimizing the denominator</span> by Kathleen

>[!note] We always want the form $1/n^P$ where $P >0$ at the very end.
- Is this true? Also wouldn't it be $1/N^P$? Maybe we can test this theory #todo
	- Oh you just introduce N "by choice" (?). That shouldn't be too difficult. 

## Proving a series converges
- A series is a sum of items in a sequence!

Def'n of a series converging: We show $\set{S_n}$ converges!
Refer to the ways to [[Calc Exam Studying#Proving a sequence converges|prove a sequence converges]]

Now for the methods and some details about them!


| Name       | Proves what                      | How to use                                                                                                                                                                                                                                                                                                                                                                                            | When to use                                                                                                                                                                                                                   | # Converged to            |
| ---------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Properties | Conv                             | They're properties... you're given them                                                                                                                                                                                                                                                                                                                                                               | For linear combinations of converging series<br>or to use the fact that $\lim \limits_{n\to\infty}a_n = 0$                                                                                                                    | N/A                       |
| Def'n      | Conv<br>Div                      | Prove $\set{S_n}$ converges to get conv of the series                                                                                                                                                                                                                                                                                                                                                 | Telescoping series or proof questions so long as u have some sort of info about $S_n$                                                                                                                                         | Whatever $S_n$ approaches |
| Div Test   | Div                              | Find the limit of $a_n$ and ensure it's $\neq 0$                                                                                                                                                                                                                                                                                                                                                      | If you suspect divergence, it makes life easy so long as u can evaluate the limit!<br><br>NOTE: if you want to use l'hopitals rule, define a function that is cont, then differentiate that (since you can't diff sequences!) | N/A                       |
| GS Test    | Conv (can easily show AC)<br>Div | If $\|r\| < 1$, then conv.<br>If $\|r\| \geq 1$\|, then div                                                                                                                                                                                                                                                                                                                                           | If you see the form $ar^n$                                                                                                                                                                                                    | $\frac{a}{1-r}$           |
| IT         | Conv<br>Div                      | Defn a cont function via the general term.<br>Ensure it's ⬆️ and positive.<br>Then integrate, and if the integral evaluates to a real number, then it's conv. Otherwise div                                                                                                                                                                                                                           | If you cannot do *anything else* then it's probably IT.                                                                                                                                                                       | N/A                       |
| P-Series   | Conv (AC)<br>Div                 | If $p > 1$ then conv<br>if $p \leq 1$ then div<br>#todo this works with negatives right. right?<br>                                                                                                                                                                                                                                                                                                   | If you see the form $\frac 1 {n^P}$                                                                                                                                                                                           | N/A                       |
| CT         | Conv<br>Div                      | Similar to convergence theorem:<br>Find a good and explicit comparison of a general term. <br>- if $0 \leq a_n \leq b_n, \forall n \in \mathbb N$, <br>and $\sum b_n$ conv, then $\sum a_n$ conv.<br>Similar for divergence too<br>                                                                                                                                                                   | If you see the parts of another test, then CT might help brush away the bad stuff                                                                                                                                             | N/A                       |
| AST        | Conv (CC)                        | If a series is in the form <br>$b_1 - b_2 + b_3 - b_4 + \dots = \sum_{n=1}^n (-1)^{n+1}b_n$<br><br>and $b_n$ is both decreasing and vanishes <br>then the sequence converges.<br><br>Specifically, for the series $\sum_{n=1}^\infty(-1)^{n+1}b_n$ show <br>1. $\forall n \in \mathbb N, b_n \geq b_{n+1}$ OR that $f'(x) > 0$ where $f(n) = a_n$ <br>2. and that $\lim \limits_{n\to\infty}b_n = 0$. | If you cannot use <span class="emphasis">GS</span>, and if your general term has $cos(\pi \cdot n)$ or $(-1)^n$ (or an easy-to-find $b_n$ that decreases)                                                                     | N/A                       |
| RT         | AC,<br>never CC                  | Just ensure that $a_n \neq 0$ for all n.<br>Then $L = \lim \limits_{n\to\infty} \left\| \frac{a_{n+1}}{a_n}\right\|$<br><br>If $L < 1$, then AC (and $\therefore$ conv)<br>if $L > 1$, then divergence<br>else inconclusive ($L = 1$)                                                                                                                                                                 | - Power Series<br>- Factorials<br>- Awkward products<br>- Exponentials<br><br>Power Series<br>REALLY WEIRD multiplies and things<br>- factorials                                                                              | N/A                       |


### 0. Properties 
- The sum of general terms of series that do converge will also converge
- Also multiplying by a constant... these guys r <span class="emphasis">linear</span>!
- We also will ALWAYS have that $\lim \limits_{n\to\infty}a_n = 0$ if $\sum a_n$ conv.
### 1. Definition
- Only really possible if we can find a way to evaluate $\lim \limits_{n \to \infty} S_n$ or other gibberish
	- #todo find the places where def'n is used that DOESNT involve the limit just so I know it's possible to show $S_n$ converges by *another method to prove sequence convergence*
- Refer to [[Winter 2024/Calc 2 (MATA37)/Week 9/Summary|Summary]] where I show how PFD helps with def'n sequence proofs.
### 2. Div Test

### 3. Geometric Series Test (GS Test)
### 4. Integral Test (IT)
### 5. P-Series Test
### 6. Comparison Test (CT)
### 7. Alternating Series Test (AS test)
### 8. Ratio Test (RT)

## Doing CC, AC, or div questions

1. Try and figure out what you *think* it will be. 
2. Depending on that you have three options:
	1. (TOP-DOWN) if it's AC, then show that $\sum |a_n|$ converges by any of the convergence rules
		1. defn, gs, p-series, ct, and <span class="emphasis">RT</span> will come in super handy (especially RT cuz it's kinda made for this)
	2. If it's CC, then show that $\sum a_n$ converges but  $\sum |a_n|$ diverges
		2. Usually all the test are useful for this (the absolute value might help bring out other kinds of tests) except for AS lol
	3. (BOTTOM-UP) If it's div.... then just show it diverges bozo. Nothing changes.


## Power Series things

Remember a power series looks like $\sum_{n=0}^\infty c_n(x-a)^n$
- $a$ is the center. 
- $c_n$ is the nth term coefficient.
- The whole thing is the general term.
- and $x$ is a variable! 


As the textbook says, you have 3 scenarios for any power series
1. The series converges when $(x-a) = 0$
2. There is a $R \in \mathbb R^{\geq 0} \cup \set{\infty}$ s.t. the series AC when $(x-a) \in (-R, R)$ and diverges for the rest.
3. The series converges for all $(x-a)$

## Finding Radius of Convergence for PS
1. Find the $a$ and $c_n$ to confirm we have a PS
2. Use the ratio test
3. Utilize the value of $L$ to find the $R$ we're looking for
	1. Remember $L > 1$ implies divergence and $<1$ implies convergence
4. Deal with the endpoints $L$ and $-L$

>$$\text{If} R = \infty \text{ then the PS absolutely converges on }\mathbb R$$

> Note: If $R = 0$, then $|x-a| < 0$ can never hold... we wouldn't have any interval of convergence right!? Well, consider when $|x-a| = 0$. Note when $x=a$, the PS will *always converge*
> $$\text{A power series ALWAYS converges at the center when } x=a$$
> #todo How would i justify why? Would i actually plug in $x =a$ and show the series converges?



![[Pasted image 20250414092154.png]]

is $f(x^2)$ always even though?
Choose $f(x) = \sqrt{x+4}$

