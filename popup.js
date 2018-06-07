// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['linkedinfo'], function (result) {
        console.log('Value currently is ' + result.key);
        document.getElementById("name").innerHTML = 'Name: ' + result.linkedinfo.name
        document.getElementById("profile").innerHTML = 'Profile: ' + result.linkedinfo.profile
        document.getElementById("email").innerHTML = 'Email: ' + result.linkedinfo.email
        document.getElementById("contactDate").innerHTML = 'Contact Date: ' + result.linkedinfo.contactDate
    });
})