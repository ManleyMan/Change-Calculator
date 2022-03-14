// Write your JavaScript here
function calculateChange(amountDue,amountReceived){
    var amountDue = document.getElementById("amount-due").value;
    var amountReceived = document.getElementById("amount-received").value;
    var change = amountReceived - amountDue;
    change = change * 100;

    var dollars = Math.floor(change / 100);
    remainder = change - dollars * 100;
    document.getElementById("dollars-output").innerHTML = dollars;


    var quarters = Math.floor(remainder / 25); 
    remainder = remainder - quarters * 25;
    document.getElementById("quarters-output").innerHTML = quarters;
    
    var dimes = Math.floor(remainder / 10); 
    remainder = remainder - dimes * 10;
    document.getElementById("dimes-output").innerHTML = dimes;

    var nickels = Math.floor(remainder / 05);
    remainder = remainder - nickels * 05; 
    document.getElementById("nickels-output").innerHTML = nickels;

    var pennies = Math.round(remainder);
    document.getElementById("pennies-output").innerHTML = pennies;


}
document.getElementById("calculate-change").onclick = function () { calculateChange() };    