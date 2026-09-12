#beautify
#### Proving FTOC II
- Suppose f is cont on [a,b] and
- we defined $F(x) = \int_a^b f(t) dt, \forall x \in [a,b]$
wts 3 things
1. F is cont on [a,b]
2. F is diff on (a,b)
3. $F'(x) = f(x) \forall x \in [a,b]$

We can prove 3 things at once somehow: As long as we prove $F'(x) = f(x) \forall x \in [a,b]$.
(this would give 1 cuz we show f is diff, and we get F cuz diff --> cont)
"It is sufficient to prove that $F'(x) = f(x) \forall x \in[a,b]$" holds (the rest will easily follow.)
(we are gonna do two cases. this is cuz you can interpret differentiation as two-sided or one-sided)

>[!proof]
> Let $x \in (a,b)$ be arbitrary.
> Yeah we're using first principles now. (wts F'(x) = f(x))
> $F'(x) = \lim \limits_{h\to 0}\frac{F(x+h) - F(x)}{h}$
> $= \lim \limits_{h\to 0} \frac{\int_a^{x+h}  f(t)dt - \int_a^xf(t)dt}{h}$
> Now we wanna simplify that top expression. However that changes depending on what h is
> > If h >= 0, then $\int_a^{x+h}f(t)dt - \int_a^x f(x)dt$
> > = $\int_x^{x+h}f(t)dt$ (SOMEHOW? Nvm i get it. A bigger area is being subtracted by a smaller area)
> > if h < 0 
> >$\int_a^{x+h} f(t)dt - f_a^xf(t)dt = - \int_{x+h}^x f(t)dt = \int_x^{x+h}f(t) dt$
> > So yeah we get the same thing. It's way simpler. 
> 
> $= \lim \limits_{h\to 0 }\frac{\int_x^{x+h}  f(t)dt}{h}$ 
> = $\lim \limits_{h \to 0} \frac{1}{h + x - x} \int_x^{x+h} f(t) dt$
> (it looks a bit like $\frac{1}{b-a}\int_a^bf(t)dt$)
> Notice f is cont on (wlog) $[x, x+h] \subset [a,b]$
> Therefore by MVT for integrals, $\exists c [x, x+h]$ s.t.  $f(c) = \frac{1}{b-x+x}\int_x^{x+h}f(t)dt$ 
> SO
> $\lim \limits_{h\to0} f(c)$. Note: c is not constant w.r.t. h cuz it changes as h changes (it is in an interval controlled by h.)
> Then see how h --> 0 => |x-c| --> 0 => x --> c
> so we get to f(x) somehow yay

For reference maybe this will explain things nicer. It may not be as accurate as how Kathleen did it though. 
![[Pasted image 20250211104156.png]]