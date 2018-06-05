chrome.commands.onCommand.addListener(function (command) {
    if (command == "toggle-pin") {
        chrome.storage.local.get(['key'], function (result) {
            alert('Name: ' + result.key.name + '\nProfile: ' + result.key.profile + '\nEmail: ' + result.key.email + '\nContactDate' + result.key.contactDate)
        });
    }
});