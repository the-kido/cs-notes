### What the heck is a multivariate
- We assign outcomes numbers (that's what RV's do!)
- For an outcome, you can quantify different aspects. For instance, X(a) and Y(a) are both assigning outcome $a$ to a number, but they may be different! 1 outcome, 2 different numbers!
	- For the example he gave (look at below image), $s$ could be, idk, $7 = (1, 6)$, where the first die was $1$ and the second was $6$. That means $X(s)=1$ and $Y(s) = 6$

Instead of thinking of the mappings of X and Y as separate real lines, why not combine them to make a cartesian product space!
![[Multivariate cartesian.png]]
(Graph is at an angle for 3D)
- Note one outcome $s$ is related to both $X(s)$ and $Y(s)$ as shown in its mapping.
- Takes *two* RV's. The probabilities of the RVs become the X and Y axis

#### Joint Distribution
- For two RVs, we can define events (and therefore probability) based on the combinations of values of X and Y
- The <span class="emphasis">Joint (Bivariate) Distribution</span> is the *collection* of all probabilities:
$$P( (X, Y) \in B ) = P(\set{s \in S: X(s), Y(s) \in B}), \forall B \subseteq \mathbb R^2$$
- Reads as "The chance that combo of outcomes belongs to $B$".
	- $B$ is some set--some "event space". It's a bunch of pairs of $(x,y)$ pairs (i.e. in it's a subset of $\mathbb R^2$) 
![[Joint Distribution visual.png]]

#### Joint PMF for discrete RV's X and Y
- The <span class="emphasis">Joint (bivariate here) PMF</span> is:
$$ p_{x, y}(x, y) = P(X = x, Y = y) = P(\set{X = x} \cap \set{ Y = y})$$
- This gives the chance for every possible pair of $X$ and $Y$ outcomes
- Reads as "gives the chance that the first RV assumes the first value, and the second RV assumes the second value
	- With $X, Y$, it would be: The chance that $x=X$ *and* $y = Y$ 
- If you "fix" any of the two values, it becomes a real line (So just $\mathbb R^1$) because it's not $\cap$'d anymore.

>[!example] Two Dice Example
>($X_{min}$ is the minimum of the two numbers in the tuple)
>The values it holds is from 1 to 6. Same for max.
>
>Outcomes of two dice look like $(4, 3), (5,1), (3,4), etc.$.
>But not all of them are in the 2D random variable defined as $(X_{min}, X_{max})$! 
>- For instance, everything in that green triangle has a probability. The rest have a probability of $0$ (since, for instance, $(2, 1)$ is not in the form $(X_{min}, X_{max})$. You can also say: $P(X_{min} = 2, X_{max} = 1) = 0$ )
>
>![[Multivariable min max question.png]]
>
>
>To find the PMF we notice that for all outcomes, 
>$(X_{min}, X_{max}) \in \set{(x, y) : 1 \leq x \leq y \leq 6}$ 
>
>
>We find $$p_{X_{min}, X_{max}}(x, y) = P(X_{min} = x, X_{max} = y) = \begin{cases}
>1/36, & 1 \leq x =y \leq 6\\
>2/36, & 1 \leq x < y \leq 6\\
>0, &\text{o/w}
>\end{cases}$$
>
>How?
>- The first case is $1/36$. We summarize all outcomes of the 2D RV whose pair is the same number twice. There is a 1/36 chance to get each of them.
>- The second case is $2/36$. For instance, rolling a $2$ and a $4$, or a $4$ and a $2$ are equivalent to $(2, 4)$. Both are part of the 2D RV's outcomes.
>	- This is not to be mistaken with the outcomes of rolling 2 6's. In that set, there is a $(4,2)$, but in the 2D RV, there is $(2,4)$ but *twice*.
>##### Showing validity
>Note: He shows the general "summation" notation but in our case it's easier than that. We can use logic
>
> For showing the sum is $1$, $15$ comes from $6 \choose 2$ since from the 6 dice, if we want to choose 2 unordered (that's why we have 2/36 after all) then. 
> - You could also just use the diagram. Don't use the choosing thing in this example. 
>

## Marginal PMF from joint
Helps show how one variable works respectively of another (by setting the other constant)
$$p_X(x) = P(X = x) = \sum_yP(X = x, Y = y) = \sum_y p_{x, y}(x, y)$$
- This goes from a 2D grid to a 1D grid. It finds the "sum" of a row/column, so to speak.

>[!example] Same example as above but finding the PMF of $X_{min}$
>![[Pasted image 20251110172727.png]]
>
>Note we hold $X_{min}$ to 1, 2, 3, 4, 5, 6 and find what the rest of the sum for the row is to find the PMF

### Refresher on **binomial** coefficient:
> Pretend you have $n$ elements, $n \choose k$ gives the **number of ways** to create $k$-sized subsets from $n$ elements. The complementary is also created, too! After choosing $k$ elements, there are $n-k$ left-over elements. That's why ${n \choose k} = {n \choose {n - k}}$

But How about creating $l$ number of subsets?
#### Multinomial Theorem
Similar to binomial theorem: $(x + y)^n = \sum_{k=0}^n {n \choose k} x^{n-k}y^k$

But instead it's 
![[Multinomial Theorem.png]]
🥶🥶🥶
## Multinomial Coefficients
- Extension of binomial coefficient
- Creates $l$ subsets from $n$ total elements, all non-overlapping, creating a partition. The $l$ subsets' size should add back up to $n$
- The *number* of ways to do that is given by ${n \choose {k_1, k_2, \dots, k_l}} = \frac{n!}{k_1!k_2!\dots k_l!}$ where $\sum_{i=1}^l k_i = n$ 
	- This creates a sets of size $k_1, k_2, \dots k_l$. The coefficient above is the number of ways to do that
## Multinomial Distribution
- Similar to binomial distributions (but each trial is binary)
	- The binomial distribution is the special case where $k=2$ 
- In this case, each trial has *multiple* ($k$) options!
- Used for $n$ *independent* trials, each result being one of $k$ categories with corresponding probabilities $p1, \dots, p_k$!

The Multinomial PMF gives the probability of any arrangement of the trials and their types:
$p(x_1, \dots, x_k) = \frac{n!}{x_1! \dots x_k!}p_1^{x_1}\dots p_k^{x_k}$ for $\begin{cases} x_1, \dots, x_k \geq 0\\ x_1 + \dots + x_k = n \end{cases}$


### RPS example
$(X_W, X_D, X_L) \sim \text{Multinomial}(n = 10, p_W = p_L = p_D = \frac 1 3)$
- That's how you use multinomial! 
	- e.g., $X_W$ is the number of "wins" within 10 games

Let's find the *marginal distribution of wins*
- The chance of a win is 1/3. We don't care about the other results. This is just a binomial distribution!
- $X_{win} \sim \text{Binomial}(n = 10, p = 1/3)$
- We're gonna derive this using the multinomial distribution and formula for marginal *for practice*
>[!example] Goin' the long way to prove a point.
>We define RV's $X_W, X_D, X_L$ to be # of wins/draws/losses in 10 rounds. Note that $X_L = 10 - X_W - X_D$ #todo couldn't we just use multinomial definition? Idk, probably.
>
>Also we know that $p_{X_W, X_D, X_L}(x_W, x_D, x_L) = \frac{10!}{x_W! \cdot x_D! \cdot x_L!} \cdot \frac{1}{3}^{x_W} \cdot \frac{1}{3}^{x_D} \cdot \frac{1}{3}^{x_L}$
>
>Now we use the marginal. This is what we were tryna solve for anyway:
>$p_{X_W}(x_w) = \sum_{X_D, X_L} p_{X_W, X_D, X_L}(x_W, x_D, x_L) = \sum_{x_D = 0}^{10 - x_W}$
>- Note the sum goes up to $10 - x_W$ because "x_W" is fixed and therefore we know there will always be $x_W$ wins.
>- 
> The rest is aids #todo but we use the binomial theorem LOL

I can finish it later when I want to



