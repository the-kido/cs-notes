A set E might get part of its key from one or more other entity sets.
- A weak entity is identified by: `owners key + weak entity's partial key`

>It might be accurate to say weak entity sets are most common when there's a *hierarchy* ?
> - For instance, the "user name" is under the "host name". You can have two user names but the host name must be different!
> 	- The host name is the "parent" of the user name in this analogy


The supported entity set, and the relation(s) that let it be supported are double-lined.

The supporting relationships should be many-one or one-one. **Each instance of the weak set must be associated to *exactly one* instance of the strong entity set** 
- If it's associated to more than 1, then the key isn't unique. You can have X+Y and X+Z, which means X doesn't know what it's owner is (is it Y or is it Z)

### When to create them
- If it's impossible to create an "ID" system (i.e. a studio might have IDs for their own employees, but two studios don't use the same "master" system, then the uniqueness of an employee depends on the studio *and* their ID)
- You **don't** need it if the entity is uniquely discernable already.
