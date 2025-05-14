// console.log('from home.js')
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('Button Clicked')
    const inputAddMoney = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(inputAddMoney, pinNumber)
    
  });
