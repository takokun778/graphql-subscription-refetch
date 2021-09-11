import { Module } from '@nestjs/common';
import { HogeService } from './hoge.service';
import { HogeResolver } from './hoge.resolver';

@Module({
    providers: [HogeResolver, HogeService],
})
export class HogeModule {}
