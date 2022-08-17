window.onload = function(){
    document.querySelector(".preload").style.display = "none";
}

$(document).ready(function () {

    $('.log-in-btn').click(function () { 
        var url = "allowed-logged-in.html";
        $(location).attr('href', url);
    });
});