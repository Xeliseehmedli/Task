// 1) Aşağıdakı xüsusiyyətlərə sahib bir obyekt yarat:
// const person={
//     name:"Xelise",
//     surname:"Ehmedova",
//     age:"20",
//     school:"OYU"
// }
//  person.grade="5"
// console.log(person.name);
// console.log(person.school);
// 2)Massiv İçində Obyektlər
// 3 nəfərdən ibarət students adlı bir array yarat, hər biri obyekt olsun və name, age, grades (array) olsun.
// const person=
    // students[
// {
//     name:"Xelise",
//     grades:"20",
//     age:"20",   
// },
// {
// name:"Xelise",
//     grades:"20",
//     age:"20",},
//    { name:"Xelise",
//     grades:"20",
//     age:"20",}],

// 3)13. Obyektdə Məlumat Sil
//  let user = {
//   username: "togrul",
//   age: 22,
//   country: "Azerbaijan"
// };
// delete user.age
// console.log(user.age);
// 4)Boş Obyekt Yarat və Məlumat Əlavə Et
//  let student = {}
//    student.name="Xelise",
//     student.age="20",
//     student.group="Front-end"
// 5)10. Obyektdə Dəyər Dəyişdir 
// let car = {
//   brand: "Toyota",
//   color: "red",
//   year: 2020
// };
// car.color="black"
// console.log(car.color);
// 6) Verilmiş array-in uzunluğunu (length) qaytar.
// let x:number[]=[2,3,4,5,6]
// console.log(x.length);
// 7)Array-in sonuna bir element əlavə et (push).
// let x:number[]=[2,3,4,5,6]
// x.push(7)
// console.log(x);
// 8)Array-in əvvəlindən bir element sil (shift) və nəticəni göstər.
// let x:number[]=[2,3,4,5,6]
// x.shift(2)
// console.log(x);
// 9)Array-in tərsini (reverse) al.
// let x:number[]=[2,3,4,5,6]
// console.log(x.reverse());
// 10) for döngüsü ilə bütün elementləri konsola yazdır.
// let x:number[]=[2,3,4,5,6]
// for(let i=0;i<x.length;i++){
//     console.log(x[i])
    
// }
// 11)  Verilmiş ədədlərdən ibarət array-də yalnız cüt ədədləri qaytar (filter)
//  let x:number[]=[2,3,4,5,6]
//  let result=x.filter((num)=>num%2==0)
//  console.log(result);
//  12)Verilmiş array-də konkret elementin olub olmadığını yoxla (includes)
// let x:number[]=[2,3,4,5,6]
// let result=x.includes(2)
// console.log(result);
// 13) Verilmiş iki array-i birləşdir (concat).
// let x:number[]=[2,3,4,5,6];
// let y:number[]=[7,8,9,10];
// console.log(x.concat(y));
// 14)Verilmiş array-in kopyasını yarat və orijinal array-i dəyişdirmə.
// let x:number[]=[2,3,4,5,6];
// let y:number[]=x.slice();
// console.log(y);
// 15)Verilmiş array-dəki son elementi sil (pop).
// let x:number[]=[2,3,4,5,6];
// x.pop();
// console.log(x);
// 16) Verilmiş array-dəki bütün ədədləri 2-yə vurub yeni array qaytar (map).
// let x:number[]=[2,3,4,5,6];
// let result=x.map((num)=>num*2)
// console.log(result);
// 17)Verilmiş array-dəki mənfi ədədlərin sayını tap.
// let x:number[]=[-2,3,4,-5,6];
// let count=0
// for(let i=0;i<x.length;i++){
//     if(x[i]<0){
//         count++
       
        
//     }
// }
// console.log(count);
// 18)  Verilmiş string-lərdən ibarət array-də uzunluğu 5-dən böyük olanları seç.
// let x:string[]=["yusif","ayan","xelise"];
// let result:string[]=[];
// for(let i=0;i<x.length;i++){
//     if(x[i].length>5){
// result.push(x[i])
// }
// }

// console.log(result);
// 19) Verilmiş array-də minimum ədədi tap (Math.min istifadə etmədən).
// let x:number[]=[-2,3,4,-5,6];
// let min:number=[0]
// for(let i=0;i<x.length;i++){
//     if(x[i]<min){
//       min=x[i]
//     }
// }
// console.log(min);
// 20)  Verilmiş array-dəki bütün ədədlərin cəmini hesabla (reduce).
// let x:number[]=[2,3,4,5,6];
// let result=x.reduce((a,b)=>a+b)
// console.log(result);
// 21)  Array-dəki hər bir ədədi konsola yazdır, amma forEach istifadə et.
// let x:number[]=[2,3,4,5,6];
// x.forEach((num){
// console.log(num);
// })
// 22)  Verilmiş ədədlərdən ibarət array-i azalan sıraya düz (sort).
//  let x:number[]=[2,3,4,5,6];
//  let result=x.sort((a,b)=>b-a);
//  console.log(result);
// 23)   Verilmiş array-də yalnız tək ədədləri saxla və kvadratlarını al (filter + map).
// let x:number[]=[2,3,4,5,6];
// let result=x
// .filter((num)=>num%2!==0)
// .map((num)=>num*num);
// console.log(result);
// 24)  Verilmiş array-də neçə dəfə 5 rəqəmi təkrarlanıb?
// let x:number[]=[2,3,5,4,5,6];
// let count=0;
// for(let i=0;i<x.length;i++){
//     if(x[i]==5){
// count++
//     }
// }
//  console.log(count);
// 25)Verilmiş array-də bütün elementləri vergül ilə birləşdirib bir string yarat (join).
// let x:number[]=[2,3,5,4,5,6];
// let result=x.join(" ,")
// console.log(result);
// 26) Verilmiş array-də təkrarlanan elementləri tap (yalnız unikal olanları göstər).
// let x:number[]=[2,3,5,4,5,6];
// let y:number[]=[];
// for(let i=0;i<x.length;i++){
    
//     if(!y.includes(x[i])){
//         y.push(x[i])
//     }
// }


//  console.log(y);
// 27)Verilmiş array-dəki elementləri tərs sırada, amma reverse istifadə ETMƏDƏN düz.
// let x:number[]=[2,3,5,4,5,6];
// let y:number[]=[];
// for(let i=x.length-1;i>=0;i--){
//     y.push(x[i])
// }
//  console.log(y);
// 28)Verilmiş array-də splice ilə 2-ci elementdən başlayaraq 3 elementi sil.
//  let x:number[]=[1,2,3,4,5];
//  x.splice(2,3)
// console.log(x);
// 29)   Verilmiş ədədlərdən ibarət array-də ədədlərin orta qiymətini tap

//  let x:number[]=[1,2,3,4,5];
//  let sum=0;
 
//  for(let i=0;i<x.length;i++){
//     sum+=x[i];
//     }
//  let count=x.length;
// let ortalama=sum/count
// console.log(ortalama);
// 30)  Verilmiş string-lərdən ibarət array-i əlifba sırası ilə düz (sort).
// let x:string[]=["Zuleyxa","Ayan"];
// let result=x.sort((a,b)=> b.localeCompare(a));
// console.log(result);
// 31) Verilmiş array-də elementlərdən biri 0-dırsa, "var" əks halda "yoxdur" de.
// let x:number[]=[1,2,3,0,4,5];
// if (x.includes(0)) {
//     alert("Var");
// } else {
//     alert("Yoxdur");
// }
// 32)  Verilmiş array-də tək və cüt ədədləri ayırıb iki array yarat.
//  let x:number[]=[1,2,3,4,5];
//  let y:number[]=[];
//  let tek:number[]=[];
//  for(let i=0;i<x.length;i++){
//     if(x[i]%2==0){
//         y.push(x[i]);
//     }
// else {
//     tek.push(x[i])
// }
//  }
// console.log(y);
// console.log(tek);
// 33) Verilmiş array-dəki ən böyük 3 ədədi tap.

// let x: number[] = [1, 2, 3, 4, 5];

// let top3 = x.sort((a, b) => b - a).slice(0, 3);

// 
// console.log("Ən böyük 3 ədəd:", top3); 
// 34)Verilmiş array-də ədədlərin hansı biri 3-ə bölünür və həm də 5-ə bölünmür?
// let x: number[] = [1, 2, 3, 4, 5];
// let result=[];
// for(let i=0;i<x.length;i++){
//     if(x[i]%3==0 && x[i]%5!==0)
//         result.push(x[i])
// }
// console.log(result);


