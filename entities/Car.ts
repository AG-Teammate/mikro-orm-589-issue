import {Collection, Entity, ManyToMany, PrimaryKey} from "@mikro-orm/core";
import {User} from "./User";

@Entity()
export class Car {
    @PrimaryKey()
    id!: number;
    @ManyToMany(() => User, u => u.cars)
    users = new Collection<User>(this);
}
