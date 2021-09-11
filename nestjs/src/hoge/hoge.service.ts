import { Injectable } from '@nestjs/common';
import { CreateHogeInput } from './dto/create-hoge.input';
import { UpdateHogeInput } from './dto/update-hoge.input';
import { Hoge } from './hoge';
import * as uuid from 'uuid';

@Injectable()
export class HogeService {
    hoges: Hoge[];

    constructor() {
        this.hoges = new Array(5).fill('').map(() => {
            return new Hoge(uuid.v4(), 'foo', 'bar');
        });
    }

    create(foo: string, bar: string) {
        const hoge = new Hoge(uuid.v4(), foo, bar);
        this.hoges.push(hoge);
        return hoge;
    }

    findAll() {
        return this.hoges;
    }

    findOne(id: string) {
        return `This action returns a #${id} hoge`;
    }

    update(id: string, updateHogeInput: UpdateHogeInput) {
        return `This action updates a #${id} hoge`;
    }

    remove(id: string) {
        return `This action removes a #${id} hoge`;
    }
}
