/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var dane = document.getElementById("humorekSylwii");

var dane2 = document.getElementById("humorekSylwii2");

var a = {
   a: "costam",
   b: "toto",
   c: "niewiem"
   };
//a.push("dodanie");


var i=0;

var przerobienieSylwii = dane.getElementsByTagName("li");

//document.getElementById("humorekSylwii2").innerHTML = i + "<br>";
//for(var i=0;i<przerobienieSylwii.length; i++)
//{ 
   // if(i % 2 === 0)
   // przerobienieSylwii[i].innerHTML = "parzysta " + przerobienieSylwii[i].innerHTML;
//else
  //  przerobienieSylwii[i].innerHTML = " NIEPARZYSTA " + przerobienieSylwii[i].innerHTML;
    //alert(przerobienieSylwii[i]);
    
//}
for(var property in przerobienieSylwii)
{
    alert(przerobienieSylwii[property].innerHTML); 
}