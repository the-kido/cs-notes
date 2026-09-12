Include-exclusion
- For ANY two events A and B, the probability of either happening is the chance of A happening and the chance of B happening, sans the chance of both happening
	- Why sans both? Well if A happens, then $A \cap B$ happens. If B happens, then $A \cap B$ also happens. Therefore $A \cap B$ happens 1 extra time. We must get rid of it!

A sample space can be finite
- I.e. Roll a die once, toss a coin once. The sample space is of size 12 #todo confirm?
A sample space can be *countably finite*
- Means elements can be put to 1-to-1 correspondence with natural numbers (1,2,3,...)
	- So the # of coin tosses before the first head appears is countably infinite (I can keep saying the numbers out loud and they will be valid *forever*)
<span class="definition">Discrete Uniform Probability</span>
- Finite spaces whose outcomes have *equal probability*
	- A sample space can have 1 outcome with a 25% chance, and another with a 75% chance. That is *not* uniform.
	- Likewise, a sample space like "outcomes of a dice" is uniform. All outcomes have an equal chance. The P(A) of any event A is the # of outcomes / # of outcomes of S (remember S is sample space)
	- So $P(A) = \dfrac{|A|}{|S|}$
## Counting time
<span class="emphasis">Multiplication rule</span>: For M and something and N of something else (say, m pizza and n soda), there are $m \times n$ ordered pairs $(pizza_i, soda_j)$ (i and j are some index of pizza/soda)
- Multiplication is for *ordered pairs*
- These are *ordered* pairs. If you want unordered, you must multiply by the # of ways they can be reordered ($2!$)
	- Think of this extra multiple as a parameter. 1 could be pizza, then soda and 2 can be soda, then pizza. That makes it seem more similar to the multiplication rule!