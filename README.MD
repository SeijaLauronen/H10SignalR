Seija LAuronen
4/4p
********************************
KTS: https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio
Tee WEb-sovellus, ei tarvita MVC:tä. Ladataa javascript kirjasto:
In Solution Explorer, right-click the project, and select Add > Client-Side Library.
In the Add Client-Side Library dialog, for Provider select unpkg.
For Library, enter @microsoft/signalr@latest.
Select Choose specific files, expand the dist/browser folder, and select signalr.js and signalr.min.js.
Set Target Location to wwwroot/js/signalr/, and select Install.
************************************************************************************
Tarkoitus ja tavoite
Tehtävän tarkoituksena on:

Perehtyä reaaliaikaiseen web-sovellukseen.
Selvittää itselle mikä ero on reaaliaikaisella ja ei-reaaliaikaisella web-sovelluksella. 
Toiminta

Perehdy dokumenttiin Introduction to ASP.NET Core SignalR https://docs.microsoft.com/en-us/aspnet/core/signalr/introduction?view=aspnetcore-3.1
Tee alla oleva tehtävä
Tehtävän anto

Tee chat-sovellus, joka toimii reaaliaikaisesti. Hyödynnä SignalR-teknologiaa. 
Sovellus lähtee käyntiin kun käyttäjä menee sovelluksen etusivulle. Sovelluksessa on kentät käyttäjän nimelle 
(input, text) sekä kirjoitettavalle viestille (textarea) ja nappi (input, button), jolla viestin voi lähettää.
Sovelluksessa on lisäksi alue, jonne kaikkien käyttäjien lähettämät viestit tulevat näkyviin. 
Muotoile tulevia viestejä siten, että käyttäjän omat viestit erottuvat jotenkin muiden käyttäjien viesteistä.

Arviointi

Tehtävä tuottaa neljä (4) pistettä.
