There are 5 (6 in the textbook, 5 in the week 4 slides)
### The 5 rules we've learned
- $\lim_{ x \to c } a = a$
- $\lim_{ x \to c } x = c$
- $\lim_{ x \to c } [f(x) + g(x)] = L + M$
	- Sum rule
- $\lim_{ x \to c } [f(x) \cdot g(x)] = L \cdot M$
	- Product rule
- $\lim_{ x \to c } \frac{f(x)}{g(x)} = \frac{L}{M} \text{provided } M \neq 0$
	- Quotient Rule
The rest of them we are meant to prove.
## Solving limits via the rules 
The above rules can only be used in polynomials and rationals. No other fancy things
To solve correctly, every term must be either `x` or `a` (constant) (so we can use the [[Limit Rules#The 5 rules we've learned|1st and 2nd]] rules)

>[!note] They can only be applied <span class="emphasis">if the individual limits exist</span> (as you'll see in the proof for the rules)
> > [!example] 
> >To use the sum rule on 
> >$$\lim_{ x \to 5 }(x^2 - 5x)$$
> >We need to make sure that the individual limits for f(x) and g(x) exist (which they do)
> >So it is totally valid to say it is $=$ to
> >$$\lim_{ x \to 5} (x^2) + \lim_{ x \to 5} (-5x)$$
> >and then
> >$$\lim_{ x \to 5} (x) \cdot \lim_{ x \to 5} (x) + \lim_{ x \to 5 }(-5) \cdot \lim_{ x \to 5} (x)$$
> >Lastly
> >$$5 \cdot 5 - 5 \cdot 5  = 25$$
> 


# Proving limit rules
- Remember that L or M are arbitrary, so make sure you choices of e do not have a possibility of being 1/0 !
# Proving limit rules: Reciprocal
![[Pasted image 20241008202357.png]]
- The reason we choose (\*) to have an epsilon of $|M|/2$ and not just $|M|$ is as follows:
	- In the second blue section, we try to establish a lower bound on $\frac{1}{|g(x)|}$ for the last part of the proof.
	- If we chose something without a fraction -- say |M| -- then this is what would happen $$
\begin{align*}
|g(x) - M| < |M| & \implies | |g(x) -|M|| \leq |M|\\
&\implies -|M| \leq |g(x)| - |M| \leq |M|\\
&\implies 0 \leq |g(x)| \leq 2|M|\\
&\implies \frac{1}{0} \geq \frac{1}{|g(x)|} \geq \frac{1}{2|M|}\\
\end{align*}$$
	- Yeah that just does not work. Using a fraction, you can get that lower bound!

# Proving Limit Rules: Product
- WTS, let, set up
- Since lim f(x) = L and lim g(x) = M, then we have...
	-  have two definitions, (\*) and (\*\*)
- By (\*) we have x2
- By (\*\*) we have x2 
	- You can choose the epsilon within the definition instead of going on about how you chose it for this proof.
- We are done the set up: Choose delta = delta1,2,3,4
- Assume 0 < |x-c| < delta
- Then delta <= delta 1, delta2, delta3, delta4, hence the hypothesis hold (write out all the hypothesis for the 4 statements) and explain how that means the conclusions hold. 
- Then... do the math!
	- You need to use triangle-inequality and some - L + L shenanigans 
- 


Try to prove rule 3 as x goes to infinity
lim x -> inf (f(x) + g(x)) = L + M


if $\lim_{ x \to \infty } f(x) = L$ and $\lim_{ x \to \infty } g(x) = M$
then $\lim_{ x \to \infty } ( f(x) + g(x)) = L + M$

