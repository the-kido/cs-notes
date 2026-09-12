> Used to count *the number of times an event occurs* under a fixed "interval" of some sort.
- The interval is a "continuum" in that it's nature is continuous. 

- If number of games is *known*, we just use Binomial. Otherwise this is the one we use. 
	- (We use geometric for the first instance of something occurring; number of trials)

- For instance, if we define $\lambda$ to be $4$ balls scored per game, then on average you'll score $4$ balls. (given the time to score each ball is on average $1/4$ game lengths--that's the *Exponential* event's time).
- But it's possible that you get lucky and happen to shoot the balls faster

Events are independent and happen at a constant, average rate.
It takes 1 parameter, $\lambda$, which is the expected number of events in the interval. It technically is also the "variance"
#todo FInish
