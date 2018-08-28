
var div = document.getElementById("lala");


function osoba (imie, nazwisko)
{
    this.name = imie;
    this.surname = nazwisko;

    this.toString = function()
    {
        return this.name + " " + this.surname;
    };
}

var x = new  osoba("Adam","Spadam");
var e = new osoba("asada","asdad");

div.innerHTML = x + "<br></br>" + e;