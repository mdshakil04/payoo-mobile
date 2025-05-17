// console.log('Utilities.js')
// document.getElementById('add-money-btn').addEventListener('click', function(e){
//     e.preventDefault();
//     const {money, pin} = getInputData('input-add-money', 'pin-number');
//     console.log(money, pin);

// })
// // Reusable function for getting input field data
// function getInputData(moneyID,pinID){
//     const inputFieldValue = document.getElementById(moneyID).value;
//     const money = parseFloat(inputFieldValue);
//     const pin = document.getElementById(pinID).value;
//     return {money, pin};
// }
// ------------------Add Money---------------------
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputData("money");
    const pinNumber = getInputData("pin-number");
    const accountBalance = document.getElementById("account-valance").innerText;
    const balanceNumber = parseFloat(accountBalance);
    if (pinNumber === 1234) {
      const totalBalance = balanceNumber + addMoney;
      document.getElementById("account-valance").innerText = totalBalance;
    } else {
      alert("pin is incorrect!");
    }
  });
// -----------------Cash Out------------------------------
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = getInputData("money");
    const pinNumber = getInputData("pin-number");
    const accountBalance = document.getElementById("account-valance").innerText;
    const balanceNumber = parseFloat(accountBalance);
    if (pinNumber === 1234 && cashOut < balanceNumber) {
        const balanceAfterCashOut = balanceNumber - cashOut;
        document.getElementById('account-valance').innerText = balanceAfterCashOut;
    }else{
        alert('pin is incorrect or amount is bigger than total Balance')
    }
  });
// Reusable function
function getInputData(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}
