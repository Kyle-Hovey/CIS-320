/**
 * Created by Kyle on 1/31/2017.
 */
// Main Javascript File
var url = "api/name_list_get";
function updateTable() {
    // Here's where your code is going to go.
    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
                for (var i = 0; i < json_result.length; i++) {
                    phoneString = json_result[i].phone;
                    phoneString = phoneString.substring(0,3) + "-" + phoneString.substring(3,6) + "-" + phoneString.substring(6,10);
                    $('#datatable tbody').append("<tr><td>" + json_result[i].id + "</td>" + "<td>" + json_result[i].first + " " +
                                                    json_result[i].last + "</td>" + "<td>" +  json_result[i].email + "</td>" +
                                                    "<td>" + phoneString + "</td>" + "<td>" + json_result[i].birthday + "</td>" +
                                                    "<td><button type='button' name='delete' class='editButton btn deleteButton' value='" + json_result[i].id + "'>Delete</button></td></tr>");
                }


                $(".deleteButton").on("click", deleteItem);

                if (json_result.length != 0) {
                    $('#noData').remove();
                    console.log("Done.");
                }

                else console.log("No data to append.")
        }
    )
}

// Call your code.
updateTable();

// Called when "Add Item" button is clicked
function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#phoneField').val("");
    $('#email').val("");
    $('#birthday').val("");
    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameGlyph').removeClass("glyphicon-ok");
    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameGlyph').removeClass("glyphicon-ok");
    $('#emailDiv').removeClass("has-error");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailGlyph').removeClass("glyphicon-ok");
    $('#phoneDiv').removeClass("has-error");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneGlyph').removeClass("glyphicon-ok");
    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayGlyph').removeClass("glyphicon-ok");
    // Show the hidden dialog
    $('#myModal').modal('show');
}

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function deleteItem(e) {
    console.debug("Delete");
    console.debug((e.target.value));
    var id = (e.target.value);
    var url = "api/name_list_delete";
    var dataToServer = { id : id};
    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
    });
    updateTable();
}

function validation() {

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var phone = $('#phoneField').val();
    var birthday = $('#birthday').val();
    var nameReg = /^[A-Za-z-.']{1,45}$/;
    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneReg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var birthdayReg = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    var valid_form = true;

    if (nameReg.test(firstName))
    {
        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        // Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('#firstNameStatus').val("(success)");
    }
    else
    {
        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");

        // Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('#firstNameStatus').val("(error)");
        valid_form = false;
    }

    if (nameReg.test(lastName))
    {
        // Set style for outline of form field
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");

        // Set the icon for the form field
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('#lastNameStatus').val("(success)");
    }

    else
    {
        // Set style for outline of form field
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameDiv').addClass("has-error");

        // Set the icon for the form field
        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('#lastNameStatus').val("(error)");
        valid_form = false;
    }

    if (emailReg.test(email))
    {
        // Set style for outline of form field
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");

        // Set the icon for the form field
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('#emailStatus').val("(success)");
    }

    else
    {
        // Set style for outline of form field
        $('#emailDiv').removeClass("has-success");
        $('#emailDiv').addClass("has-error");

        // Set the icon for the form field
        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('#emailStatus').val("(error)");
        valid_form = false;
    }

    if (phoneReg.test(phone))
    {
        // Set style for outline of form field
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");

        // Set the icon for the form field
        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('#phoneStatus').val("(success)");
    }

    else
    {
        // Set style for outline of form field
        $('#phoneDiv').removeClass("has-success");
        $('#phoneDiv').addClass("has-error");

        // Set the icon for the form field
        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('#phoneGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('#phoneStatus').val("(error)");
        valid_form = false
    }

    if (birthdayReg.test(birthday))
    {
        // Set style for outline of form field
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");

        // Set the icon for the form field
        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('#birthdayStatus').val("(success)");
    }

    else
    {
        // Set style for outline of form field
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayDiv').addClass("has-error");

        // Set the icon for the form field
        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('#birthdayStatus').val("(error)");
        valid_form = false
    }

    if (valid_form) {
        console.log("Form is valid.");

        var url = "api/name_list_edit";
        var dataToServer = { first : firstName , last: lastName ,
                            email : email , phone: phone , birthday : birthday};
        $.post(url, dataToServer, function (dataFromServer) {
            console.log("Finished calling servlet.");
            console.log(dataFromServer);
        });
    }
    else console.log("Form is invalid");
}

function saveChanges() {
    console.log("Let's pretend that I saved those changes for now.");
    validation();
    $('#myModal').modal('hide');
    $('#datatable tbody tr').remove();
    updateTable();
}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveChanges);