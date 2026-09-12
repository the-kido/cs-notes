$$ \mathscr Formal\ \mathscr L \text{anguages}$$

Formal Languages!
Languages = Set of strings (very simple!)

#### `*` Regex operator
$*$ means $0$$ or more repetition of a set. 
$\set{ a, b}^*$ is the "set of all strings" made up of a's and b's. "All strings over $\set{a, b}$"

> The `*` operator is "greedy" but not "selfish"
> 
> Let's have a Regex `a*ab` and pass string `aab`. 
> You'd think the two `a`'s at the start are absorbed by `a*`, therefore unsatisfying the `ab` requirement because there's only a `b` left in the string.
> But regex engines notice this and "give up" an `a` from `a*` until it maybe helps satisfy the regex. So `a*` will only take ONE `a` and the `ab` will take the rest of the input string as we'd expect.  

### L-R example "game"
When on L, if "a", then stay on L. If b, go to R. If a or b on R, go to L.
We want to know "what string of operations are in our language". Like, which strings satisfy this game and finish by landing on L?

States are just $\set{L, R}$ and nothing else. And there are inputs that let you switch states.

#### Deterministic Finite Automata (DFA)
Let's trace an example string `aababb`
We start at $L$
$L  \to L \to L \to R \to L \to R \to L$ (this string is in our language!)
- Each $a, b$ is a *transition* in our DFA
- The "state" tells us the answer. It ends on the $L$ "accepting" state that says "yes", we are good!
	- If it ended on $R$, it would say "no"
![[DFA LR example.png]]

Features common to DFAs:
- A fixed/finite number of states. It creates with "15" states, and it stays with 15 states
- One of the states is the initial state
- One of the states is the "accepting state". The "good state".
- For every state and every character processed, there is exactly 1 state to go to 
- "It summarises an algorithm that takes a string and spits out true and false depending on the ending state which we define as accepting or not"

#### Strings
- Strings are sequences
- They are finite! Infinite strings would be weird
- We don't use quotes. `aab` is a string, not `"aab"`
- Also `""` empty string is $\epsilon$ which looks "$\epsilon\text{mpty}$"
### Regular Expressions (`regex`, RE)
For the regex of "ends with even # of b's"
1. To find the "even number of b's and nothing else", the regex would be `(bb)*` (0 or more repetitions of `bb`)
	1. The language of this regex is $\mathscr L((bb)^*) = \set{\epsilon, bb, bbbb, bbbbbb, \dots}$
	2. It's all strings that match the pattern we passed.
2. To find "ends with":
	1. `a*(bb)*` means "starts with some amount of `a`'s and ends with some even amount of `bb`'s) 
		1. But `babb` wouldn't be part of this language.
		2. You need something like `(a + b)*` for "or/union/alternation". It means 0 or more repetition of $a$ or $b$.
			1. Also $\mathscr L (a^* + b^*)$ is NOT the same as $\mathscr L((a + b)^*)$ since the first is "0 or more a's **OR** 0 or more b's"
			2. $\mathscr L (a^* + b^*) = \set{\epsilon, a, aa, aaa, aaaa, \dots} \cup \set{b, bb, bbb, \dots}$
		3. We want the string to start however, but it needs to then be an $a$ before continuing on into a bunch of pairs of `bb`.
		4. So the total regex is `(a + b)*a(bb)*`
		5. BUT it misses the strings $\set{ \epsilon, bb, bbbb, \dots}$ because of that `a` requirement
		6. So we add it with an OR!
		7. `(a + b)*a(bb)* + (bb)*`
		8. Or you can even write:
		9. `((a + b)*a + epsilon)(bb)*`

>[!caution] `(a + b)*a*(bb)*` does NOT work! 
>Because of this string: `bbb`. It's odd! The `(a + b)*` part is satisfied by `b` and `a*` is satisfied since there is no a. Lastly `(bb)*` is satisfied... it get's all messed up this way


### Another example
![[Regex Practice Example.png]]
Let me try this. There is for sure an `a` somewhere. The last char can be either a or b as well
`a(a + b)`
and that's already 2 in size. Then everything "before" the a can be a or b.
RE: `(a + b)*a(a + b)`
- OKAY I DID IT
How do we "build a DFA" for this, though? He says "constrain yourself by using as little states as possible"

# Readings (`regular-intro`)
### Rules for Formal Languages
- Languages = sets of strings over an alphabet.
	- They are elements of $\mathscr P(\Sigma^*)$
- These sets of strings have characters from their alphabet $\Sigma$ which is the set of all character in the language
- We don't need quotes. Characters beside each other = concatenation 
- $\epsilon$ represents empty strings like `""` does in code
- `|s|` represents the length of a string `s`
	- $|baa| = 3$ and $|\epsilon| = 0$ 
- $\Sigma^*$ is the language (set) of all strings over alphabet $\Sigma$
- $\Sigma^2$ is the language (set) of all strings over $\Sigma$ of length $2$ 
### Regex
- $\phi$ is an "empty language". Very similar to $\emptyset$ for regular sets, but languages are special sets with special names for things >:)
- $\epsilon$ is an "empty string" and is a valid Regex too?
- If a character $c$ is in an alphabet, then it's in the set of regular expressions for that alphabet, too!
- And also, we have 3 operations
	- Kleene-star is $R^*$ and that's always an operator where $R \in \Sigma^*$ (I think)
		- It's for zero or more subsequent occurrences of a string  
	- Concatenation is $RS$ next to each other (both strings)
	- Union/Alternation is $R + S$ for "or". So $(R +S)^*$ is one or more subsequent strings of either $R$ or $S$

Regular expressions are, at the end of the day, another "string" (some operators use special characters, so for convenience our alphabets will never use these). A regex like `(a|b)*c` can be broken down into sub-regexes and combined together, almost recursively. For instance, `((a|b)*c)` has parts `(a|b)*` and `c`. Also `(a+b)`is passed into `R*` and `a` and `b` themselves are regular expressions. It breaks down recursively!

We use *parenthesis* to eliminate any ambiguity for order of these expressions.

All regex has an associated *language* given by $\mathscr L(R)$ where $R$ is a regex over $\Sigma$.
- It takes a regex, gives the language (i.e., all possible strings outputted by $R$, i.e., $\mathscr P(\Sigma^*))$
- There is a special $\odot$ for "concatenation" of languages. Otherwise they are just sets.
- As described before, this function is defined recursively:
	- $\mathscr L ((R_1 \cdot R_2)) = \mathscr L(R_1) \odot \mathscr L(R_2) = \set{ s_1, s_2 : s_1 \in \mathscr L(R_1), s_2 \in \mathscr L(R_2)}$
	- Ehh idk if I need to remember this!

If a string is inside of the language for a regex, then we say the string "matches" the regex!

#### $L_{even}$ language example
We want all strings that end with an "even" number of "b"s where $\Sigma = \set{a, b}$ 

We can match the even number of b's with $(bb)*$ since $\mathscr ((bb)^*) = \set{ \epsilon, bb, bbbb, bbbbbb, \dots}$ and those are all an even number of b's!
Then we need to match "everything else". That can be given with $(a + b)^*$ 
To make sure we don't have 3 b's at the end matched, we FORCE that the character before the bb pair stream is an $a$ to ensure that.
So far we have `(a + b)*a(bb)*` but this does NOT match a string like `bb`, which it *should*, but the `a` requirement messes that up!

We can just "if" this out of the equation!
`((a + b)*a) + epsilon)(bb)*`
- Either it starts with gibberish, or it just starts with nothing and the rest is even b's!

## DFA's (Deterministic Finite Automata)
$$\mathscr {V}\text{ery } \mathscr {W}\text{eird}$$
Has "5" components
1. An alphabet (for instructions iirc)
2. Finite states (The set of states: $Q$)
3. The starting state $q_{start} \in Q$
4. The accepting/final states $F \subseteq  Q$  
5. A "transition function" $\delta : Q \times \Sigma \to Q$ 
	1. It takes the current state as well as a alphabet instruction and gives a new state
	2. This is well defined such that for all states and all alphabets, there is a new state
	3. Seen best with a transition table or transition diagram!

![[Example of deterministic finite automata.png]]

For transition diagram:
- All states are circles
- Arrow with an alphabet indicates next state depending on instruction
- Accepting states are the double-circles. The first "$\to$" arrow indicates the starting state

For transition table:
- Lists each character on top. Lists all states vertically. 
- You clarify the start/final states with English on the side
- Every entry is a return value of $\delta(q, c)$

"Dead-states"
- Non-accepting & transitions are only to itself. Can be omitted from visuals but are still a part of the DFA!

### DFA Computation
DFA's take *string* inputs (sequence of character instructions). While running the machine, the current state $q$ is kept track of (initially $q_{start}$). The "suffix" $s$ is the input *left* to process (initially it's the entire string to process). Its prefix (the first character $c$) is the instruction run.
The machine recursively does this *until* the suffix is empty $\epsilon$:
1. It looks at the first character $c$ of the string instruction $s$
2. It follows the transition, going from the previous state to $\delta(q, c)$ given the current $q$ and first char $c$
3. It removes the $c$ from $s$ (creating a new "current suffix") and starts again
Basically it goes letter by letter interpreting the instructions until there are no more left.

### Accepting an input
If you have a machine $M_1$ and an input $s$, the input $s$ is only accepted (i.e., the regex matches the string) iff the "final state" after interpreting the string is an "accepting" state.


### Predicates
![[DFA's and Predicates.png]]
Seems not so bad. It goes through the string, updates the state with the transition function until finished, and returns the final state. You can determine if the state is accepting or not with another predicate.

