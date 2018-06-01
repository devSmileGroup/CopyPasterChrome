// var url = document.location.href + 'contact-info/';


window.onload = function () {
    var is = true;
    var data = [];
    for (i = 0; is == true; i++) {
        try {
            var title = document.getElementsByClassName('pv-contact-info__header')[i].textContent;
            var info = document.getElementsByClassName('pv-contact-info__ci-container')[i].outerText;
            data[i] = title + '  :' + info;
            // console.log(title)
            // console.log(info)
        } catch (err) {
            is = false;
            console.log(' over ')
        }
    }
    console.log(data)
    alert(data)

}

document.addEventListener('DOMContentLoaded', function () {
    // window.onload = function () {
    console.log('info')
    document.getElementById("someid").innerHTML = 'info'

}, false);

// window.onload = function () { document.getElementById('rere').innerText = 'textr'; }
// function httpGet(theUrl) {
//     var xmlHttp = null;
//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", theUrl, false);
//     xmlHttp.send(null);
//     console.log(xmlHttp.responseText)
//     return xmlHttp.getElementById("ember2483");
// };

// var data = httpGet(url);

// var datas = data.getElementById("ember1689");

// var textr = 'DONE'
// alert(data);
// console.log(httpGet(url));
