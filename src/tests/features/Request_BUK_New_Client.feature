Feature: Create client in BUK application
  as a user
  I want to be able to create a new client in the BUK application
  so i can complete the registration

Given Question ask for request type
When  Request type {Advice}
Then  Only registration number SVB must be visible  
Then parental consent should be visible 

Given Question ask for request type
When  Request type {Objection}
Then  Contact person, tel number and SVB number should be visible 
Then parental consent should be visible 

Given Question ask for request type
When  Request type {Appeal}
Then  Contact person, tel number and SVB number should be visible 
Then parental consent should be visible 


scenario1: Register and validate a new client >= 18 years Married,Partner,livingSituation: partner in BUK application
Given Register client > 18 is Married no children living with partner living at same adres as partner
When Fill in client age field "Roepnaam" is not visible 
And Fill in partner info
Then Partner field mandatorie at relationship
Then Question lifes at same adres as client should be visible

scenario2: Register and validate a new client < 18 years livingSituation: parents in BUK application
Given Register client < 18 is living with parents living at same adres as parents
When Fill in client age field "Roepnaam" is visible 
Then Question lifes at same adres as client should not be visible
use no index = 9999

  @request_BUK_New_Client_test1
  Scenario Outline: Register and validate a new client in BUK application
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
    # When Druk op zaak: "BA" link voor: "<Scenario>" sla op met filenaam: "request_BUK_New_Client_test1.json" op tab: "1"
    When Druk op zaak: "BA" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Sla zaak met naam "BA" voor: "<scenario>" in filenaam: "request_BUK_New_Client_test1.json" op tab: "2"

    Examples:
      | Scenario           | env | bsn       | klant  | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | nieuwAdvies | ouderToestemming | geheimPersoon | speciaalOnderzoek | geboortedatum | partnerGeboorteDatum | naamgebruik | burgerlijkeStaat       | leefSituatie | juridischeMaatregelen | verblijfStatus | geheimNummer | geheimNummer2 | taal     | telefonischeCommunicatie | bijzondereCommunicatieVorm | relatie                     | wettelijkeRelatie       | woontOpZelfdeAdres | infoRappel |
      | 1-New_Client_test1 | BUK | 179951634 | nieuwe | E-Mail        |    10-10-2023 | Advice        | None        | No               | no            | no                |             3 | None                 | BirthName   | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | no           | no            | Arabic   | no                       | InterpreterLanguage        | WettelijkeVertegenwoordiger | Ouder met gezag         | None               | nee        |
      | 3-New_Client_test1 | BUK | 245921497 | nieuwe | E-Mail        |    12-10-2023 | Advice        | None        | Yes              | no            | yes               |             4 | None                 | BirthName   | NeverMarriedNorPartner | CareInstance | RMProvisional         | Gedoogd        | no           | yes           | Moroccan | no                       | DeafInterpreter            | WettelijkeVertegenwoordiger | (notarieel) Gemachtigde | None               | nee        |
      | 2-New_Client_test1 | BUK | 184089359 | nieuwe | Fax           |     15-9-2023 | Advice        | None        | No               | no            | no                |             7 | None                 | BirthName   | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | no           | no            | Dutch    | yes                      | None                       | WettelijkeVertegenwoordiger | Ouder met gezag         | None               | nee        |
      | 4-New_Client_test1 | BUK | 360619885 | nieuwe | E-Mail        |    10-10-2023 | Advice        | None        | No               | no            | no                |             3 | None                 | BirthName   | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | no           | no            | Arabic   | no                       | InterpreterLanguage        | WettelijkeVertegenwoordiger | Ouder met gezag         | None               | nee        |

  @request_BUK_New_Client_test2
  Scenario Outline: Register and validate a new client in BUK application + BUK research and advice + ask for  review research
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
    # When Druk op zaak: "BA" link voor: "<Scenario>" sla op met filenaam: "request_BUK_New_Client_test1.json" op tab: "1"
    When Druk op zaak: "BA" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    Then Druk op type: "checkbox" met naam: "Afwijken" met index: "0" op tab: "2"
    Then Druk op type: "radio" met naam: "Yes" met index: "3" op tab: "2"
    Then Select option by value: "SVO" voor index: "0" op tab: "2"
    Then Fill in block value: "Dit is een voorbeeld voor de test" voor index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    When Select option by value: "Yes" voor index: "0" op tab: "2"
    When Zoeken en invullen value: "<aardVanDeZiekteOfStoornis>" voor index: "1" indexpijl: "0" op tab: "2"
    ## iframes##
    When Iframe fill in value: "Dit is een voorbeeld" voor index: "0" op tab: "2"
    When Select option by value: "1" voor index: "1" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 2" voor index: "1" op tab: "2"
    When Select option by value: "1" voor index: "2" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 3" voor index: "2" op tab: "2"
    When Select option by value: "1" voor index: "3" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 3" voor index: "3" op tab: "2"
    When Select option by value: "1" voor index: "4" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 4" voor index: "4" op tab: "2"
    When Select option by value: "NotResearched" voor index: "5" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 5" voor index: "5" op tab: "2"
    When Select option by value: "1" voor index: "6" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 6" voor index: "6" op tab: "2"
    When Select option by value: "1" voor index: "7" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 7" voor index: "7" op tab: "2"
    When Select option by value: "1" voor index: "8" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 8" voor index: "8" op tab: "2"
    When Select option by value: "NoScore" voor index: "9" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 9" voor index: "9" op tab: "2"
    When Select option by value: "NoScore" voor index: "10" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 10" voor index: "10" op tab: "2"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "2"
    #Then Druk op type: "checkbox" met naam: "Afwijken van voorgesteld advies" met index: "0" op tab: "2" ####voor afwijken
    Then Fill in block value: "Dit is een voorbeeld voor de test" voor index: "1" op tab: "2"
    When Select option by value: "Plus2" voor index: "1" op tab: "2"
    When Fill in veld value: "26-01-2022" voor index: "1" op tab: "2"
    When Select option by value: "File" voor index: "2" op tab: "2"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "2"
    Then Druk op type: "radio" met naam: "Postal" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Voltooien" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Sla zaak met naam "BA" voor: "<scenario>" in filenaam: "request_BUK_New_Client_test1.json" op tab: "2"

    Examples:
      | Scenario           | env | bsn       | klant  | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | afwijken | stoornis | aardVanDeZiekteOfStoornis | ouderToestemming | geheimPersoon | speciaalOnderzoek | geboortedatum | partnerGeboorteDatum | naamgebruik | burgerlijkeStaat       | leefSituatie | juridischeMaatregelen | verblijfStatus | geheimNummer | geheimNummer2 | taal  | telefonischeCommunicatie | bijzondereCommunicatieVorm | relatie                     | wettelijkeRelatie | woontOpZelfdeAdres | geldigBesluit | geldigZZP | uitkomstScore | death | aanvragenReview | infoRappel | afwijkendAdvies      | achttienPlus |
      | 6_New_Client_test2 | BUK | 265105900 | nieuwe | Fax           |     15-9-2023 | Advice        | Yes      | ja       | Lichamelijke aandoening   | No               | no            | no                |             7 | None                 | BirthName   | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | no           | no            | Dutch | yes                      | None                       | WettelijkeVertegenwoordiger | Ouder met gezag   | None               | ja            | ja        | Positief      | No    | nee             | ja         | Wijzig naar Negatief | nee          |
      | 5_New_Client_test2 | BUK | 146339563 | nieuwe | E-Mail        |     15-9-2023 | Advice        | Yes      | ja       | Verstandelijke handicap   | No               | no            | no                |             4 | None                 | BirthName   | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | yes          | no            | Dutch | yes                      | None                       | WettelijkeVertegenwoordiger | Curator           | None               | ja            | Nvt       | Positief      | No    | nee             | nee        | Wijzig naar Negatief | nee          |
      | 7_New_Client_test2 | BUK | 375562199 | nieuwe | Fax           |     15-9-2023 | Advice        | Yes      | ja       | Lichamelijke aandoening   | No               | no            | no                |             7 | None                 | BirthName   | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | no           | no            | Dutch | yes                      | None                       | WettelijkeVertegenwoordiger | Ouder met gezag   | None               | ja            | ja        | Positief      | No    | ja              | nee        | Wijzig naar Negatief | nee          |
