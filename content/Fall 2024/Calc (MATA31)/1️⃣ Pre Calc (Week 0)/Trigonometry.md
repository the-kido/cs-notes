[[Week 0 Review.pdf]] Slides 60 to 79 will have some juicy stuff

An arc is created when an angle **subtends** (extends from the center to the circle to form the arc)
**Sector area** is calculated with $\frac{1}{2} r^2 \theta$

>[!Note] if $\theta$ is just $2\pi$ then the sector area formula just becomes the formula for the area of a circle!

On a unit circle, point (x, y) is just $(\cos\theta,\sin\theta)$

### What is $sin \theta$?
If θ is an angle in standard position, then sin θ is the vertical coordinate y of the point (x, y) where the terminal edge of θ intersects the unit circle.
For cos it's similar, but it's the 'x' coordinate. 

- 2pi radians = circumference of a circle
- 1 radian is 1 radius around the circle
- Using 6.28 radii, you can fully cover a circle. 
### What is $\tan \theta$?
![[Pasted image 20241030140246.png]]
- tan is the length of the tangent of the unit circle at point d to point c (which is formed when the radius line is extended)

## What is a radian?
1 radian would travel 1 'r' around the circle to the point where the arc is subtended by the angle.
If the radius is 1, then 1 radian would be 1 unit around the circle.
![[Pasted image 20241030135814.png]]

#### What does this mean?
If the angle is `x`, then the arc length from the x axis (A) to the point subtended by the angle (B) is also `x`.
![[Pasted image 20241030141631.png|400]]

### What is the area of a sector?
$\pi r^2$ gives the area of a circle. To get the area per radians, that would be $\frac{\pi r^2}{2\pi} = r^2/2$. Then the area for any $\theta$ amount of radians would be $\frac{r^2 }{2} \cdot \theta$


This is used to prove that $|\sin x| \leq x \text{ for all } x \in \mathbb{R}$
![[Pasted image 20241030141737.png]]
## Domain and ranges for common expressions

| Expression  | Domain                                                                     | Range                         | Period         |
| ----------- | -------------------------------------------------------------------------- | ----------------------------- | -------------- |
| $\sin x$    | $x \in \mathbb{R}$                                                         | $[-1, 1]$                     | 2 pi           |
| $\cos x$    | $x \in \mathbb{R}$                                                         | $[-1, 1]$                     | 2 pi           |
| $\tan x$    | $x \in \mathbb{R} : x \neq \frac{\pi}{2} + \pi k$ where $k \in \mathbb{Z}$ | $x \in \mathbb{R}$            | pi             |
| $\arcsin x$ | $[-1, 1]$                                                                  | $[-\pi/2, \pi/2 ]$            | No periodicity |
| $\arccos x$ | $[-1, 1]$                                                                  | $[0, \pi]$                    | No periodicity |
| $\arctan x$ | $x \in \mathbb{R}$                                                         | $(-\pi/2, \pi/2)$             | No periodicity |
| $\sec x$    | $x \in \mathbb{R} : x \neq \frac{\pi}{2} + \pi k$ where $k \in \mathbb{Z}$ | $x \in \mathbb{R} : x \neq 0$ | 2 pi           |
| $\csc x$    | $x \in \mathbb{R} : x \neq \pi k$ where $k \in \mathbb{Z}$                 | $x \in \mathbb{R} : x \neq 0$ | 2 pi           |
| $\cot x$    | $x \in \mathbb{R} : x \neq \pi k$ where $k \in \mathbb{Z}$                 | $x \in \mathbb{R}$            | pi             |

#### What is the restricted sin function?
It is sin restricted on the domain $(-\pi/2, \pi/2)$. This is useful when finding $\arcsin$, which really is the inverse of the *restricted* sin function!

## Trig Ids
![[Pasted image 20240829145358.png]]

### Trig inverses
[[Week 0 Review.pdf]] Slides 141 to 145 will have all the juicy stuff

# Cards #calc-1 

If cos θ = 3/7 and 3π/2 < θ < 2π, then find cot θ
?
>[!Answer]-
>$\cot\theta = -\frac{3}{\sqrt{40}}$
<!--SR:!2024-10-05,1,230-->

Without calculating, is $\arcsin (-\frac{1}{5})$ a positive or negative angle?
?
It is negative, because the opposite side is negative (the y) so this is in q3 or q4, both of which have a negative angle for sin (via cast rule)

What is $\sin^{-1}(\sin(-2))$? Why can you not use the cancelation formula for [[Inverse Functions]]?
?
You cannot use the cancelation formula on a function that is not one-to-one (i.e. it has no inversible function equivalent) $\sin^{-1}$ is a made-up function. It's better to think of it as $\arcsin$ really
Okay now to solve it:

Sin^-1 has a domain of -pi/2 to pi/2, so we need to shift the -2 into the domain. How do we do that? Well sin(-2) is the same as sin(2 - pi). You can use a graph to get that point.
![[Pasted image 20241008172705.png]]
Sin(2 - pi) is now in the range that would allow $\sin^-1$ to exist, so the answer is
$\sin^{-1}(\sin(-2)) = \sin^{-1}(\sin(2 - \pi)) = 2 - \pi$ by cancelation formula. 



What is the domain for $\arccos(\arccos (x))$?
?
arccos has a range of $[0, pi]$ however the higher-level arccos can only take values between $[0, 1]$
so we know that the inside arccos can return at most $[0, 1]$ for the outside arccos to work. However, since arccos on $[0, 1]$ can return arccos(0) = 1.57 radians or so, which is not in the domain of the outside arccos! Therefore, the least that arccos(x) can be is 1. 
arccos(x) = 1
cos(1) = x
x is at least cos(1)
So in total, the domain is $[cos(1), 1]$


What is the length of an arc of a circle with radius of 3cm, whose angle of 2 rad subtends the circle?
?
Use the formula $s = r \cdot \theta$ with r=3 and $\theta = 2$ rad
s = 6cm. The arc is 6cm long


Between arctan x, sinx, and cosx, what are the domains and max/min values?
?
They all have a domain on real numbers. The max for arctan is pi/2 and min is -pi/2 (since that is the domain of restricted tan). The max and min for sin and cos are obviously 1 and -1.

What is the formal definition of sinx and cosx?
?
They are the x and y coordinates of a point of intersection on a unit circle from the center about an angle theta.
This is why sin and cos are periodic; angles loop (2pi, 4pi, 6pi, etc.) on a circle.

What are the domain and ranges of the inverse trig functions?
?
csc x --> 1/sinx, so the domain is everywhere unless sinx = 0, which is in pi intervals
sec x --> 1/cosx; the domain is everywhere where cosx != 0, which is at pi/2 + pi x each interval 

What is the value of $\cos (5\pi/6)$?
?
i hate trig.
This is in the S quadrant so the answer will be negative. 
Theta is similar to pi - 5pi/6 = 1pi/6. Using special triangles we get that cos(1pi/6) = sqrt3 / 2, so the answer for $cos(5pi/6) = -\sqrt3 / 2$


#todo do we have to remember trig ids....
