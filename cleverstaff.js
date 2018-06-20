addEventListener("keydown", event => {
    if (event.key == "4") {
        // alert('must called function')


        chrome.storage.local.get(['linkedinfo'], function (result) {
            console.log(result)
            document.getElementsByClassName("item")[2].children[0].children[1].value = result.linkedinfo.fname
            document.getElementsByClassName("item")[2].children[1].children[1].value = result.linkedinfo.sname
            document.getElementsByClassName("item")[20].children[1].value = result.linkedinfo.email
            // document.getElementsByClassName("item")[23].children[1].value = result.linkedinfo.skype
            document.getElementsByClassName("item")[6].children[1].value = result.linkedinfo.education.university
            document.getElementsByClassName("item")[15].children[1].value = result.linkedinfo.jobs[0].firm
            document.getElementsByClassName("item")[16].children[1].value = result.linkedinfo.jobs[0].post
        });
        chrome.storage.local.get(['linkedincfo'], function (result) {
            console.log(result)
            document.getElementsByClassName("item")[20].children[1].value = result.linkedincfo.email
            document.getElementsByClassName("item")[21].children[1].value = result.linkedincfo.skype
            document.getElementsByClassName("item")[22].children[1].value = result.linkedincfo.profile
            document.getElementsByClassName("item")[26].children[1].value = result.linkedincfo.github

        })
    }

})