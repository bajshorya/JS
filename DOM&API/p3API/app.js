const URL="https://cat-fact.herokuapp.com/facts";
//fetch method 
//let promise=fetch (url,[options]);  returns a promise
const fact=document.querySelector('#fact');
const btn=document.querySelector('#btn');


// const getFacts= async()=>{
//     console.log('getting data....');
//     let response=await fetch(URL);
//     console.log(response);//JSON format
//     let data=await response.json();
//     console.log(data[0].text);
//     fact.innerText=data[1].text;
// };

//the above code was much simpler and easy to read (using async and await)
//the below one uses promises 

function getFacts(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        fact.innerText=data[1].text;
    });
}

btn.addEventListener('click',getFacts);
//using async and awit as this asynchronus work 
//get request
//AJAX Asynchronus JS & XML (old)
//JSON is JavaScript Object Notation (new)

//Response (json)---> JS object

//json() method-return another promise 
