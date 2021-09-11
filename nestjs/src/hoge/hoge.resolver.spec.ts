import { Test, TestingModule } from '@nestjs/testing';
import { HogeResolver } from './hoge.resolver';
import { HogeService } from './hoge.service';

describe('HogeResolver', () => {
    let resolver: HogeResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [HogeResolver, HogeService],
        }).compile();

        resolver = module.get<HogeResolver>(HogeResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
