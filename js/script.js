/* Author:

*/

$(document).ready(function() {
    
    
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode : "application/x-sparql-query",
    matchBrackets : true,
    tabMode: "indent"
    
    }); 
    
    $("#runQuery").click(function(e){
        $.ajax({
        type: "GET",
        url: "http://cs.dbpedia.org/sparql",
        //data: "?query=select+distinct+%3Fs+where+%7B%3Fs+a+<http%3A%2F%2Fdbpedia.org%2Fontology%2FPerson>%7D+LIMIT+100&format=text%2Fhtml&timeout=1",
        success: function(html){
            console.dir(html);
        }

    });
    });
    
});





