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
            if (json_result.length > 0) {
                $('#datatable tbody').remove();

                for (var i = 0; i < json_result.length; i++) {
                    $('#datatable tbody').append("<tr><td>" + json_result[i].first + "</tr></td>");
                }
                console.log("Done");
            }
            else console.log("No Data to Add.");
        }
    )
}

// Call your code.
updateTable();