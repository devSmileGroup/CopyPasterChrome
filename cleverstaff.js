addEventListener('dblclick', function () {
    // alert('must called function')


    chrome.storage.local.get(['linkedinfo'], function (result) {
        console.log(result)
        document.getElementsByClassName("item")[1].children[1].value = result.linkedinfo.name
        document.getElementsByClassName("item")[18].children[1].value = result.linkedinfo.email
        document.getElementsByClassName("item")[20].children[1].value = result.linkedinfo.profile
    });


})