import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Hoge {
    @Field(() => ID, { description: 'id' })
    id: string;

    @Field()
    foo: string;

    @Field()
    bar: string;

    constructor(id: string, foo: string, bar: string) {
        this.id = id;
        this.foo = foo;
        this.bar = bar;
    }
}
