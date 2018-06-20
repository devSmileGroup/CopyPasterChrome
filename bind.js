// var maink = ""
// var evtn

// chrome.storage.local.get(['keysavebind'], function (result) {
//     document.getElementById("keypress").innerHTML = "Know " + result
//     console.log(result);
// })

// addEventListener("keydown", event => {
//     var altk = ""
//     var ctrlk = ""
//     var shiftk = ""
//     if (event.altKey) {
//         altk = "Alt + "
//     }

//     if (event.ctrlKey) {
//         ctrlk = "Ctrl + "
//     }

//     if (event.shiftKey) {
//         shiiftk = "Shift + "
//     }

//     if (event.key === "Enter") {
//         document.getElementById("keypress").innerHTML = "DONE " + maink
//         console.log("GET")
//         console.log(evtn)
//         chrome.storage.local.set({
//             keysavebind: evtn
//         }, function () {
//             console.log(evtn)
//         });
//     } else {
//         maink = altk + ctrlk + shiftk + event.key
//         document.getElementById("keypress").innerHTML = altk + ctrlk + shiftk + event.key
//         evtn = event

//     }
// })

addEventListener("keydown", event => {
    console.log(event)
})