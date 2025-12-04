//$('p').text('change Data');

// $(); //factory function
//or 
//jQuery();

// var text= $('div p').text();
// console.log(text); // .text() ar vitore kono kicu na rakhle ai variable ja ache ta niye console log je dekhabe 

//valina  javascript
// document.getElementsByTagName('p')[0].innerHTML= "js";
// document.getElementsByTagName('p')[1].innerHTML= "js";
// document.getElementsByTagName('p')[2].innerHTML= "js";

//jquery

// $("p").text("JQuery"); //all p tag
// $("div p").text("PHP"); //div p tag

$("div>p").css("color","green");

//for a tag id class ekshate
$("a#myid.myclass").css("color","red");

//second a 
$("a#myid .myclass").css("color","red");
