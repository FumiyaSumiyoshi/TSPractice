import {stay} from './stay';
import {steam} from './steam';
import {cut} from './cut';
import {warm} from './warm';
import {stirFry} from './stirFry';
import {boil} from './boil';
import {flavor} from './flavor';
import {sleep} from './sleep';
import {arrangement} from './arrangement';

async function veg() {
    //野菜を切る
    await cut("にんじん", "じゃがいも", "玉ねぎ");
    await sleep(3000);
    await stirFry("にんじん", "じゃがいも", "玉ねぎ");
    await sleep(2000);
    await boil("にんじん", "じゃがいも", "玉ねぎ", "お肉");
    await sleep(2000);
    await flavor("カレールー");
    await sleep(4000);
    await arrangement("カレーライス");
}

function Preparation() {
    stay()
        .then(() => {
            //ご飯を炊く
            steam("ごはん");
            return stay();
        })
        .then(() => {
            //肉を解凍
            warm("お肉");
            return stay();
        })
        .then(() => {
            veg();
            return stay();
        });

}

Preparation();


