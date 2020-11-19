 
  function MCACALC() {
    document.getElementById("mcati").innerHTML = "MCACalc fx54";
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
    document.getElementById("p").style.backgroundColor = 'white'; 
    document.getElementById("q").style.backgroundColor = 'white'; 
    setInterval(lett,500);
    setTimeout(mcatime,4000);

    
  } 
  function mcatime(){
    document.getElementById("mcati").innerHTML = " ";
  
    document.getElementById('a').disabled=false;
    document.getElementById('b').disabled=false;
    document.getElementById('c').disabled=false;
    document.getElementById('d').disabled=false;
    document.getElementById('e').disabled=false;
    document.getElementById('f').disabled=false;
    document.getElementById('g').disabled=false;
    document.getElementById('h').disabled=false;
    document.getElementById('i').disabled=false;
    document.getElementById('j').disabled=false;
    document.getElementById('k').disabled=false;
    document.getElementById('l').disabled=false;
    document.getElementById('m').disabled=false;
    document.getElementById('n').disabled=false;
    document.getElementById('o').disabled=false;
    document.getElementById('p').disabled=false;
    document.getElementById('q').disabled=false;
    
      
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
    
    document.getElementById('fid').disabled=true;
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
    document.getElementById("p").style.backgroundColor = 'black'; 
    document.getElementById("q").style.backgroundColor = 'black'; 
    document.getElementById('a').disabled=true;
    document.getElementById('b').disabled=true;
    document.getElementById('c').disabled=true;
    document.getElementById('d').disabled=true;
    document.getElementById('e').disabled=true;
    document.getElementById('f').disabled=true;
    document.getElementById('g').disabled=true;
    document.getElementById('h').disabled=true;
    document.getElementById('i').disabled=true;
    document.getElementById('j').disabled=true;
    document.getElementById('k').disabled=true;
    document.getElementById('l').disabled=true;
    document.getElementById('m').disabled=true;
    document.getElementById('n').disabled=true;
    document.getElementById('o').disabled=true;
    document.getElementById('p').disabled=true;
    document.getElementById('q').disabled=true;

}
