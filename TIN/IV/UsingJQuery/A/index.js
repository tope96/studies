$(document).ready(function () {
    $("#celcButton").click(function () {
        var celcius = $("#celc").val();
        var farenheit = (celcius * 1.8) + 32;

        if (!$("#celc").val()) {
            $("#celc").val("0.00");
            $("#fahr").val(farenheit.toFixed(2));
        } else {
            $("#fahr").val(farenheit.toFixed(2));
        }
    });

    $("#fahrButton").click(function () {
        var fahr = $("#fahr").val();
        var celcius = (fahr - 32) / 1.8;

        if (!$("#fahr").val()) {
            $("#fahr").val("0.00");
            $("#celc").val(celcius.toFixed(2));
        } else {
            $("#celc").val(celcius.toFixed(2));
        }


    });

});