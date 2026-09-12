So up until now we've only analyzed unchanging things. We haven't applied any functions to "change" things. We will be doing that now via "linear structure-preserving maps"
 The idea of structure-preserving maps is very important and deep in math

>[!defn] Linear Transformation
>Suppose that $(V, \boxplus, \boxdot)$ and $(W, \oplus, \odot)$ are two vector spaces.
>A linear transformation / *map* / *function* is function $T : V \to W$ such that
>$$T(\vec u \boxplus \vec v) = T(\vec u) \oplus T(\vec v)\ \ \ \ \text{and} \ \ \ \  T(a\boxdot \vec v) = a \odot T(\vec v)$$
>
>This means $T$ distributes over vector addition and over scalar multiplication.
>
>In the textbook It's written as $T(\vec u + \vec v) = T(\vec u) + T(\vec v)$ which hides that V and W might have different operations

#todo Explain how it is sufficient to prove T(cx + y) = cT(x) + T(y)

> $\vec 0_W$ signifies the vector $\vec 0$ is of the [[Vector Spaces|vector space]] $W$. This is an important distinction as W and V may have different operations!

>[!thm] Linear Transformations Preserve Additive Identities
>If $T : V \to W$ is a linear transformation, then $T(\vec 0_V) = \vec 0_W$
>
>>[!proof]-
>>Recall that $0\vec v = \vec 0$ for any vector $\vec v \in V$ (at this point of the course we gotta utilize a lot of the theorems we've previous learned)
>>Then 
>>$$\begin{align*}
>>T(\vec 0_V) &= T(0 \boxdot \vec 0_V) \text{ as mentioned above} \\
>>&=0 \odot T(0_V) \text{ as $T$ is linear} \\
>>&= 0 \odot \vec w\text{ since } T(\vec 0_V) \in W \\
>>&= \vec 0_w \text{ since } \forall \vec w \in W, 0 \odot \vec w = \vec 0_W
>>\end{align*}$$

> Recall from [[3B1B Linear Algebra Videos#Transformations]] he explains a linear transformation / function does not move the $\vec 0$ vector and keeps space evenly distributed. 
>In our case, as long as the two operations hold, it is a linear transformation.
>


> Is R a vector space!? Yes it is. We've already defined the addition and multiplication operators from before.


>[!example] Consider $T : \mathbb R \to \mathbb R$ given by $T(x) = 7x$. Prove $T$ is a linear transformation.
>We show that the properties are true individually.
>Prove $T(\vec u \boxplus \vec v) = T(\vec u) \oplus T(\vec v)$
>> Pick $u, v \in \mathbb R$
>> $T(u + v) = 7(u + v)$ by def'n of T
>> $= 7u + 7v$ as scalar multiplication distributes over addition
>> $= T(u) + T(v)$
>So as LS = RS, T distributes over vector addition
>
>Then to prove $T(a\boxdot \vec v) = a \odot T(\vec v)$
>>LS= T(au) = 7(au) by defn of T
>>= (7a)u (by A7)
>>= (a7)u (by commutativity of fields)
>>= a(7u) (by A7)
>>= $aT(\vec u) + RS$ (by definition)


#todo Why does the notes drop the vector symbol for u and v for the above example? 
- Like, isn't there a difference between $\mathbb R$ the field and $\mathbb R$ the vector space?
- It makes the proof for the second property way harder admittedly (look below; mismatching types!)
- future krish here: idk what i am talking about
>Prove $T(a\boxdot \vec v) = a \odot T(\vec v)$
>>Pick $a, v \in \mathbb R$
>>$T(a\boxdot \vec v)$ = $7\odot (a\boxdot \vec v)$ by definition of T
>>$= (7a)\boxdot \vec v$ by A7 (?????????)
>>$= (a7) \boxdot \vec v$ by commutativity of fields
>>$a \odot (7 \boxdot \vec v)$ by A7
>>$=a \odot T(\vec v)$


>[!thm] Linear Transformations Preserve Addition and Scaling
>$T : V \to W$ is a linear transformation iff $$T( (a\boxdot \vec u) \boxplus (b \boxdot \vec v))  = (a \odot T(\vec u) ) \oplus (b \odot T(\vec v)) $$
>for all vectors $\vec u, \vec v \in V$ and scalars $a,b \in \mathbb F$
>
>>[!proof]-
>>$\Rightarrow$
>>Suppose $T : V \to W$ is linear transformation.
>>Then
>>$$\begin{align} T (a\boxdot \vec u) \boxplus (b \boxdot \vec v) &= T(a \boxdot \vec u) \oplus T(b \boxdot \vec v)\text{ since T distributes over vector addition}\\
 &=  (a \odot T(\vec u)) \oplus (b \odot T(\vec v) ) \text{ as T distriutes over scalar multiplication}\\
 \\
\end{align}$$
>>
>>$\Leftarrow$
>>Suppose $T( (a\boxdot \vec u) \boxplus (b \boxdot \vec v))  = (a \odot T(\vec u) ) \oplus (b \odot T(\vec v))$ for all vectors $\vec u, \vec v \in V$ and scalars $a,b \in \mathbb F$.
>>
>>Then we prove the 2 properties of linear transformations
>>1. 
>>$$\begin{align} T(\vec u \boxplus \vec v) &= T(1 \boxdot \vec u) \boxplus T(1 \boxdot \vec v) \text{ by A8 of v.s.}  \\
&= (1 \odot T(\vec u) \oplus (1\odot T(\vec v)) \text{ by assumption (with } a=1)\\
&= T(\vec u) \oplus T(\vec v) \text{ by A8 of v.s.} \\
 \end{align}$$
>>2.
>>$$\begin{align} T(a\boxdot \vec v) &= T(a\boxdot \vec v) \boxplus \vec 0_W \text{ by A3 } \\
 &= T(a\boxdot \vec v) \boxplus T(\vec 0_V) \text{ by Linear Transformations Preserve Additive Identities Thm} \\
 &= T(a\boxdot \vec v) \boxplus T(b \boxdot \vec 0_V) \text{ since } b \cdot \vec 0 = \vec 0\\
 &= a \odot T(\vec v) \boxplus b \odot T(0_V) \text{ by assumption} \\
&= a \odot T(\vec v) \text{ by A3 since } b \odot T(0_V) = \vec 0_W
 \end{align}$$
>>
>
>Since both properties hold, T is definitely a linear transformation.

>[!hint] Two Given Linear Transformations.
>For V, W vector spaces, these two functions will always be linear transformations
>1. The zero transformation $$Z: V \to W \text{ given by } Z(\vec v) = 0_W$$
>2. The identity transformation: $$I : V \to V \text{ given by } I(\vec v) = \vec v$$

Proof for identity transformation (zero transformation is in the notes; not gonna bother typing cuz it's so obvious).
>[!proof]
>Check $I(\vec u \boxplus \vec v) = I(\vec u) \oplus I(\vec v)$
>
>RS = $I(\vec u) \oplus I(\vec v) = (\vec u) \boxplus (v)$
>LS = $I(\vec u \boxplus \vec v) = \vec u \boxplus \vec v$
>
>Therefore LS = RS
>

#todo Because V and V have the same operations, aren't I really proving that $I(\vec u \boxplus \vec v) = I(\vec u) \boxplus I(\vec v)$ instead of $\oplus$. Would it be valid for me to state that $\oplus$ and $\boxplus$ are from the same vector space, so they are effectively the same (?)

>"Linear Algebra can talk about Geometry"
>The inner product is usually used to understand the length of a vector. (More useful in MATB24).
>For now we will introduce the definition for the "standard inner product" for real vector spaces $\mathbb R^n$ and see some of its uses.


#todo is this not just dot product?
"_real dot product_ is just a special case of an inner product" they say.

>[!defn] The Standard Inner Products
>Let $\vec u = (u_1, \dots, u_n)$ and $\vec v= (v_1, \dots, v_n)$ be vectors in $\mathbb R^n$
>
>The <span class="emphasis">Standard Inner Product</span> of $\vec u$ and $\vec v$ is defined as:
>$$\langle\vec u, \vec v\rangle = \sum_{i=1}^n u_1v_1 + u_2v_2 + \dots + u_nv_n$$
>
>We define the *length* or <span class="emphasis">norm</span> of vector $\vec v$ to be $$||\vec v|| = \sqrt{\langle \vec v, \vec v\rangle} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}$$ (Wow look the Pythagorean Theorem).
>
>Note: The inner product is linear in the sense that $\langle \vec u, a\vec v + b \vec w \rangle = a\langle\vec u, \vec v\rangle + b \langle \vec u, \vec w \rangle$
>#todo what does this mean. Surely parker goes over this in lecture!!!!


>[!note] Properties of the Standard Inner Product over $\mathbb R ^n$
>1. $$\langle \vec u, \vec v\rangle = \langle \vec v, \vec u\rangle$$
>2. $$\langle \vec u, \vec v_1 + \vec v_2 \rangle = \langle \vec u, \vec v_1 \rangle + \langle \vec u, \vec v_2 \rangle $$
>3. $$\langle \vec u, a \vec v\rangle = a \langle \vec u, \vec v\rangle$$
>4. $$\langle \vec u, \vec u \rangle \geq 0\text{ (would be an equality if } \vec u = 0)$$

#todo Prove these properties!


oh no it's linear algebra from high school again.
// below is defn to the norm function yaya
$\newcommand{\norm}[1]{\left\lVert#1\right\rVert}$

>[!thm] Inner Products Define Angles
>If $\vec u, \vec v \in \mathbb R^n$ , then the angle $\theta$ between $\vec u$ and $\vec v$ satisfies
>$$cos(\theta) = \frac{\langle \vec u, \vec v \rangle}{||\vec u||\ ||\vec v||}$$ 
>
>>
>>First, remember the law of cosines
>>$$a^2 = b^2 + c^2 - 2bc \cos(\theta)$$
>>Our version will be $$\norm{\vec v - \vec u}^2 = \norm {\vec u}^2 + \norm {\vec v}^2 - 2\norm{\vec u} \cdot \norm{\vec v} \cdot cos(\theta)$$
>>With that, we have
>>$$\begin{align}
\norm{\vec u - \vec v}^2 &= \langle \vec u - \vec v, \vec u - \vec v \rangle \text{ by def'n of norm}\\
&= \langle u - v, u \rangle + \langle u - v, -v \rangle \text{ by property 2}  \\
&= \langle u - v, u \rangle - \langle u - v, v \rangle \text{ by property 3} \\
&=  \langle u, u - v \rangle - \langle v,  u - v \rangle \text{ by property 1}\\
&= \langle u, u \rangle + \langle u, -v \rangle + \langle v, u \rangle + \langle v, -v \rangle  \text{ by property 2 }\\
&= \langle u, u \rangle - \langle u, v \rangle - \langle u, v \rangle + \langle v,v \rangle  \text{ by property 1 and  3 }\\
&= \norm{u}^2 -2 \langle u, v \rangle + \norm{v}^2 \text{ by def'n of norm  }\\
\end{align}$$
>
>Then we substitute this into the law of cosines to give:
>$$\begin{align} 
\norm{ u}^2 -2 \langle u, v \rangle + \norm{v}^2 &= \norm{u}^2 + \norm{v}^2 - 2\norm u \norm v \cos(\theta) \\
  -2 \langle u, v \rangle   &=    - 2\norm u \norm v \cos(\theta) \\
 \frac{\langle u, v\rangle}{\norm u \norm v} &= \cos(\theta) \\
>\end{align}$$
>
>
>


>[!theorem] Orthogonality
>Two non-zero vectors $\vec u, \vec v \in \mathbb R^n$ form right angle iff $\langle \vec u, \vec v \rangle = 0$ (it is also said these vectors are *orthogonal*)
>
>>[!proof]-
>>![[Pasted image 20250210192644.png]]
>>beats me...



# Rotation Transformations

>[!example] Consider the linear map $R_\theta : \mathbb R^2 \to \mathbb R^2$ given by
>$$R_\theta(\vec v) = \text{"the vector } \vec v \text{ rotated counter-clockwise about the origin by } \theta \text{ radians"}$$
>What is the formula?
>$$R_\theta = (x \cos(\theta) - y\sin(\theta), y \cos(\theta) + x \sin(\theta))$$
>
>>[!proof]-
>>#todo idk if it's important to understand but i got to watch the lecture probably to figure it out
>>![[Pasted image 20250210193732.png]]

# Projection

>[!defn] 
>Let $\vec a \in \mathbb R^2$ be a non-zero vector. $\vec a$ determines a line $L = \operatorname{Span}\set\vec a \subset \mathbb R^2$. Consider $P_a : \mathbb R^2 \to \mathbb R^2$ given by:
>$$P_\vec a(\vec v) = \frac{\langle \vec a, \vec v \rangle}{\langle \vec a, \vec a \rangle}\vec a$$
>
>#todo make the projection thing more intuitive for me
>
>(Note that L is an arbitrarily long line we're projecting onto. It's just represented with $\operatorname{Span}$ because we know that now so why not)
>>[!explanation] How we derive it 
>> My interpretation:
>> - The Standard Inner Product (dot product) between the vector $\vec v$ and the line $L = c\vec a$ for some $c \in \mathbb R$ must be 0. The line made between $\vec v$ and L is $v - c\vec a$. We want this line between $\vec v$ and $L$'s angle with $\vec a$ to be 0.
>>   So we want $\langle \vec a, \vec v - c\vec a)\rangle = 0$.
>>   With some algebra you solve for $c$ (the scalar that shrinks/extends the line $\vec a$) to get the projection
>>![[Pasted image 20250210195057.png]]

>[!example] Project (4,3) onto the x-axis (i.e. $L = c(0,1)$)
>$P_{(1,0)}(4,3) = \frac{\langle (4,3), (1,0)\rangle}{\langle (1,0), (1,0)\rangle}(1,0)$
>$=\frac{4\cdot1  + 3\cdot 0}{1\cdot 1 + 0 \cdot 0}(1,0) = (4,0)$
>So (4,0) is the projection.

>[!note] We use $\alpha$, $\beta$, $\gamma$ to represent bases




