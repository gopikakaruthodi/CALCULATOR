let input = document.getElementById("inputBox")
console.log(input);
let buttons=document.querySelectorAll("button")
console.log(buttons);
let arr = Array.from(buttons)
console.log(arr);
let str=""

arr.map((button)=>{
  button.addEventListener("click",(e)=>{
    // console.log(e.target.innerHTML);
    if(e.target.innerHTML=="AC"){
      str=""
      input.value=str

    }
    else if(e.target.innerHTML=="DEL"){
      str=str.substring(0,str.length-1)
      input.value=str

    }
    else if(e.target.innerHTML=="="){
      let mul= str.search("x")
      // console.log(mul);
      let rep=str.replace("x","*")
      str=eval(str)
      input.value=str

      
      // if(e.target.innerHTML=="x"){
        
      // }
      // else{
      //   str=eval(str);
      //   input.value=str;
      // }

    }
    else{
      str+=e.target.innerHTML
      input.value=str
    }

  })
})