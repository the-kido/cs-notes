There are special types of power series, where the nth term coefficient is ✨special✨

>[!defn] 
>Let $a \in \mathbb R$. Let $f$ be a function that has derivatives of all orders at $x = a$
>A power series $\sum_{n=0}^\infty$ with $c_n = \frac{f^{(n)}(a)}{n!}$ is a Taylor series for $f$ at $a$ 
>
>When $a=0$, this Taylor series (TS) is called a Maclaurin series (MS) for $f$
>
>
>$f^{(n)}$ notation is for a big big <span class="emphasis">derivative</span>
>

- If a series that looks like $$\sum \frac{f^{(n)}(a)}{n!}(x-a)^n$$then it's a <span class="emphasis">Taylor Series</span>

- In the special scenario where $a=0$, then $$\sum \frac{f^{(n)}(0)}{n!}x^n$$ is a <span class="emphasis">Maclaurin Series</span>


>[!example] Compute the MS for $f(x) = e^x$
>>[!check] $\sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!}$ by the MS by def of our desired MS!
>>But we needa find $f^{(n)}(0)$
>>$f^{(0)} (x) = e^x \implies f(x) = e^o = 1$
>>$f'(x) = e^x \implies f'(0) = e^0 = 1$
>> $f''(x) = e^x \implies f''(0) = e^0 = 1$
>> We don't need to do induction for convenience; we just need to show that pattern
>>
>>SO the MS for $f(x) = e^x$ is
>>$\sum_{n=0}^\infty \frac{x^n}{n!} = e^x, \forall x \in \mathbb R$
>


>[!defn] "Radius for convergence"
>Given $\sum_{n=0}^\infty c_n(x-a)^n$. The largest $R$ s.t. $R \in \mathbb R^{\geq 0} \cup \set{\infty}$ s.t. the PS (power series) 
>- Absolutely converges for x satisfying $|x-a| < R.$
>- Diverges for x satisfying $|x-a| > R$
> is called the <span class="emphasis">radius for convergence</span> for the PS
> 
> >[!explanation]
> >We know that $|x-a| < R \implies a - R < x < a+R$ 
> >(i took a photo)
> >At $x=a-R$ or $a+R$,
> >
> >
> >The interval of convergence
> >$I = \set{x \in \mathbb R | \sum_{n=0}^\infty c_n(x-a)^n\text{ converges}}$
> >The "radius of convergence" is half the size of the interval.
> >The $a$ is the center point of the interval of convergence.
> 

Examples to help 'find the intervals of convergence'
>[!example] $\sum_{n=0}^\infty \frac{ n(n+2)^n}{3^{n+1}}$. Find I (the interval of convergence)
>>[!check] Soln
>>
>>## 1. Use the radius of convergence to get *most* points of abs conv / div
>>We observe that $a = -2$ and $C_n = \frac{n}{3^{n+1}}$ so this is a PS.
>>
>>WE need to find the radius of convergence, and it'll give us the interval!
>>The ratio test can *always* be applied to power series.
>>$\lim_{n \to \infty} | \frac{C_{n+1}(x-a)^{n+1} }{C_n(x-a)^n} |$ 
>>$= \lim_{n \to \infty} | \frac{(n+1)}{3^{n+2}}(x+2)^{n+1} \Big/ \frac{n(x+2)^n}{3^{n+1}}$
>>=$\lim_{n \to \infty} \frac{n+1}n\cdot \frac 1 3 |x+2|$ by alg and `|*|`
>>$=(1/3)|x+2| \cdot \lim \limits_{n \to \infty} (1 + \frac 1 n)$
>>$=(1/3)|x+2| = L$
>>Since our PS will AC when $L =(1/3)|x+2| < 1$
>>$\Leftrightarrow |x+2| < 3$
>>
>>Also our PS will diverge when $(1/3)|x+2| > 1$
>>$\Leftrightarrow |x+2|> 3$
>>
>>Wow it's exactly like the def'n of $R$! So clearly $R = 3$
>>So the radius of convergence is $R = 3$.
>>(the interval would be of length 6, forget not!)
>>## 2. Endpoints
>>Now we check the endpoints: $x = a \pm R$ to include any new points in this super big epic interval:
>>##### a) endpoint #1
>>$x = a - R \implies x = -5$
>>$\sum_{n=0}^\infty \frac{n(-5 + 2)^n}{e^{n+1}} =\sum_{n=0}^\infty \frac{n(-3)^n}{3\cdot 3^n} =\sum_{n=0}^\infty \frac{n(-1)^n}{3}$
>>
>>We will apply div test
>>$\lim \limits_{n\to\infty} \frac{n(-1)^3}{3} = \begin{cases}\infty & \text{if n is even} \\ -\infty & \text{if n is odd}   \end{cases}$
>>so by div test the end points do not converge. SO our PS *diverges* as $x = -5$
>>
>>##### b) endpoint #2 
>>$x = a + R \implies x= 1$. 
>>So the PS equals $\sum_{n=0}^\infty \frac n 3$. By applying div test you'll get that it diverges.
>>
>>$\therefore I = (-5, 1)$
>>


>[!note] if $R = \infty$, then we don't need to check the endpoints (we're already converging everywhere!)

>[!note] when $x=a$, that point will *always* converge. So even if R = 0, then we have 1 point of convergence still!



