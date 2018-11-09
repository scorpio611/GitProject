var total = 0;

while (number!=-1) {
    var number = parseFloat(prompt("Enter number: "));
    alert("The numner is: "+number);
    total += number;
    alert("Total: "+total);
}