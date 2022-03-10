// ==UserScript==
// @name          Pol.is keyboard
// @description   Polis keyboard
// @version       1
// @namespace     http://www.collusion.org.uk/polis-keyboard
// @include       http://pol.is/*
// @include       https://pol.is/*
// @include       http://www.pol.is/*
// @include       https://www.pol.is/*
// @grant none
// ==/UserScript==

(function () {
    var inject = function() {
        var is_press_key = function (e, key) {
            document.last_target = e.target;
            document.last_event = e;

            var keyCode = e.keyCode ? e.keyCode : e.which;
           // window.alert(keyCode);
            return (! (e.altKey || e.ctrlKey || e.metaKey)
                    && keyCode == key);
        }

        var gr_in_bg_event = function(e) {
            var agree_key = 119; // 'w' key
            var disagree_key = 97; // 'a' key
            var pass_key = 115; // 's' key
      
            if (is_press_key(e, agree_key)) {
                document.getElementById('agreeButton').click();

                //window.alert("hi");
                return;
            }
            if (is_press_key(e, disagree_key)) {
                document.getElementById('disagreeButton').click();

                //window.alert("hi");
                return;
            }
            if (is_press_key(e, pass_key)) {
                document.getElementById('passButton').click();

                //window.alert("hi");
                return;
            }
            return true;
        }

        document.addEventListener("keypress", gr_in_bg_event, true);
    }

    var newel = document.createElement("script");
    var newcontent = document.createTextNode("(" + inject + ")()")
    newel.appendChild(newcontent);
    document.body.appendChild(newel);
})()
