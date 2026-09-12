> When an output may not predictably settle on 1 value

If inputs dont change, but outputs keep changing, that creates an "unsteady state"
> Unstable state = oscillation most of the time!

![[Pasted image 20250601224934.png|400]]
That first diagram is not preferred because it has "unstable" behaviour (running 1 time changes the next output, which may change the current output and cycling. yikes that is not predictable. It might loop!)

Instead, look at the bottom diagram (that one is safer! We can say when to receive the info from the strange unit during a [[Clock Cycle]])
- This holds the idea that we can "call" the stored info in future inputs. This is called *state*
