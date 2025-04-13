Feature: Medisch verzoek

  @WLZ_WZD_Opstellen_Verzoek_Aan_Medisch_Adviseur
  Scenario Outline: Opstellen Verzoek aan Medisch Adviseur
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
    When Druk op app: "Wlz-Wzd" met index: "1" op tab: "0"
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "1"
    Then zoek op: "<zaakNummer>" op tab: "1"
    When Nieuwe sessie starten op tab: "1"
    Then Druk op local action "<menuItem>" op tab "1"
    When Nieuwe sessie starten op tab: "1"
    When Nieuwe sessie starten op tab: "1"
    Then Druk op type: "radio" met naam: "MedicalQuestion" met index: "0" op tab: "1"
    Then Fill in textvak value: "Dit is een test" voor index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "1"
    Then Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Format afhandelen verzoek" met index: "9999" op tab: "1"
    Then Zoeken en invullen value: "Passen beperkingen bij de aandoening(en)" voor index: "1" indexpijl: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Indienen" met index: "9999" op tab: "1"

    Examples:
      | Scenario                     | user                      | pass       | taaksoort      | zaakNummer    | kolomNaam | menuItem                                   | categorieSoortVraag                      | verzoek                               |
      | 1 WLZ-IND-38052 Wlz-Wzd Case | test.automationWLZ@ciz.nl | Rules@123! | actieveTaken   | WLZ-IND-38052 | ID        | Opstellen verzoek aan medisch adviseur WLZ | Passen beperkingen bij de aandoening(en) | Medische vraag                        |
      | 2 WZD-A21-82061 WZD A21 Case | test.automationWLZ@ciz.nl | Rules@123! | inactieveTaken | WZD-A21-82061 | ID        | Opstellen verzoek aan medisch adviseur     | Passen beperkingen bij de aandoening(en) | Opvragen algemene medische informatie |
