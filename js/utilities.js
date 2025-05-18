// ------------------Add Money---------------------
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputData("add-money");
    const pinNumber = getInputData("pin-number1");
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
    const cashOut = getInputData("cashOut-money");
    const pinNumber = getInputData("pin-number2");
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
// ------------------------------------------------
document.getElementById('cashOut-option').addEventListener('click', function(){
  // console.log('btn clicked')
  const cashOutField = document.getElementById('cashOut-form');
  cashOutField.removeAttribute('hidden');
  const addMoneyField = document.getElementById('addMoney-form');
  addMoneyField.setAttribute('hidden', true)

})
