// console.log('Utilities.js')
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const {money, pin} = getInputData('input-add-money', 'pin-number');
    console.log(money, pin)
    
})
// Reusable function for getting input field data
function getInputData(moneyID,pinID){
    const inputFieldValue = document.getElementById(moneyID).value;
    const money = parseFloat(inputFieldValue);
    const pin = document.getElementById(pinID).value;
    return {money, pin};
}
// ---------------------------------------
// document.getElementById('add-money-btn').addEventListener('click', function(e) {
//     e.preventDefault();
//     const { money, pin } = getFormData('input-add-money', 'pin-number');

// });

// function getFormData(moneyId, pinId) {
//     const money = parseFloat(document.getElementById(moneyId).value);
//     const pin = document.getElementById(pinId).value;
//     return { money, pin };
// }