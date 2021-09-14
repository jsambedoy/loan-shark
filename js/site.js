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
}




