http://bit.ly/4gtNC5E
- Notes yaya


The first question (the one of the quiz)
1. We make 2 riemann partitions
2. n is positive int
3. let P $= \set{x_i^*}_{i=0}^n$be a Riemann partition of [0, 3] 
4. let Q = $\set{y_i^*}_{i=0}^n$ be a Riemann partitions of [3, 6]
5. Let i \in {1, \dots n} be arbitrary.
6. Then $f(x_i^*) \geq f(y_i^*)$ since $x_i^* \in [x_{i-1}, x-i] \subseteq [0,3]$ and $y_i^* \in [y_{i-1}, y_i] \subseteq [3, 6]$ by def'n of P and Q
7. $\implies f(x_i^*) \Delta x \geq f(y_i^*) \Delta x$ since $\Delta x > 0$
8. $\implies \sum_{i=1}^n f(x)\Delta x \geq \sum_{i=1}^n f(y) \Delta x$
9. you get the idea. we just show the integrals are yeah. 

3b1b on intuition of anti-derivatives

You can prove MVT for integrals (look at 2.3)

# 4.1 integration problems
$f(x) = (x^3 + 4)^2$
Tactic: Expand (then it becomes rlly easy)
$= x^6 + 8x^3 + 16$$
$F(x) = \frac{x^7}{7} + \frac{8x^4}{4} + 16x + C$

---
$\int(\frac{2}{3x} + 1) = \frac{2}{3}\int \frac{1}{x} + \int 1 = \frac{2ln|x|}{3} + x$
----

$\int( \frac{-3}{1 + 16x^2}) = \int \frac{-3}{(4x)^2 + 1}$
Tactic: Use $tan^{-1}(x)$'s derivative
Note: if $tan^{-1}$ has a trig function inside of it... there's probably some trig identity you can use instead.
Since $(tan^{-1}(4x))' = \frac{1}{16x^2 + 1}\cdot 4$, we can multiply by $\frac{-3}{4}$ to get $\int \frac{-3}{(4x)^2 + 1} = \frac{-3}{4}tan^{-1}(4x)+C$

---
$\int (\sec^2x + \csc^2 x)$
Note: $(\tan x)' = sec^2 x$ and uhhhh idk the other one #todo

---
$\int_1^3(x^2 + 2x - 4)dx = [\frac{1}{3}x^3 + x^2 +4x]_1^3$
$= stuff. yeah

---
$\int \frac{2x ln x - x}{(ln x)^2}$
Tactic: It looks like quotient rule.
It seems like g = ln(x)
Let f(x) = x^2. ah ha!
$\frac{x^2}{ln(x)} + C$

---
$\int_0^{3\pi/2} |\sin(x)|\; dx$

Tactic for absolute values: Look at the graph.
We can separate the graph (?)

$\int_0^{3\pi/2} |\sin(x)|\; dx = \int_0^\pi |\sin(x)| + \int_\pi^{3\pi/2}|\sin (x)|dx$
$= \int_0^\pi \sin(x) + \int_\pi^{3\pi/2} -\sin (x)dx$ (by |\*| def) as $sinx \geq 0$ on $[0, \pi]$ and $\leq 0$ on $[\pi, 3\pi/2]$
$=[-\cos x]^\pi_0 + [\cos x]_\pi^{3\pi/2}$ by FTOC I and antiderivatives by inspection.

---
"Area Accumulation"
$H(x) = \int_{15}^x (\int_8^u \frac{1}{t^4 + 1}dt)dx$

Tactic: Use FTOC II

We know that the inside integral is continous. However we need to show the inside function of the inside integral is also continuous.
- $\frac{1}{x^4 + 1}$ is cont on R as rational functions are cont on their domain and is defined on $R$.
Therefore $\int_8^x \frac{1}{t^4 + 1} dt is a cont function of $u$ (Yes, a function of u as that's the upper bound #todo) on R as by FTOC II.

So $H'(x) = \int_8^x \frac{1}{t^4 + 1} dt$ by FTOCII #todo why is it $x$
And that is all i guess. 


#todo
Diff between $ln(x)' = 1/x$ vs $ln|x|' = 1/x$
- ln(x)' reduces the domain of x. ln|x| keeps the domain of x on the reals. 

$(x^{-2}) = (-x^{-1})'$
- okay so i use the ln thing on when using the power rule gives $x^0$ i think.


Practice problem yeye
First pass:
- Find the # of -1's (we'll just go thru each now)
	- nested for loop, int counter, easy peasy.
- Find the max sum (this is what all the rows / columns should match)
	- Use a for loop that goes from 0 to 5. Use the functions I will make to go thru the rows and columns. 
- Then we have a while loop that keeps going until all of our -1's are gone.
	- The while loop will increase the row number ++. if row number is >= 6, then we increase the column number and reset row # to 0.
	- The loops will give the row and column sum and the -1 indicies
	- If there's only 1 index, then we find the right value for it and swap that out. 
		- If the row/column only has one "-1", then solve for it (i.e. max - sum = value -1 should be).
	- Keep going until all rows and columns are done. 
- super easy

I'll have a function, call it "find row sum" and "find column sum" that takes in a row / column # and finds the sum, excluding the minus signs, and outputs the index of the first -1. The index will be -1 if there is more than 1 '-1' index.
- It will return the sum, and also take in a int pointer that updates the index of -1. okay good.
- Then the mainf unction while loop will loop from 0 to 5, then reset until all -1's are gone.