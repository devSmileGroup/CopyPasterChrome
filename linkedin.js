var person = {
    name: '',
    post: '',
    country: '',
    jobs: [{
        post: '',
        firm: '',
        date: '',
        time: '',
    }],
    education: {
        university: '',
        spec: ''
    },
    skills: [],
    aSkills: '',
    profile: '',
    email: '',
    contactDate: ''
}


///////////////////////**************scrolling over*********////////////////////////////
// function scrollEnd() {
//     var timerId = setInterval(function () {
//         window.scrollBy(0, 700)
//     }, 100);

//     setTimeout(function () {
//         clearInterval(timerId);
//         console.log('**************scrolling over*********');
//     }, 701);

// }
///////////////////////**************scrolling over*********////////////////////////////



addEventListener("keydown", event => {
    if (event.key == "q" && event.altKey) {
        // try {
        // scrollEnd();
        /////click  skill section
        try {
            document.getElementsByClassName("pv-skill-categories-section")[0].children[2].children[0].click()
        } catch (err) {}
        // for (i = 0; i < document.getElementsByClassName("pv-accomplishments-block__expand").length; i++) {
        //     document.getElementsByClassName("pv-accomplishments-block__expand")[i].click()
        // }
        /////click  language+ section
        try {
            document.getElementsByClassName("pv-accomplishments-block__expand")[0].click()
        } catch (err) {}

        person.name = document.getElementsByClassName("pv-top-card-section__name")[0].outerText
        person.post = document.getElementsByClassName("pv-top-card-section__headline")[0].outerText
        person.country = document.getElementsByClassName("pv-top-card-section__location")[0].outerText
        try {
            person.jobs[0].post = document.getElementById("experience-section").getElementsByClassName("pv-entity__summary-info")[0].children[0].outerText
            person.jobs[0].firm = document.getElementById("experience-section").getElementsByClassName("pv-entity__summary-info")[0].children[1].children[1].outerText
            person.jobs[0].date = document.getElementById("experience-section").getElementsByClassName("pv-entity__summary-info")[0].children[2].children[1].outerText
            person.jobs[0].time = document.getElementById("experience-section").getElementsByClassName("pv-entity__summary-info")[0].children[3].children[1].outerText

        } catch (error) {

        }
        for (var i; i < document.getElementById("experience-section").children[1].children.length; i++) {
            person.jobs[i].time = document.getElementById("experience-section").children[1].children[i].children[0].children[1].children[3].children[1].outerText

        }
        try {
            person.education.university = document.getElementsByClassName("pv-education-entity")[0].children[0].children[1].children[0].children[0].outerText
        } catch (err) {}
        // person.skills[0] = document.getElementsByClassName("pv-skill-categories-section__top-skills")[0].children[0].children[0].children[1].outerText
        // person.skills[1] = document.getElementsByClassName("pv-skill-categories-section__top-skills")[0].children[1].children[0].children[1].outerText
        // person.skills[2] = document.getElementsByClassName("pv-skill-categories-section__top-skills")[0].children[2].children[0].children[1].outerText
        for (var i = 0; i < document.getElementsByClassName("pv-skill-category-entity__name").length; i++) {
            person.skills[i] = document.getElementsByClassName("pv-skill-category-entity__name")[i].outerText
        }
        for (var i = 0; i < person.skills.length; i++) {
            person.aSkills = person.aSkills + ' ● ' + person.skills[i];
        }
        ////////////////////********JOBS**********///////////////////
        // var length = document.getElementById("experience-section").children[1].children.length
        // for (var i = 0; i < 3; i++) {
        //     person.jobs[i].post = document.getElementById("experience-section").children[1].children[i].children[0].children[1].children[0].textContent

        // }
        ////////////////////********JOBS**********///////////////////
        // person.profile = document.getElementsByClassName('pv-contact-info__ci-container')[0].innerText
        // person.email = document.getElementsByClassName('pv-contact-info__ci-container')[1].innerText
        // person.contactDate = document.getElementsByClassName('pv-contact-info__ci-container')[2].innerText
        // console.log(person)

        chrome.storage.local.set({
            linkedinfo: person
        }, function () {
            console.log(person)
            alert('Person ' + person.name + ' save!');
        });
        // } catch {
        //     alert("Please try again or send me this user page link")
        // }
        // window.location.href = window.location.href + "detail/contact-info/"
        // console.log(person)
    }
})