import {Collection, Entity, ManyToMany, PrimaryKey} from "@mikro-orm/core";
import {Car} from "./Car";

@Entity()
export class User {
    @PrimaryKey()
    id!: number;
    @ManyToMany(() => Car)
    cars = new Collection<Car>(this);
}
