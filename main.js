function getpara1(){
inputs=[];

   for(var i=1;i<=6;i++){
       inputs.push(document.getElementById("1ip" + i).value);
      
       
   }
   document.getElementById("SP1").innerHTML=inputs.join(". ");
   inputs.push(".");
}



function getpara2(){
    inputs2=[];
    console.log("inputs");
       for(var j=1;j<=6;j++){
           inputs2.push(document.getElementById("2ip" + j).value);
           console.log("forloop");
           
       }
       document.getElementById("SP2").innerHTML=inputs2.join(". ");
       console.log("shouldwork");
       inputs2.push(".");
    }