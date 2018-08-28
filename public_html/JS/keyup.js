//import less from './../start.css';

alert("obsługa zdażeń wywoływana z klawiatóry ");




// jQuery(document).keyup((e)=>{
//     jQuery('#nrklawisza').text( 'Nr klawisza:  ' + e.keyCode );

//     jQuery("#klawisze").append( e.keyCode + " | ");
//     if(e.keyCode == 27)
//     {
//         jQuery("*").fadeOut("slow");
//     }
// });
//////////////////////////////////////// fajna nakładka ////////////////////////////////////////

jQuery("a").click((e)=>{
    e.preventDefault();
    jQuery("#topPlayer").fadeIn(6000).fadeOut("slow");
});