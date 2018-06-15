addEventListener("keydown", event => {
    if (event.key == "q" && event.altKey) {
        // alert('must called function')


        chrome.storage.local.get(['linkedinfo'], function (result) {
            console.log(result)
            document.getElementsByClassName("item")[1].children[1].value = result.linkedinfo.name
            document.getElementsByClassName("item")[18].children[1].value = result.linkedinfo.email
            document.getElementsByClassName("item")[20].children[1].value = result.linkedinfo.profile
            document.getElementsByClassName("item")[4].children[1].value = result.linkedinfo.education.university
            document.getElementsByClassName("item")[13].children[1].value = result.linkedinfo.jobs[0].firm
            document.getElementsByClassName("item")[14].children[1].value = result.linkedinfo.jobs[0].post
        });
        chrome.storage.local.get(['linkedincfo'], function (result) {
            console.log(result)
            document.getElementsByClassName("item")[18].children[1].value = result.linkedincfo.email
            document.getElementsByClassName("item")[19].children[1].value = result.linkedincfo.skype
            document.getElementsByClassName("item")[20].children[1].value = result.linkedincfo.profile
            document.getElementsByClassName("item")[24].children[1].value = result.linkedincfo.github

        })
    }

})