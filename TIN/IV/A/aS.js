function toFahrenheit(calc){
    var farenheit = 0;
    farenheit = (calc * 1.8) + 32;
    document.getElementById("fahr").value = farenheit.toFixed(2);
}


function toCelcius(fahr){
    var celcius = 0;
    celcius = (fahr - 32)/1.8;
    document.getElementById("celc").value = celcius.toFixed(2);
}