# typeorm 
## transaction
Why Use transactionalEntityManager in Transactions?
When a transaction is started in TypeORM, a connection is opened between your application and the database. All the queries executed within the transaction context must use this same connection. This is necessary to ensure that the operations are part of the same transaction.

TypeORM provides a transactional entity manager to ensure that all queries (like save, update, delete, etc.) are executed on the same transactional connection. If you use the global entity manager or repository, those operations will be performed outside of the transaction context and on a different connection, defeating the purpose of the transaction.

Correct Usage with transactionalEntityManager

```ts
import { getManager } from 'typeorm';
import { User } from './user.entity';
import { Profile } from './profile.entity';

async function createUserAndProfile() {
  await getManager().transaction(async (transactionalEntityManager) => {
    const user = new User();
    user.name = 'John Doe';

    const profile = new Profile();
    profile.bio = 'Software Engineer';

    // Use the transactionalEntityManager to save the entities
    await transactionalEntityManager.save(user);
    await transactionalEntityManager.save(profile);

    // Any additional transactional operations can be added here
  });
}

```
Incorrect Usage (with Global Entity Manager)

```ts
import { getRepository, getManager } from 'typeorm';
import { User } from './user.entity';
import { Profile } from './profile.entity';

async function createUserAndProfile() {
  await getManager().transaction(async (transactionalEntityManager) => {
    const user = new User();
    user.name = 'John Doe';

    const profile = new Profile();
    profile.bio = 'Software Engineer';

    // Incorrect: Using the global entity manager instead of the transactional one
    await getRepository(User).save(user);  // This will not be part of the transaction
    await getRepository(Profile).save(profile);  // This will not be part of the transaction
  });
}

```

