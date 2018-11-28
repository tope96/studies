$(document).ready(function () {
    $("#celcButton").click(function () {
        var calc = $("#celc").val();
        var farenheit = (calc * 1.8) + 32;
        $("#fahr").val(farenheit.toFixed(2));
    });

    $("#fahrButton").click(function () {
        var fahr = $("#fahr").val();
        var celcius = (fahr - 32) / 1.8;
        $("#celc").val(celcius.toFixed(2));
    });

});
