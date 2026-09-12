Let us try to prove the following argument using a [[Truth Tables|truth table]].

>Either John is not smart and he is lucky, or John is smart. John is smart. Therefore, John is not lucky.

>[!note]
>To prove the validity, we write the premises and conclusion as logical forms, and see if the argument holds up to the [[Arguments|definition of an argument]]. 
>- If there is even 1 case the argument is wrong, then the whole argument is invalid! You'll notice that in this example!
>- Rows where any premise is false have no meaning since they're not an argument (the premises are not true!)

Let S be John is smart; Let L be John is lucky
As a logical forms, the premises and conclusion it would look like this: 
1. $(\neg S \wedge L) \vee S$
2. $S$
3. $\neg L$

| S   | L   | $(\neg S \wedge L) \vee S$      | S                               | $\neg L$                        |
| --- | --- | ------------------------------- | ------------------------------- | ------------------------------- |
| T   | T   | <span class="emphasis">T</span> | <span class="emphasis">T</span> | <span class="emphasis">F</span> |
| T   | F   | <span class="emphasis">T</span> | <span class="emphasis">T</span> | <span class="emphasis">T</span> |
| F   | T   | T                               | F                               | F                               |
| F   | F   | F                               | F                               | T                               |
- There is one row where both premises are true, but the conclusion is false. Therefore, this argument is <span class="emphasis">NOT</span> valid. 
- Yes, there is another row where the argument checks out, but it's contradicting the first row. That actually further invalidates* this argument.

Refer to the [slides for week 2](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week02/prop_logic_post_lecture_part1.pdf), page 19^1
## How to prove an argument is WRONG
<span class="definition">Counterexample</span>: Showing that the premises are true but the conclusion is false.
- A set of choices for variables are "settings"

>[!error] You must EXPLICITY show that the premises are true but the premise is false (i got marks off my term test for that!)