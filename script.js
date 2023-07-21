var list = ["a","b","c","this bit of text"];

$( "#clickme" ).click(function() {
  $("#displayme").html(list[Math.floor(Math.random()*list.length)]);
});