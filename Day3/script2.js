const fetchdata =async()=>{
    try{
    const response =await fetch("https://dummyjson.com/products");//url
    console.log(response);
    if(response.ok){
        const data =await response.json();  
        console.log(data);
    }
}
catch(err){
    console.log("Error from fetch:",err);
}
};

fetchdata();

setInterval(()=>{

    let a=1;
    console.log(a=a+1);

},1000);

