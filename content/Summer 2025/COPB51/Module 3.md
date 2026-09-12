The first thing discussed were the different kinds of interviews (of which I naively only knew of "one-on-one" interviews). For all but panel interviews, going over common interview questions is sufficient, but for panels its common to get a bigger variety of questions. It is important to dress well (unless you're on the phone I suppose) and communicate well, giving full attention to your interviewer(s) by doing things like looking at your webcam and giving everyone on the panel sufficient eye contact. 





Kinds of interviews:
1. Phone interview: Usually for screening basic qualifications
	1. stand while talking = better for posture / more confident
2. 1-to-1: direct interaction
	1. Research the interviewer to *tailor your conversation (??)*
	2. Small talk is good (especially their experiences or interests to establish connection + makes them more relaxed / personable)
3. Panel interviews: for high stakes roles
	1. Make eye contact with everyone
	2. Bring hard copies of your material for everyone on the panel
4. Virtual Interviews
	1. Clean background
	2. Make sure your mannerisms are good on video (record yourself)
	3. Look at the *webcam* and not just the screen


For panel interviews you're probably gonna get much more diverse questions. Otherwise reviewing common questions is good 


# Kinds of interview questions
The first thing to realize behind each question is their subtext (what are they trying to get out of my answer?) as it lets you prepare more effective and practical answers. To do this, research the company / role, do mock interviews, and learn from questions you've heard before. The notes then give a large list of interview question types, many of which had self explanatory subtexts like negative/trap questions. However, questions like motivation/open questions, which you may answer honestly, have better - tailored - answers to the position (i.e.. what motivations do you have that the position values?).

1. Introductory
2. Informational
3. Technical
	1. Shows how technically proficient you are (good at solving problems; know your stuff)
4. Behavioural
5. Situational
6. Trap / Negative
7. Accomplishment-oriented
8. motivational



### Response Strategies

Lastly, we went over several interview question types and ways to respond to each type. The point-example-conclusion method highlights a certain skill or experience so it's used in skill-based questions. STARR is used in behavioural or situational questions. Present-past-future is for introductory or motivational questions. I wouldn't want to repeat myself for all the other types, but the sandwich one was by far the most interesting one to me. You just squish the bad with the good!
### PEC method
![[PEC Method.png]]
- Point: Should be 1-2 sentences. Clearly state your strength / skill / main idea.
- Example: A specific example that explains your point
	- Include numbers and **outcomes**. Makes u seem more credible
- Conclusion: Show how your example shows u fit the role

### STARR
![[STARR.png]]
We know STARR!!

### Present-Past-Future
- Used for information / motivation / personal reflection questions
	- "Who are you"

Present:
- Focus on your current situation (role, academic status)
Past:
- Briefly discuss past experiences that shaped your skills (i.e. Mention achievements or roles that align with the job requirements).
Future
- Connect your current and past experiences to your future goals. 
	- ie. Express enthusiasm for the role and company.


### Sandwich
- For negative / trap questions that try to get you honest abt things 
Start Positive --> Give the Negative --> End Positive 

>[!example] ![[Biggest Weakness.png]]



### DAE method (define, answer, example)
- For technical questions
- Explain the terms in the questions (means you know what the question is "really" asking), then answer, then use examples (analogies)


### ACE method
- Usually for technical coding questions
- Ask, Communicate, Evaluate
	- Ask questions you might have before approaching the question
	- Communicate your thought process
	- Make sure your solution is correct

![[Pasted image 20250706162804.png]]



https://ascoop-uoft-coop-csm.symplicity.com/students/app/jobs/detail/33472773fcc5750d34954a07768e15d4


"What inspired you to pursue a career in soft dev?"
- Game development -- specifically focusing on making performant games on low-end devices vs. making games flashy with high-end graphics
- Specifically, when I was younger I wanted to make games but since I never had the best computer I wanted to target lower-end devices. 
- This compelled me to use faster programming languages and technology suites and learn optimization techniques. 
- So, my exposure to programming games also exposed to all of this technical programming stuff and eventually lead me to become interested in software development too, especially working on performant systems. 

Coursework in algorithms: STARR
- S: Yes, so in my introduction to computer science II course, we had a final project where we created data structures to load in and analyze large data sets. 
- we were tasked with optimizing and identifying complexity. 
- How I approached it was by drawing from what we learned from class and understanding the problem first, then drafting solutions outside of code before finally writing it in C. 
- This resulted in me getting a 100% in the final assignment and hitting all the performance targets, while also finishing it less time than my peers by not flailing on C syntax difficulties. 
- My understanding of data structures and my approach to problem solving will ensure that I also finish tasks at Kinaxis intelligently and effectively.


Technical problem in project and approach to solving it
- I was working on a top down shooter game and had to manage my enemy, player, and other entity code with different behaviors and whatnot.
- Initially I approached this by making entities extend an `entity` class with many abstract methods for the entities to implement but it ended up being very unflexible and I had lots of repeaed code which hurt maintainability
- What I ended up doing was researching and switching to a composition-based design where entities were composed of smaller components with health logic, movement logic, and other AI logic.
- Not only did this dramatically improve the extendibility of my entities in the game and offering a far cleaner solution to designing new entities, but it also helped me understand better the object-oriented-design principle of composition-over-inheritance which I have now used in future projects too. 

imagine you are working on a team project and you realize that a key feature is not performing as expected. How would you address this situation?
- Problems like these in team projects happen all the time. To deal with it, I would first isolate for the issue via tooling at Kinaxis or reports made by team members. I would then communicate with the team member who was involved with the system affected to understand their implementation and work together or with the team to address it.
- For instance, if their was a problem with the build script of an application, and when building I notice the bottleneck, I would look through the script or discuss with the member who created the script. If the issue is too complex, in the next standup i would ask the team and we would attempt to solve the problem together. The key is communication and understanding the problem. Solving them is the easy part. 

how do you usually adapt to working in a team environment, especially when collaborating with others on coding tasks?
- Being able to adapt into a team is crucial to stay in sync with other members and ensure everyone works well together.
- So, when adapting into a team, I always first try to warm up to the other members and learn what the dynamic is like. I would familiarize myself with the codebase they might already have and when contributing I would coordinate with my members during standups too.
- For instance if I was trying to adapt into a team already working on a game, I would get to know everyone, set everything up with the help of my fellow members, and look through the scenes to understand how they are laid out. After that I would make my first contributions, not before ensuring with other members that I've followed all the standards in place.

Can you explain the importance of algorithms and data structures in software development, and how you have used them in your studies?
- Data structures are ways to organize lots of data and algorithms are used to access and assess this data. 
- They are both very important in software development because they allow you to effectively and quickly handle and develop outputs for large amounts of data.
- For instance, certain data structures lend themselves well to certain situations, so having the ability to determine the best one to use can either improve performance or memory usage. The algorithms that data is retrieved from structures then depend on this data structures, too.


==Yes==. Uh, what kind of dynamic does the teams, uh, within Connexus have? Since I normally like to assume a, like, a leadership position, are there any opportunities for me to be able to exercise that a bit more. No. Nothing else. Uh, thank you for having this interview with me.
***OR*** 


"if you were tasked a question but didnt know how to approach it, what would you do?"


