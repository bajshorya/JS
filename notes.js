// Object.freeze()-to assign permanent values to variables;

// // Async
// function=setTimeout(funName, time);

// // callback
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }
// calculator(1,2,sum); output:3


/*----------x---x---x-----------*/
  

//callback hell : nested callbacks stacked below one another forming 
// a pyramid structure (pyramid of doom)


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log('data',dataId); if(getNextdata){
//     getNextData();
// }
        
//     },2000); 
// }

// getData(1,()=>{
//     getData(2)
// });



//promises are used to resolve the issue of callback hell:-
//eventual completion of task. It is an object in JS. 

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('I am a promise');
//         resolve('success');
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log('promise fulfilled',res);
// });

// promise.catch((err)=>{
//     console.log("rejected");
// });



// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data1');
//             resolve('success');
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data2');
//             resolve('success');
//         },6000);
//     });
// }

// console.log('fetching data1.....');
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log('fetching data.....');
//     let p2=asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });

// });


//async function always return a promise 
// await pauses the execution of its surrounding async function
//until the promise is settled

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('weather data');
//             resolve(200);
//         }, 2000);
//     });
// }


// async function getWeatherData(){
//     await api();
//     await api();
// }