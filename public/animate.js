$(document).ready(function(){
    setInterval(callMe,2000);
 });

function callMe(){
    $(".ch").slideUp(3000).delay(500).slideDown(3000).delay(2000);
}

