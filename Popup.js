// JavaScript Document
function myFunction() {

    var the_text = document.getElementById("RText").value;
    var the_time = document.getElementById("RTIME").value;

    setTimeout(function(){ alert(the_text); }, the_time*1000);
}