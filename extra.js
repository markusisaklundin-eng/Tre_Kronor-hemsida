$(document).ready(function(){
    $("#toggle-menu").click(function(){
        $("#extra-submeny").slideToggle("slow");
    });

    $("#start-fade").click(function() {
        var buttonText = $(this).text();

        if (buttonText === "Klicka för att tona rutorna") {
            $("#textblock-1").fadeTo("slow", 0.2);
            $("#textblock-2").fadeTo("slow", 0.6);

            $(this).text("Återställ");
        } 
        else {
            $("#textblock-1").fadeTo("slow", 1.0);
            $("#textblock-2").fadeTo("slow", 1.0);

            $(this).text("Klicka för att tona rutorna");
        }
    });
});