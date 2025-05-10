// console.log('From Login.js file')
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();// রিলোড জেনো না হয়, সেই জন্য এটা দেওয়া হয়
    // console.log('login-btn clicked')
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value)
})