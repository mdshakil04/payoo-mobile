// console.log('from home.js')
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('Button Clicked')
    const inputAddMoney = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(inputAddMoney, pinNumber)
    if(pinNumber === "1234"){
        // console.log('You will add money')
        const currentBalance = document.getElementById('account-valance').innerText;
        // console.log(currentBalance)
        const addMoneyNumber = parseFloat(inputAddMoney);
        const currentMoneyNumber = parseFloat(currentBalance);
        const updatedBalance = currentMoneyNumber + addMoneyNumber;
        // console.log(updatedBalance)
        // currentBalance.innerText = updatedBalance
        document.getElementById('account-valance').innerText = updatedBalance;

    }else{
        alert('Pin is incorrect')
    }
  });
