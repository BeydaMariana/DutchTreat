$(document).ready(function () { 

    //var theForm = document.getElementById("buyButton");
    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        alert("Buy button");
    });

    var productoInfo = $(".product-props li");
    productoInfo.on("click", function () {
        console.log("You clicked on" + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $("#popup-form");

    $loginToggle.on("click", function () {
        $popupForm.toggle();
    });

});