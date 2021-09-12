import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Event {
    @Field((type) => ID)
    id: string;

    @Field((type) => ID)
    hogeId: string;

    constructor(id: string, hogeId: string) {
        this.id = id;
        this.hogeId = hogeId;
    }
}
