>Chapter 5.6

### Preamble
Before, we assumed $\int_a^b f(x)\;dx$, we had a and b be real numbers. 
1. Our interval of integration has always been *bounded* (i.e. b has never gone to infinity for instance).
	1. $[a,b]$ is bounded (the integration limit is bounded)
2. $f(x)$ is bounded on $[a,b]$ (i.e. no VA's on $[a,b]$)

If either fail, we got an <span class="emphasis">improper integral</span>.

> All of the techniques we used relied on FTOC 1 in a sense, or at least they all relied on the fact that f was continuous. However, in these scenarios f may not be continuous and the integration bounds may not be a constant number!

>[!defn] Type 1 and Type 2 improper integrals
>In the above forms, we definitely cannot use our old tools. So instead we rewrite these expressions!
> 
>Type 1: At least 1 limit bound goes to a non-real number ($\infty$ or $-\infty$)
>
>Type 2: At least 1 limit bound, when plugged into $f(x)$, results in an undefined function
>- Means there's a VA or the like. Of course, holes don't matter when it comes to integration!
 >
>> - Type 1 deals with two-sided limits. Type 2 deals with 1-sided limits.

> Note

Here are some examples
1. $\int_1^\infty \tan^{-1}\;dx$ 
	1. The integration limit is not bounded
	2. Type 1
2. $\int_2^8 \frac{1}{\sqrt{x-2}}$
	1. It has a VA at $x = 2 \in [2, 8]$ 
	2. Type 2
3. $\int_{\pi/2}^\pi \csc(x)\;dx$
	1. Fails the fact that $f(x)$ is bounded. Consider $\frac{1}{\sin(x)}$  when $x = \pi$. Clearly there is an asymptote.
	2. Type 2
4. $\int_{-1}^1 x^{-2}\;dx$
	1. Volcano graph hehe. Anyway there is a VA at $0\in [-1, 1]$.
	2. Type 2
5. $\int_{-\infty}^{-1} \frac{\cos^2(x)}{1 + x^2}$ aak i didn't finish it 
	1. It is not a bounded integration limit
	2. Type 1

## Examples
### Ex 1: Evaluate $\int_1^\infty \frac{1}{(3x+1)^2}\;dx$ 
SOLN:
1. We find what condition it fails (it is a type 1!).
2. We "take" the problem limit and use a number to represent it (we chose "A"). This "A" is an arbitrary element in the interval. And it needs to approach the problem point (infinity).

So it equals $=\lim \limits_{A\to\infty} \int_1^A \frac{1}{(3x+1)^2}$.
#todo Doesn't A at some point be less than 1. ehh maybe not.
- We then write the integral as a function of A (it's an area accumulation function) and then solve the limit of this brand nwe function.
- So we first evaluate the integral!
$= \lim \limits_{A\to\infty} -1/3(3x-1)^{-1} \big|_1^A$ (Looks like a USUB but you could also use observation)
$=\lim \limits_{A\to\infty} -1/3(\frac{1}{3A+1} - \frac{1}{4})$
$= \frac{-1}{3}(0 - 1/4)$
$=1/12$

Easy peasy. Wow that is beautiful. 

#### New vocabulary time
1. We made this limit that came from the definition of the indefinite integral. We say that the indefinite integral converges to that number.
2. If we don't get a number like this, it "diverges". 
3. Geometrically, convergent improper integrals give the EXACT area. Thats wild. 

$\therefore$ our improper integral CONVERGES to $\frac{1}{12}$
### Ex. 2 Does this converge or diverge. If convergent, then to what value?
$\int_0^5 \frac{\ln(x)}{x}\;dx$
1. It is a type 2 improper integral (the lower integration limit specifically)

$=\lim \limits_{A\to0^+} \int_A^5 \frac{\ln(x)}{x}\;dx$ for some arbitrary A that approaches the right-hand side of $0$ (by definition of type II)
- It looks like a USUB. Let $u = \ln(x)$ cuz we know the anti-derivative of it.
	- You DONT have to change the integration limits when doing UBUB (this is an aside)
(I took a photo for evaluating the anti-derivative)
$= \lim \limits_{A\to 0^+} \frac{\ln(x)^2}{2} \Big|_A^5$
$= \lim \limits_{A\to 0^+} \frac 12({\ln(5)^2} - {\ln(A)^2})$
- Note that $\ln(A)$ goes to $-\infty$ by the graph. So square that and you get $\infty$
$= -\infty$
uhhh it's not a number. The limit does not exist, so it <span class="emphasis">diverges</span>
$\therefore$ our improper integral diverges


### Ex. 3 $\int_{-1}^1 x^{-2}\;dx$
It's clearly type 2 (x = $0 \in [-1, 1]$ is a VA)

SOLN:
$=\int_{-1}^0 x^{-2} + \int_0^1 x^{-2}$ since $x = 0 \in [-1, 1]$ by type II 
- She said smth abt this not being the union interval property
$= \lim \limits_{A \to 0^-} \int_{-1}^A x^{-2}\;dx   + \lim \limits_{B \to 0^+} \int_B^1 x^{-2}\;dx$ by def'n of type II
- We know that two convergent integrals added together will be convergent.
	- If we do get something diverging, we have to explicitly explain why we don't get a $\infty - \infty$ scenario (i.e. an <span class="emphasis">indeterminant form</span>)
- We don't have to evaluate every limit to find one that diverges. That is "overkill"

> Consider $\int_{-1}^0 x^{-2}\;dx = \lim \limits_{A\to0^+}\int_{-1}^A x^{-2}\;dx$
> $=\lim \limits_{A\to 0^-} -\frac{1}{x} \Big|_{[1]}^a$
> $=\lim \limits_{A\to 0^-} -\frac{1}{A}+\frac{1}{-1} = \infty$
>$\therefore$ the limit does not exist. So the limit abt is divergent.

Note $x^{-2} > 0 \implies \int_0^1x^{-2}\;dx \geq 0$. In particular, $\int_0^1x^{-2}\;dx \neq  -\infty$.
Therefore this is most certainly diverges as we do not get an indeterminant form.


I recon this will be SUPER Important for the exam; it lets you ignore one half of the integral for type II 


### Ex. 4. converge or diverge?

$\int_{-\infty}^1 \frac{1}{x-1}\;dx$
oh boy it's type 1 and type 2. We want to deal with 1 point per integral by splitting things up
$=\int_{-\infty}^0 \frac{1}{x-1}\;dx + \int_{0}^1 \frac{1}{x-1}\;dx$ 

#todo Finish this. seems not so bad


### Ex. 5 conv or div $\int_{-2}^\infty \frac{(\cos(3x^2+1))^{10}}{(x^{1874}+x^2+\pi)^2}$
- yeah we're not integrating that. In that sense it's defo not convergent lol (meta gaming)


QN: How to know if an improper integral converge or diverge?
1. By "definition". like literally calculating (as we've been doing above)
2. A new theorem; the "<span class="emphasis">comparison theorem</span>"
	1. We compare an ugly function to a nice function that you can prove the easier guy's convergence with, then somehow transfer that answer to the ugly guy.

>[!thm] Comparison Theorem (pg. 471) (aka Direct Comparison Theorem) (aka CT)
>The ugly one will always be $f$. The nice ones will be  $g$ or $h$
>
>Suppose $f,g,h$ are continuous on interval (or union of interval) $I$
>Let $\int_I f(x)\;dx$ be an improper integral. (weird notation #todo)
>> ==Convergence==
>> IF $0 \leq f(x)\leq g(x)\; \forall x \in I$ and $\int_Ig(x)\;dx$ converges.
>> THEN $\int_If(x)\;dx$ also converges
> 
>>==Divergence==
>>IF $0 \leq h(x) \leq f(x) \; \forall x \in I$ and $\int_I h(x)\;dx$ diverges
>>THEN $\int_I f(x)\;dx$ also diverges.

It's like squeeze theorem. 

#todo What "is" convergence? The definition?
ig the comparison theorem gives exactly that. There are plenty of functions that converge but don't have an integral value anyway, right!? #todo



#todo Try this with $\int_{-2}^2 \frac{1}{x}$. I recon this will give an indeterminant form.
- it will!


#todo Also explain why 1/x diverges but not $e^{-x}$
- It doesn't shrink fast enough to diverge.
- P-series test tells us "how fast is fast enough". For a function ${x^n}$ Any exponent $n \leq -1$ will be "too slow", for instance. if n > 1, it will grow, not shrink...


