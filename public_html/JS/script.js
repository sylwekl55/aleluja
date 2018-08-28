/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var x = 5;
//var y = 6;


//alert((52 % 2)? true : false);

/*function  test(x, y)
{
    return x*y;
}

alert(test(3, 4));*/  


// funkcja w funkcji

function hi (pole)
{
    if(pole === "szef")
    {
        return function (nazwa) 
        {
            alert("cześć szefie  " + nazwa);
        };
    }
    else
    {
        return function (nazwa)
        {
          alert("cześć " + nazwa );  
        };
    }
};


var przywitanie = hi("sef");

przywitanie("Sylwek");


