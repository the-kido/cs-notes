Chapter 7 time. Specifically 7.1 and 7.2

This lecture was <span class="emphasis">online</span> btw. You can rewatch it if you want to


Roughly, a sequence of rea numbers is an infinite ordered list of numbers

>[!defn] An (infinite) sequence (pg. 529)
>An (infinite) sequence of real numbers is a function whose domain is $N = \set{1, 2, 3, 4, \dots}$ (can only take natural numbers) 
>
>There are a few ways to denote a sequence.
>
>Denoted via set notation: 
>- $\set{a_n}_{n=1}^\infty$
>- $\set{a_n}$ (by convention, if we don't get the initial value, it'll be 1)
>- $a_n = f(n)$ (a function in terms of $n$)
>- A set of a_n's  
>where $a_n$ is called the <span class="emphasis">general term</span> (or $n^{th}$ term) of our sequence. 
>
>
>>[!explanation] Notice that every natural number has associated some real number in the sequence "list". A dictionary!

Natural numbers start at 1!

>[!example]
>
>1/1, 1/2, 1/3, 1/4, 1/5, ... 1/n 
>The general term, $a_n = 1/n$; it describes how the rest of the numbers in the list is created


>[!example] What is the general term for $-1, 1, -1, 1, -1, 1, \dots$
>$a_n = (-1)^n$
>To check / proof your answer is correct, you do [[Induction Proofs|induction]] (WHAT THE FRICK)

![[Pasted image 20250306082832.png]]
When graphing the general term's function will give a bunch of dotes. We are interested in the "asymptotic behavior", or what is happening to these terms as n goes to infinity... or "convergence!"


>[!example] What happens as $n\to\infty$?

>[!defn] Given (a sequence) $\set{a_n}$, we say $\set{a_n}$ converges to $\mathscr l \in R$  iff $\exists \mathscr l \in \mathbb R, \forall \epsilon > 0, \exists N > 0 \text{ s.t. }\forall n \in \mathbb N, \text{ if } n > N,\text{ then } |a_n - \mathscr l| < \epsilon$ (pg. 595)
>
>>[!explanation]
>>It's like the limit definition, except instead of x's we have n's and instead of f(x)'s we have a_n's 
>>Note we include the $\exists \mathscr l \in \mathbb R$ part since it's more general
>>(sometimes we were given the value we approached, but $\mathscr l$ represents that!) 
>>
>>$\epsilon$ is a tiny number; $N$ is a big number
>>
>>$\mathscr l$ is the limit of our sequence


>[!defn] Denoting convergence
>We denote convergence as $$a_n \to \mathscr l \text { as }  n\to \infty$$
>or 
>$$\lim \limits_{n\to\infty} a_n = \mathscr l$$


>[!defn] Proving divergence
>If $\set{a_n}$ doesn't converge, then we say it diverges. It simply be the negation of le way to prove ze convergence 

>[!example] Let us prove that $\set{\frac{(-1)^n\sin(n)}{n^2}}$ converges to $0$.
>Our general term is the big thing in the middle; we're already given the $\mathscr l$ too! So we can ignore that quantifier.
>
>>[!proof]
>>WTS $\forall \epsilon > 0, \exists N > 0 \text{ s.t. } n > N \implies |a_n - 0| < \epsilon$
>>Let $\epsilon > 0$ be arbitrary.
>>Choose $N =\_\_\_\_ > 0$ (in the future N will become $\sqrt{1/\epsilon} > 0$)
>>Suppose $n > N$
>>Then
>>
>>
>>
>>

$$\begin{align} 
|a_n - 0| &= |a_n| \\
& =\Bigg|\frac{(-1)^n\sin(n)}{n^2}\Bigg|\\
& = \frac{|(-1)^n\sin(n)|}{|n^2|} \\
& = \frac{|\sin(n)|}{n^2} \text{ as } |(-1)^n| = 1 \text{ and } |n^2| = n^2\\ 
&\text{(now we want to bound N above)} \\
& \leq \frac{1}{n^2} \text{ as } -1 \leq \sin(n) \leq 1 \\
&\text{then on the side we observe (*)} \\
&< \frac{1}{(1/\epsilon)} \\
&=  \epsilon
\end{align}$$

This is the `(*)` I am referencing above
![[Pasted image 20250306090239.png|298]]


>[!proof] Prove $a_n = \frac{n^2 - 2}{n^2 + 2n + 2}$ converges
>(You can evaluate $\lim \limits_{n\to\infty} a_n$ to find an $\mathscr l$ to choose)
>
>Choose $\mathscr l = 1 \in \mathbb R$
>Let $\epsilon > 0$ be arb.
>Choose $N = > 0$
>Assume $n > N$
>ehh the rest is screenshotted
>
>Remember we can make a quotient bigger since $\frac{A}{B+C} < \frac{A}{B}$ where $A, B, C > 0$. this is called "minimizing the denominator" by kathleen

>[!note] We always want the form $1/n^P$ where $P >0$ at the very end.

So the steps are like this:
1. Assume the things and whatever
2. Do algebra to get the form 1/n^P where P > 0
3. Introduce N by choice
4. Make the end = epsilon and find what N must be to equal epsilon.

## Proving divergence

>[!proof] Prove $\set{n^2}$ is divergent.
>Notice $a_n \to \infty$ as $n \to \infty$
>
>WTS $\lim \limits_{n \to \infty} a_n = \infty$
>WTS $\forall M > 0, \exists N > 0, n > N \implies a_N > M$
>
>(The first quantifier controls the *output*! (We want M to be big.) The second quantifier controls the *input*. (We want N to be big.) )
>
>Let M > 0 be arb.
>Choose N = `__`$\sqrt{M}$`__` > 0
>Suppose n > N
>Then 
>$a_n = n^2 > N^2$ given $n > N > 0 \implies n^2 > N^2$ (why does squaring preserve [[Inequalities]]? #todo like what's the justification)
>


>[!proof] Prove $a_n = 1 + (-1)^n$ diverges
>Graphing it, we see that not all epsilons can bound the function!
>>Suggestion: if we have a bad-behaving function like this that goes up and down, we can use a contradiction.
>
>Assume $a_n$ converges to some $\mathscr l \in \mathbb R$ (for contradiction)
>Let $\epsilon = 1$ (we choose 1 for convenience; may change later)
>We have $\exists N > 0 \text{ s.t. } n>N\implies |a_n - \mathscr l| < 1$
>(since the graph looks weird for even and odd $n$'s, we split this up)
>
>Case: $n > N$ is odd:
>Then $|a_n - \mathscr l| < 1 \implies |1 - 1 - \mathscr l| < 1 \implies -1 < \mathscr l < 1$ (by def'n of $a_n$, then some absolute properties)
>
>Case: $n > N$ is even:
>Then $|a_n - \mathscr l| < 1 \implies |1 + 1 - \mathscr l| < 1 \implies |\mathscr l - 2|< 1 \implies 1 < \mathscr l < 3$ 
>
>
>So $\exists \mathscr l \in R$ s.t. $\mathscr l \in (-1, 1) \cap (1, 3) = \emptyset$. Soo.... there doesn't exist an $\mathscr l$!
>$\Rightarrow\Leftarrow$
>$\therefore \set{a_n}$ must diverge


#todo 
>[!example] Proof $\set\frac{2x-1}{n-3}$ converges to 2

>[!thm] Properties of Convergent Sequences
>Let $\set{a_n}, \set{b_n}$ be sequences. Let $a, b \in \mathbb R$
>IF $a_n \to a$ and $b_n \to b$
>THEN 
>1. $\set{a_n + b_n}$ converges to $a +b$, or $\lim \limits_{n\to\infty}(a_n + b_n) = \lim \limits_{n\to\infty} a_n + \lim \limits_{n\to\infty} b_n$ (Hey that's just limit laws) 
>2. For any $c \in \mathbb R$, $\set{ca_n}$ converges to $ca$
>3. $\set{\frac{a_n}{b_n}}$ converges to $\frac a b$ so long as $b \neq 0$ and $b_n \neq 0$
>
>We even have that $\set{a_nb_n}$ converges to $ab$ as we've shown in [[03-06]]
>Basically any "limit law" holds for these guys! Anything that maintains the number they converge to.

^c43a61


