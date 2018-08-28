/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var div = document.getElementById("test"); //pobierz element o wartości id 

div.innerHTML = "smacznego"; // wyopisuje 

var osoba = {
    imie: "Arek",
    nazwisko: "Korek",
    dane: function ()
    {
        return this.imie + " " + this.nazwisko;
    },
    toString: function()
    {
        return this.imie + " " + this.nazwisko;
    }
  
};

div.innerHTML = osoba; //wyświetlenie return to string 
//osoba.imie = "Sylwia";// przypisuje obiektowio zmienia nazwę 

///div.innerHTML = osoba.imie + "  " + osoba.nazwisko;