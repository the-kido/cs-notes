>[!example] Here are some definitions you should know before writing proofs
> - To let x be <span class="definition">Arbitrary</span> means to let it have any "random" value for the rest of the proof. x is now constant 

## Writing
1. Start a proof with "Proof."
2. Read through the Mathematical Statement we want to prove and locate the keywords. This is the "set up" portion
3. You do "the middle, manipulation part" 
4. Conclude
	1. Since *such and such* is possible, the statement is proved as required.
	2. Therefore, `rephrase statement`, as required to show. 
	3. Use the square / QED to signify the proof is done

### "The middle, manipulation part"
#### For cases where we have to choose a value ($\exists$)
1. Do the <span class="emphasis">rough work</span> 
	-  In rough work, you can work backwards (assume the conclusion is true) to prove / disprove whatever statement. 
		- Assume the conclusion is true and work *backwards* to get to the start.
		- In an implication, you can only use a conclusion when you know an assumption is true
			- You must show when the assumption is true if you want to use a conclusion. 
2. Then, start doing the manipulations to complete the proof 
	3. If having trouble choosing a value, contradiction may be the answer.
	4. Always justify each statement while going line-by-line. [[The Proof Format#Justifying a step|Here's how you justify a step]]
	5. Make sure to mention when new restrictions form and see if it's okay or not. [[Fall 2024/Calc (MATA31)/1️⃣ Pre Calc (Week 0)/Functions#Common places where domain is restricted|Here is a list of places where the domain may be restricted!]]
	6. Show that the picked value makes the conclusion true and that it passes any assumptions / restrictions made
	7. Use words like "since" and "by", then follow with the property / theorem / definition used

#### For cases we have to show all values are valid ($\forall$)
1. Just let that value be arbitrary, and show the math as to why it holds up to whatever conditions / conclusions it's implying.
## Justifying a step
You must show what properties, theorems, definitions, etc. you used in any step. 
##### Assumptions
When referring to a assumption made because of a hypothesis, we use "by assumption"
> > $\forall x \in D, y = x(x+2) = 0 \implies x = 0, x = -2$
> We can then say
> > 2y = 2x(x+2) by assumption
> In our proof!

##### Properties
The dot inside of |\*| shows that there is something inside of it. Same with $\sqrt{*}$
- You can use this to say "by prop. of |\*|" very tersely. 
## Devices used within proofs

#### 1. Translations from statement to words

| Math                                          | Proof                                                                                                                                    | Explanation                                                                                                                                                                                                                |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $P \implies Q$                                | **Assume** P                                                                                                                             | We assume P is true (as it is the hypothesis) but we cannot be certain that Q is true (that is what we are proving)                                                                                                        |
| $\forall x \in [10,12]\ such\ that\ f(x) > 3$ | **Let** x be an arbitrary number of interval [10,12].<br>Then....<br>`Or (as prof does it)`<br>Let $x\in[10,12]$ be arbitrary<br>Then... |                                                                                                                                                                                                                            |
| $\exists x \in D\ such\ that\ P(x)$           | Choose x = ___<br>Then ...                                                                                                               | Choose a value of x in rough work. You don't need to explain *how* you got it in the proof, only that it confirms the statement. <br>Then, you do LS = RS stuff to show that the LS will equal RS with your chosen values. |
### "if and only if"
- When used in a question, this means you must prove both directions of the statement. 
- You can say that there are two proofs to complete (proof (i) and proof (ii) or something along those lines.)
>[!example]- iff proof example
![[Pasted image 20241008115657.png]]
#### 2. <span class="definition">WTS</span>
- Used to give us a pad to jump off of when using definitions (ESPECIALLY LIMITS) 
- [PSET 2 question 7 uses WTS in a nice way](https://q.utoronto.ca/courses/362238/files/32816295?module_item_id=6109339) #card-this 

#### $\Rightarrow$ to show an equation holds
- I would avoid this imo, until he uses this in class and it's important all of a sudden. 
- It would be worth asking a TA when it's applicable though
#### 4. Other terms
3. Conjunctions 
	- Then 
	- So
	- Also 
4. Conclusions
	- Therefore
	- Hence
	- Since

## LS = RS?
You do *not* have just do:
$$
\begin{align*}
LS = &\dots\\
=&\dots\\
=&RS
\end{align*}

$$
You can have LS = ... = ... = expression, and RS = ... = ... = expression. Therefore, LS = expression = RS, so LS = RS!

##### How about inequalities?
$LS < \dots < \dots < expression$
$RS > \dots > \dots > expression$
$LS < expression < RS$
$\text{so LS < RS}$

[Source](https://piazza.com/class/m08eptwk2n5wu/post/67)

>[!example] Solved examples
>> ∀x ∈ R, x < 0 ⇒ ∃ y ∈ (1, ∞) such that ln(y − 1) = x + ln y
>This was in Assignment #1
>
>We have to show that ln(y-1) = x + ln(y) holds for our choice of y
>"such that" or ","
>- We have to show that the statement afterwards "holds" for the values before it.
>
>


>[!example] Examples (click on the link to enlarge it)
> ![[Pasted image 20240916203425.png|100]]
> 
> ![[Pasted image 20240916203449.png|100]]
> 
> ![[Pasted image 20240916203511.png|100]]
> 


# Cards #calc-2 
In order to prove a statement $P \implies Q$, what do we do?
?
Assume P, then prove Q holds

In order to prove $\forall x \in D, P(x)$, what do we do?
?
Let x be some arbitrary value in D. Then, we write a proof that shows P(x) holds.

What do we do to prove the statement $\exists x \in D \text{ s.t.} P(x)$
- Well think of discrete; this statement means that for some choice of x, x is in D *and* P(x) holds. We must "choose" an x, then show it's in D AND that P(x) is true.
