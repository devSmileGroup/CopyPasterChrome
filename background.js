// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function (command) {
    if (command == "toggle-pin") {
        alert('must called function')
        // writefc();

        // chrome.storage.local.get(['key'], function (result) {
        //     document.getElementById("u_0_p").value = result.key.name
        //     document.getElementById("u_0_r").value = result.key.profile
        //     document.getElementById("u_0_u").value = result.key.email
        //     document.getElementById("u_0_11").value = result.key.contactDate
        // });
    }
});