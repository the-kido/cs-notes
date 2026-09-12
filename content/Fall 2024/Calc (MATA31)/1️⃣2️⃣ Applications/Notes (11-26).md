#todo prove the second derivative test?

## Finding absolute extrema!
### Test for Absolute Extrema / Closed interval method

1. Show that f is continuous on the closed interval `[a,b]` (and apply EVT)
2. Find all the critical points of f that are in the interval `[a,b]`
3. Evaluate f(x) at the critical points in `[a,b]` and at the endpoints
4. Compare those values. The smallest/biggest ones are the absolute max/mins

>[!example]
>What are absolute extrema of $x^8 - 8x^4 + 8$ on $[0, 8/5]$ 
>Sol'n:
>
>- f is  cont on R (cuz it's a polynomial), so it's also continuous on the subinterval $[0, 8/5]$.
>- So, by EVT, f attains both abs max and min on the interval. (ensure the interval is <span class="emphasis">closed</span>!)
>- for the critical points, we take the derivative:
>	- $f'(x) = 8x^7 - 8*4x^3$
>	- $= 8x^3(x^4 - 4)$
>	- $=8x^3(x^2+2)(x^2-2)$
>	- $=8x^3(x^2+2)(x-\sqrt{2 })(x+\sqrt{ 2 })$
>- f'(x) is always defined.
>- f'(x) = 0 at $x = 0,\sqrt{ 2 }, -\sqrt{ 2 }$
>- Ignore the -sqrt2.
>- Test $f(\sqrt{ 2 }) = -8, f(0) = 8, f(8/5) = -1ish$.
>- So the abs max is 8 and abs min is -8. Easy peasy.

### The only critical point in town test
Do we literally say "by the only critical point in town test" when using it? I wonder....
Anyway...
> Let f be a continuous function on the interval $I$ and let $c \in I$.
> If f(x) has exactly 1 critical point (x = c) then
> - if f(x) has a local min at x=c, it is also the absolute min
> - if f(x) has a local max at x=c, it is also the absolute max.

Always declare variables in word problems.
#todo write down the e.g. for week 12. harsh is sleepig rn so i cant


# Cards #calc-12

What are all the steps in the Test of Absolute Extrema?
?
1. Make sure f is continuous on $[a,b]$ (and apply EVT)
2. Find all crit points on $[a,b]$
3. Evaluate f(x) and the end points
4. Compare them and find the abs max and mins


What are the absolute extrema of $x^8 + 8x^4 + 8$ on $[0, 8/5]$
- First, we know that the function is cont on R cuz it's a polynomial. So, it's continuous on [0, 8/5] too.
- Second, by EVT, we know that there will be a at least 1 max and min point.
	- There's no point in continuing if EVT cannot pass!!!
- Third, we find critical points by first getting the derivative ($8x^7 + 8 \cdot 4x^3 \implies 8x^3(x^2 + 2)(x-\sqrt{2})(x + \sqrt{2})$
	- Note that f'(x) is always defined so the only crit points are where f'(x) = 0.
	- f'(x) = when $x = 0, \sqrt{ 2 }$ (those are the only relevant ones for this interval)
- Forth, we plug in the values to see what the actual max and mins are 
	- The abs max is 8 and abs min is -8 (idk where exactly but make sure to test the end points too!)


What is The Only Critical Point in Town Test and why does it work? 
?
It states that if we have a continuous function on an interval I and EXACTLY 1 critical point c, then:
- If x = c is a local min, it's actually the abs min!
- if x = c is a local max, it's actually the abs max!

It's kinda obvious if you think about it:
- "If there's only one min, it's the absolute min"


What do you wanna include in your optimization problems?
?
Objective (maximize V = $x^2 y$) 
Constrains (what the volume must abide by) (i.e. surface area must be <= 12, but realistically it must be = 12 since you'd waste the surface area!)

Using the constraint, you eliminate one of the variables
Bound your variables
Find the abs max or min and endpoints too!


Remastered:
1. Objective: What you need to do
2. Given Info: What we have

3. Maximize: Function to maximize
4. Constraint: Function that restricts variables

5. Eliminate / Substitute to get a function to find the max/min of.

6. Bounds (low large can x be?) (smallest and largest values)
7. Goal: Find the absolute max/min of solved for function.

8. Use the test of Absolute Extrema to find that value!

And you're done!
