$(document).ready(function () {
    $("#subButton").click(function () {
        if (($("#firstName").val() === "") || ($("#lastName").val() === "")) {
            alert("Musisz wypelnic pola!");
        } else {
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            $('#myTable tr:last').after('<tr><td>' + firstName + '</td><td>' + lastName + ' </td></tr>');
        }
    });
});
