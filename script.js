// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// var data = ''
// var key = ''
// var person = {
//     name: '',
//     profile: '',
//     email: '',
//     contactDate: ''
// }
// window.onload = function () {

//     var is = true;
//     person.name = (document.getElementById("pv-contact-info").innerText) + '\n'
//     person.profile = document.getElementsByClassName('pv-contact-info__ci-container')[0].innerText
//     person.email = document.getElementsByClassName('pv-contact-info__ci-container')[1].innerText
//     person.contactDate = document.getElementsByClassName('pv-contact-info__ci-container')[2].innerText
//     // key = document.getElementsByClassName('pv-contact-info__ci-container')[0].innerText
//     console.log(person)
//     // console.log(key)

//     chrome.storage.local.set({
//         key: person
//     }, function () {
//         alert('Value is set to ' + person.name);
//     });
// }