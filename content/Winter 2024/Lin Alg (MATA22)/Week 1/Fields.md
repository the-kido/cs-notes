
>[!quote] Definition
>A field is a number system, an "algebraic structure" that, for
>1.  Some set V
>2. Two binary operations $\boxplus : F \times F \to F$ and $\boxdot : F \times F \to F$ called addition and subtraction
>The following 6 axioms hold
>#### 1. $\boxplus$ and $\boxdot$ are both [[Commutativity and Associativity|associative]]
>You can do $a \boxplus b \boxplus c = (a \boxplus b) \boxplus c$ (also works for $\boxdot$)
>
>#### 2. $\boxplus$ and $\boxdot$ are both [[Commutativity and Associativity|communicative]]
>You can do $a \boxdot b = b \boxdot a$ (also works with $\boxplus$)
>#### 3. There exists a <span class="emphasis">additive identity</span> $\hat 0 \in F$ and <span class="emphasis">multiplicative identity</span> $1 \in F$ such that $\hat 0 \boxplus x = x$ and $1 \boxdot x = x$
>
>#### 4. For each $x \in F$ there is  an additive inverse $x' \in F$ such that $x \boxplus x' = \hat 0$
>
>#### 5. For each $x \in F$ except $\hat 0$ there is a multiplicative inverse ${x^{-1}}$ such that $x \boxdot x^{-1} = 1$
>
>
>#### 6. The $\boxdot$ operator distributes over $\boxplus$ so we can "foil" and "factor"

>[!warn] Fields are an abstract algebraic structure. So long as it follows the 6 below axioms, a set can be called a field. A set of people can be a field if somehow those 6 axioms are sufficient. 
>

>[!note]- Some extra tid-bits
>As we have seen, a collection of numbers paired with a specific operator does not always have *nice properties*.
>- Groups
>- Rings
>- Ideals
>- Fields
>
>are other number systems.
>
>In this class we will heavily use a very nice number system called *fields*

## Examples of fields
- R
- Q
- C
## Examples of NOT fields
- N
- Z 

>[!note] "Because it's a field" can replace "Because it's a real number" since R is a field and we are often just applying those field properties. 

#### Questions #todo 
- Can a field be a set like {A, B, C, D, E... AA, BB, CC, DD, .....} where each letter is mapped to a real number? 
	- So we said that $1 \in F$ is the multiplicative identity. If the field is not numbers (pretend it's some other object), would it still make sense to define 1 as the identity? Couldn't it depend on the set?   

Personal note: An *identity* is 1 particular element whereas an *inverse* depends on an element.


#todo Are strings vector fields!? No. They aren't. + is not associative. 


# Cards #linalg-1

What are all the field axioms?
?
1. associative
2. commutative
3. exists an additive and multiplicative identity (0 and 1) 
4. for every element x in F, there is an additive inverse x' such that x + x' = 0.
5. for every element x, there is a multiplicative inverse x^{-1} such that $x \boxdot x^{-1} = 1$
6. You can foil and distribute
`a*(b+c) = a*b + a*c`

Prove why, for all fields, there does not exist a multiplicative inverse of $\hat 0$
?
Suppose there is a field (we choose R) that there does exist a multiplicative inverse, call it $x$ such that $x \cdot \hat 0 = 1$.
$\hat 0 + x = \hat 0$ by A4
$x * (0 + x) = 0$
$0x + x*x = 0$
$1 + x * x =  0$
$x * x = -1$
x = $\sqrt{-1}$ 
And boom it's false cuz field is R.

so of course, this is not true! 

Explain why fields always contain "-1".
?
By axiom 4, there is a multiplicative identity 1.
By axiom 3, there is an additive inverse for all elements. Therefore there must be a -1 in the field. 