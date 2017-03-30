/**
 * Created by kyle.hovey on 3/28/2017.
 */
<!-- AJAX Post -->
function invalidateSessionButton() {

    var url = "api/logout_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
    });
    getLogin();
}

function getLogin() {

    var url = "api/get_login_servlet";
    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $('#getLogin').html(dataFromServer)
        if (dataFromServer == "You are not logged in.")
        {
            $('#logoutDiv').hide(500);
        }
        else {
            $('#logoutDiv').show(500);
        }
    });
}

function setLogin() {

    var url = "api/login_servlet";

    var loginID = $("#loginID").val();

    var dataToServer = {loginID : loginID};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $("#loginID").val("");
    });

    setTimeout(getLogin, 500);
}

buttonGet = $('#getSessionJava');
buttonGet.on("click", getLogin);

buttonSet = $('#setSessionJava');
buttonSet.on("click", setLogin);


buttonOut = $('#invalidateSession');
buttonOut.on("click", invalidateSessionButton);

getLogin();