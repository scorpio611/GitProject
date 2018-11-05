function currency() {
    var money;
    var cr = document.getElementById("amount").value;
 var opt1 = document.getElementById("cr1");
   if (opt1.options[opt1.selectedIndex].text === "USD"){
       money=cr*23255;
       document.getElementById("result").innerText = "Result: "+money+" VND";
   }
   else{
       money=cr*26487;
       document.getElementById("result").innerText = "Result: "+money+" VND";
   }
}