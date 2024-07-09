//Promise
//1 stage: pending...
//2 stage: resolved if fulfilled
//3 stage: else reject

//task
//API student
//1s roll no;
//2s name and age; 
//executor function within promise with reject() and reject() parameters

//promise producing
const probj1 = new Promise( (resolve,reject) => {
    
    setTimeout(() => {
        let rollNo = [1,2,3,4,5];
      resolve(rollNo);
    //   reject("error while producing");
        
    },2000);
    
});


const getBiodata = (indexData) => {
    
    return new Promise ( (resolve,reject) => {
          setTimeout( (indexData) => {
              let biodata = {
                  name:"vinod",
                  age:26
              }
              resolve(`My roll no is ${indexData} My name is ${biodata.name} and I am  ${biodata.age} years old.`)
              
          },2000,indexData)
        
    })

    
}

//promise consuming
//argument data which is resolved
//argument data which is rejected
// probj1.then((number) =>{
//     console.log(number);
//   return getBiodata(number[1])
// }).then( (data) => {
//         console.log(data)
//     })
// .catch((error) => {
//     console.log(error)
// })


//async await

async function getData(){
   const rollNoData =  await probj1;
   console.log(rollNoData);
   
  const bioDatas =  await getBiodata(rollNoData[1]);
  console.log(bioDatas);
  
  return  bioDatas;
}
const getname = getData().then((myname) => {
    console.log(myname);
});


















