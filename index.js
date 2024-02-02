// const promiseOne=new Promise(function(resolve,reject){
//   setTimeout(()=>{console.log("gungun")  
//   resolve()},1000)

// })
// promiseOne.then(()=>{
//   console.log("resolved");
// // })
// const promiseTwo=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let erroe=true;
//     if(!erroe){
      
    
//     resolve({username:"gungun", age:12})}
//     else{
//       reject("erroe")
//     }
//   },1000)
// })
// promiseTwo.then((user)=>{
//   console.log(user);
//   return user.username;
// }).catch((error)=>{console.log(error)}).finally(()=>{console.log("executed finally")})\
const button=document.querySelector(".btn");
const URL="https://cat-fact.herokuapp.com/facts";
const catFacts= async function(){
  let response=await fetch(URL);
 let data= await response.json();
 console.log(data[0].text);
 
 


}
button.addEventListener("click",catFacts());