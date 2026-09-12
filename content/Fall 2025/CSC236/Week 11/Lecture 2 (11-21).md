DFA for a language = one where the input string that's good ends up in an accepting state, and bad ones are not.

We start with the language $L_2 = \set{ s \in \set{a , b}^* : |s| \geq 2 \text{ and the }2^{nd}\text{ last char of s is an a} }$

### Creating this DFA (efficiently)
We first create our initial state. $q_0$. We already know for a FACT it's not an accepting state because consider the $\epsilon$ empty string. It's of size $0$ and therefore is not in our language.
- The initial state cannot be accepting because otherwise $\epsilon$ would be matched
- $\epsilon \not \in L_2$
- $\therefore q_0$ not accepting!

$q_0$ is always the state of $\epsilon$. From $\epsilon$ we start reading out instructions, and according to our language, we can either read $a$ or $b$. Let's work with $a$ first... *where should it go?*

We need the states to represent "things" to know where things go so that we know when to use/reuse them in our machine. For now, we have **no clue**.

But we can use an algorithm. 
- Our problem is going to be this: At $q_0$, when we read an "a", do we stay in $q_0$ or go to a new state?
- Currently the strings in $q_0$ are just $\epsilon$ and... nothing else for now
- Let's **assume** reading "a" *does* go back into $q_0$. That means $a$ is also a string in $q_0$
- Now, let's consider all possible suffixes that might stem from this state now. This helps us determine of the two strings $\epsilon$ and $a$ should be in the same or different state. Reads as "what could this state be followed by"
	- ![[Determining if a char belongs in a state for DFAs.png|600]]
	- Clearly in the case that we're at $q_0$ and the rest of the suffix is simply $b$, then one of these strings $\epsilon \cdot b \not \in L_2$ BUT $a\cdot b \in L_2$. From this state, assuming $a$ is part of it, would mean the state is simultaneously true and not true for some inputs, which is wrong.
	- This is because $a$ and $\epsilon$ are ***distinguishable*** with respect to $L_2$. You can follow $\epsilon, a$ with the same suffix ($b$ for instance) with different acceptance into the language. If distinguishable, an input $a$ needs a new state 
	- We call it $q_1$

Next problem: At $q_0$, when we read a $b$ do we stay in $q_0$ or go to a new state?
- The strings of $q_0$ would then be $\set{ \epsilon, b}$
- Looking at what the state could be followed by:
- ![[Example 2 showing indistinguishable.png|600]]
- For the cases where the strings might be less than 2 in size, neither are in the language. For all pairs >= 2 in size, the only thing that determines if they're in the language is if the second-last character is $a$, but notice how both have the same two characters in each case?
- As such. we see that for all of these cases they are both in or not in the language. $\epsilon, b$ are *indistinguishable* w.r.t $L_2$
	- I.e., $\epsilon \cdot s, b \cdot s$ for any suffix $s$ are both $\in L_2$ or $\not \in L_2$

This means all strings in, say, $q_1$ are *indistinguishable* as well for this language! $a, ba, bba, bbba, \dots$ are indistinguishable. means both $a\cdot s$ and $bbba \cdot s$ will be accepting or not.
This makes life easy. Let's just work with an easy term like $a$ when trying to figure out the transitions of $q_1$
- The $a$ instance. We show $a$ from $q_1$ and $aa$ from this new case are distinguishable
	- a, aa, ab, aaa, aba, aab, abb, etc.
	- vs
	- aa, aaa, aab, aaaa, aaba, aaab, aabb, etc.
	- Already we see they are distinguishable just from the first example. $a \not \in L_2$ but $aa \in L_2$
	- It seems going to $a$ actually makes it "accepting" instead! It's a new state and it's accepting

$q_2$ will have strings $aa, baa, bbaa, \dots$ coming from $q_1$ but with just an added $a$ to it

- The $b$ instance
	- Let's think: Can $\delta(q_1, b)$ also go to $q_2$? Well let's confirm if $aa$ and $ab$ are indistinguishable. If so, then yes! If not, then we need a new state
	- $aa, aab$...
	- $ab, abb$...
	- We already see $aab \in L_2$ but $aba \not \in L_2$ 
	- They are distinguishable! We make $q_3$. Also notice that it's accepting because it'll have strings `ab, bab, bbab, bbbab,` etc.
![[DFA creation example progress so far (part 1).png|600]]
- Notice `aab` for $q_3$ isn't shown in the diagram already, but we can see the pattern between all of these states. $q_0$ always ends with $bb$, $q_1$ always ends with $ba$, and $q_2, q_3$ end with $aa, ab$ as well.
- The last two are the only ones that matter! After $q_1$, *every* string is larger than $2$ as well, so they are completely indistinguishable.
- We can use this fact to fill in the rest of the transitions easily.
- This happens when you realize you have enough states
![[DFA creation example progress so far (part 2).png|600]]

Observe: For this state machine, the only two characters that distinguish the REST of the string (when the string is greater than 2 in size) is simple the first two characters:
- `...bb`, `...ab`, `...ba`, and `...aa`. Depending on the last two, it'll either be in or not in the machine. 
