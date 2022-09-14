// check palindrom
let str="1221"
 let bag = "";
  for(let i=str.length-1; i>=0; i--){
     bag = bag+ str[i];
  }
  if(str == bag){
      console.log("Yes");
  }
  else {
      console.log("No");
  }
    