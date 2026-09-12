We'll be treating conditional expectations as functions. 

$E(Y) = E(E(Y|X))$
- To get $E(Y)$ we need to integrate using $Y$ but sometimes it's hard to get $Y$ but easy to get $Y|X$
Proof is given in notes. You use the $P_{X, Y} = p_{Y|X}\; p_X$ fact

### Example with 3 coins
Y is not binomial since probability is itself probabilistic 

Let $Y$ = # heads in 5 flips and $X$ = chosen coins' probability for heads 
- So $X$ ~ Discrete Uniform(1/4/ 1,2, or 3/4)
- $Y|X \sim$ Binomial(n = 5, p = x)
	- Now it's binomial since we have the probability! And it's just $X$
	- WOWW Thats so cool

Then we can use the LoTE to find $E(Y)$
And you get a number. Horray.

### Taw of Total Variance
$$V(Y|X) = E(Y^2 | X) - [E(Y|X)]^2$$

Also, using the fact that $$V(Y) = E(Y^2) - E(y)^2$$
We can also define the **LoTV**:
$$V(Y) = E(V(Y|X)) + V[E(Y|X)]$$
### Example
finish later (29:00)

## Bivariate Normal
#todo I don't think I'll need this for tomorrow. 