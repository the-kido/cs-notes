### Using `min` and `max` (bounding)
> The upper bound is the expression that something is always larger than
> The lower bound is an expression that something is always smaller than.
> 
> The lower bound of $x \in [0, 5]$ is 0, and the upper bound is 5.

$\delta = \min\{a,b\}$ means delta will always be $\leq$ the two values. ALWAYS!
$\delta = \max\{a,b\}$ means delta will always be $\geq$ the two values. EVERY TIME!

When proving $\lim_{ x \to 5 } \frac{1}{x-3} = \frac{1}{2}$, we cannot let delta be some expression with epsilon in it, cuz delta might be large enough for f(x) to be undefined!
>[!note]- Here is a visual
![[Pasted image 20240928214031.png]]

So, we *bound* delta so that x approaches 5, yes, but also so that x does not equal 3 at any point.

We could do that with $\delta = min\{1, \_\}$ (The blank is where we solve for delta later in the proof).

- When applying a chosen value of delta in a proof, you should use $\leq$ since $\delta = \min\{1, 2\epsilon\} \leq 2\epsilon$

Also, if delta is bounded (let's say $\delta = \min\{4, 8\}$), then in your steps for proving, make sure to 

>[!example]
>$$
>\begin{align*}
> \delta + 5 + 3 & = \delta + 8\\
> & \leq (8) + 8 &&\text{You could choose 4 as well, since 8 < 4. I did 8 to throw you off}\\
> & = 16\\
>\end{align*}
>$$

##### Finding a lower bound for $\frac{x^4}{x^2 + 1}$ when $N \to -\infty$
- Since N is going infinitely small, we use $\min$ to make sure that N is sufficiently small while still having a minimum small value it can be. In this case, let's choose $N = \min\{-1, \_\} \leq -1$
x < N < -1
x < -1 
-x > 1
x^2 > 1
$\frac{1}{x^2 + 1}$



### Bounding to prevent `undefined`
>[!quote] Choose $\delta$ to avoid vertical asymptotes and points and/or points not in domain.

In the case of $\lim_{ x \to 1 } (2x^2 - \frac{1}{x}) = 1$, notice how 1/x indicates that $x \neq 0$. This means that you must limit the distance (so delta) to not exceed 1 otherwise it'll be undefined! Instead of 1, we can choose $\delta = \min\{\frac{1}{2}, \_ \}$ instead.

if you try to use the reciprocal inequality property and somehow get 1/0, then you didn't bound correctly.

### Reciprocals
- After `min`, you may use the reciprocal inequality from [[Inequalities]] to solve for epsilon (it's pretty self-explanatory when you actually do it)

### When $x \rightarrow \infty$
- You have to make the f(x) expression < epsilon in terms of `N` instead of `x`. You can do that based on the assumption that $x > N$
- Once you have f(x) in terms of N instead, you must find the value of N that will make the expression equal to M
- In situations like $\sqrt{2x+1}$, we can say it is $< \sqrt{2N + 1}$ since square root functions are always increasing. This does not apply for reciprocal functions, for example. 

### When N is not > 0
- This happens often when there is a + somewhere in your proof. For instance, $\frac{3}{4N+1}$ (N would have to be $\frac{-\epsilon + 3}{4 \epsilon}$ which is not always > 0). However, $\frac{3}{4N}$ works just fine. $

When solving for $\lim_{ x \to \infty } \sqrt{2x + 1} = \infty$ you may get an N value like $N = \frac{M^2-1}{2}$. Note that this isn't possible since N > 0 does not hold (if M is ~0, then -1/2 is negative!).
What you instead do is manipulate while taking advantage of inequalities during your rough work.
>[!example]
>We want $\sqrt{2x + 1} > M$ 
>
>
>$$\sqrt{ 2x + 1 } > \sqrt{ 2x - 2 } \text{ since 2x + 1 > 2x - 2 > 0 and since $\sqrt{ * }$ is increasing}$$
>$$\sqrt{ 2x - 2 } > \sqrt{ 2N - 2 } \text{ since x > N by assumption}$$
>$$\sqrt{ 2N - 2} = M \text{ we find what value N must be to equal M}$$
>$$2N - 2 = M^2$$
>$$2N = M^2 + 2$$ 
>$$N = \frac{M^2 + 2}{2}$$
>N is > 0 since M is > 0 
>

Of course, we could've also said 2x + 1 > 2x, and it woulda been *even easier* but this is just demonstration. There is no 1 answer for N because of the nature of implications. 4 > 2, but 4 > 3 too!

### Bounding
https://q.utoronto.ca/courses/362238/files/33416066?wrap=1 has some examples of how to visualize it
Bounding uses the assumption and choice of delta / N (a `min` with an easy number to work with, and an expression containing epsilon)

### Polynomials with an order > 1
- A general rule of thumb is, if you don't have control, know you have control over delta, so you can bound (`min`)!

>[!example]- $\lim_{ c \to 2 } x^3 = 8$
>We wanna show $|x^3 - 8| > \epsilon$
>Assume 0 < |x-2| < $\delta$
>Then
>$|x^3 - 8| = |x-2||x^2 + 2x + 4|$  by algebra
>$< \delta  |x^2 + 2x + 4|$
>$\leq \delta (|x|^2 + 2|x| + |4|)$  by triangle inequality
>Now we needa somehow control x. We can do that via minimum
>
>--Rough work--
>$\delta = \min\{1, \_ \}$ We just choose a random 1 that's easy to work with
>Then
>$|x-2| < \delta < 1$
>$-1 < x-2 < 1$
>$1 < x < 3$
>$x < 3$
>$-3 < |x| < 3$
>
>|x| < 3!
>--Rough work end--
>Back to this:
>$\leq \delta (|x|^2 + 2|x| + |4|)$  by triangle inequality
>$< \delta (3^2 + 2(3) + 4)$  by choice of delta  (?)
>$= \delta (19)$
>So delta also has to be < $\epsilon / 19$
>
>$\delta = \min\{1, \epsilon / 19 \}$ 

### $\frac{1}{x^2 + 1} \leq 1$
- This is a specific example of a rule which can be very useful!
-  Since x^2 > 0, that means it will always be less than or equal to 1; useful in many proofs!
- 




$\lim_{ x \to 2 } (x^2 -3x + 6)$
Note that $|x - 2|  < \delta$
$|x^2 - 3x + 6 - 4| = |x-1||x-2|$
We know that |x-2| is less than delta, so we can make it as small as we want.
For |x-1|, though, we cannot control how small it can be








Going off of
[How to do epsilon-delta proofs (ultimate calculus guide)](https://www.youtube.com/@blackpenredpen)
and 
[Week 4a](https://kaltura-quercus-prod.utoronto.ca/media/t/0_egf5kq1v/615745)


# Cards #calc-3 

![[Pasted image 20241213133750.png]]
#todo Why do you set N = max of N1 and N2 again?
