![[Levels of abstraction of DBMS.png]]

- You can have many **views**. These describe "how" the user sees the data
	- e.g., `CourseInfo (cid: string, enrollment: integer)`
	- These remove complexity. They just state what is required, and *simply*, all for the user.
	- "enrolment" for instance is NOT in the logical schema for `Course` but we have it here for whatever app purpose it serves
- You then have the **logical schema** which are the "data" that is stored in the DB and the relationships between data too. It just hides physical storage details
	- Actually defines entities and data types
- And those logical schema have a **physical** schema that they use to 