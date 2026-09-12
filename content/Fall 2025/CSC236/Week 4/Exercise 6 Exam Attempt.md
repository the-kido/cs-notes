### 1. Skipped

### 2. Obvious enough...?

### 3.
We have a structure given.
"expressions" are unambiguously constructed (has unique derivation/parse trees)

$W(e)$ is the number of `w`'s in $e$

To start, it's a good idea to draw out some elements of $E$.
For instance, $E = \set{(w \oplus w), w \oplus (w \otimes w)), w, \dots}$

We also define a $V$ that takes an $e$ and "evaluates it".
Like, $V((w \otimes w)) = V(w) \times V(w) = 2\times 2 = 4$

The PCI for this structure is:
(remember, if base cases hold, and when IH, other properties, then the whole thing holds)
$[P(w) \wedge \forall e_1, e_2 \in E, P(e_1) \wedge P(e_2) \implies P(e_1 \oplus e_2) \wedge P(e_1 \otimes e_2)] \implies \forall e \in E, P(e)$

#### a)
```python
# Pre: e is a value of an_E()
# Post: r = W(e) and r \in N
def w(e):
	# Let size(e) = len(e) \in N, so valid measure.
	# Assume RH

	# Valid type since e is a variable. valid == comparing types. valid if since == returns bool
	if type(e) == str: # (C)
		return 1 # There is only one 'w'. But also this is an invalid comparison between tuples and strings. We gotta compare types instead
		# Correct return. By (C), e must be 'w', which has only one w in it.
	else:
		# Valid tuple separation since e is a tuple by Pre and not (C)
		(e1, o, e2) = e
		# By Post, e_1, e_2 are \in E and o \in E but specifically an operator.
		
		# Valid w calls since e1, e2 are in E. 
		# By RH, w returns a natural number, so valid +'s too
		return w(e1) + w(e2)
		# Valid return since w() returns the sum of each component, and e_1 + op + e_2 are all components of e. Also, adding two natural numbers makes a natural
```

#### b) 
Was already done
#### c)
The "algorithm" is the "structure" basically.
1. So W(w) = 1
and
2. Forall e_1, e_2 \in E, W(e_1 + e_2) = W(e_1) + W(e_2) and W(e_1 x e_2) = W(e_1) x W(e_2)
I guess?

#### d)
To show co-domain, you're basically showing $\forall e\in E, V(e) \in N$ 
The proof for this is pretty simple!

Proof:
Base Case:
- $V(w) = 2 \in N$
- Boom
Inductive Case:
- Let $w_1, w_2 \in E$ be arbitrary. Assume $V(w_1) \in \mathbb N$ and $V(w_2) \in \mathbb N$ 
- Then the result of $V(w_1 + w_2)$ or $V(w_1 \times w_2)$ is a natural since $+$, $\times$ result in naturals when both operands are naturals.
That's the proof. Done! Nothing complicated honestly.

Now to show that $\forall e \in E, V(e) \geq 2 \cdot W(e)$
Proof:
Base Case:
- $V(w) = 2 = 2 \cdot 1 \geq 2 \cdot W(w)$ since $W(w) = 1$ 
Induction:
- Let $e_1, e_2 \in E$ and suppose $V(e_1) \geq 2\cdot W(e_1)$ and $V(e_2) \geq 2 \cdot W(e_2)$
- Then $V(e_1 + e_2) = V(e_1) + V(e_2)$ 
- $\geq 2 W(e_1) + 2 \cdot E(e_2)$
- $=2W(e_1 + e_2)$ 

### 4. but NOT 5.
- $x_i$ is an expression in F for all $i \in N$
- If $p \in \mathscr F$, then $\neg p \in F$ too.
- There are also ANDs and ORs in F too
- Remember expressions are unambiguous. Means we use tuples to ensure they follow an order

There are functions T, N that take F and return F
- For each i in N, T(x_i) = x_i and N(x_i) = not x_i
	- So these functions take the expressions and evaluate them, or evaluate the negation of it
- For each p, T(not P) = N(p) and same for N
- For each p, q, we can split (linearity basically?)

#### a)
hm?
Well to prove anything on this "structure" we need the PCI
$[\forall i \in \mathbb N, P(x_i) \wedge \forall p \in F, P(p) \implies P(\neg p) \wedge \forall p, q \in F, P(p) \wedge P(q) \implies P(p \wedge q) \wedge P(p \vee q) ] \implies \forall p \in F, P(p)$

Some elements include $F = \set{x_2, \neg x_2, \neg(x_1 \wedge x_2), (\neg x_1) \wedge (\neg x_2), \dots}$

We have our $P(p): T(p) \equiv p \wedge N(p) = \neg p \wedge$ and $T(p), N(p)$ have negations only on variables.  
- That's pretty long

Base Case:
- Let $i$ be arb. Then $T(x_i) = x_i$ and $N(x_i) = \neg x_i$ by def'n, and both have negations only on variables.
Inductive Step:
- It's a ""yap fest"". 
- Also they merged the two inductive steps by just universally quantifying the first one with one of the second.

### 6.
Similar to regex stuff

#### a)
Let $S = \set{a, aa, aaa, aaaa, \dots}$ YUP!
$T = \set{bc, cb, bbc, cccb, bcbcccb, bcbcbcbcccccbbbcbcbb, \dots}$
- Just a gibberish mix of c's and b's. Literally `(a+b)(a + b)+` in regex. (excludes the empty string)

Then $S \odot T  = \set{abc, acb, aaabc, aaacb, acccb, aaacccb, \dots}$ 

$S = \set{a, ab, aba}$
$T = \set{ba, a}$
$aba \in S \odot T$ since $a\cdot ba = aba$ and $ab \cdot a = aba$ 

#### c)
WE HAVE SET
Okay so R contains "expressions" again so it's the whole tuple thing.
so (r + s) is an "OR" like it is in regex?

IT'S A RECURSIVE STRUCTURE!
So when we "trace" this, we can trace it recursively!

Trace:
$L((    ((0 + 1)0)(e + (11))   )) = L((    ((0 + 1)0)) \odot L((e + (11))   )) = \set{00, 0011, 10, 1011}$
- $L((( 0 + 1)0 )) = L((0 + 1)) \odot L((0)) = \set{00, 10}$
	- $L(0 + 1) = \set{0, 1}$
		- $L(0) = \set{0}$
		- $L(1) = \set{1}$
	- $L(0) = \set{0}$
- $L((( e + (11)  )))= L((e)) \cup L((11)) = \set{e, 11}$
	- $L(e) = \set{e}$
	- $L((11)) = $L(1) \odot L(1) = \set{11}$
		- $L(1) = \set{1}$
That was the trace........


#### d)
We're trying to prove that the size of the language is always..... less than the size of R?
- I think the wrench is the $\epsilon$. $R$ treats it like a member. $\mathscr L$ doesn't care
- Now about proving that...
PCI

Easy to derive. not gonna waste time

But for the actual proof. Idk

Oh okay wait it's obvious

$P(r): \forall s \in \mathscr L(r), |s| \leq |r|$

Proof
Base Case $\epsilon$:
- Let $s \in \mathscr L(\epsilon)$ be arbitrary. Then $|\mathscr L(\epsilon)| = |\set{\epsilon}| = 0$, and $|r| = 1$, so $|s| = 0 \leq 1 = |r|$. Pretty cookie-cutter
Base Case $1$:
- Let $s \in \mathscr L(1)$. Then $|\mathscr L(1)| = |\set{1}| = 1 \leq 1 = |r| = |\set{1}|$ 
Okay you get it by now

Inductive Step:
- Let $r,s \in R$ be arbitrary. Let $t \in \mathscr L(r)$ and $u \in \mathscr (s)$ be arbitrary and suppose $|r| \leq |t|$ and $|s| \leq |u|$
- Then $|t \cup u|$

yeah nah im not doin this

