### 1.
I will first do the "traces" and then fill out the table

R1 and 10001:
This should match. `(0 + 1) = 1` and `0*1* = 000 x 1`

The "traces" for the RE's make use of their recursive nature:
- `(0 + 1)(0*1*)`
	- `(0 + 1)` =`1`
	- `0*1*`
		- `0*` = `000`
		- `1*` =  `1`
In total it's `1 000 1`!

A1 and 100100:
$q_0 \to^1 q_1 \to^0 q_0 \to^0 q_1 \to^1 q_2 \to^0 q_0 \to^0 q_1$
and $q_1$ is accepting!
So `100100` is accepted by this DFA

A1 and 111000:
$q_0 \to^1 q_1 \to^1 q_2 \to^1 q_1 \to^0 q_0 \to^0 q_1 \to^0 q_0$
and $q_0$ is not accepting so this string is not accepted.

R2 and 100100:
`1*` = `1` and `(01 + 10)*` = `0`
Nope that doesn't work.
`1* = 0` and `(01 + 10)* = 10 + 01` and `0* = 00`
That works. Okay so this is accepted

Trace:
- `1*(01 + 10)*0*`
	- `1*` = $\epsilon$
	- `(01 + 10)*`
		- #todo Look at the annotation given by the answer. That's the "standard form"
		- `10`
			- `1`
			- `0`
		- `01`
			- `0`
			- `1`
	- `0*`
		- `0`
		- `0`

R3 and 010:

`01*` =`01`
and `0 + 1 + e` = `0`
Easy!

- `01*(0 + 1 + e)`
	- `01*`
		- 01
			- 0
			- 1
	- `0 + 1 + e`
		- 0

Bruh the skimped on the tree >:(

For the table I will JUST do the regex ones since the DFA's seem very easy


|        | $e$ | 0   | 1   | 010 | 01101 | 10001 | 100100 | 111000 |
| ------ | --- | --- | --- | --- | ----- | ----- | ------ | ------ |
| R1     | N   | Y   | Y   | N   | N     | Y     | N      | N      |
| R2     | Y   | Y   | Y   | Y   | N     | N     | **Y**  | Y      |
| **R3** | N   | Y   | N   | Y   | N     | N     | N      | N      |
`R3 = 01*(0 + 1 + e)` 
- Note `01*` is NOT the same as `(01)*`. My bad. Obvious mistake
- As for the R2 mistake, well it's obvious. `10` and `01` match, and the rest is `00` which `0*` matches. 

### 2.

#### a)
Accepted: `a, aaa, aaaaa, b, bab, babba, abbabab`
- As long as it's an odd number of instructions!
Not accepted: `e, aa, ba, babb, bbbbbb`

English: $L_1 = \set{\text{strings with odd size}}$
RE: $R_1 = `(a+b)[(a + b)(a + b)]*`
- Reads as: Must start with an a or b. After that it's a bunch of pairs of a's or b's.
- UGGHGHG This is so obvious. Okay I am gonna do these all by myself now


#### b)
Accepted: `a, b, aba, abaa, ababa, ababaaaa, bbb, abb, aaaaaa`
`bbbbb, ababb`

`(a+b)a*(b + (a + b))*`?
- 

I am not seeing a pattern...
Not accepted: `ab, aaaaab, e, bb, abab, abaaaaab`
- Not accepted always ends with `b` or is just `e` *and* are even!
- For success: If it ends with `b`, it MUST be odd. 
	- If it's all b's, then it must be odd
	- Otherwise if it ends in a b, you must have even b's
- Otherwise it doesn't matter?

$L_2 = \set{all strings such that if it's all b's it must be off, otherwise ib ends in b it must be even b's}$
????

`R_2 = b(bb)* + (a + b)*a(bb)*`
You can factor them??
`=(b + (a+b)*a)(bb)*`
Okay at least with what I understood I am actually right.
But there's no way I was going to recognize that pattern. UGHGHUGUGH

#### c)
Accepted: `a, aa, (a+b)(a+b)`
Not accepted: $\epsilon$ 

$L_2 = \set{\text{all non-empty strings}}$
`R_2 = (a + b)(a + b)*`

WHY WAS THIS ONE SO EASY

#### d)
Accepted: `ab, b, aaaaab, a*b(a+b)*`
Not accepted: `aa`, `aaaaa`, `aaaaaaaa`, $\epsilon$

$L_4 = \set{\text{all strings that have at least one b}}$
`R_2 = a*b(a+b)*`

#### e)
Accepted: `ab`, `ababab`, `b`, `aaaaab`, `abababaaaaaaa`
Rejected: `bb`, `abab`, `aaaabaaaab`

$L_5 = \set{\text{all strings that have an odd number of b's}}$
`R_5 = (a*b)(a*ba*b)*`****`a*`
- The `a*` is needed because if we're on the right state we can still loop through $a$

#### f)
Only successful if a $b$ is succeeded by more b's?
Okay it's if it *ends* in a series of $b$'s

Accepting: `aab, bbb, b, aababbb, abab, bb`
Rejecting: $\epsilon$, `aaaaa, aabbbbaaa, ba, bbbbaaaaa, abbabababa`

$L_6 = \set{\text{All strings that end with a b }}$
`R_6 = (a+b)*b`

#### g)
Accepting: `ab, aaab, baaaaab, bbb, babbb, aaaab`
Rejecting: `abb, bb, a, aa, abaaa, bb, bbbb, bbbbbb`
$L_7 = \set{\text{All strings that end with an odd number of b's}}$
- I accidentally said all that end with $b$ which is true for accepting but not rejecting.
$R_7 =$ `(e + (a+b)*a)b(bb)*`
- Oops. Don't let `(a+b)*` absorb everything. Block it with a `b` in front of it!

### 3.

#### a)
##### i)
In: `aa, b`
Not: `e, ab, a, bb, bab, ababb...`

##### ii)
In: `aa, ab`
Not: `e, ab, bb, a, b, e, aaa, ...`

##### iii)
In: `e, aaaa, a, aa, b, bbb, bbbb`
Not: `ab, ba, aaaab, bbbbba, ...`

#todo Include $\epsilon$ at all times. It's the first thing you should consider

##### iv)
In: `e, a, ab, ba, ababab, abababa, every string....`
Not: Nothing! Every string is included

##### v)
In: `e, ab, abab, ababab`
Not: `b, ba, bababa, aaa, bbb`

##### vi
In: `e, a, b, ab, aabbbb, abbbb, aaaab`
Not: `ba, baaaaa, bbbbbaaaa, bab, aba, babbab`


#### b)
In: `e, a, ab, aab, aba, aabab, aaa, ababab` 
Not: `b, abb, abbb, bb, bab, ba`

$P(s) = \set{ \text{Strings where all b's are proceeded by 'a's}}$
- #todo I didn't get this at first glance... how do I figure this out?


#### c)
Regex:

RE: `(♠ + ♥ + ♦)(♠ + ♥ + ♦)♥(♠ + ♥ + ♦)(♠ + ♥ + ♦)*`

Automata: 
I drew it. I did everything good except I didn't make $q_5$ that keeps the state in hell when you don't have a third character that's a heart
- If you choose NOT a heart for char 3, you get stuck in $q_5$ hell and are ever accepted

#### d)

For the automata, the instructions are added to the end (grows left to right)

NOT a `10` is "ends with `11`, `01` or `00"

RE: `0 + 1 + (0 + 1)*(1 + 00)`
- #todo I didn't include the $0$ or $1$ case but the rest was good


$Q_0$ (start, winning)
- If 1 go to $Q_1$
- If $0$ stay in $Q_0$

$Q_1$ (still good zone. Represents ends with "1")
- Goes to $Q_2$ if $0$ (bad zone)
- Goes to $Q_1$ if $1$ (itself)

$Q_2$
- Goes to $Q_0$ if $0$
- Goes to $Q_1$ if $1$

Wow I got it that second time (first time was a mess though lowkey)

#### e) and f)... I'm gonna NOT do these.
They are practice but a #todo for the future!
