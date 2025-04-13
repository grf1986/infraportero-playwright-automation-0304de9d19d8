Feature: Medisch verzoek
Dit is een feature voor het testen van de functionaliteit opstellen verzoek aan medisch adviseur.
Dit verzoek wordt in een apart scherm opgestart en wordt opgeroepen via local actions --> Taken --> Opstellen Verzoek Aan Medisch Adviseur
Dit scherm is beschikbaar 
27012025: Er is een 

  Background: https://ciz.atlassian.net/browse/ZSD-21734

  @BUK_Opstellen_Verzoek_Aan_Medisch_Adviseur
  Scenario Outline: Opstellen Verzoek aan Medisch Adviseur
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
    When Druk op app: "BUK" met index: "1" op tab: "0"
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "1"
    When zoek op: "<zaakNummer>" op tab: "1"
    When Nieuwe sessie starten op tab: "1"
    Then Druk op local action "<menuItem>" op tab "1"
    When Nieuwe sessie starten op tab: "1"
    Then Fill in textvak value: "Dit is een test" voor index: "1" op tab: "1"
    Then Druk op type: "button" met naam: "Indienen" met index: "9999" op tab: "1"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "1"
    Then Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Datum toevoegen" met index: "0" op tab: "1"
    Then Zoeken en invullen value: "Passen beperkingen bij ziekte/stoornis" voor index: "1" indexpijl: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Indienen" met index: "9999" op tab: "1"

    Examples:
      | Scenario                                                                 | user                   | pass      | taaksoort    | zaakNummer     | kolomNaam | menuItem                                   | categorieSoortVraag  |
      | 2 BUK-BRP-109015 BUK Advies beroep in Case lifecycle fase = 'Onderzoek'. | test.automation@ciz.nl | Welkom04! | actieveTaken | BUK-BRP-109015 | ID        | Opstellen verzoek aan medisch adviseur BRP | Specifiek leefgebied |
      #|   1 BUK-BZW-129009 BUK Advies Case in Case Lifecycle fase = 'Onderzoek'. | test.automation@ciz.nl | Welkom04! | actieveTaken | BUK-BZW-143009 | ID        | Opstellen verzoek aan medisch adviseur BRP | Passen beperkingen bij ziekte/stoornis |
