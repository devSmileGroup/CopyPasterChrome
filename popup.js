document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['key'], function (result) {
        console.log('Value currently is ' + result.key);
        document.getElementById("name").innerHTML = 'Name: ' + result.key.name
        document.getElementById("profile").innerHTML = 'Profile: ' + result.key.profile
        document.getElementById("email").innerHTML = 'Email: ' + result.key.email
        document.getElementById("contactDate").innerHTML = 'Contact Date: ' + result.key.contactDate
    });
})