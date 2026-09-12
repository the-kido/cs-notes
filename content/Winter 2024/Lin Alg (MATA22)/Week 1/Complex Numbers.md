>[!note] The imaginary number is $i$ such that $i^2 = -1$ or $i =\sqrt{-1}$

>[!note] Complex numbers are numbers in the form: $z = a + bi$ where $a, b \in \mathbb R$.
>In this case
>1. $Re(z) = a$; a is the "real" part of the complex number
>2. $Im(z) = b$; b is the "imaginary" part of the complex number.

> $i$ is not a real number but still super important! Just like 0 and negative numbers are "constructs" or "theoretical"; it's not physically there. 

## Definitions of operations and identities
Since $\mathbb C$ is a field, it has the additive identity 0 and multiplicative identity 1.

### Addition and Multiplication
Let $z_1 = a + bi$, and $z_2 = c + di$.
- Addition: $z_1 + z_2 = (a + c) + (b + d)i$
- Multiplication: $z_1 \cdot z_2 = (ac - bd) + (ad +bc)i$

Addition proof:
$z_1 + z_2 = (a + bi) + (c + di)$
$= a + (bi + c) +  di$
$= a + (c + bi) + di = (a+c) + (b+d)i$

Multiplication proof:
$z_1 \cdot z_2 = (a+bi)(c+di)$
$= ac + adi + bci + bdi^2$ (It's just simple foiling!)
$= (ac - bd) + (ad + bc)i$ #todo Why can we do this step? Wouldn't we need axiom 6 to hold for us to do this? How do u assume C is a field without defining the operations?
- What comes first, the axioms holding true or the operations proofs?

### Subtraction
Simply extend the definition of addition
$$
\begin{align}
z_1 + z_2 \to z_1 - z_2 &=  z_1 + (-1)z_2 \\
&= (a+bi) + (-1)(c + di) \\
&= a + bi - c - di && \text{by A1 and A6}\\
&= (a-c) + (b-d)i && \text{by A2 and A6}
\end{align}
$$
#todo In the term z = a + bi, is both a and bi complex? When does a, b, c, d become real numbers like at the end where the `-` operator is for real numbers?
### Division
For division, it is not so simple. We have to somehow use our multiplication, addition, and subtraction operators to create an operation that acts like division for the real numbers.
$$\frac{z_1}{z_2} = \frac{ac - adi + bci + bd}{c^2 + d^2} + (\frac{bc - ad}{c^2 + d^2})i=\frac{z_1\cdot \bar z_2}{|z_2|^2}$$
#### Proof
By A5, $\forall x \in F, \exists x' \text{ s.t. } x \boxdot x' = 1$
OR if $a\cdot b = c$ and $a \neq 0$, then $b = \frac{c}{a}$
- This somehow turns multiplication into division... #todo idk what the point of this really is. 

$\frac{z_1}{z_2} = \frac{a+bi}{c+di} = \frac{a+b\sqrt{-1}}{c + d\sqrt{-1}} \cdot \frac{c - d\sqrt{-1}}{c - d\sqrt{-1}}$
- We are attempting to rationalize by multiplying by the conjugate. We want the *bottom* to be a real number
$= \frac{(a+bi)(c-di)}{c^2 - (di)^2} = \frac{(a+bi)(c-di)}{c^2 + d^2}$ `(*)`
(now we show this result is an imaginary number)
$= \frac{ac - adi + bci + bd}{c^2 + d^2} = \frac{ac + bc}{c^2 + d^2} + (\frac{bc - ad}{c^2 + d^2})i$

`(*)` This step is used to derive the formula with the complex conjugate and modulus.


# Complex Conjugate
The <span class="definition">complex conjugate</span>:  $\bar z = a - bi$ OR $z^* = a - bi$

It helps to derive modulus and easier representations of complex division.

# Modulus

Modulus values for $\mathbb C$ is like absolute values for $\mathbb R$; they find some "distance".
For complex, it's the distance from the origin when you graph it.
$$|z| = \sqrt{Re(z)^2 + Im(z) ^2}$$
So, tl;dr it's Pythagorean theorem with the `Re` and `Im` components of `z`
![[Pasted image 20250114081817.png]]

### Graphing Complex Numbers
Complex numbers are graphed with the real component on the x axis and the imaginary component on the y axis. 

### Some $i$-`dentities` (hehehehehe)
Observe:
1. $i^0 = 1$
2. $i^1 = i$
3. $i^2 = -1$
4. $i^3 = i \cdot i^2 = i \cdot -1= -i$
5. $i^4 = 1$
It's cyclic!

So, for any $n \in \mathbb{Z}$
1. $i^{0 +4n} = 1$
2. $i^{1 +4n} = i$
3. $i^{2 +4n} = -1$
4. $i^{3 +4n} = -i$

# Cards #linalg-1 
Prove real, then complex numbers, are fields.
?
#todo

Evaluate $i^{49}$, $i^{-13}$, and $i^{12}$
?
1. $i^{49} = i^{48 + 1} = i^{4\cdot 12 + 1}$
Let $n = 3 \in \mathbb Z$
then $i^{49} = i^{1 + 4n} = i$ by the identity I conjected (is that a word)
so yeah, it's just $i$

2. let n = -16 / 4 = -4. then -13 = 4n + 3. So, $i^{4n  + 3} = -i$ by my conjectures
3. The answer is 1. yeah.

How is complex addition and multiplication defined? 
?
Complex addition has us adding the real and imaginary components. Think of a complex number as a tuple in that sense
Let a, b be the real components and c, d be the imaginary components of two complex numbers. 
Then (a+bi) + (c+di) = (a+c) + (b + d)i
and (a+bi)(c+di) = ac + adi + bci - bd = (ac - bd) + (ad + bc)i
