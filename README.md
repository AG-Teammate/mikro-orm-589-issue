# Problem  
There are 2 users and 2 cars. Both cars are connected to both users.  
We expect each car to have 2 users.
## Mikro-ORM 5.8.9 LoadStrategy.JOINED
Car 1 has 2 users  
Car 2 has **0 users**
## Mikro-ORM 5.8.9 LoadStrategy.SELECT_IN
Car 1 has 2 users  
Car 2 has 2 users
## Mikro-ORM 5.8.8 LoadStrategy.JOINED
Car 1 has 2 users  
Car 2 has 2 users
## Mikro-ORM 5.8.8 LoadStrategy.SELECT_IN
Car 1 has 2 users  
Car 2 has 2 users

# Running  
```shell
yarn install
yarn start
```
