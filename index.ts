import {MikroORM, SqliteDriver} from "@mikro-orm/sqlite";
import {LoadStrategy} from "@mikro-orm/core";
import {User} from "./entities/User";
import {Car} from "./entities/Car";

const main = async () => {
    //create orm and database
    const orm = await MikroORM.init({
        loadStrategy: LoadStrategy.JOINED, //<------ change this

        driver: SqliteDriver,
        dbName: 'test.sqlite',
        entities: ['./entities/*.js'],
        entitiesTs: ['./entities/*.ts'],
        allowGlobalContext: true,
        debug: false,
    });
    await orm.getSchemaGenerator().refreshDatabase();

    //seed 2 users 2 cars, both users have both cars
    console.log('Seeding...')
    const u1 = orm.em.create<User>('User', {});
    const u2 = orm.em.create<User>('User', {});
    const c1 = orm.em.create<Car>('Car', {});
    const c2 = orm.em.create<Car>('Car', {});
    u1.cars.add(c1);
    u1.cars.add(c2);
    u2.cars.add(c1);
    u2.cars.add(c2);
    await orm.em.flush();

    //get all cars and populate users
    const carsRepo = orm.em.fork().getRepository<Car>('Car');
    const cars = await carsRepo.findAll();
    await carsRepo.populate(cars, ['users'], {fields: ['id']});

    cars.forEach(c => console.log(`Car ${c.id} has ${c.users.getItems().length} users`));

    await orm.close();
}

main();

