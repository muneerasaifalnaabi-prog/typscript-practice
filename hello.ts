
// const score:number[] = [92, 88, 78];
// const name:string[] = ["Ikhlas","Ishaq"];
// const passed:Array<boolean>=[true,false];


// const students:{name:string,scores:number}[]=[
//     {name:"ishaq",scores:99},
//     {name:"muneera",scores:98}
// ]

// function describe(name:string,score:number,cohort:string ="Code Champs",note?:string):string{
//     return  `${name} scored ${score} ${cohort} ${note??""}`;
// }


// console.log(describe("Ishaq",99));
// console.log(describe("Ishaq",99,"Code Champs","late Submit"));


// export {};

//any data type for dynamic data type 
//try avoid the any it very dangerous .
//unknown :not use until to prove what is the data type 
// let s:unknown=34;
// s="Muneera";
// //s.method1();//wo'nt work ,becouse dont define the datatyoe 

// //s.b.c.d;
// if(typeof s==="string"){
//     console.log(s.toUpperCase());
// }

// interface student {
//     name:string;
//     score:number;
//     cohort:string;
//     email?:string;
// }
// const ishaq:student={
//     name:"Ishaq",
//     score:99,
//     cohort:"Code Champs"
// };
// //console.log(ishaq.nmae);
// ishaq.score=95;
// console.log(ishaq.score);



// const muneera:student={
//     name:"Muneera",
//     score:99,
//     cohort:"Code Champs",
//     email:"mune@gmail.com"
// };
// console.log(muneera);


//union type :
enum cohort{
    "code champs",
    "code legend",
}

enum city{
    "Muscut",
    "Salalah",
    "Sohar",
    "Ibri",
    "Barka"

}
interface student {
    name:string;
    score:number;
    cohort:cohort;
    city:city;
}

const s1:student={
    name:"Sara",
    score:99,
    cohort:cohort["code champs"],
    city:city.Barka
};
const s2:student={
    name:"Ali",
    score:99,
    cohort:cohort["code legend"],
    city:city.Ibri
};
const s3:student={
    name:"Walaa",
    score:99,
    cohort:cohort["code champs"],
    city:city.Barka
};
console.log(s1);
console.log(s3);
//-------------------------------------

type cohort1= "code champs"|"code legend";


type city1="Muscut"|"Salalah"|"Sohar"| "Ibri"| "Barka";
interface student1 {
    name:string;
    score:number;
    cohort:cohort1;
    city:city1;
}

const s11:student1={
    name:"Sara",
    score:99,
    cohort:"code champs",
    city:"Ibri"
};
// const s22:student1={
//     name:"Ali",
//     score:99,
//     cohort:"code legend"
//     city:"Salalah"
// };

interface student11 {
    name:string;
    address?:{city:string};
}
const c1:student11= {
    name:"muneera",
    address:{
        city:"Muscut"
    }
}
console.log(c1.address?.city);
console.log(c1.address?.city??"unknown");

//Generic in typeScript:
//in javascriot
function firstAny(item:any[]):any{
    return item[0];
}
const name=firstAny(["Ishaq","Ikhlas"]);
name.toUpperCase();

//generic in taype script:
function firstAny1<T>(item:T[]):T{
    return item[0];
}
const name1=firstAny1([92,85]);
const name2=firstAny1(["Ishaq","Ikhlas"]);