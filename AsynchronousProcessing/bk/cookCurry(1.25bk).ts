import {stay} from './stay';
import {steam} from './steam';
import {cut} from './cut';
import {warm} from './warm';
import {stirFry} from './stirFry';
import {boil} from './boil';
import {flavor} from './flavor';
import {sleep} from './sleep';
import {arrangement} from './arrangement';

// async function cookCurry() {
//     steam("ごはん")
//         .then(() => {
//             return stay();
//         })
//         .then(() => {
//             arrangement("カレーライス");
//         })
//     await sleep(2000);
//     warm("お肉");
//     await sleep(2000);
//     await cut("にんじん", "じゃがいも", "玉ねぎ");
//     await sleep(3000);
//     await stirFry("にんじん", "じゃがいも", "玉ねぎ");
//     await sleep(2000);
//     await boil("にんじん", "じゃがいも", "玉ねぎ", "お肉");
//     await sleep(2000);
//     await flavor("カレールー");
//     await sleep(4000);
// }

function cookCurry() {
    
    cook()
        .then(() => {
            return stay();
        })
        .then(() => {
            arrangement("カレーライス");
        })
}

async function cook() {
    steam("ごはん"),
    await sleep(2000);
    warm("お肉");
    await sleep(2000);
    await cut("にんじん", "じゃがいも", "玉ねぎ");
    await sleep(3000);
    await stirFry("にんじん", "じゃがいも", "玉ねぎ");
    await sleep(2000);
    await boil("にんじん", "じゃがいも", "玉ねぎ", "お肉");
    await sleep(2000);
    await flavor("カレールー");
    await sleep(4000);
}

cookCurry();

//await待ってくれない
// async function cookCurry() {
//     async function cook() {
//         steam("ごはん")
//         await sleep(2000);
//         warm("お肉");
//         await sleep(2000);
//         await cut("にんじん", "じゃがいも", "玉ねぎ");
//         await sleep(3000);
//         await stirFry("にんじん", "じゃがいも", "玉ねぎ");
//         await sleep(2000);
//         await boil("にんじん", "じゃがいも", "玉ねぎ", "お肉");
//         await sleep(2000);
//         await flavor("カレールー");
//         await sleep(4000);
//     }
//     await cook();
//     arrangement("カレーライス");
// }


//then待ってくれない
// function cookCurry() {
//     async function cook() {
//         steam("ごはん")
//         await sleep(2000);
//         warm("お肉");
//         await sleep(2000);
//         await cut("にんじん", "じゃがいも", "玉ねぎ");
//         await sleep(3000);
//         await stirFry("にんじん", "じゃがいも", "玉ねぎ");
//         await sleep(2000);
//         await boil("にんじん", "じゃがいも", "玉ねぎ", "お肉");
//         await sleep(2000);
//         await flavor("カレールー");
//         await sleep(4000);
//     }
//     cook().then(() => {arrangement("カレーライス");} );
// }
