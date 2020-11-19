 
  function MCACALC() {
    document.getElementById("mcati").innerHTML = "MCACalc fx54";
  
    setInterval(lett,500);
    setTimeout(mcatime,4000);

    
  } 
  function mcatime(){
    document.getElementById("mcati").innerHTML = " ";
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
    
 setTimeout(lett,500)
    document.getElementById("caltext").style.display='block';
}
s/*etInterval(()=>{
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