let b="Result is empty";
console.log(b);

setTimeout(()=>{
   console.log("after some time we get the result");
},0)

setTimeout(()=>{
    console.log("1st")
    setTimeout(()=>{
        console.log("2nd");
        setTimeout(()=>{
            console.log("3rd");
            setTimeout(()=>{
                console.log("4th");
                setTimeout(()=>{
                    console.log("5th");
                },2000);
            },2000);
        },2000);    
    },2000);
},2000);

var a=10;
console.log(a);

let myPromise = new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("I have to give treat");
    }else{
        reject("I will not fulfill")
    }
});

myPromise.then((q) => console.log(q)).catch((w) => console.log(w));

const handlePromise=async()=>{
   try{
    const a = await myPromise;
    console.log(a);
    
   }catch(err){
    console.log("Error from async:",err)
   }finally{
    console.log("It will run for every case");
    
   }
};

handlePromise();