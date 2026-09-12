she suggests to make a list of all formulas and concepts to refer to when studying

#todo go over sinx is continuous (in fact go over all week 8 lectures again)
#todo do the week 8 pset questions 

![[Pasted image 20241105175028.png]]
I took a photo of it
1. Pull out the 1/2 
2. In the case where we have something *almost* like the first principles formula, we can probably add and subtract something
3. In our case, we can add and subtract f(c) and -f(c)
4. Then we use the sum limit rule
	1. $1/2 \cdot \lim \limits_{h \to 0} \frac{f(c+h) - f(c) + f(c) - f(c-h)}{h}$
	2. $1/2 \cdot \lim \limits_{h \to 0}\frac{f(c+h) - f(c)}{h} + 1/2 \cdot  \lim \limits_{h \to 0} \frac{f(c) - f(c-h)}{h}$
5. Let h = -g and then swap out the h's everywhere.
	1. $1/2 \cdot \lim \limits_{h \to 0}\frac{f(c) - f(c+h)}{h} + 1/2 \cdot \lim \limits_{g \to 0} -\frac{f(c) - f(c+g)}{-g}$
	2. $1/2 \cdot \lim \limits_{h \to 0}\frac{f(c) - f(c+h)}{h} + 1/2 \cdot \lim \limits_{g \to 0} \frac{f(c) - f(c+g)}{g}$
	3. $f'(c)$
>[!note] Another way to write the derivative is $\lim \limits_{h \to 0} \frac{f(c) - f(c-h)}{h}$
>Replace h with -g or something and it'll be equivalent 👍


#todo make sure to do assignment 6 question 10 properly.

$\lim \limits_{h\to 0^+}$ and $\lim \limits_{h\to 0^-}$

For the 8.4 special question, consider when f(x) = |x| and set c = 0. Then you'll get an impossible limit of $h\to 0, \frac{f(h)}{h}$
then u do the left right thing and get -1 and 1. easy peasy


TB 2.3 #67
f(x) = |1-2x| splits into two cases where x > 1/2, x = 1/2, or x < 1/2
f(x) = 1 - 2x
f'(x) = -2
and
f(x) = 0
f'(x) = DNE (cuz absolute is not differentiable there)
and
f(x) = 2x - 1
f'(x) = 2

Ast 7 question 2
- To find a unique tangent line that goes thruogh the point  you must first find. You can write a function that goes through the function and also 


![[Pasted image 20241105175009.png]]

