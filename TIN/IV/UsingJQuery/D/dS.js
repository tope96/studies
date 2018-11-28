$(document).ready(function () {

    function validateNonEmpty(inputField) {
        if (inputField.value.length === 0) {
            displayError(inputField, 'To pole nie może być puste! 😱');
            return false;
        } else if (inputField.value.length > 0 && inputField.value.length < 2) {
            displayError(inputField, 'Podaj poprawne dane!');
            return false;
        } else {
            unDisplayError(inputField);
            return true;
        }
    }

    function validateRegex(regex, inputField, msg) {
        if (!regex.test(inputField.value)) {
            displayError(inputField, msg);
            return false;
        } else {
            return true;
        }
    }

    function validateEmail(inputField) {
        if (!validateNonEmpty(inputField)) {
            return false;
        } else {
            return validateRegex(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/, inputField, "Wprowadź poprawną strukturę email, nazwa@nazwa.pl");
        }
    }

    function validateHeight(inputField) {
        if (!validateNonEmpty(inputField)) {
            return false;
        } else {
            if (inputField.value <= 80 || inputField.value > 250) {
                displayError(inputField, "Podaj poprawne dane!");
                return false;
            } else {
                return true;
            }
        }
    }

    function displayError(inputField, msg) {
        var idName = $(inputField).attr('id');
        $(inputField).addClass("inputError");
        $("#error" + idName).css('visibility', 'visible').text(msg);
    }

    function unDisplayError(inputField) {
        var idName = $(inputField).attr('id');
        $("#error" + idName).css('visibility', 'hidden');
        $(inputField).removeClass("inputError");
    }

    $("#firstName, #lastName").blur(function () {
        validateNonEmpty(this);
    });

    $("#mail").blur(function () {
        validateEmail(this);
    });

    $("#height").blur(function () {
        validateHeight(this);
    });

    $("#subButton").click(function (event) {
        if (validateNonEmpty($("#firstName")[0]) && validateNonEmpty($("#lastName")[0]) &&
            validateEmail($("#mail")[0]) && validateHeight($("#height")[0])) {
        } else {
            event.preventDefault();
        }
    });

});