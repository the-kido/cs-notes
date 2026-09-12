They are basic tools for establishing the truth of statements.
There's a lot of them
Prove all of them 😁😁


![[Pasted image 20240922143426.png]]
- Make sure to #card-this 
> This reminds me of Hydrocarbon derivatives except probably way better.

Note that P, Q, and R can be negatives! Like, P can be $\neg E$ where "E stands for Eddy is coming home" or something

# Proving arguments with Rules of inference
- You can combine Rules of Inference with [[Logical Equivalencies (Equivalence Laws)]] to show that the combination of premises is equivalent to the conclusion

$$
\begin{array}{rl}
    (1) & C \to P\\
    (2) & T \wedge S \to C\\
    (3) & T \\
    \therefore & S \to P 
\end{array}
$$
$$
\begin{flalign*}
&(4)\ T \wedge S \to P &&1,2 \text{ Hypothetical Syllogism}\\
&(5) \neg T \vee \neg S \vee P &&4 \text{ Conditional}\\
&(6)\ \neg S \vee P &&3, 5 \text{ Disjunctive Syllogism}\\
&(7)\ S \to P &&6 \text{ Conditional}
\end{flalign*}
$$

# Understanding the rules
## Simplify
P and Q means either P and Q are both true! You can then conclude that P or Q is individually true, too.

## Modus Ponens

- If you have an implication, and the antecedent is true, then the conclusion is always true.
- Like, "if `apples are red`, then `eat apples`" was the implication, and `apples are red` is true, the of course you'll `eat apples`

## Modus Tollens
If P implies something is happening, but it doesn't happen, then P didn't happen either. 
Remember that in [[Conditionals (or implications in calc)]], There is only 1 case where an implication is false (when the antecedent and consequent are false!)


## Disjunctive Syllogism

Very obvious. If A or B, but not B, then A.
Same with If A or B, but not A, then B. 

### Hypothetical Syllogism
If P --> Q and Q --> R, then P --> R

## Resolution
Pretty confusing ngl

>[!example] Either the maid or the butler is guilty. Either the maid is not guilty or the gardener is guilty. Therefore, either the butler or the gardener is guilty.
>It would look like
>> M or B
>> not M or G
>> $\therefore$ B or G
>
>The conclusion *is* true since it doesn't outrightly say the maid isn't guilty (they still could be!)



## Exercises
[Slide 50 has a ton of examples](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week03/prop_logic_pre_lecture.pdf)
[The solutions are after Slide 76](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week03/prop_logic_post_lecture.pdf)

### Slide 52's example
Sun = sunny this afternoon
Colder = colder than yesterday
Swim = Swimming
Canoe = canoe trip
H = Home by sunset

1. $\neg Sun \wedge Colder$
2. Swim --> Sun
3. not Swim --> Canoe
4. Canoe --> H
$\therefore$ H

5. \neg Sun is true (based on #1)
6. Not Swim because not Sun () (Modus Tollens)
7. Canoe is true (Modus Tollens)
8. H is true (Modus Tollens)
Boom

## The email one
If you send me an e-mail message, then I will finish writing the program. If you do not send me an e-mail message, then I will go to sleep early. If I go to sleep early, then I will wake up feeling refreshed. Therefore, if I do not finish writing the program, then I will wake up feeling refreshed.

Send = send email message
Finish = finish writing program
Sleep = sleep early
Refreshed = wake up refreshed

1. Send --> Finish
2. Not Send --> Sleep
3. Sleep --> Refreshed
$\therefore$    Not Finish --> Refreshed

The goal is to get the implication "Not Finished --> Refreshed"
There is no "Not Finished" anywhere, so we can create it with a contrapositve
#card-this example. It is good

4. not Finish --> not Send (contrapositive) (based on #1)
5. not Finish --> Sleep (Hypothetical Syllogism) (based on 2 and 4)
not Finish --> Refreshed (Hypothetical Syllogism) (based on #3 and #5)




