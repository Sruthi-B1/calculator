 
  function MCACALC() {
    document.getElementById("mcati").innerHTML = "MCACalc fx54";
  
    setInterval(lett,500);
    setTimeout(mcatime,4000);

    
  } 
  function mcatime(){
    document.getElementById("mcati").innerHTML = " ";
    document.getElementById("caltext").style.display='visible';
    document.getElementById("a").style.backgroundColor = 'white'; 
    document.getElementById("b").style.backgroundColor = 'white'; 
    document.getElementById("c").style.backgroundColor = 'white'; 
    document.getElementById("d").style.backgroundColor = 'white'; 
    document.getElementById("e").style.backgroundColor = 'white'; 
    document.getElementById("f").style.backgroundColor = 'white'; 
    document.getElementById("g").style.backgroundColor = 'white'; 
    document.getElementById("h").style.backgroundColor = 'white'; 
    document.getElementById("i").style.backgroundColor = 'white'; 
    document.getElementById("j").style.backgroundColor = 'white'; 
    document.getElementById("k").style.backgroundColor = 'white'; 
    document.getElementById("m").style.backgroundColor = 'white'; 
    document.getElementById("n").style.backgroundColor = 'white'; 
    document.getElementById("o").style.backgroundColor = 'white'; 
   // $('#mcati').MCACALC().empty();
}
function lett(){
    document.getElementById("a").value = "One ";
    document.getElementById("b").value = "Two ";
    document.getElementById("c").value = "Three ";
    document.getElementById("d").value = "Four ";
    document.getElementById("e").value = "Five ";
    document.getElementById("f").value = "Six ";
    document.getElementById("g").value = "Seven ";
    document.getElementById("h").value = "Eight ";
    document.getElementById("i").value = "Nine ";
    document.getElementById("j").value = "Zero ";

}
function hidecal(){
    
 
    document.getElementById("caltext").style.display='hide';
    document.getElementById("a").style.backgroundColor = 'black'; 
    document.getElementById("b").style.backgroundColor = 'black'; 
    document.getElementById("c").style.backgroundColor = 'black'; 
    document.getElementById("d").style.backgroundColor = 'black'; 
    document.getElementById("e").style.backgroundColor = 'black'; 
    document.getElementById("f").style.backgroundColor = 'black'; 
    document.getElementById("g").style.backgroundColor = 'black'; 
    document.getElementById("h").style.backgroundColor = 'black'; 
    document.getElementById("i").style.backgroundColor = 'black'; 
    document.getElementById("j").style.backgroundColor = 'black'; 
    document.getElementById("k").style.backgroundColor = 'black'; 
    document.getElementById("m").style.backgroundColor = 'black'; 
    document.getElementById("n").style.backgroundColor = 'black'; 
    document.getElementById("o").style.backgroundColor = 'black'; 
    

}
/*setInterval(()=>{
    let print = document.getElementById('caltext').innerHTML;
    if(print == 1){
        document.getElementById("a").value = "One ";
        document.getElementById("b").value = "Two ";
        document.getElementById("c").value = "Three ";
        document.getElementById("d").value = "Four ";
        document.getElementById("e").value = "Five ";
        document.getElementById("f").value = "Six ";
        document.getElementById("g").value = "Seven ";
        document.getElementById("h").value = "Eight ";
        document.getElementById("i").value = "Nine ";
        document.getElementById("j").value = "Zero ";
    }else{
        document.getElementById("a").value = "1 ";
    document.getElementById("b").value = "2 ";
    document.getElementById("c").value = "3";
    document.getElementById("d").value = "4 ";
    document.getElementById("e").value = "5 ";
    document.getElementById("f").value = "6 ";
    document.getElementById("g").value = "7 ";
    document.getElementById("h").value = "8 ";
    document.getElementById("i").value = "9 ";
    document.getElementById("j").value = "0 ";
    }
},5000);
setTimeout(()=>{
    document.getElementById('mcati').innerHTML = '';
},4000);*/