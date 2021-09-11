import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HogeModule } from './hoge/hoge.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            playground: true,
            autoSchemaFile: 'schema.graphql',
        }),
        HogeModule,
    ],
})
export class AppModule {}
