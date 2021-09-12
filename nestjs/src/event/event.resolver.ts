import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Event } from './event';
import { v4 } from 'uuid'

const pubSub = new PubSub();

@Resolver()
export class EventResolver {
    @Mutation(() => Event)
    event(@Args('id') id: string, @Args('hogeId') hogeId: string) {
        const uuid = v4();
        const event = new Event(id, uuid);
        pubSub.publish('onEvent', { onEvent: event });
        return event;
    }

    @Subscription(() => Event)
    onEvent(@Args('id') id: string, @Args('hogeId') hogeId: string) {
        return pubSub.asyncIterator('onEvent');
    }
}
