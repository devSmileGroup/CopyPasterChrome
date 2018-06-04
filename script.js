// var url = document.location.href + 'contact-info/';
var data = ''
var key = ''
window.onload = function () {

    var is = true;
    var person = { name: '', profile: '', email: '', contactDate: '' }
    // var data = '';

    //********************************************* /CHEACKER\ *********************************************//
    // for (i = 0; i < 3; i++) {
    //     console.log(document.getElementsByClassName('pv-contact-info__header')[i].innerText)
    //     console.log(document.getElementsByClassName('pv-contact-info__ci-container')[i].innerText)
    // }

    //********************************************* \CHEACKER/ *********************************************//

    person.name = (document.getElementById("pv-contact-info").innerText) + '\n'
    person.profile = document.getElementsByClassName('pv-contact-info__ci-container')[0].innerText
    person.email = document.getElementsByClassName('pv-contact-info__ci-container')[1].innerText
    person.contactDate = document.getElementsByClassName('pv-contact-info__ci-container')[2].innerText
    key = document.getElementsByClassName('pv-contact-info__ci-container')[0].innerText
    // for (i = 0; is == true; i++) {
    //     try {
    //         var title = document.getElementsByClassName('pv-contact-info__header')[i].innerText;
    //         var info = document.getElementsByClassName('pv-contact-info__ci-container')[i].innerText;
    //         data += title + ': ' + info + '\n';
    //         // console.log(title)
    //         // console.log(info)
    //     } catch (err) {
    //         is = false;
    //         console.log(' over on ' + i)
    //     }
    // }
    console.log(person)
    console.log(key)

    chrome.storage.local.set({ key: person }, function () {
        console.log('Value is set to ' + person);
    });

    // chrome.storage.local.get(['key'], function (result) {
    //     console.log('Value currently is ' + result.key;
    // });
    // alert(data)


    // data = (document.getElementById("pv-contact-info").innerText) + '\n'
    // key = document.getElementsByClassName('pv-contact-info__ci-container')[0].innerText
    // for (i = 0; is == true; i++) {
    //     try {
    //         var title = document.getElementsByClassName('pv-contact-info__header')[i].innerText;
    //         var info = document.getElementsByClassName('pv-contact-info__ci-container')[i].innerText;
    //         data += title + ': ' + info + '\n';
    //         // console.log(title)
    //         // console.log(info)
    //     } catch (err) {
    //         is = false;
    //         console.log(' over on ' + i)
    //     }
    // }
    // console.log(data)
    // // console.log(key)

    // chrome.storage.local.set({ key: data }, function () {
    //     console.log('Value is set to ' + data);
    // });

    // chrome.storage.local.get(['key'], function (result) {
    //     console.log('Value currently is ' + result.key);
    // });
    // // alert(data)


    //********************************************* /CLIPBOARD\ *********************************************//
    //not for the all sites
    // val = 'storage'
    // var dummy = document.createElement("input");
    // document.body.appendChild(dummy);
    // dummy.setAttribute("id", "dummy_id");
    // document.getElementById("dummy_id").value = val;
    // dummy.select();
    // document.execCommand("copy");
    // document.body.removeChild(dummy);
    // console.log(val);
    //********************************************* \CLIPBOARD/ *********************************************//
}




