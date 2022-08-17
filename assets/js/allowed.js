window.onload = function(){
    document.querySelector(".preload").style.display = "none";
}

$(document).ready(function () {

    $('.submits button').click(function () {
        function pageRedirect() {
            window.location.href = "facebook-home.html";
        } 
        pageRedirect()
    })
});