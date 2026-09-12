// related to [[Logical Symbols]]
> [!example] Are these true?
> a) $\forall x\in R, x^2 \geq 0$
> "For every real number "x", x^2 is greater than or equal to 0"
> "For every real number "x", x^2 is non-negative"
> > Ans: True (Property of R) (It's an axiom already proven)
> 
> b) $\exists x \in R$ such that $x^3 < 0$
> "For "
> > Ans: True 
> > Choose x = -20
> > Then $-20\in R$ and $(-20)^3 = -8000 < 0$
>


Related to [[Fall 2024/Calc (MATA31)/2️⃣ Proofs (Week 1 & 2)/Quantifiers]]

>[!example]
>Ex. Which are true?
>a) If $x\in \mathbb{Z}$ and $x > 0$,
>then $x\geq 0$
>>Ans: Every natural integer is *also* non-negative
>
>b) If $x\in \mathbb{Z}$ and $x\geq 0$, 
>then $x > 0$
>> Ans: False (Choose x = 0,  the hypothesis is satisfied but it is not $> 0$, so the conclusion is not satisfied)
>
>(c and d are questions you'll see in A67 more than calc)
>c) If $37 < 0$, then $\pi \in \mathbb{R}$
>> Ans: "Vacuously" true
>
>d) If $37 < 0$, then $\pi \in \mathbb{Z}$
>> Ans: "Vacuously" true


#calc-2

Prove $\forall x \in R, (x \neq 1 \implies \exists  y \in R$ such that $\frac{y}{y+1}=x$) 
?
(Answer is in 09-12 notes -- 2b lecture)
- Remember implies = if... then...
- You must declare x as a real number to be able to use it later with "let"
- Remember that dividing changes the domain, which is why the x != 1 is important for this statement to be true. Otherwise, the counter-example is that x is 1
- On the side, we figure out what value of y would let $\frac{y}{y+1} = x$. In our case, we find that $y = \frac{x}{x-1}$.
- After figuring out a value for y that would satisfy the conclusion  he then shows how the y picked makes the equation $\frac{y}{y+1} = x$ true by turning $\frac{y}{y+1}$ into $x$. We cannot assume that $\frac{y}{y+1} = x$ but we can show that $\frac{y}{y+1}$ can *become* x, therefore proving that the choice of y is valid.  
>This is only possible since x != 1. If it was, then we couldn't divide by x since the previous statement wouldn't be equivalent (the domain would change!)


Prove $\forall x \in R, \exists  y \in R$ such that $\frac{y}{y+1}=x$ 
?
The trick is that there's a counter example: x = 1!

