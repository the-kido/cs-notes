This is gonna be fun :))

# Derivatives
sin(x)  ✅ 
- cos(x)

cos(x) ✅ 
- -sin(x)

tan(x) ✅ 
- sec^2(x)

csc(x) ✅ 
- $-cot(x)csc(x)$
- easy to derive

sec(x) ✅ 
- $tan(x)sec(x)$

cot(x) ✅ 
- $-csc^2(x)$

arcsin(x) 😐 
- $\frac{1}{\sqrt{1-x^2}}$

arccos(x) 😐 
- we dont worry about this hopefully

arctan(x) ✅ 
- obvious

arccsc(x)

arcsec(x)

arccot(x)



# Integrals


$\int sin(x)$ ✅ 
- -cos(x) + C

$\int cos(x)$ ✅ 
- sin(x) + C

$\int tan(x)$ ✅ (Derive if u want)
- $\ln|cos(x)| + C$

$\int csc(x)$
- $\ln|\tan(x/2)|$
- HARD

$\int sec(x)$
- $\ln|\tan(x) + \sec(x)| + C$
- Simply memorize #todo The process is hard. You gotta multiply by $tan(x) + sec(x)$ tho
  
$\cot(x)$
- $\ln|sin(x)| + C$
- Very easy to derive

arcsin(x)

arccos(x)

arctan(x)
- Light, but I keep forgetting to confirm my answer (i.e. I didn't divide by 2 for the `ln`)
- $x\arctan(x) - \frac{\ln(x^2+1)}{2} + C$

arccsc(x)

arcsec(x)

arccot(x)

>[!note] Do integration by parts whenever you see trig inverse OR logarithm 


# Misc
#### Question 1
$\int \frac{1}{\sqrt {1 - x^2}}\;dx$ (aka the derivative of $\arcsin\theta$)
To do this, we do trig-sub (so $x = 1\sin(\theta)$ where $\theta \in [-\pi/2, \pi/2]$)
So then we get eventually that
$\int \frac{1}{\sqrt{cos^2(\theta)}} cos(\theta)\;d\theta$
Since $cos\theta>0$ for $\theta$ int the interval we got (graph it to be sure!) we know that $|cos(x)| = \cos(x)$
The rest is trivially easy.


