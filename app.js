var content=""
var content1 =""
var check = true;
var i=0;
var texts = "";
var num1 ="0";
var num2 = "0";
var ans = "0"
$("#h1").click(()=>{
    check=true;
    texts = num1
})
$("#h2").click(()=>{
    check=false;
    texts =num2;
})
$(".0").click(()=>{
   content = $(".0").text();
   
    texts = texts + content
    if(texts.length<18){
    if(check){
     document.getElementById("h1").innerHTML = texts;
     num1 = texts;
    }else{
        document.getElementById("h2").innerHTML = texts;
      num2 = texts
    }
   } 
   

   
  
  
})
$("#clear").click(()=>{
     texts = texts.substr(0,texts.length-1) 
     if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
       $("#answer").css("visibility", "hidden")
});
$("#clearall").click(()=>{
    texts=""
    document.getElementById("h1").innerHTML = "0";
    document.getElementById("h2").innerHTML = texts;
    $("#answer").css("visibility", "hidden")
    check=true;
    num1="0";
    num2="0"
    ans ="0"
    i="0"
})
$(".1").click(()=>{
    content = $(".1").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
  
})
$(".2").click(()=>{
    content = $(".2").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
   
})
$(".3").click(()=>{
    check = false;
    content1 = $(".3").text();
    console.log(content1);
    document.getElementById("p").innerHTML = content1;
    $("#h2").css("visibility", "visible")
    $("#p").css("visibility", "visible")
    i++;
    texts =""
   if(i>1){
    document.getElementById("h1").innerHTML = ans;
    check=false;
    num1 = ans
    document.getElementById("h2").innerHTML = "0";
    $("#answer").css("visibility", "hidden")
   }
    
})
$(".4").click(()=>{
    content = $(".4").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
})
$(".5").click(()=>{
    content = $(".5").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
})
$(".6").click(()=>{
    content = $(".6").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
})
$(".7").click(()=>{
    check = false;
    content1 = $(".7").text();
    console.log(content1);
    document.getElementById("p").innerHTML = content1;
    $("#h2").css("visibility", "visible")
    $("#p").css("visibility", "visible")
    i++;
    texts =""
   if(i>1){
    document.getElementById("h1").innerHTML = ans;
    check=false;
    num1 = ans
    document.getElementById("h2").innerHTML = "0";
    $("#answer").css("visibility", "hidden")
   }
})
$(".8").click(()=>{
    content = $(".8").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
})
$(".9").click(()=>{
    content = $(".9").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
})
$(".10").click(()=>{
    content = $(".10").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
    
})
$(".11").click(()=>{
    check = false;
    content1 = $(".11").text();
    console.log(content1);
    document.getElementById("p").innerHTML = content1;
    $("#h2").css("visibility", "visible")
    $("#p").css("visibility", "visible")
    i++;
    texts =""
   if(i>1){
    document.getElementById("h1").innerHTML = ans;
    check=false;
    num1 = ans
    document.getElementById("h2").innerHTML = "0";
    $("#answer").css("visibility", "hidden")
   }
})
$(".12").click(()=>{
    content = $(".12").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = texts;
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = texts
        }
       } 
})
$(".13").click(()=>{
    content = $(".13").text();
    console.log(content);
    texts = texts + content
    if(texts.length<18){
        if(check){
         document.getElementById("h1").innerHTML = texts;
         num1 = parseFloat(texts);
        }else{
            document.getElementById("h2").innerHTML = texts;
          num2 = parseFloat(texts)
        }
       } 

})
$(".14").click(()=>{
    content = $(".14").text();
    console.log(content);
   
    switch (content1) {
        case "+":
            ans =add(parseFloat(num1), parseFloat(num2));
            document.getElementById("answer").innerHTML = ans;
            $("#answer").css("visibility", "visible")
            break;
        case "-":
            ans = sub(parseFloat(num1), parseFloat(num2));
            document.getElementById("answer").innerHTML = ans;
            $("#answer").css("visibility", "visible")
            break;   
        case "*":
            ans = mul(parseFloat(num1), parseFloat(num2));
            document.getElementById("answer").innerHTML = ans;
            $("#answer").css("visibility", "visible")
            break;  
        case "/":
            ans = div(parseFloat(num1), parseFloat(num2));
            document.getElementById("answer").innerHTML = ans;
            $("#answer").css("visibility", "visible")
            break; 
        default:
            console.log("error");
            
            break;
    }

})
$(".15").click(()=>{
    check = false;
    content1 = $(".15").text();
    console.log(content1);
    document.getElementById("p").innerHTML = content1;
    $("#h2").css("visibility", "visible")
    $("#p").css("visibility", "visible")
    i++;
    texts =""
   if(i>1){
    document.getElementById("h1").innerHTML = ans;
    check=false;
    num1 = ans
    document.getElementById("h2").innerHTML = "0";
    $("#answer").css("visibility", "hidden")
   }

})

function add(n1, n2){
    return n1 +n2
}
function sub(n1, n2){
    return n1-n2;
}
function mul(n1, n2){
    return n1*n2;
}
function div(n1, n2){
    return n1/n2;
}

