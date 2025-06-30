// Types
// 1-masala
// let son1 = -7;
// let son2 = 10;
// console.log(son1 + son2);

// 2-masala
// let cm = 100;
// console.log(cm / 100);

// 3-masala
// let kg = 2000;
// console.log(kg / 1000);

// 4-masala
// let a = 5;
// let b = 9;
// let c = 7;
// console.log((a + b + c) / 3);

// 5-masala
// let yosh = 65;
// console.log(yosh * 365);

// 6-masala
// let hour = 3;
// console.log(hour * 60 * 60);

// 7-masala
// let tovuq = 2;
// let sigir = 4;
// let chochqa = 5;
// console.log(tovuq * 2 + sigir * 4 + chochqa * 4);

// 8-masala
// a = 4;
// b = 5;
// c = 0;
// c = a;
// a = b;
// b = c;
// console.log(a,b);

// 9-masala
// a = 32;
// let birlik = a % 10;
// let onlik = (a - birlik) / 10;
// console.log(birlik + onlik);

// 10-masala
// a = 26;
// birlik = a % 10;
// onlik = (a - birlik) / 10;
// c = 0;
// c = birlik;
// birlik = onlik;
// onlik = c;
// console.log(birlik , onlik);

// 11-masala
// let a = 467;
// let onlik = a % 100;
// let birlik = onlik % 10;
// let yuzlik = (a - onlik) / 100;
// console.log(yuzlik);

// 12-masala
// let a = 356;
// let onlik1 = a % 100;
// let birlik = onlik1 % 10;
// let yuzlik = (a - onlik1) / 100;
// let onlik2 = (onlik1 - birlik) / 10;
// console.log(yuzlik + onlik2+ birlik);

// 13-masala
// let a = 314;
// let onlik14 = a % 100;
// let birlik = onlik14 % 10;
// let onlik1 = (onlik14 - birlik) / 10;
// let yuzlik = (a - onlik14) / 100;
// let b = 0;
// b = birlik;
// birlik = yuzlik;
// yuzlik = b;
// console.log(yuzlik + "" + onlik1 + "" + birlik);

// 14-masala
// (kirish = 123), (natija = 213);
// let a = 123;
// let onlik23 = a % 100;
// let birlik = onlik23 % 10;
// let onlik2 = (onlik23 - birlik) / 10;
// let yuzlik = (a - onlik23) / 100;
// let c = 0;
// c = yuzlik;
// yuzlik = onlik2;
// onlik2 = c;
// console.log(yuzlik + "" + onlik2 + "" + birlik);

// 15-masala
// let a = 5;
// let b = 4;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

//  Operators
// 1-masala
// let a = 2;
// console.log(a > 0);

// 2-masala
// let a = 5;
// console.log(a % 2 == 1);

// 3-masala
// let a = 6;
// console.log(a % 2 == 0);

// 4-masala
// let a = 4;
// let b = 2;
// console.log(a > 2 && b < 3);

// 5-masala
// let a = 0;
// let b = -4;
// console.log(a >= 0) &&(b<-2);

// 6-masala
// let a = 9;
// let b = 8;
// let c = 10;
// console.log(a > b && b < c);

// 7-masala
// let a = 5;
// let b = 7;
// console.log(a % 2 == 1 && b % 2 == 1);

// 8-masala
// let a = 6;
// let b = 9;
// console.log(a % 2 == 1 || b % 2 == 1);

// 9-masala
// let a = 4;
// let b = 9;
// console.log((a % 2 == 1 && b % 2 == 1) || (a % 2 == 0 && b % 2 == 0));

// 10-masala
// let a = 3;
// let b = 5;
// let c = 7;
// console.log(a > 0 && b > 0 && c > 0);

// 11-masala
// let a = 3;
// let b = 5;
// let c = 7;
// console.log(a > 0 || b > 0 || c > 0);

// 12-masala
// let a = 6;
// let b = -3;
// console.log(a > 0 || b > 0);

// If else

// 1-masala
// let a = 5;
// if (a % 2 == 0) {
//   console.log(a+"- son juft son");
// } else {
//   console.log(a+"- son toq son");
// }

// 2-masala
// let a = 6;
// let b = 4;
// if (a > b) {
//   console.log(a - b);
// } else {
//   console.log(b - a);
// }

// 3-masala
// let a = 15;
// if ((a / 3 == 5 && a / 5 == 3) || a > 0) {
//   console.log(a ** 2);
// } else {
//   console.log(a ** 3);
// }

// 4-masala
// let a = 8;
// if (a > 0) {
//   let res = ++a;
//   console.log(res);
// } else {
//   console.log(a);
// }

// 5-masala
// let = 9;
// if (a > 0) {
//   let res = ++a;
//   console.log(res);
// } else {
//
//   console.log(a-2);
// }

// 6-masala
// let a = 5;
// if (a > 0) {
//   let res = ++a;
//   console.log(res);
// } else if ((a = 10)) {
//   console.log(a);
// } else {
//   console.log(a - 2);
// }

// 7-masala
// let a = 8;
// let b = 5;
// let c = 2;
// if (a > 0 && b > 0 && c > 0) {
//   console.log(3);
// } else if (
//   (a > 0 && b > 0 && b < 0) ||
//   (a > 0 && b > 0 && a < 0) ||
//   (a > 0 && b > 0 && c < 0)
// ) {
//   console.log(2);
// } else {
//   console.log(1);
// }

// 8-masala
// let a = 6;
// let b = 4;
// if (a > b) {
//   console.log(a + "-soni katta son");
// } else {
//   console.log(b + "-soni katta son");
// }

// 9-masala
// let a = 4;
// let b = 4;
// if (a != b) {
//   console.log(a + b);
// } else {
//   console.log(0);
// }

// 10-masala
// let a = 7;
// let b = 11;
// let c = 5;
// if ((a > b && b > c) || (c > b && b > a)) {
//   console.log(b + "-soni ortachasi");
// } else if ((b > a && a > c) || (c > a && a > b)) {
//   console.log(a + "- soni ortachasi");
// } else if ((a > c && c > b) || (b < c && c > a)) {
//   console.log(c + "soni ortachasi");
// } else {
//   console.log("ortacha son yoq");
// }

// 11-masala
// let num = 7;

// switch (num) {
//   case 1:
//     console.log("DUSHANBA");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("chorshanba");
//     break;
//   case 4:
//     console.log("payshanba");
//     break;
//   case 5:
//     console.log("juma");
//     break;
//   case 6:
//     console.log("shanba");
//     break;
//   case 7:
//     console.log("yakshanba");
//     break;
// }

// 12-masala
// let num = 6;

// switch (num) {
//   case 1:
//     console.log("yomon");
//     break;
//   case 2:
//     console.log("qoniqarsiz");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   case 4:
//     console.log("yaxshi");
//     break;
//   case 5:
//     console.log("a'lo");
//     break;
//   default:
//     console.log("xato");
// }

// 13-masala
// let num = 2;
// switch (num) {
//   case 1:
//     console.log(num+"-yanvar qish");
//     break;
//   case 2:
//     console.log(num+"-fevral qish");
//     break;
//   case 3:
//     console.log(num+"-mart bahor");
//     break;
//   case 4:
//     console.log(num+"-aprel bahor");
//     break;
//   case 5:
//     console.log(num+"-may bahor");
//     break;
//   case 6:
//     console.log(num+"-iyun yoz");
//     break;
//   case 7:
//     console.log(num+"-iyul yoz");
//     break;
//   case 8:
//     console.log(num+"-avgust yoz");
//     break;
//   case 9:
//     console.log(num+"-sentabr kuz");
//     break;
//   case 10:
//     console.log(num+"-oktabr kuz");
//     break;
//   case 11:
//     console.log(num+"-noyabr kuz");
//     break;
//   case 12:
//     console.log(num+"-dekabr qish");
//     break;
// }

// Loops
// 1-masala
// for( let i=1; i<=10; i++){
//     console.log(i)
// }

// 2-masala
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 3-masala
// let n = 5;
// let k = 10;
// for (n = 5; n > 0; i++) {
//   console.log(n);
// }

// 4-masala
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 == 1) {
//   }
//   console.log(i);
// }

// 5-masala
// let res = 0;
// for (let i = 0; i <= 10; i++) {
//   res += i;
// }
// console.log(res);

// 6-masala
// let a = 21;
// let res = 0;
// for (let i = 0; i <= 10; i ++) {
// if (i % 2 == 0)
//      res += i;
//   console.log(i);
// }

// 7-masala
// let x = 2;
// let y = 36;
// let p = 5;
// for (let x; x <= y; x++) {
//   if (x % p == 0) {
//     console.log(x);
//   }
// }

// 8-masala
// let kg = 25000;
// for (let i = 1; i <= 10; i++) {
//   console.log(kg * i);
// }

// 9-masala
// for (let i = 4444; i <= 9999; i++) {
//   if (i % 47 == 43)
//      console.log(i);
// }

// 10-masala
// let n = 34;
// for (let i = 1; i < n; i += 2) {
//   console.log(i);
// }

// Funksiya
// 1-masala
// function addNumber(a, b) {
//   if (a > 0 && a < 10 && b > 0 && b < 10) {
//     console.log(0);
//   } else {
//     console.log(a + b);
//   }
// }
// addNumber(4, 6);

// 2-masala
// const addNumber = (a, b) => {
//   if (a == 6 || b == 6 || a + b == 6) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(addNumber(4, 6));

// 3-masala
// const aNumber = prompt("A sonini kiriting");
// const bNumber = prompt("B sonini kiriting");
// const addNumber = (a, b) => {
//   if (a == b) {
//     return a, b;
//   } else if (a > b) {
//     return a - b;
//   } else {
//     b - a;
//   }
// };
// console.log(addNumber(aNumber, bNumber));

// 4 - masala;
// const aNumber = prompt("A sonini kiriting");
// const bNumber = prompt("B sonini kiriting");
// const cNumber = prompt("c sonini kiriting");
// const addNumber = (a, b, c) => {
//   if (
//     (a > b && b > c) ||
//     (b > a && a > c) ||
//     (c > a && a > b) ||
//     (c > b && b > a) ||
//     (b > c && c > a) ||
//     (a > c && c > b)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// 5-masala
// const addNumber = (yil) => {
//   return Math.floor(yil / 100);
// };
// console.log(addNumber(2000));

// String
// 1 - masala;
// const addStr = function (a, b) {
//   console.log(a + b + b + a);
// };
// addStr("Salom", "Hayr");

// 2-masala
// let bool = false;
// console.log(Boolen(bool));

// 3-masala
// let str = "a";
// if (str.trim() == "") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 4-masala
// let str = "hello";
// if (str == str.toLowerCase()) {
//   console.log(str.toUpperCase());
// } else {
//   console.log(str.toLowerCase());
// }

// 5-masala
// let ism = "Mubashir";
// if (ism === "Mubashir") {
//   console.log("Hello my Love!");
// } else {
//   console.log("Hello" + ism + "!");
// }

// 6-masala
// let a = "AB";
// let b = "CD";
// if (a.length == b.length) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// 7-masala
// let str = "Humo";
// let result = str.substring(str.length - 2);
// console.log(result.repeat(3));

// 8-masala
// let str = "salom";
// if (str.length < 2) {
//   console.log(str);
// } else {
//   console.log(str.substring(0, 2));
// }

// 9-masala

// let str1 = "salom";
// let str2=str1.substring(1, 4)
// console.log(str2);

// 10-masala
// let str1 = "Matn";
// let str2 = "Satr";
// let str3 = str1.slice(str1.length - 3);
// let str4 = str2.slice(str2.length - 3);
// console.log(str1.slice(str1.length - 3) + str2.slice(str2.length - 3));

// 11-masala
// let str = "TUIT";
// console.log(str.substring(1, 3));

// 12-masala
// let str1 = "dog";
// let str2 = "cat";
// console.log(str1 + str2);togri

// let str1 = "abc";
// let str2 = "cat";
// if(str1.substring(0,2)-str2.substring(0,3)){
//     console.log(str1-str2)
// }else{
//     console.log(str1.substring(0, 2) + str2.substring(0, 3));

// }

// 13-masala
const addStr = (a) => {
  let str = a.slice(0, -2);
  let str1 = a.slice(-2);
  let str2 = str1.slice(0, -1);
  let str3 = str1.slice(-1);
  let result = str + str3 + str2;
  return result;
};
console.log(addStr("coding"));

// let str = "coding";
// let result = str.replace("g", "n");
// console.log(result);

// 14-masala
// let str = "saxiy";
// let result = str.substring(2, 5);
// console.log(result);

// 15-masala
// let str = "NufGghkTghjL";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toLowerCase()) {
//     result += str[i];
//   }
// };
// console.log(result);

// Number
// 1-masala
// let num = 6;
// let num2 = 8;
// if ((num = num2)) {
//   console.log(typeof number(num));
// } else {
//   console.log(typeof number(str));
// }

// Array
// 1-masala
//  let arr = ["olma", 7, "nok", 14];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// 2-usuli
// for(element of arr)
//     console.log(element)

// 2-masala
// let arr = ["olma", 7, "nok", 14];
// let a = 8;
// if (arr.includes(a)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 3-masala
// let arr = [5, 2, 8, 6];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//   res += arr[i];
// }
// console.log(res);

// 4-masala
// let arr = [3, 5, 7, 9];
// let b = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     b = b + 1;
//     console.log(arr[i]);
//   }
// }
// console.log(b);

// 5-masala

// 6-masala
// let arr = [6, 5, 4, 3];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//   res += arr[(6, 3)];
// }
// console.log(res);

// 7-masala
// let arr = [1, 2, 3, 4];
// for (i = arr; i > arr.length; i--) {
//   console.log(arr[i]);
// }

// Object
// 1-masala

// console.log(
//   new Date().getHours() +
//     ":" +
//     new Date().getMinutes() +
//     ":" +
//     new Date().getSeconds()
// );

// 2-masala
// let birthDate = new Date("1992-12-07");
// let res = new Date().getFullYear() - birthDate.getFullYear();
// console.log(res);

// 3-masala
// let weekDays = [
//   "Dushanba",
//   "Seshanba",
//   "Chorshanba",
//   "Payshanba",
//   "Juma",
//   "Shanba",
//   "Yakshanba",
// ];

// let now = new Date();
// console.log(weekDays[new Date().getDay()-1]);
