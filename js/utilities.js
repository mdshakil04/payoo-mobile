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
// ---------------------------------------
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('btn clicked')
    const addMoney = getInputData('input-add-money');
    const pinNumber = getInputData('pin-number')
    console.log(typeof(addMoney), typeof(pinNumber))
})
// Reusable function
function getInputData(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}