### Rolle's Theorem.
Very similar to IVT!
>[!note] The theorem
>If 
>1. f is continuous on \[a, b]
>2. f is diff on (a, b)
>3. f(a) = f(b) (= 0)
>
>Then there is a number $c \in (a, b)$ such that f'(c) = 0. (critical point!)

>[!note] Proof!
>Assume 1, 2, 3 hold
>We have a few cases (when the function is constant, not constant)
>Case #1: Suppose f(x) = k for all x in (a,b)
>   Then f'(x) = 0 for all x in (a, b). Thus, there is a c in (a, b) with f'(c) = 0
>Case #2:  Suppose f(x) > k for some x in (a, b)
>  (Use EVT)
>  By EVT (since f is continuous on \[a, b] by assumption), f has an absolute max (and min but that's irrelevant) say at x = c
>  Note c != a and c != b since f(c) >= f(x) for all x in \[a, b] and so f(c) > k (this works since x in (a, b) with f(x) > k) and f(a) = f(b) = k.
>  By Fermat's Theorem, (since local max at c and f diff at c by assumption 2), f'(c) = 0.
>  Thus, there is a c in (a, b) such that f'(c) = 0.
>Case #3: Suppose f(x) < k for some x in (a, b)
>  Similar to the above but with min instead of max and change some inequalties
> 
>  


## Mean Value Theorem (MVT)
>[!note] Theorem
>If
>1. f is continuous on \[a, b]
>2. f is differentiable on (a, b)
>
>Then there is a number c in (a, b) such that $f'(c) = \frac{f(b) - f(a)}{b -a}$
![[Pasted image 20241215163026.png]]
> This is a very good visualization!

#### Applications
> Q: Pretend we have a function f such that f'(x) >= 2 and f(1) = 10. What is the smallest value of f(4)?
> A:|
> Note that f(x) is cont everywhere by diff --> cont. 
> (1, 4) is a subset of all real numbers
> By MVT there is a number c in (1,4) such that f'(c) = (f(4) - f(1)) / (4 -1)
> SO, f'(c) = 1/3 (f(4) - 10)
> Since f'(x) >= 2 for all x in R, then f'(c) >= 2, hence 1/3 (f(4) - 10) = f'(c) >= 2, so f(4) >= 16.
> Note that f(x) = 2x + 8 satisfies f(1) = 10, f(4) = 16 and f'(x) >= 2 for all x in R.
> - This last step is required to show that f(4) is obtainable. 


# Cards #calc-10

What is Rolle's Theorem? What is it similar to?
?
It is similar to the IVT: If
- f is continuous on [a, b], f is diff on (a,b), and f(a) = f(b) (= 0) (sometimes neglected), then there is a number c between a and b exclusive such that f'(c) = 0 (a critical point)

What does Rolle's Theorem help us show?
?
It shows us if there is a critical point in an interval of a function, or more simply when f'(x) = 0.

What is the mean value theorem?
?
Some point c on the derivative of a function f'(c) will equal the average between points a and b, assuming f is differentiable on `(a,b)` and continuous on `[a, b]`. That means, $f'(c) = \frac{f(b) - f(a)}{b - a}$ for some c

What is the proof for the MVT?
?
#todo

Recite the Mean Value Theorem
?
It is similar to rolle's theorem but without that last condition:

For a function f, If
1. f is continuous on $[a,b]$
2. f is differentiable on $(a,b)$
then for some $c \in (a, b)$,  $f'(c) = \frac{f(b) - f(a)}{b-a}$ 


Solve this: ![[Pasted image 20241215163229.png]]
?
We note that f(x) is differentiable on (1,4) and continuous on $[1,4]$. With that we can apply MVT to get $f'(c) = \frac{f(b) - f(a))}{b -a} = \frac{f(4) - 10}{3} \geq 2 \implies f(4) \geq 16$.
Then, we can just... make up a function that could work! Hey, uh, if f(x) = 2x + 8, then f'(x) is always 2, and f(1) = 10 and f(4) = 16! Therefore this is true that f(4) = 16 for sures!
#todo maybe engrain more into my head?



Answer this: ![[Pasted image 20241215163546.png]]
?
We need to show # of roots = 1. To do that, we first show # of roots >= 1, and then we show # of roots <= 1
The first part is easy; since f(0) = -2 < 0 and f(1) = 7 > 0, by using IVT (N = 0, a = 0, b = 1) there is a number $c \in (1, 2)$ such that f(c) = 0. So, there must be at least 1 c, implying there is 1 root.
The second part is to show that the number of roots is <= 1. Let's try to make a contradiction by assuming the opposite (# of roots > 1). 
This would mean there is an a and b such that f(a) = f(b) = 0. By rolle's theorem (since f(x) is differentiable on $(a,b)$ and continuous on $[a,b]$  by properties of polynomials) we have that there is a number $c \in (a, b)$ such that f'(c) = 0. However, $f'(x) = 20x^4 + 3x^2 + 7 > 7 > 0$, so we've derived a contradiction!!!!!!
Therefore, the # of roots is <= 1. Therefore, there is exactly 1 root. yay.