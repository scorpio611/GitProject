var table;
table = "<table border='1' width='300' cellspacing='0' cellpading='3'>";

for(var i=1;i<=10;i++){
    table += "<tr>";
    for (var j=1;j<10;j++) {
        table += "<td>" + i*j + "</td>";
    }
    table += "</tr>";

}
table += "</table>";
document.write(table);