// ==UserScript==
// @name         Polska szczepionka
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Zapisz się na szczepienie
// @author       biszkoptu
// @match        https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
// @icon         https://www.google.com/s2/favicons?domain=mozilla.org
// @grant        none
// ==/UserScript==

(function() {
    console.log("######################Funkcja rozpoczeła działanie");
    'use strict';
    //Definicja funkcji
    function searchVac(){
            setTimeout(() => { //żeby dobrze pobrał element
                let buttonSearch = document.getElementsByClassName('sc-kstrdz doevxB sc-gYhigD jcKiga').item(0);

                var LookFor = "Nie znaleziono terminów. Zmień kryteria wyszukiwania i spróbuj ponownie."; // Change this to find a different string
                var content = document.body.textContent || document.body.innerText;
                var hasText = content.indexOf(LookFor) !== -1;

                if(!hasText) { //jeżeli znalazło szczepionki
                    console.log("######################Vac found");
                    //Przycisk Pick
                    setTimeout(() => {
                        let buttonPick = document.getElementsByClassName('sc-kstrdz doevxB sc-gHftXq kCGTjS').item(0);
                        console.log(buttonPick);
                        buttonPick.click();

                        //Przycisk SUBMIT
                        setTimeout(() => {
                            let buttonSubmit = document.getElementsByClassName('sc-kstrdz doevxB sc-ezrdKe eSDEBd').item(0);
                            console.log(buttonSubmit);
                            buttonSubmit.click();
                        },0)
                    }, 0)
                }else { //jeżeli nie znalazło szczepionki
                    console.log("######################Vac not found.");
                    buttonSearch.click();
                }
            }, 0);
    }
    //Uruchamianie skryptu w pętli
    setTimeout(() => {var timerVar = setInterval (function() {searchVac(); }, 2000);}, 50000)
})();
