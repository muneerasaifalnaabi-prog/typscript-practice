"use strict";
// const score:number[] = [92, 88, 78];
// const name:string[] = ["Ikhlas","Ishaq"];
// const passed:Array<boolean>=[true,false];
// const students:{name:string,scores:number}[]=[
//     {name:"ishaq",scores:99},
//     {name:"muneera",scores:98}
// ]
function describe(name, score, cohort = "Code Champs", note) {
    return `${name} scored ${score} ${cohort} ${note ?? ""}`;
}
console.log(describe("Ishaq", 99));
console.log(describe("Ishaq", 99, "Code Champs", "late Submit"));
// export {};

const student={name:"Ikhlas",score:99};
student.socre=95;
console.log(student);