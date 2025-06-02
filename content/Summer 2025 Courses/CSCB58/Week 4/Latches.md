### $\bar S \bar R$ latches
$\bar S$ represents "SET" and $\bar R$ represents "RESET" 
![[Not S not R latch.png]]
- Recall from [[Intuition Behind Storing Values]], for a NAND gate, when A=0, the output must be 1. A 0 input *locks* the NAND gate
	- When $\bar S = 0$ then $Q$ will be 1 no matter what!
	- When $\bar R = 0$ then $\bar Q$ will be 1 no matter what!

The case where $\bar S$ and $\bar R$ are 0, but the $Q_R$ and $Q_{T+1}$ haven't really settled on a value. The output becomes 1, 1, which is *forbidden* because it makes no sense.
- When $\bar S = \bar R = 0$, this is a *forbidden state*
### Race Condition
Going from 00 to 11 results in a *race condition* where whichever input is "inputted" first decides which of the last 2 rows in the chart given does the output assume.
- Whichever gets received first depends on gate delays and RNG 

# SR Latch
![[SR Latch.png]]
- R and S retain their meaning clearer. Also S=R=1 is a forbidden state.
- We have unstable behaviour when going from 11 to 00
- Otherwise similar to the other latch

