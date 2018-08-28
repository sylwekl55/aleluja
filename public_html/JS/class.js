/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var div = document.getElementById("test");

function osoba (imie, nazwisko, wiek)
{
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    
    this.toString = function()
    {
      return this.imie + "  " + this.nazwisko  + "  " + this.wiek;  
    };
}

var x = new osoba("Arek", ".psikuta", 12);
var y = new osoba("Nintendio", "Kapouta", 32);
var z = new osoba("Kobek", "Kicajec", 42);

div.innerHTML =x + " " + y + " " + z;
