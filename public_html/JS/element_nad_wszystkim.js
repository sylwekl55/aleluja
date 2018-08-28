//import element_nad from "../../public_html/element_nad_wszystkim.less"

alert("alleluja");
//console.log(element_nad)
var el = document.getElementById('humorekSylwii');
const div = document.createElement('divv');
div.innerHTML = " zobaczymy co wyjdzei teraz";

var buttonn = document.getElementById('btn');

el.addEventListener('click', e => {
    document.body.appendChild(div);
});



const observer = new MutationObserver(mutation => {
    console.log("mutujez mnie ")
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,

});

buttonn.addEventListener('click', e => {
    observer.disconnect(document.body, {
        childList: false,
        subtree: false,
        attributes: false,
        characterData: false,
    });
});