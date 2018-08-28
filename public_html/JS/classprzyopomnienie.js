/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var div = document.getElementById("test");

function osoba ( imie, nazwisko, wiek)
{
    this.Imie = imie;
    this.Nazwisko = nazwisko;
    this.Wiek = wiek;
    
    this.toString = function()
    {
      return this.Imie + " " + this.Nazwisko;
    };
}


var x = new osoba ("Asia", "Akta", 43);
var y = new osoba ("Sylwia", "Wredna", 22);

div.innerHTML = x + "  " + y;

