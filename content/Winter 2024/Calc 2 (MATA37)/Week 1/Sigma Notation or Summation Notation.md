`Pages 317-320`

> [!quote] Formal Definition
> If $a_k$ is a real-valued function of $k$, and $m$ and $n$ are nonnegative integers with $m \leq n$, then
> $$\sum_{k=m}^n a_k = a_m + a_{m+1} + a_{m+2} \dots a_{n-1} + a_n$$

> It always follows this general pattern
> $$\sum^{\text{ending value}}_{k\text{ = starting value}} (\text{function of }k)$$

Note:
1. Here are the 3 components of said notation
	1. The bottom is the initialization of the **bound variable** (it's a dummy variable)
	2. The top is integer the loop ends at (inclusive)
	3. $a_k$ is the <span class="emphasis">general term</span> (what is summed)
2. Saying that $a_k$ is a function of $k$ is just like saying $f$ is a function of $k$. It reads "$a_k$ takes $k$ and outputs something"
	1. The neat part about the $a_k$ notation is that it implies $k$ is *discrete*. Unlike functions which often take in continuous values (real numbers usually)
	2. You don't usually have subscripts as continuous values. Have you ever seen $a_{1.4}$? No you haven't
3. Sigma notation is NOT unique! 
	1. You can change some starting numbers (i.e. start at 0 instead of 1) and still come up with an equivalent some notation.

## Sum Properties
Let $\mathscr{l}, n, k \in \mathbb{Z}^+$ s.t. $k \leq n$. If $a_k$ and $b_k$ are real-valued functions of $k$:

1. $\sum(a_k + b_k) = \sum(a_k) + \sum(b_k)$ (Sum rule)
2. $\forall c \in \mathbb{R}, \sum(c \cdot a_k ) = c \cdot \sum(a_k)$ (Constant multiple rule)
3. $\sum^n_{k=1}(a_k) = \sum^{\mathscr{l}-1}_{k=1}(a_k) + \sum^{n}_{k=\mathscr{l}}(a_k)$ where 1< $\mathscr{l} \leq n$ ("Splitting a Sum")
	- Basically says if you are adding from 1-10, you can split it into 1-5, then 6-10. In this case, $\mathscr{l}= 6$, $n = 10$, and $m = 1$
	- $\mathscr{l}$ must be greater than 1 as n cannot be negative (think why!)

>[!note] $\mathbb{Z}^+$ consists of strictly positive integers. So, 0 is not included

> [!Note]  1 and 2 are linearity properties (They are good. We like them. Like in limits! And derivatives!)
## Sum Formulas
> There are 4 ones to remember!
 
If $n$ is a positive integer, then:
a) $\sum_{k=1}^{n} 1 = n$

b) $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$

c) $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$

d) $\sum_{k=1}^{n} k^3 = \frac{n^2(n+1)^2}{4}$
## Examples
>[!example] Evaluate $$\sum_{i=1}^{205}(2i-1)$$
> 1. Rewrite the general term to $2i + (-1)$ such that it looks exactly like the first sum property.
> 2. Apply the first property to get $\sum_{i=1}^{205}2i + \sum_{i=1}^{205} -1$
> 3. Then apply the second property to get $2\sum_{i=1}^{205}i -\sum_{i=1}^{205} 1$
> 4. Then we can apply sum formulas a) and b) to get 
> $$2\sum_{i=1}^{205}i -\sum_{i=1}^{205} 1 = 2 \cdot \frac{205(205+1)}{2}- 205 = 42025$$ 

`"Mathematical cookies" 🍪🍪`

# <span class="cards">Cards</span> #calc2-1
What is the formal definition of a sum using sum notation?
?
If $a_k$ is a real-valued function of $k$, and $m$ and $n$ are nonnegative integers with $m \leq n$, then
$$\sum_{k=m}^n a_k = a_m + a_{m+1} + a_{m+2} \dots a_{n-1} + a_n$$

What is the proof for sum rule for Sum notation?
?
![[Pasted image 20250108085826.png]]

What is the proof for Product Rule for Sum notation?
?
![[Pasted image 20250108085856.png]]

What is the proof for splitting a sum?
?
Let $m < p < n$
$$
\begin{align} 
\sum_{k=m}^{n}a_k &= a_m + a_{m+1}+ \dots + a_{p-1}  + a_{p}  + a_{p+1} + \dots  + a_{n-1}  + a_{n} \\
    &=(a_m + a_{m+1}+ \dots + a_{p-1}) + (a_{p} +a_{p+1} + \dots  + a_{n-1}  + a_{n}) \\
 & =\sum_{k=m}^{p-1}a_k + \sum_{k=p}^{n}a_k
\end{align}
$$
Evaluate $\lim \limits_{n \to \infty} \sum_{k=1}^n (\frac{5}{n^4})(k^3 + 1)$ 
?
We solve these kinds of questions by somehow eliminating the sigma notation to get a function we can actually evaluate. 

First, note that $\frac{5}{n^4}$ is a constant in the context of the sum notation, so we can just pull that out with Product Rule. To justify the step, we say that we can apply the const property of $\Sigma$ not since $5/n^4$ is constant w.r.t $k$

 $\lim \limits_{n \to \infty}  (\frac{5}{n^4}) \sum_{k=1}^n (k^3 + 1)$ 
Then we can apply Sum Rule
 $\lim \limits_{n \to \infty}  (\frac{5}{n^4}) (\sum_{k=1}^n k^3 + \sum_{k=1}^n 1)$ 
Using the known sum formulas we can evaluate those two sums
 $\lim \limits_{n \to \infty}  (\frac{5}{n^4}) (\frac{n^2(n+1)^2}{4} + n)$ 
Then we can distribute
 $\lim \limits_{n \to \infty} (\frac{5(n+1)^2}{4 n^2} + \frac{5}{n^3})$ 
 Factor
 $\lim \limits_{n \to \infty} (\frac{5}{4} \cdot (\frac{n+1}{n})^2 + \frac{5}{n^3})$ 
Then we can finally apply limit rules and see that the answer is **5/4**!

List the 4 sum formulas
?
(without included the repeated sum notation)
a) $1 = n$
b) $k = \frac{n(n+1)}{2}$
c) $k^2 = \frac{n(n+1)(n+2)}{6}$
d) $k^3 = \frac{n^2(n+1)^2}{4}$
One easy pattern to realize is that if the general term is degree 0, then the output is degree 1. Its `+1`


What does it mean for $a_k$ to be a real-valued function? Why is this notation used in particular?
?
$a_k$ takes in a k and spits out some number. The function is therefore 'a' and could technically be written as a(k) or something like that.
The reason we use a notation that looks like this: $f_x$ is because it implies x is an integer or some natural number, which is exactly what $a_k$ takes in (an index; a natural number) as sums increment by naturals *and* for this course we do not explore negative sums. 

Analyze the given sum's $n$, $m$ and $a_k$ values: $\sum_{i =1}^{666} \frac{(-1)^{i+1}}{i^2}$
?
$a_k = \frac{(-1)^{k+1}}{k^2}$
$m = 1$
$n = 666$


When given a sequence of summed numbers and the task of re-writing the sum with sum notation, how do we do this?
?
To solve pattern questions, try to choose one of the 3 variables in the sum notation (those being $a_k$, $m$, and $n$ where m is the start, n is the end, and $a_k$ is the function)
From there you gotta be smart!
