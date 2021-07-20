//get values
function getValues(){

    //get values from the page
    let loanAmount = document.getElementById("loanAmount").value;
    let payments = document.getElementById("payments").value;
    let rate = document.getElementById("rate").value;
    let paymentArray = loanCalculator(loanAmount, payments, rate);
        //call displayData and write the values to the screen
        displayData(paymentArray, payments);
}
//calculate loan
function loanCalculator(loanAmount, payments, rate){
    
    

    let month = 0;
    let payment = 0;
    let principal = 0;
    let interest = 0;
    let totalInterest = 0;
    let balance = loanAmount;
    let paymentArray = [];


    //calculate monthly payments
    for (let i = 1; i <= payments; i++)  {
        month = i;

        payment = (loanAmount) * (rate/1200) / (1-(1 + rate/1200)**(-payments));
        let paymentSh = payment.toFixed(2);

        interest = balance * rate/1200;
        let interestS = interest.toFixed(2);

        totalInterest = totalInterest + interest;
        totalInterest = parseFloat(totalInterest);
        let totalInterestS = totalInterest.toFixed(2);

        principal = payment - interest;
        let  principalS = principal.toFixed(2);

        balance = balance - principal;
        let balanceS = balance.toFixed(2);

        paymentArray.push(month, paymentSh, principalS, interestS, totalInterestS, balanceS);

        


        /*paymentArray.push(month);
        paymentArray.push(payment);
        paymentArray.push(principal);
        paymentArray.push(interest);
        paymentArray.push(totalInterest);
        paymentArray.push(balance);*/
    }
    return paymentArray;
}

//display payments
function displayData(paymentArray) {

    //get the table body element fromt he page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHtml = "";
    
    for (let index = 0; index < paymentArray.length; index += 6) {

        let tableRow = document.importNode(templateRow.content, true);

        //grab just the td's and put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].textContent = paymentArray[index];
        
        rowCols[1].textContent = paymentArray[index+1];

        rowCols[2].textContent = paymentArray[index+2];
        
        rowCols[3].textContent = paymentArray[index+3];
        
        rowCols[4].textContent = paymentArray[index+4];

        rowCols[5].textContent = paymentArray[index+5];

        tableBody.appendChild(tableRow);
        
    }

    //add all the rows to the table

}








/*//get the values from the UI
function getValues(){

    //get values from the page
    let fizzValue = document.getElementById("loanAmount").value;
    let buzzValue = document.getElementById("payments").value;
    let buzzValue = document.getElementById("rate").value;

    //parse into integers
    loanAmount = parseInt(loanAmount);
    payments = parseInt(payments);
    rate = parseInt(rate);
    
    if(Number.isInteger(loanAmount) && Number.isInteger(loanAmount)){
        
        let Array = loanCalculator(loanAmount, loanAmount, rate);
        //call displayData and write the values to the screen
        displayData(Array);
    
    }else{
        alert("You must enter integers")
    }

}

//do fizz buzz
function fizzBuzz(fizzValue, buzzValue){

    let returnArray = [];

    //loop form 1 to 100
    for (let i = 1; i <= 100; i++) {
        
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push("FizzBuzz");
        }else if(i % fizzValue == 0){
            returnArray.push("Fizz");
        }else if(i % buzzValue == 0){
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }

    }
     return returnArray;
}

//loop over the array and create a tablerow for each item
function displayData(Array) {

    //get the table body element fromt he page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("Template");

    //clear table first
    tableBody.innerHtml = "";
    
    for (let index = 0; index < Array.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        //grab just the td's and put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(Array[index]);
        rowCols[0].textContent = Array[index];
        
        rowCols[1].classList.add(Array[index+1]);
        rowCols[1].textContent = Array[index+1];

        rowCols[2].classList.add(Array[index+2]);
        rowCols[2].textContent = Array[index+2];
        
        rowCols[3].classList.add(Array[index+3]);
        rowCols[3].textContent = Array[index+3];
        
        rowCols[4].classList.add(Array[index+4]);
        rowCols[4].textContent = Array[index+4];

        tableBody.appendChild(tableRow);
        
    }

    //add all the rows to the table

}
*/