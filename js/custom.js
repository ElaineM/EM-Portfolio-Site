$(document).ready(function(){
var firstLine = ["Talent is a pursued interest. In other words, anything you are willing to practice, you can do. Bob Ross" , "I want to make beautiful things, even if nobody cares. Saul Bass" , "I go to work every morning with the possibility that I might learn something I don’t already know… Milton Glaser"];

var word = firstLine[Math.floor(Math.random()*firstLine.length)];

$('.box-one').text(word);

$('html').click(function () {
		location.reload();
});

});