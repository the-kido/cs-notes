We summarized [these slides](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week03/prop_logic_pre_lecture.pdf)

Equivalent statements can be proven with truth tables and equivalence laws.
An argument can be proven with truth tables and Rules of Inference


How to prove a statement is a tautology w/o a truth table
- Make it equivalent to a statement that is a tautology


$\neg P \vee Q$ is the same as $\neg(P \wedge \neg Q)$
- De-Morgan's Law
	- $\neg P \vee Q$
	- $\neg(\neg\neg P \wedge \neg Q)$
	- $\neg(P \wedge \neg Q)$
- Idrk why this is in the review but whatever 

>[!example] Prove this logically
P --> Q
not Q
Therefore, not P
 
>[!check]
> In words, P --> Q  and not Q imply not P
> $(P \rightarrow Q) \wedge \neg Q \rightarrow \neg P$ 
> $(\neg P \vee Q) \wedge \neg Q \rightarrow \neg P$
> $\neg((P \wedge \neg Q) \vee Q \rightarrow \neg P$
> $\neg((P \vee Q) \wedge (Q \vee \neg Q)) \to \neg P$
> $\neg((P \vee Q) \wedge (tautology)) \to \neg P$
> $\neg(tautology) \to \neg P$
> $contradiction \to \neg P$
> $tautology$
>  



Look at 52
> Now think.
> Ponder it.
> Focus your mind!

It's not in the textbook (it'll be on course resources)
- You can find it [here](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week03/rosen_inference_rules_part1.pdf)

1.3, 1.4 readings for the variables and sets stuff
