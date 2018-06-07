var person = {
    name: '',
    profile: '',
    email: '',
    contactDate: ''
}
addEventListener('dblclick', function () {

    document.getElementsByClassName("pv-profile-section pv-skill-categories-section artdeco-container-card first-degree ember-view")[0].children[2].children[0].click()
    person.name = (document.getElementById("pv-contact-info").innerText)
    person.profile = document.getElementsByClassName('pv-contact-info__ci-container')[0].innerText
    person.email = document.getElementsByClassName('pv-contact-info__ci-container')[1].innerText
    person.contactDate = document.getElementsByClassName('pv-contact-info__ci-container')[2].innerText
    console.log(person)

    chrome.storage.local.set({
        linkedinfo: person
    }, function () {
        alert('Person ' + person.name + ' save!');
    });
})