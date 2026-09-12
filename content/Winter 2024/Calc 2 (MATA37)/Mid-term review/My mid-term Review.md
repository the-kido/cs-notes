# Past mid-term
1. Integrating circles = completing the square. Also you can confirm the area with math. 
	1. $\sqrt{-x^2+6x-8}$
![[Pasted image 20250228123313.png]]
1. #todo do we have the anti-derivative of ln ? 
2. I can do the derive and anti-derive of $3^x$ just fine.
3. I didn't do IBP correctly
4. I should ALWAYS pull out constants first to make the anti-derivative as clear as possible. I got the answer easily otherwise!!

![[Pasted image 20250228124058.png]]
-  Easy; just use the other trig id yeah
![[Pasted image 20250228125907.png]]
- DO NOT MIX VARIABLES
- I did u-sub with $u = e^x$ and I got $dx = \frac{du}{e^x}$ but x and u are being mixed which causes death.
- ALSO, $\frac{1}{e^x}dx \neq du$ since $du = e^x\;dx$. So I was double-y wrong there. 

#todo come back to this with a fresh mind


![[Pasted image 20250228130301.png]]
let $P = \set{x_i^*}_{i=0}^n$ be a Riemann partition of $[a,b]$.
Suppose $f(x) \leq 0\; \forall x\in R$
Therefore $f(x_i*) \leq 0$ as $x_i^*\in \mathbb R$ by def'n of riemann sum.

Then $cf(x_i^*) \geq 0$ by ineq props since $c <0$

With this, we can extend by saying
$$
\begin{align} 
&cf(x_i^*) \geq 0  \\ 
\implies& cf(x_i^*)\Delta x \geq 0 \text{ as } n > 0 \wedge a < b \implies \frac{b-a}{n} > 0\\
\implies & \sum_{i=1}^nf(x_i^*)\Delta x \leq \sum_{i=1}^n0 \text{ as sums perserve inequalties} \\
\implies& \lim \limits_{}
\end{align}
$$

>[!notes] For this question
>1. saying $n \in \mathbb Z^+$ is probably good (and implicit of the [[Riemann Partition]] defn)
>2. otherwise we good 

![[Pasted image 20250228175011.png]]
let a, b in R.
Suppose f is boudned on a, b
let P be any partition
Then L(f, P) = $\sum m_i (xi+1 - x_i)$ where $m_i = \inf \set{ f(x) |x \in [x_i, x_{i+1}] }$
and the same for right sum.
This means we can choose a, b. conviniently for these kinds of questions



# A6 questions
![[Pasted image 20250228204808.png]]
- Struggled mostly b/c incompetence. 
- I gotta be careful how I solve the linear system. The rest is not hard at all.

> $\frac{xe^x}{\left(x+1\right)^2}$
- integrate the abv.
- Goated question; it's just quotient rule LOL

![[Pasted image 20250228212317.png]]
- Remember that $$\int \frac{x}{x^2+1} = \frac{\ln(x^2+1)}{2}$$
- The 2 has to be divided because what does x^2 do!? It differentiates into 2x !! I forgot that and it wasted a lot of time

![[Pasted image 20250228214446.png]]
- Yay it's already factored... perhaps this is *too* easy?

![[Pasted image 20250228215523.png]]
- I am always messing up the arithmetic >:( 
- The linear solving part. OK next question I swear I will do it carefully as frick
- Otherwise it is easy
![[Pasted image 20250228225537.png]]
- Trig sub is mean and i dont like it
- #todo Can i evaluate the integral as an indefinite integral and then shove it back into the definite integral?
- ![[Pasted image 20250228230629.png]]
- Even Evan agrees so I am gonna say Yes you can.
- I will attempt this question again with this new-found information tomorrow. it should become a piece of cake. 
![[Pasted image 20250301093511.png]]

- If you have $\sqrt{cos^2(x)}$ or anything like $\sqrt{x^2}$, then result is OBVIOUSLY $|x|$ WHY DID I FORGET THAT.

![[Pasted image 20250301114853.png]]
- Can't factor; can't split. No obvious anti-derivatives. We gotta complete the square :))
- Should do u-sub first, then trig sub after. Makes things easier. #todo but *why?* Why is it easier? Why did my attempt w/ trig sub first not work!!!! I wanna do it again!
- WAIT I MIGHT KNOW. I think I should do trig first, then u-sub after to get rid of the x - 2. ahh

$\int \frac{\sqrt{x^2 - 9}}{x^2}\;dx, x\geq 3$


![[Pasted image 20250302164547.png]]
- Once you get to sin(x)cos^2(x) just do a fake usub and say "ah ha, observation!"

![[Pasted image 20250302171448.png]]
> I ALWAYS have to make sure I suffice the FTOC II antecedents. Yes, f was cont on [ln(x), sqrt(x)], but I did not explicitly explain why it was cont on [ln(x), c] for instance, so yeah i lost marks for that.
> also braindead things like "i didnt mention it was a compositoin of a polynomial" which i mean frick you.

Sigma identities
$\sum_{i=1}^n 1 = n$
$\sum_{i=1}^n i = \frac{n(n+1)}{2}$
$\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}$
$\sum_{i=1}^n i^3 = \frac{n^2(n+1)^2}{4}$
- observe how there is never a +2 so that is cool ig.

![[Pasted image 20250302174219.png]]
- the anti-derivative of this guy is nuts.
- You can kinda see the form for arctan's derivative, but the coefficient on x^2 is annoying so we gotta do a lot of extra steps :(  
- But once all that is brushed away it's pretty satisfying.
