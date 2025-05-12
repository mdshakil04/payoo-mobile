// console.log('From Login.js file')
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // রিলোড জেনো না হয়, সেই জন্য এটা দেওয়া হয়
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById('pin-number').value;
    // This is temporary method, you should not do this
    if(phoneNumber === '01714769575' && pinNumber === '1234'){
       window.location.href = '/home.html'
    }else{
        alert('Your phone or password is incorrect')
    }
  });
