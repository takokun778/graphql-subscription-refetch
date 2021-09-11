import { CreateHogeInput } from './create-hoge.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateHogeInput extends PartialType(CreateHogeInput) {
    @Field(() => ID)
    id: string;

    @Field()
    foo: string;

    @Field()
    bar: string;
}
