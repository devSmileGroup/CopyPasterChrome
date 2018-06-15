var contact = {
    profile: '',
    email: '',
    github: '',
    skype: '',
}




addEventListener("keydown", event => {
    if (event.key == "q" && event.altKey) {
        contact.profile = document.getElementsByClassName("ci-vanity-url")[0].children[2].children[0].innerText
        if (document.getElementsByClassName("ci-email").length != 0) {
            contact.email = document.getElementsByClassName("ci-email")[0].children[2].children[0].innerText
        }
        if (document.getElementsByClassName("ci-websites").length != 0) {
            if (document.getElementsByClassName("ci-websites")[0].children[2].children[0].children[0].children[1].innerText === '(GitHub)')
                contact.github = document.getElementsByClassName("ci-websites")[0].children[2].children[0].children[0].children[0].innerText
        }
        if (document.getElementsByClassName("ci-ims").length != 0) {
            if (document.getElementsByClassName("ci-ims")[0].children[2].children[0].children[1].innerText === '(Skype)')
                contact.skype = document.getElementsByClassName("ci-ims")[0].children[2].children[0].children[0].innerText
        }
        chrome.storage.local.set({
            linkedincfo: contact
        }, function () {
            console.log(contact)
            alert('Done!');
        });
    }
})