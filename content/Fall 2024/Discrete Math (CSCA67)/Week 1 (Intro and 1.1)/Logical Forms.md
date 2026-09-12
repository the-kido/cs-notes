>[!note] Information on this is in Chapter 1 in the textbook and [these slides](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week01/prop_logic_pre_lecture_part1.pdf)

A <span class="definition">Logical Form</span> abstracts logic from context so that you instead look at if the *logic* of a statement is true or not.

>[!example] Here's what they can look like
>> P or Q
>> Not Q
>> Therefore, P
>
>> $(P \vee Q) \wedge \neg Q$

Here is an example logical form 
> P or Q
> Not Q
> Therefore, P
- We can be certain that with ANY statement in this form, P will be true.
- This is another demonstration of the power of variables: they represent an infinite number of situations, like in [[Intro to Proofs and Deductive Reasoning|proofs!]]

---
Note that expressions using these symbols (with proper "grammar") can be called **formulas**.

#### Logical words within mathematical notation
We can represent $3 \leq \pi$ if we let P stand for the statement $3 < \pi$ and Q stand for $3 = \pi$. The formula would be $P \vee Q$. Since P and Q are so small, we can just inline their meanings like: $$(3 < \pi) \vee (3 = \pi)$$
For another example, let's represent $3 \leq \pi < 4$:
$$(3 < \pi) \vee (3 = \pi) \wedge (\pi < 4) $$

> Logical forms can be used to find *new truths*!
### Practice
![[Pasted image 20240906184831.png]]
1. John is not smart and is lucky, or John is smart.
2. John is not smart, and john is either lucky or smart. (huh)
3. John is NOT smart and lucky, or he is smart.  

Either John and Bill are telling the truth, or neither or them is.
- A = john telling the truth
- B = bill telling the truth
- $A \wedge B \vee \neg A \wedge \neg B$   OR   $A \wedge B \vee \neg (A \wedge B)$

I’ll have either fish or chicken, but I won’t have both fish and mashed potatoes.
- A = Have fish
- B = Have chicken
- C = Have mashed potatoes
- $(A\vee B) \wedge \neg(A \vee C)$

