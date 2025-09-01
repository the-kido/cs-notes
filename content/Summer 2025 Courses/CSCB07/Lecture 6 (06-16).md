Large code validated several times a day means testing manually is very very hard!

- Coverage testing is "low" 
- 100% coverage != bug-free code

Tests you write to cover code are "simple". In that sense, they are not the "only" kind of testing you should do. Consider:
```java
int foo(int x)
{
	return x % 2; // Should be x % 3
}
```
If we test the above with `foo(6)`, we would get the expected output of 0. However for a number like `foo(4)`, we should get 1 but instead get 0. Had we only tested the first to get coverage, we would be in trouble!?

Expected = correct output in this context. 
This is an "infection"
- You accidentally write an "infection" if your code is incorrect.
- But code can "override" an infection and result in a correct output for certain tests.
- An "infection" is a slight change in code that, depending on how your code is implemented, may go unnoticed

To *know* if a failure exists,, there are 4 criteria that, if satisfied, should determine that one exists!
#### RIPR #todo
- Reachability
	- A test must reach the location that contains the fault
- Infection
	- The line of the fault causes the programs state to be incorrect during execution.
	- "At any point, a variable should be an expected value. But if it's not, that is an infection."
- Propagation
	- The infected state makes the rest of the program's state incorrect. 
	- Does it change the output? If so, yes, it has propagated.
- Revealability
	- Depends on the tester: If we were able to notice the problem. Did the tester notice the issue? Then it is revealable
## Some definitions
**Software Fault** :  A static defect in the software
- A semantic error (i.e. instead of `+` you use `-` or something like that) 
**Software Error**: The *actual* infection. An incorrect state in your code that is *caused* by a fault. 
- Because we used `+` instead of `-`, the player moves backwards. That is an error
**Software failure**:
- "External". When, i guess shipping your code, if it doesn't behave correctly, that is a failure.
**Bug**: Informal; refers to all 3

# SDL time!!
Two methodologies: Waterfall and Agile, but everyone uses Agile (Scrum is an Agile methodology)

### Waterfall
- Things are done sequentially / not iterative.
- The traditional way
- The customer != The user ? #todo 

1. Requirements
	1. Learn the requirements and WHAT the system does. *Functional requirements*. "I want there to be a login page"
	2. Worry about *non-functional requirements*. The HOWs. "I want the app to be fast" or "I want the app to be user-friendly". 
2. Analysis
	1. Refining the requirements. Detailed. Ready for design.
3. Design
	1. High-level things, like class/UML diagrams. Pseudo-code. Sketches.
4. Coding
5. Testing
6. Operations

#### The problem
- It takes forever, and if we need to change something... well frick! It's very costly to accommodate new changes.
- But Agile and Scrum allow change far easier. So for projects where things change fast, agile is the way.

### Agile
- Many agile methodologies
	- Extreme Programming (XP)
	- Scrum 
	- Test-driven development (TDD)
	- etc.
- The Manifesto:
	- Individuals and interactions over processes and tools
		- Like daily 15 minute meetings (stand-up meetings)
	- Working software over comprehensive documentation
		- 
	- Customer collaboration over contract negotiation
	- Responding to change over following a plan

#### Scrum
- Product backlog + Scrum backlog are your *requirements*
- The product backlog is *every feature* that your software should support
- The *scrum* backlog is the set of features you are implementing for a certain sprint.
	- i.e. if there are 12 features, we only make 4 features
Positions
- A "product owner" is the one
- Scrum master
	- Deals with all the problems your team might run into. Facilitative, not commanding. 
- Team members do the developing!
Sprints
- Fixed time to deliver a working set of features.
- Tasks in scrum are broken into *User Stories*
- In a sprint, people agree on what user stories to take on
- At the end, a retrospective is held to reflect, see where to improve, etc.
- Planning sessions are held at the start of a new sprint
	- #todo in slides
#### User Stories
- As a `{ACTOR / OBJECT}` I want `{ ACTION }` so that `{ RESULT }`
- Easy to discuss user stories w/ stakeholders!
#### Standup meetings
- Every day (*or at least 3 times per week*)
- Less than 15 minutes
- Answers 
	- List 
	- of 
	- questions #todo in slides
- Working agreements
	- #todo
-
#### Defining "done
- #todo 



#### Android things
- Fragments (I think these are like React Components)
- An *activity* can have one or more fragments.
- Not required for the assignment but worth looking into #todo
# Company is here
> Victim Services Toronto
- Deal with short/long term support of victims of crime

Creating a safety plan for "intimate partner violence"
- the numbers are quite large o_O

Priorities
- Accessibility
	- Ways to talk to "someone" no matter who that might be
- Worrying about "Dependence"
	- Children, pets, elderly
### Technical things
- Ask the TA for technical android help ASAP. 
- Start as early as possible
