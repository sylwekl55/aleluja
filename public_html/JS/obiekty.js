
var a = document.getElementById("lala");


var osoba =  {
imie: "antk",
nazwisko: "kochanowski",
dane: function()
{
    return this.imie + "   " + this.nazwisko;
}
};









a.innerHTML = osoba.dane();


