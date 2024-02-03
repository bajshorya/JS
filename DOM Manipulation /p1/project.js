// vatriables
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes =[{
    quote:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque ipsa esse, amet debitis qui. Soluta recusandae, ipsum pariatur eligendi enim atque mollitia. Nam animi delectus tenetur ipsam ipsa deserunt!`,
    person:'gavi'
},{
    quote:`Lorem ipsum dolor sit amet consectetur . Soluta recusandae, ipsum pariatur eligendi enim atque mollitia. Nam animi delectus tenetur ipsam ipsa deserunt!`,
    person:'pedri'
},{
    quote:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque ipsa esse, . Soluta recusandae, ipsum pariatur eligendi enim atque mollitia. Nam animi delectus tenetur ipsam ipsa deserunt!`,
    person:'lamine'
},{
    quote:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque atque mollitia. Nam animi delectus tenetur ipsam ipsa deserunt!`,
    person:'cubarsi'
},{
    quote:`Visca Barca Visca Catlunya `,
    person:'leo'
}];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})