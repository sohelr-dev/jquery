//add css class and remove
$("div p").removeClass("red");

$("a span").addClass("red");
$("div section p").addClass("red");
$("div p").addClass("green");

$("div p").removeClass("green");
//only ekta css add
// $("h2").css("color","cyan");

//ekadik css add

$("h2").css({
     "color":"red",
     "border":"2px solid black",
     "background-color":"cyan",
     "padding":"10px"
})

$("div p").attr("id","bg"); //set attribute
$("div p").removeAttr("id"); //remove attribute
var hraf= $("a").attr("href"); //get attribute
console.log(hraf);

//p selector ai p-tag pai thahole sekhane remove kore dibe r jodi na pai tahole add korbe
$("p").toggleClass("red");

//html text and html code o support kore
$("h3").html("change heading");
$("h3").html("<i>change heading</i>");
$("h3").html("<i>change heading</i><a href=''> Go </a>");

//input filed
var input1 =$(".input1").val();
console.log(input1);
$(".input2").val("isdb");
console.log($(".input2").val())