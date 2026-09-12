If f is <span class="emphasis">continuous</span> on a <span class="emphasis">CLOSED</span> interval $[a,b]$, then f will attain both a max and a min value on $[a,b]$.

- It has to be continuous or closed to avoid these scenarios:
![[Pasted image 20241214103505.png]]

>[!check] The Proof
>"if f is cont on $[a,b]$, then f takes a max and min value on $[a,b]$
>
>Proof:
>Assume f is cont on $[a,b]$
>By boundedness theorem, we have that f is bounded on $[a,b]$.
>By least upper bound property, f has a supremum M on $[a,b]$ 
>We want to show that M is also a maximum, not just a supremum. This would mean that $\exists c \in [a,b] \text{ s.t. } f(c) = M$
>That's hard to find; let's contradict that statement. Suppose there is *no* such c.
>Then $f(x) < M$ for all $x \in [a,b]$ (cuz M is still the supremum; just not the max)
>(We now need to show that M is NOT a supremum somehow)
>Define $g(x) = \frac{1}{M - f(x)}$.
>Since M - f(x) > f(x) - f(x) = 0 for all $x \in [a,b]$, we have g(x) > 0 too.
>Also, g(x) is continuous on $[a,b]$ since f(x) is continuous on $[a,b]$
>So, by boundedness theorem, g(x) is bounded on $[a,b]$
>Therefore, there exists a K > 0 such that |g(x)| < K, or -K < g(x) < K for every $x \in [a,b]$
>So, $\frac{1}{M - f(x)} \leq K$, which implies $M - f(x) \geq 1/k$.
>Thus, $f(x) \leq M - 1/K$
> #todo I don't get THIS step: This contradicts the assumption that M is the supremum of f(x) on $[a,b]$
> So, there *does* exist a $c \in [a,b]$ such that f(c) = M.
> So, f has a maximum on the interval.
>
>The "minimum" way is just as easy, so long as you swap some things around. 

Slide 7a version. 
![[Pasted image 20241214122241.png]]

# Cards #calc-7 
What is EVT and what is it useful for?
?
EVT states that a continuous function on a closed interval will have a maximum and minimum somewhere in th
e interval. 
It's used in Rolle's theorem, absolute max and minimums, etc. 

T/F. If $f(x)$ is not continuous, or the interval is open, then EVT can still apply and we are guaranteed an absolute max/min
?
False.