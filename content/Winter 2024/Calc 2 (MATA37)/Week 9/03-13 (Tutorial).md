Tutorial 

sin(x) = x/1! - x^3/3! + x^5/5! - .... calculates sin!?

For sequences, the only real way to do calculus on it is thru convergence
$\lim \limits_{n\to\infty} a_n$ for a sequence $\set {a_n}$

A sequence always associate's a natural number with some value
monotone = inc or dec (strictly). *each value must get bigger and bigger*

$\forall n \in \mathbb Z^+, a_n \geq a_{n+1}$ (seq is increasing)
Uhh he wrote geq, not just >

<span class="emphasis">Eventually monotone</span>
- $\forall n \in \mathbb Z^{\geq10415}, a_n \geq a_{n+1}$ (seq starts  increasing at some point -- i used 10415; same for dec)

To prove a seq diverges, you prove le limit = $\pm \infty$

Limits are unique (converges to a unique value)

 He also mentioned if we have a set {a_n}
 a1, a2, ...., an
 and it approaches L
 Then f(a1), f(a2), ..., f(an) approaches F(L)
 #todo find this somewhere :()

##### example #1
We doing $\set{n^2/n^2 +n+6}_{n=1}^\infty$
Let $L = 1 \in R$
let e > 0
choose N = 6> 0 and N = 2/e > 0 (basically N = max of those two)
suppose n > N
Consider
$$
\begin{align}
|a_n - 1| &= |\frac{n^2}{n^2 + n + 6}-1| \text{by defn of }a_n \\
& = | \frac{-n - 6}{n^2 + n + 6}| \\
& \leq | \frac{|-n| + |- 6|}{n^2 + n + 6}|\ by\ \triangle\ ineq\\
& = \frac{n+6}{n^2 + n + 6}\text{ by |*| as n > N > 0} \\
&\leq \frac{n+6}{n} \text{dec denom as } n + 6 > 0 \\
&\leq \frac{n+n}{n} \text{by choice }  \\
&= \frac{2}{n} < 2/N \leq 2/(2/e) = e
\end{align}
$$


### Another example
$a_n = 2 - n^2$
1. We figure out where it goes
It looks to be going to $-\infty$
2. Prove it
WTS $\forall M > 0, \exists N > 0, \forall n \in Z^+, n > N \implies a_n <  - M$
Let M be arb
Choose N = max{1, M+2} > 0
Let n be arb
suppose n > N
Consider 
$$
\begin{align}
a_n &= 2 - n^2 \\
&\leq 2 - N^2 \text{ as } n > N \geq 1 \text{ (by choice of N!)}\\
&\leq 2 - N \text{ as } n > N \geq 1 \implies n^2 \geq N^2\\
&\leq 2 - (M+2) \text{ as } M+2 \leq N \\
&=-M
\end{align}
$$
> note 

### Another another example

$a_n = \frac{\sin(\sqrt n)}{2n}$
We know this'll converge to 0 probably. Let's prove it!

L = 0
let e > 0 be arb
choose $N = max\set{1/2e} > 0$
suppose n \in z^+, n > N arb
Consider
$$
\begin{align} \\
|a_n - 0| &= |a_n| \\
&= |\frac{\sin(\sqrt n)}{2n} \\
&= \frac{|sin(\sqrt n)|}{2n} \\
&\leq \frac{1}{2n} \text{ as } |sin(\sqrt n) \leq 1 \\
&<\frac{1}{2N} \\
... \\
&= e
\end{align}
$$
# kay now for defn exercises
#todo maybe go to OH and ask abt this again
(Convergent implies bounded). Let an be a convergent sequence.
Show that a_n is bounded. Is it true that an is eventually monotone? If not,
provide a counterexample.

1. we show it bounded abv
Want $M \in R \text{s.t.} \forall n \in \mathbb Z^+, a_n \leq M$

$\set{a_1, a_2, \dots, a_N, a_{n+1}, \dots}$
$\set{a_1, a_2, \dots, a_N} \cup \set{ a_{n+1}, \dots}$
`--------`                `------`
$\leq \max\set{...}$             $\leq L +1$
> A finite set of numbers is ALWAYS bounded; the max of a finite seq will be the max

So we want to show that $a_n$ approaches some L

$\exists N \in Z^+, \forall n \in Z^+, n > N \implies |a_n - L| < 1$ (as 1 > 9)
Pick $M = \max\set{a_1, a_2, \dots, a_N, L+1}$
Let n \in Z^+
Case 1: $n \leq N$
Then, $a_n\in \set{a_1, v\dots, a_N, L+1}$
so $a_n \leq max \set{\dots}$

Case 2: $n > N$
As $n > N$, 
$|a_n - L| < 1$ 
$=> -1 < a_n - L < 1$
$=> a_n - L < 1$
$=> a_n < L + 1$


so in both cases a_n < M as we wanta

#todo plz review. This kinda question will defo pop up on a test/quiz

	