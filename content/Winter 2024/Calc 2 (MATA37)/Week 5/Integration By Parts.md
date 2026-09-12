
Uses the fact that $$\int f'(x)g(x) + f(x)g'(x)\; dx = f(x)g(x) + C$$
## 02-10 stuff
u and v make this formula easier to remember

#note FTOC 1 and/or 2 does not deal with definite integrals.
We also solved indefinite integrals 

>[!proof] Proving [[Integration By Parts]]
>I.e. proving if u = f(x) and v = g(x) are diff, then $\int u\;dx = uv - \int v\; du$
>i.e. $\int f(x)g'(x)\;dx = f(x)g(x) - \int g(x)f'(x) \;dx$
>Suppose u = f(x) and v = g(x) are differentiable.
>Clearly we cant start on 1 side. Let's start from an equality we know so that the equation we want follows! 
>We know $(f(x)g(x))' = f(x)g'(x) + f'(x)g(x)$ by product rule.
>$\Leftrightarrow f(x)g'(x) = (f(x)g(x))' -g(x)f'(x)$ by some simple algebra!
>$\Rightarrow \int f(x)g'(x) \; dx = \int ((f(x)g(x))' - g(x)f'(x))\;dx$ by integrating both sides (just like taking the derivative of both sides, they should be equivalent)
>$= \int (f(x)g(x))'\;dx - \int g(x)f'(x) \;dx$ by indefinite integral properties
>$f(x)g'(x) - \int g(x)f'(x)\;dx$ by definition of indefinite integral (since f and g are diff --> cont, so f(x)g'(x) is also cont. yeah) (we didn't add the +C cuz it gets absorbed when you evaluate? that wasn't so clear)
>
#todo Maybe pretty-ify with free time.

To prove the definite integral version. the only thing that changes is that you can use [[The Fundamental Theorem Of Calculus I (FTOC I)]] instead of using the definition of [[Indefinite Integrals]].




