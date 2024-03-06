'use strict'
// Gitda ishlash
// Agar terminalda git bilan ishlansa va git add -A buyrug'i ishlatilsa va ishlanayotgan fayl ishchi stolda bo'lsa bu ko'plab kodlar jarayoni qatoriga va xatoliklarga olib kelishi mukmin.
// function isIsogram(word){
//     let x = false; let y = false;
//     for(let i=0;i<word.length; i++){
//         let wordl = word.substring(0,i)
//         let wordr = word.substring(i)
//         x = wordl.includes(word.charAt(i))
//         y = wordr.includes(word.charAt(i))
//         console.log(x,wordl,wordr)
//     }
//     return x&&y
// }
// isIsogram("Thomas");

let str = "Thomas";
let str1 = str.substring(0,6);
let s = str1.includes(str.charAt(6));
console.log(str1);
console.log(s);
console.log(str.length);

// ========1======
// It is true code

// const info = {
//     text: 'description'
// }
// info[info.text] = "Some text";
// console.log(info[info.text]="Some suge");


// ===========2=======
// hoisting isn't work here

// console.log(numb); // undefined - because hoisting not work
// var numb;
// console.log(numb); // undefined - because numb declareted, but didn't take any args
// numb = 12;
// console.log(numb); // 12 - declareted and taken arg.

// Overall output:
// undefined
// undefined
// 12

// ========= 3 ========
// try excepts mistakes

// try{            // x variable defined inside of 'try' and using here
//     const x = 123;      // if const change to var 'try' , catch and finally work without any errors
//     x++;
// } catch (e){
//     console.log("Unexpected error");
// } finally {             // finally isn't work . Becasue x is const.
//     console.log("Finally: ", x); 
// }
// Overall output:
// Unexpected error
// ReferenceError : x is not defined

// ========= 4 ==========

// Valid email direct in a tag in HTML

{/* <a href="mailto:hello@only.com.ru">Yozing</a> */}

// Xato yo'naltirmalar

// {/* <a href="email:hello@only.com.ru">Yozing</a>
// <a href="mail:hello@only.com.ru">Yozing</a> */}
{/* <a href="hello@only.com.ru">Yozing</a> */}

// ========== 5 ==========

// Kombinator bo'lmagan css belgisi
// ','

// Kombinator bo'lgan css belgilari
// '~'
// '+'
// '>'
// '*'

// ====== 6 =======
const animate = () =>{
    console.log('animation');
}
requestAnimationFrame(animate);
// Reference error :requestAnimationFrame is not defined


var x=10,y =0,z =0 ;

let umumiy = 0;
for (let i = 0; i<=180; i++){
    umumiy = x+y+z;
    if(umumiy = 180){
        console.log(`Ichki burchaklar yig'indisi topildi ${umumiy}`);
        break;
    }else{
        x++;
        y++;
        z++;
    }
}
