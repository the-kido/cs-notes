PROCESSORSSSS

finite state machines - implement "sequences" of operations?

 
> If two numbers added together with different signs can NEVER overflow!

#### The "L" flag
 


#todo take SS of the block diagram (remember all I/O's and what they mean)

### Datapath



# Logism: Analyze Circuit
- Gives truth tables!!! MAKES CIRCUITS FROM TABLES
- It can even do k-maps ;-;
- AND IT CAN EXPORT TO TeX 

# Lab advice
- Validator and Presence Sensor
- L and R are raise and lower (outputs)
- Wanna make a control system to decide *when* to raise or lower the gate
	- As well as 2 extra circuits for if the gate is at the max or min height
- Edge case
	- I.e. what if you validate a car but no car is there!
	- What if there is a car but it's not validated? 
- Idle state, more states, "car validating state?", "raise the gate state?"
	- What happens if a car left while in the raise the gate state?
	- Think of every possible input change (1 change at a time) for each state.
		- Sometimes a change doesn't matter = we don't care
- Make state diagram, state table, and Logism does the rest!
- 