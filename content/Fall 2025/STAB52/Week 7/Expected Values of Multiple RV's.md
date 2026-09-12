(We were meant to do this in Week 6)

For function of **discrete** RVs $X,Y$ with joint **PMF** of $p_{X, Y}(x, y)$...
$$E[Z] = E[g(X, Y)] =\sum \limits_x \sum \limits_y g(x, y) p_{X, Y}(x, y)$$
For function of **continuous** RVs $X,Y$ with joint **PDF** of $f_{X, Y}(x, y)$...
$$E[Z] = E[g(X, Y)] =\int_{-\infty}^\infty \int_{-\infty}^\infty g(x, y) f_{X, Y}(x, y)\;dx \;dy$$

### Properties
1.  $E(aX + bY) = aE(X) + bE(Y)$ (linearity, as with all of these expected functions)
2. $X \perp Y \implies E(XY) = E(X)E(Y)$ (now this is new!)


>[!example] Processes
>We have (by i.i.d) $X, Y \sim \text{Exp}(1)$, so $E(X) = E(Y) = \frac{1}{\lambda} = 1$ where $X, Y$ represent "time" for the process to finish (on average it's $1$ time per process for our unit of time)
>
>> "What's the average time they run in series?" That's asking for $g(X, Y) = X+Y$'s average time. It's addition because it's the time of the first, added to the time of the second 
>> 
>> (It's effectively a Gamma distribution! $g(X, Y) \sim \text{Gamma}(2, 1$) but let's pretend we didn't know that)
>> 
>> Anyway, $E[g(X, Y)] = E(X +Y) = E(X) + E(Y) = 2$ (by linearity of expected values)
>
>> What about *in parallel?*
>> The completion time is the max of the two times. So $g(X, Y) = \max(X, Y)$ (which is $< X + Y$ of course, but *how much* faster?)
>> $E[g(X, Y)] = E[\max(X + Y)] = \int_{-\infty}^\infty \int_{-\infty}^\infty \max(x, y) \cdot f(x, y) \;dx \;dy$
>> $= \int_0^\infty \int_0^\infty \max(x, y) \cdot e^{-x} \cdot e^{-y}\;dx\;dy$ (by independence, and since the probability the time is negative is... $0$)
>>$= \int_0^y \int_0^\infty x \cdot e^{-x-y} \;dx\;dy +  \int_0^\infty \int_0^x y \cdot e^{-x-y}\;dx\;dy$ (basically we split into two cases: $x \leq y$ and $y \leq x$, which are symmetrical when graphed but if you brute force if you get the same $3/2$ total answer)
>> 

#todo if I have time
 
  



