/**
 * Created by Kyle on 1/19/2017.
 */

function helloFunction(event) {
    console.log("Hello")

}

var buttonHello = $('#button1');
buttonHello.on("click", helloFunction);

function addFields(event) {
    var v1 = $('#field1').val();
    var v2 = $('#field2').val();
    var v3 = (Number(v1) + Number(v2)).toString();
    $('#field3').val(v3);
}

var buttonAdd   = $('#button2');
buttonAdd.on("click", addFields);

function hideShow(event) {
    if ($('#paragraphToHide').is(":visible")) {
        $('#paragraphToHide').hide(500);
    }
    else {
        $('#paragraphToHide').show(500);
    }
}

var buttonHideShow = $('#button3');
buttonHideShow.on("click", hideShow);

function validatePhone(event) {
    var v1 = $('#phoneField').val();

    var reg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (reg.test(v1)) {
        console.log("OK");
    }
    else{
        console.log("Bad");
    }
}

var buttonValidate = $('#button4');
buttonValidate.on("click", validatePhone);

function jsonFunction(event) {
    var formObject = {};

    formObject.firstName = $('#firstName').val();
    formObject.lastName = $('#lastName').val();
    formObject.email = $('#email').val();

    var jsonString = JSON.stringify(formObject);

    console.log(jsonString);
}

var buttonJson = $('#button5');
buttonJson.on("click", jsonFunction);