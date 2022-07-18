//3-10=free
//10-15=20rs
//15-25=50rs
//25-45=100rs
//45 to 75= free
//let names=[['nag','puk','nak'],['lot','pat','kot'],['fok','pak','bot']]
//for(let i=1;i<=names.lenght;i++){
    //console.log(i,names[i])
//let arr = [1,2,4,7,35,3,7,3];


//print

//only even - using map

//only odd -using filter
//let test={
  //naga:89,
  //pavani:67,
  //srinu:78,
  //babu:100,
  //kanthi:90,
  //kt:100,
  //banti:79,
  //sonu:68,
  //selva:93
   
//}
//  let hi=prompt('hi what do you want?')
//  let todo=['Bye chiken', 'go to supermarket' ];
//  while(hi!=='quit'&&hi!=='q'){
//   if(hi==='list'){
    
//     console.log('*************');
//     for(let i=0;i<todo.length;i++){
//       console.log(`${i}:${todo[i]}`)
//     }
//     console.log('*************')
//   }else 
//   if(hi==='new'){
//       let newtodo=prompt('what to add new');
//          todo.push(newtodo);
//          console.log(`${newtodo}added to list`);

//   }
//   hi=prompt('hi what do you want??')
  
    
//  }
//  console.log('ok you quit')
    // function student(firstName,lastName){
    //   console.log(`hi ${firstName}${lastName}.`)
    // }


// function callTwice(func){
//     func();
//     func();

// }
//   function rollDie(){
//     let roll=Math.floor(Math.random()*6)+1
//     console.log(roll);
//   }


const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let num=numbers.filter((el)=>{
       return el%2===0;
});
// DO NOT ALTER THE FOLLOWING CODE:
//  const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

//  const peru=fullNames.map((nam)=>{
//   return nam.first;
//  });
//  setTimeout(() => {
// console.log(peru);
// },3000);

// const rollDie= ()=>{
//   return Math.floor(Math.random()*6)+1;
// }