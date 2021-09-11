import { PubSub } from 'graphql-subscriptions';

import { Args, ID, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { UpdateHogeInput } from './dto/update-hoge.input';
import { Hoge } from './hoge';
import { HogeService } from './hoge.service';

const pubSub = new PubSub();

@Resolver(() => Hoge)
export class HogeResolver {
    constructor(private readonly hogeService: HogeService) {}

    @Mutation(() => Hoge)
    createHoge(@Args('foo') foo: string, @Args('bar') bar: string) {
        const hoge = this.hogeService.create(foo, bar);
        pubSub.publish('onHoge', { onHoge: hoge });
        return hoge;
    }

    @Mutation(() => Hoge)
    updateHoge(@Args('updateHogeInput') updateHogeInput: UpdateHogeInput) {
        pubSub.publish('hoge', { hoge: updateHogeInput.id });
        return this.hogeService.update(updateHogeInput.id, updateHogeInput);
    }

    @Mutation(() => Hoge)
    removeHoge(@Args('id', { type: () => ID }) id: string) {
        pubSub.publish('hoge', { hoge: id });
        return this.hogeService.remove(id);
    }

    @Query(() => [Hoge], { name: 'hoge' })
    findAll() {
        return this.hogeService.findAll();
    }

    @Subscription(() => Hoge)
    onHoge() {
        return pubSub.asyncIterator('onHoge');
    }
}
