# Polish Vaccination Bot
Prosty skrypt to złapania najbliższego terminu szczepienia

## Pobierz wtyczkę Tempermonkey na swoją przeglądarkę
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
- Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
- Link do strony wtyczki: https://www.tampermonkey.net/

## Obejrzyj instrukcję 
VIDEO

## Plik skryptu
https://raw.githubusercontent.com/Biszkoptu/polish_vac_bot/main/script.js

## Link do wklejenia
https://pacjent.erejestracja.ezdrowie.gov.pl/rezerwacja-wizyty

## Po przejściu powyższych kroków

1. Wejdź na stronę https://pacjent.erejestracja.ezdrowie.gov.pl/auth
2. Zaloguj się
3. Zobacz czy na ikonce nowozainstalowej wtyczki, **czy świeci się czerwona cyfra**
4. Przejdź do wyszkukiwania szczepionek. (Żeby umówić się na inny termin należy zrezygownować z terminu, na który jesteśmy umówieni)
5. Masz 50 sekund na wybranie wszystkich parametrów, które nas interesują (miasto, rodzaj szczepionki itd.)
6. ! Kliknij **szukaj** tak aby nie pokazało żadnych wyników
7. Skrypt po 50 sekundach rozpocznie odświeżanie wyników wyszukiwania
8. Zostaw włączone okno przeglądarki (może być w tle), skrypt automatycznie zapisze na następny termin, który się pojawi. Skrypt może działać od ~30 min - 6h. Jest to zupełnie zależne od tego jak często pojawiają się nowe terminy w systemie.

W razie pytań [biszkoptu@protonmail.com](mailto:biszkoptu@protonmail.com)
