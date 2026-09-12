Relation for weak entity sets include full key (so that includes attr's of related entity sets) + its own attributes

> A supporting / double-diamond relation will be redundant and should be deleted from the database schema.
>  -  #todo idk if they mean the whole relation should go bye-bye or just the redundant attr

![[Weak Entity Sets to Relations.png]]
- Logins is just its own attrs + the supporting key 
- Host is just its key, easy
- At is the key of logins, which is both name and hname, and the key of hosts, which is just name. They are identical, so just delete one of them (that means deleting the relation!)
- And then that's it! Note how `Hosts` is a "subset" of `Logins`' in its schema but we don't delete it because `Logins`'s keys relies on the foreign key of `Hosts`!

