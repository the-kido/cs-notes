## Q1 ✅
yeah i got that

## Q2

Wait this is crazy. 
1. True... probably? dim(V) = dim((image(T)) + dim(ker(T)).
There could be a function like T(w,x,y,z) = (w, x, 0, 0). Half the dimension is zero'd; the other half is part of the image. I kinda wanna find them both with methods for practice.

$[T][0]$
gets u 
w = 0
x = 0
(w,x,y,z) = (0, 0, y, z) = span((0,0,y,0), (0,0,0,z))
i recon. So that's the kernel.
The image would then be (w, x, 0,0) idrk how but i would have to explain it somehow. and yeah the dim of each is equal! Both 2 

2. False. SInce dim(V) = 5. This means if Image(T) = ker(T), then dim(Image(T)) = dim(ker(T))
So dim(V) = dim(image(T)) + dim(ker(T)) => dim(V) = dim(image(T)) + dim(image(T))
5 = 2dimjfapfjip
dim(image(T)) = 2.5.... 2.5!? Thats bazingas!

3. 
If dim(V) is even, then there exists a $T : V\to V$ such that image(T) = ker(T)
Proof
Suppose $n = \dim(V)$ is even.
(maybe deal with the dim(0) case seperately? idk if I need to)
Let $\alpha = \set{a_1, a_2, \dots, a_n}$
Since $dim(V)$ is even, let 
Choose $T = (v_1, v_2, \dots, v_n) = (v_1, v_2, \dots, v_{n/2}, 0, \dots 0)$
$[T]_\alpha^\alpha$ = (insert matrix here)
get the free and basic variables yayay

Then the kernel is simply $span\set{ (v_1, 0,\dots,0), \dots, (0,\dots, 0, v_{n/2}, 0, \dots, 0)}$ which has $n/2$ elements
The image is also simply span (other part yeah) because.. yeah? I kinda wanna see if the gang did the same thing for this question!


# Q3

1. $T(V') \subseteq W$. We show it's a subspace.
Let x, y \in T(V')
Then $cx + y = cT(v'_1) + T(v'_2)$
$= T(cv'_1 + v'_2)$
$\in T(V')$ as $V'$ is a subspace implies $cv'_1 + v_2' \in V'$

So it's a subspace dearly so

2. Pre-image one
By the theorem that inverses of linear functions are linear, T^{-1} is also linear. 
Let x, y in T^-1 (W') be arb.
then cx + y = 
T^-1(cv + v)
blah blah. easy.

Part 2. 
1. Let w = {0}, which we know is a subspace
Then $T^{-1} (W') = {T^-1(0_W)}$ 
$T^{-1}(\vec 0_W) = \vec v$ where $T(v) = 0_W$

So $\set{T^{-1}(0)} = \set{\vec v : T(v) = 0} = \ker(T)$
GReat

2. 

$image(T) = \set{T(v) : v \in V}$
So V' = V would work

Let V' = V
Then  $T(V') = \set{T(v) : v \in V} = \operatorname{image}(T)$
wow that is easy 

## Q4

i am not tryna do this rn.


## Q5
- I think i already did it
just to be safe imma do it again
Suppose S is linearly independent`
then $|S| = n$ and by theorem that Independent sets of the right size are bases, S is a basis of V.
Therefore $span(S) = V$ as S spans V as it's a basis.

Suppose Span(S) = V
we know |S| = n
(WTS S is linearly independent)
Let's say S is linearly dependent instead.
Then $dim(Span(S)) < n$ as there exists redundant vectors in S .
However it should be that dim(V) = dim(Span(S)) as $V = Span(S)$ by assumption
Therefore it must be that S is linearly independent :>

## Q6.
We know that $A + B = \set{a + b : a \in A \text{ and } b \in B}$ 

s
We know |S1 U S2| = |S1| + |S2| - |S1 and S2|
= |S1| + |S2|
S1 and S2 are lin indep.
span(S1) = W and span(S2) = W so they are both basis
so |S1| = dim(W_1)0 and same for S2

s
THEN span(S1 U S2) = W_1 + W_2 means S1 U S2 is also a basis cuz S1 and S2 are lin indep wait no hold on not quite.
- How to show S1 U S2 is lin indep
#todo somehow show S1 U S2 is indep via the fact that span(s1) and span(s1) = $\vec 0$

Consider $0 = \sum_{i=1}^n a_iv_i$  where $v_i \in S_1 \cup S_2$
$a1v1  + ... + a_nv_n + b_1w_1 + ... + b_kw_k$  where v \in S_1 and w \in S_2
span(S_1) + span(S_2)
which implies a_i and b_i = 0 since S_1 and S_2 are linearly independent.

So S1 U S2 is linearly independent
which means S1 U S2 is a basis
So dim(span(S1 U S2)) = dim(W_1 + W_2) 
=> |S1| + |S2| = dim(W_1 + W_2)
=> dim(W_1) + dim(W_2) = dim(W_1 + W_2)

BOO YAH

## Q7
We gotta prove the two properties!

Let $x, y \in M_{k\times n}, v \in L(V, W)$ be arbitrary. Let $a \in \mathbb R$ be arbitrary, too.
MAYBE let $v \in V$ be arbitrary, as some arbitrary input.

1. Distribution over vector addition

Transform(x(v)) + Transform(y(v))  = (write as chonky matrices, then compress to 1 matrix) (then apply the transformation (?))
Transform (x + y) (also write as chonky matrix)

They should be equivalent (?) Or result in the same output. i don't know :( 
#todo Just use the fact that matrices are linear

2. Distribution over scalar multiplication

# Q8
frick

# Q9
- This should be.... light....

# Q10
...what is the identity

Suppose that V is a vector space. The identity transformation I : V → V is given by I(v) = v
Well there ya go
We find the matrices of this identity transformation where passing a real number of type $\alpha$ gives you one of type $\beta$ 
shouldn't be too bad :>


I((1,1)) = (1,1) = 1e_1 + 1e_2 
I(1, -1) = (1, -1) = 1e_1 - e_2
So $[I]_\beta^\alpha$ = and u use the abv

$I(1, 0) = (1, 0) = 1/2(1, 1) + 1/2(1, -1)$
$I(0,1) = (0, 1) =  1/2(1, 1) - 1/2(1, -1)$
So $[I]_\alpha^\beta =$ again, just use the abv

# Notes for bonus assignment #4 
For q2 I wanna figure out the steps more betterly
For q3 the rank is 2, not 3. Why? Because we are talking abt the input here. The dim of the image is the dim of T subtract the dim of the kernel. we know the kernel = 1 and T = 3 (as the dim of r^3 is... 3) so yeah. braindead. #todo 

![[Pasted image 20250306202809.png]]
I shouldn't default to representing vectors like I would an $R^n$ vector. So, once I finish with the matrix, I gotta be like a + bx + cx^2 + dx^3 = -d + dx - cx^2 + dx^3 etc. etc. #todo maybe go over again
ALSO, we start polynomials with biggest thingy first. I kinda mixed them up so my span looked at wrongeth. 

![[Pasted image 20250307114817.png]]
- this is braindead. The question isn't asking for the basis of the image, just "a" image. tsk.
