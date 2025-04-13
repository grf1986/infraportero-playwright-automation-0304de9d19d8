Feature: Voorrang verlenen in de BUK Applicatie

  Background: zie ticket https://ciz.atlassian.net/browse/ZSD-20682?atlOrigin=eyJpIjoiNjdhNjRjYzU3NGNjNGVlM2E3N2E0ZmNmMjAwMDk5OGYiLCJwIjoiaiJ9

  @BUK_VoorrangVerlenenBeschikbaarAdViesCase
  Scenario Outline: Voorrang verlenen functionaliteit is beschikbaar: Conditietest op basis van soort Zaak + Case lifecycle fase. Nieuwe Aanvraag aanmaken + bij afronding van deze zaak
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    When Fill in veld value: "<bsn>" voor index: "1" op tab: "1"
    Then Druk op type: "button" met naam: "Zoek cliënt" met index: "9999" op tab: "1"
    When Druk op type: "checkbox" met naam: "Aanvraag creëren met een nieuwe cliënt" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Select option by value: "Written" voor index: "0" op tab: "1"
    When Fill in veld value: "30-12-2024" voor index: "1" op tab: "1"
    When Select option by value: "Advice" voor index: "1" op tab: "1"
    When Fill in veld value: "143324" voor index: "2" op tab: "1"
    When Druk op type: "radio" met naam: "<ouderToestemming>" met index: "0" op tab: "1"
    When Fill in block value: "Dit is een voorbeeld voor de test" voor index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Fill in veld value: "26-01-2022" voor index: "2" op tab: "1"
    When Fill in veld value: "roepnaam-baby-Test" voor index: "3" op tab: "1"
    When Fill in veld value: "baby-Test" voor index: "4" op tab: "1"
    When Fill in veld value: "van den" voor index: "5" op tab: "1"
    When Fill in veld value: "Baby test" voor index: "6" op tab: "1"
    When Fill in veld value: "BT" voor index: "7" op tab: "1"
    When Select option by value: "M" voor index: "0" op tab: "1"
    When Select option by value: "BirthName" voor index: "1" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Select option by value: "NeverMarriedNorPartner" voor index: "0" op tab: "1"
    When Select option by value: "<leefSituatie>" voor index: "1" op tab: "1"
    When Select option by value: "Guardianship" voor index: "2" op tab: "1"
    When Select option by value: "Permanent" voor index: "3" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Relatie toevoegen" met index: "9999" op tab: "1"
    When Druk op type: "label" met naam: "<wettelijkeRelatie>" met index: "0" op tab: "1"
    When Fill in veld value: "Mama" voor index: "2" op tab: "1"
    When Fill in veld value: "Van der" voor index: "3" op tab: "1"
    When Fill in veld value: "MA" voor index: "4" op tab: "1"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Fill in veld value: "4671DS" voor index: "2" op tab: "1"
    When Fill in veld value: "9" voor index: "3" op tab: "1"
    When Fill in veld value: "4671DS" voor index: "10" op tab: "1"
    When Fill in veld value: "9" voor index: "11" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op local action "Vernieuwen" op tab "1"
    Then Druk op sidebar optie "Bijbehorende zaken" op tab "1"
    # When Druk op zaak: "BA" link voor: "<Scenario>" sla op met filenaam: "BUK_VoorrangVerlenenBeschikbaarAdViesCase.json" op tab: "1"
    When Druk op zaak: "BA" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Druk op local action "Verlenen voorrang klik" op tab "2"
    Then Druk op type: "radio" met naam: "true" met index: "0" op tab: "2"
    Then Fill in textvak value: "Dit is een test" voor index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Sla zaak met naam "BA" voor: "<Scenario>" in filenaam: "BUK_VoorrangVerlenenBeschikbaarAdViesCase.json" op tab: "2"

    Examples:
      | Scenario           | env | bsn       | klant  | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | nieuwAdvies | ouderToestemming | geheimPersoon | speciaalOnderzoek | geboortedatum | partnerGeboorteDatum | naamgebruik | burgerlijkeStaat       | leefSituatie | juridischeMaatregelen | verblijfStatus | geheimNummer | geheimNummer2 | taal   | telefonischeCommunicatie | bijzondereCommunicatieVorm | relatie                     | wettelijkeRelatie | woontOpZelfdeAdres | infoRappel |
      | 1-New_Client_test1 | BUK | 695870117 | nieuwe | E-Mail        |    10-10-2023 | Advice        | None        | No               | no            | no                |             3 | None                 | BirthName   | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | no           | no            | Arabic | no                       | InterpreterLanguage        | WettelijkeVertegenwoordiger | Ouder met gezag   | None               | nee        |

  @BUK_VoorrangVerlenenBeschikbaarBezwaarCase
  Scenario Outline: Voorrang verlenen functionaliteit is beschikbaar: Conditietest op basis van soort Zaak + Case lifecycle fase.
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    When Fill in veld value: "<bsn>" voor index: "1" op tab: "1"
    Then Druk op type: "button" met naam: "Zoek cliënt" met index: "9999" op tab: "1"
    Then Druk op type: "radio" met naam: "true" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Select option by value: "<Aanvraagwijze>" voor index: "0" op tab: "1"
    When Fill in veld value: "<Aanvraagdatum>" voor index: "1" op tab: "1"
    When Select option by value: "<Aanvraagsoort>" voor index: "1" op tab: "1"
    When Fill in veld value: "143324" voor index: "2" op tab: "1"
    Then Fill in veld value: "BA-206014" voor index: "3" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "1"
    When Fill in veld value: "Ryan Babel" voor index: "6" op tab: "1"
    When Fill in block value: "Dit is een voorbeeld voor de test" voor index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
     ######Stap Registratie - scherm Persoonlijk######
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap Registratie - scherm Aanvullend persoonlijk######
    When Select option by value: "NeverMarriedNorPartner" voor index: "0" op tab: "1"
    When Select option by value: "AtParents" voor index: "1" op tab: "1"
    When Select option by value: "Guardianship" voor index: "2" op tab: "1"
    When Select option by value: "Permanent" voor index: "3" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap Registratie - scherm Contact######
    When Fill in veld value: "thisismymail@mailme.com" voor index: "3" op tab: "1"
    Then Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap Registratie - scherm Relaties######
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap Registratie - scherm Adressen######
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap registratie - Scherm Indienen ########
    Then Druk op type: "button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op local action "Vernieuwen" op tab "1"
    Then Druk op sidebar optie "Bijbehorende zaken" op tab "1"
    # When Druk op zaak: "<Zaak>" link voor: "<Scenario>" sla op met filenaam: "BUK_VoorrangVerlenenBeschikbaarAdViesCase.json" op tab: "1"
    When Druk op zaak: "<Zaak>" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Druk op local action "Verlenen voorrang Bezwaar" op tab "2"
    Then Druk op type: "radio" met naam: "true" met index: "0" op tab: "2"
    Then Fill in textvak value: "Dit is een test" voor index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Sla zaak met naam "<Zaak>" voor: "<Scenario>" in filenaam: "BUK_VoorrangVerlenenBeschikbaarAdViesCase.json" op tab: "2"

    Examples:
      | Scenario               | env | bsn       | klant | Aanvraagwijze | key                       | Aanvraagdatum | Aanvraagsoort | Zaaknummer | Zaak    | ouderToestemming | geheimPersoon | burgerlijkeStaat | leefSituatie | juridischeMaatregelen | verblijfStatus | admincompleet | nieuwAdvies | stoornis | aardVanDeZiekteOfStoornis | uitkomstScore | gegevensOphalen | afwijkendAdvies                   | hoorzitting |
      | 1-BUK_VoorrangVerlenen | BUK | 245921497 | oude  | Written       | caseID-6_New_Client_test2 |    10-10-2023 | Objection     | BA-141005  | BUK-BZW | nee              | no            | Married          | Partner      | None                  | Permanent      | ja            | ja          | ja       | Lichamelijke aandoening   | Positief      | nee             | Wijzig naar Negatief voor bezwaar | nee         |

  @BUK_VoorrangVerlenenNietBeschikbaar
  Scenario Outline: Voorrang verlenen functionaliteit is niet beschikbaar: Conditietest op basis van soort Zaak + Case lifecycle fase
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
    When Druk op app: "BUK" met index: "1" op tab: "0"
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "1"
    When zoek op: "<zaakNummer>" op tab: "1"
    Then Nieuwe sessie starten op tab: "1"
    Then Expected: "<menuItem>" niet aanwezig is op tab: "1"

    Examples:
      | Scenario                                                                                                                                                                                                                                   | user                   | pass      | taaksoort    | zaakNummer   | kolomNaam | menuItem          |
      | 2 BUK-OI-86005 BUK Opvragen informatie(child case) in Case lifecycle fase 'Opvragen informatie' Is al een keer op voorrang verlenen geklikt. menuItem 'Verlenen voorrang' onder 'acties' button wordt niet getoond en is niet aanklikbaar. | test.automation@ciz.nl | Welkom04! | actieveTaken | BUK-OI-86005 | ID        | Verlenen voorrang |
      # |                                   1 BUK-BZW-96009 BUK Advies bezwaar in Case lifecycle fase 'Voorbereiding'. Is al een keer op voorrang verlenen geklikt. menuItem 'Verlenen voorrang' onder 'acties' button wordt niet getoond en is niet aanklikbaar. | test.automation@ciz.nl | Welkom04! | actieveTaken   | BUK-BZW-96009 | ID        | Verlenen voorrang |
      # | 3 BUK-BRP-91005 BUK Advies beroep in Case lifecycle fase 'Onderzoek'. Stap: Bepalen doelstelling en termijn. Is al een keer op voorrang verlenen geklikt. menuItem 'Verlenen voorrang' onder 'acties' button wordt niet getoond en is niet aanklikbaar. | test.automation@ciz.nl | Welkom04! | actieveTaken   | BUK-BRP-91005 | ID        | Verlenen voorrang |
      #  |                          4 BA-144013 BUK Advies in Case lifecycle fase 'Triage'. Stap: vastleggen onderzoek. Is al een keer op voorrang verlenen geklikt  menuItem 'Verlenen voorrang' onder 'acties' button wordt niet getoond en is niet aanklikbaar. | test.automation@ciz.nl | Welkom04! | inactieveTaken | BA-157080     | ID        | Verlenen voorrang |
