console.log("start")

 process.nextTick(()=>{
    console.log("nextTick");
 });

 setTimeout(()=>{
    console.log("setTimeout");
 },15000);

  setTimeout(()=>{
    console.log("setTimeout");
 },0);

 setImmediate(()=>{
    console.log("setImmediate");
 });

 console.log("End");