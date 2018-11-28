$(document).ready(function () {
    $("#subButton").click(function () {
        if (($("#name").val() === "") || ($("#sName").val() === "")) {
            alert("Musisz wypelnic pola!");
        } else {
            var name = $("#name").val();
            var sName = $("#sName").val();
            $('#myTable tr:last').after('<tr><td>' + name + '</td><td>' + sName + ' </td></tr>');
        }
    });
});
