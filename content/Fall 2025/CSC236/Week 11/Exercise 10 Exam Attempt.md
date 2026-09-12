### 1.
$R_1$ and $10001$

- 10001
	- 0+1
		- 1
	- `0*1*`
		- 0*
			- 0
			- 0
			- 0
		- 1*
			- 1
$A_1$ and 100100
$q_0 \stackrel{1}{=} q_1  \stackrel{0}{=} q_0  \stackrel{0}{=} q_1  \stackrel{1}{=} \dots$
Okay easy to remember


### 2. Good practice
Rude Buster is playing for good luck

Gotta show list of all strings accepted by the machine.
We say that's $L_1$ iirc? And strings not accepted.

#### a)
In: `a, abb, aba, babba, abababa, ...`
Out: `e, aa, ab, ba, bb, aaaa, abba, ...`
$L_1 = \set{\text{All strings of odd length}}$
$R_1 = (a+b)(aa + ab + ba + bb)*$
or $= (a+b)( (a+b)(a+b) )*$

#### b)
In: `b, a, bbb, abb, abaaa, baaabaaa, ababa`
Out: `e, bab, aab, aaaaaaaaaab, ...`
$L_1 = \set{\text{ends with even \# of b's iff it has an a }}$
I guess
$R_1 =$ 
im not trying

#### c)
In: `a, b, aa, ab, ba, ...`
Out: `e`
L_3 = {all strings but empty string}
A sad life
R = (a+b)(a+b)*

#### d)
In: `aaaaaab, b, bababaaabaaba`
Out: `a, aa, aaa, aaaaa`

L_4 = Has a $b$
`R_4 = a*b(a+b)*`

#### e)
In: `b, baaaa, baaabb, baaabbaaabb`
Out: `e, a, aa, aa, aaabb`
L_5 = contains a b, or ends in even b's iff has a's
Wow it's all "odd" number of b's that's crazy.

R_5 = 
Enough of that.
### 3.
#### a)
L(aa + b)
In: `aa, b`
Not: `e, a, bb, ab, ba, ...`

#### b)
In: `aa, ab`
Out: `e, a, b, ba, bb, ...`

#### c)
in: `e, a, aaa, aaaaa, b, bb, bbbbb`
Out: `ab, ba, aab, aba, ...`

#### d)
In: `e, a, b, aa, ab, ba, bb, aab, aba, aab, ...`
It's everything!

Out: Nothing is left out >:)

#### e)
In: `e, ab, abab, ababab, ...`

#### f)
Uh okay i messed this up big time

So c) is actually another question about spades and stuff

Basically you have q_0
Then you go to q_1 if you have any of the 3
again you go to q_2 for any of 3
then q_3 is JUST for heart. if you dont got hard, you get sent to jail (q_5) which no matter what you do will stay in q_5
otherwise with anything else you go to q_4 and you're in heaven!


### d) The machine question
The diagram isn't too bad. But yeah it wouldn't have been my first thought. 

### e)
This is the important bit though

The DFA has $6$ states. To find the set of pairwise strings, we
1. Just look at *any* entry in each of the states. If this is minimal, our piecewise thing will be a walk in the park.
2. for $q_0$ that would be $\epsilon$. Continue for the rest
	1. 0 -> e
	2. 1 -> ♥
	3. 2 -> ♥♥
	4. 3-> ♥♥♥
	5. 4-> ♥♥♥♥
	6. 5 -> ♥♥♠
3. Then we show distinguishability from the rest
	1. $\epsilon$ is distinguishable from the rest since with $s= ♥♥♥$ the rest (except 5) are IN but e is not
		1. And for $q_5$, if $s = ♥♥♥♥$ then $q_0$ is in but $q_5$ is still out so they are also dist.
	2. $♥♥♥♥$ is indistinguishable from all cuz it's in L but none of the others are
	
> OHHH Okay so the prof is NOT doing the redundant ones
> Basically as you go, there are less and less ones you need to check. Indeed, you make 1 + 2 + 3 + 4 + 5 total comparisons. You don't need to compare all 6 of them 5 times (30 comparisons!)


Let's try that for f)
#### f)
0 -> e
1 -> 1
2-> 10

10 is distinguishable from e and 1 since 10 not in L but e, 1 are.
(so $q_2$ is already done!)

e and 1 are distinguishable since $e \cdot 0 \in L$ but $1 \cdot 0 \not \in L$

Done!