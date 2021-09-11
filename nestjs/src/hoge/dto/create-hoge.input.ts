import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHogeInput {
    @Field()
    foo: string;

    @Field()
    bar: string;
}
