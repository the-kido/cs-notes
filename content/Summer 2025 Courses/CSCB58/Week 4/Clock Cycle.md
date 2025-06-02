When working with [[Latches]] note how if the inputs don't change *nothing changes*.
- A latch can switch 1000 times in 1 second, or 1 time in 1 second. We don't have a way of knowing how often its changed.
- Likewise, the latch could have been set to `01` ten times, or 1 time in the span of 1 second. Again, we have no way of knowing... or do we?
> Clock signals are a timed signal for when all states should "change".
- Each "clock" let data be sampled / changed at some rate.

![[Clock Signals.png|400]]

### Limits to clock freq
1. Circuit Complexity 
	1. That's your [[Propagation Delay|max propagation delay]]
2. Other things out of scope for this course




