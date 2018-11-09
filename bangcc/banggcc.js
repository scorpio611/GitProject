var table ="<table border='1' width='300' cellspacing='0' cellpading='3'>";
    for(var i=2;i<10;i++){
        table += "<tr>";
        for(var j=1;j<9;j++){
            table += "<td>" + i + "x" + j + "=" + i*j + "</td>";
        }
        table += "</tr>";
    }
table += "</table>";
document.write(table);
