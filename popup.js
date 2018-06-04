

document.addEventListener('DOMContentLoaded', function () {
    var key = 'linkedin.com/in/vitaliy-dylovyy-a58873149'

    chrome.storage.local.get(['key'], function (result) {
        console.log('Value currently is ' + result.key);
        document.getElementById("name").innerHTML = 'Name: ' + result.key.name
        document.getElementById("profile").innerHTML = 'Profile: ' + result.key.profile
        document.getElementById("email").innerHTML = 'Email: ' + result.key.email
        document.getElementById("contactDate").innerHTML = 'Contact Date: ' + result.key.contactDate
    });
})
// var url = document.location.href + 'contact-info/';

// function httpGet(theUrl) {
//     var xmlHttp = null;
//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", theUrl, false);
//     xmlHttp.send(null);
//     return xmlHttp.responseText;
// };

// console.log(httpGet(url));
// $('#datas').html(httpGet(url));
// window.onload = function () { document.getElementById('rere').innerHTML = 'textr'; }