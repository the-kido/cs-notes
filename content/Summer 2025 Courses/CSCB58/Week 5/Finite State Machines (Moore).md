- A finite number of states and transitions 
- Transitions are triggered by *inputs* in our case
	- But if inputs keep you in the same state, that is *self transition*
- Used for logic circuits that actually perform a behaviour
	- "Tickle me Elmo"
![[Tickle Me Elmo FSM.png|500]]
😨
### Example: Alarm
![[Alarm state machine diagram.png|500]]
# Designing
1. Make the state diagram 
2. Create a state table from le diagram
3. Have *flip-flop value configurations* for each state
	- 15 states = $log_2(15)$ bits to store them $= 4$ bits
	- The flip flops hold the current state
		- The state logic takes the old state + new inputs and *updates* the state in the flip flops
		- Depending on the state, we output "something"
4. Use said flip flops to represent the states; use that to make a new table
5. Make the combinational circuit for every output for each flip-flip input
	1. State logic: Figuring out "the next state depending on current state and inputs"
	2. Output logic: "figuring out the output depending on current state and inputs"

![[FSM tldr.png]]
# Example: Sequence Recognizer
![[State Chart FSM seq rec.png|500]]
- The K maps are easy enough to get from the columns.