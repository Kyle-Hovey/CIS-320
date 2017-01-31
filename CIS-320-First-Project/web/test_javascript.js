
var paragraphs = $("p");
console.log(paragraphs);

console.log("There are: " + paragraphs.length + " paragraphs in this page.");

for(var i = 0; i < paragraphs.length; i++) {
    var paragraphText = paragraphs[i].textContent;
    console.log(paragraphText);
}

function myUpdateFunction(event) {
    var fieldValue = $('#myTextField').val();
    $('#tableName tbody').append("<tr><td>" + fieldValue + "</tr></td>") 
}

var formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);

function hideFunction(event) {
    $('#hideme').hide(500);
}

var formButton2 = $('#button2');
formButton2.on("click", hideFunction);