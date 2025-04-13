Feature: Create client in BUK application
  as a user
  I want to be able to create a new client in the BUK application
  so i can complete the registration

scenario1: Register and validate a new client in BUK application
Scenario2: Register and validate a new client =< 18 years in BUK application

Scenario4: Register and validate a client =< 18 years with a guardian in BUK application
Scenario5: Register and validate a existing client with a partner in BUK application
Scenario6: Register and validate a existing client with out a partner in BUK application
Scenario7: Register and validate a deceased client with out a partner in BUK application
Scenario8: Register and validate a deceased client with a partner in BUK application
Scenario9: Register and validate a new client unmarried and not a registered partner and never been married or a registered partner in BUK application

  @Buk_existingClient_BUK_BZW_1
  Scenario Outline: Register and validate a existing client in BUK application
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    When Fill in veld value: "<bsn>" voor index: "1" op tab: "1"
    When Druk op type: "button" met naam: "Zoek cliënt" met index: "9999" op tab: "1"
    Then Druk op type: "radio" met naam: "true" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Select option by value: "<Aanvraagwijze>" voor index: "0" op tab: "1"
    When Fill in veld value: "<Aanvraagdatum>" voor index: "1" op tab: "1"
    When Select option by value: "<Aanvraagsoort>" voor index: "1" op tab: "1"
    When Fill in veld value: "SVB-143324" voor index: "2" op tab: "1"
    Then Type in veld value: "BA-194003" voor index: "3" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "1"
    When Fill in veld value: "Ryan Babel" voor index: "5" op tab: "1"
    When Fill in block value: "Dit is een voorbeeld voor de test" voor index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op local action "Vernieuwen" op tab "1"
    Then Druk op sidebar optie "Bijbehorende zaken" op tab "1"
    # When Druk op zaak: "BUK-BZW" link voor: "<Scenario>" sla op met filenaam: "Buk_existingClient_Test_1.json" op tab: "1"
    When Druk op zaak: "BUK-BZW" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "true" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "false" met index: "11" op tab: "2"
    When Fill in veld value: "13-02-2025" voor index: "1" op tab: "2"
    Then Druk op type: "button" met naam: "Voltooien" met index: "0" op tab: "2"
    Then Status geupdate naar: "Opgelost - Afgerond" voor index: "0" op tab: "2"
    Then Sla zaak met naam "BUK-BZW" voor: "<scenario>" in filenaam: "Buk_existingClient_Test_1.json" op tab: "2"

    Examples:
      | Scenario                    | env | bsn       | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | key                       | zaak    | ouderToestemming | geheimPersoon | burgerlijkeStaat | leefSituatie | juridischeMaatregelen | verblijfStatus | admincompleet | nieuwAdvies | stoornis | aardVanDeZiekteOfStoornis | uitkomstScore | gegevensOphalen | afwijkendAdvies                   | hoorzitting |
      | Buk_existingClient_Test_1-4 | BUK | 245921497 | Written       |    10-10-2024 | Objection     | caseID-1-New_Client_test1 | BUK-BZW | No               | no            | Married          | Partner      | None                  | Permanent      | ja            | ja          | ja       | Lichamelijke aandoening   | Positief      | nee             | Wijzig naar Negatief voor bezwaar | nee         |
      # |                           1 | BUK | 245921497 | ByTelephone   |    12-10-2024 | Appeal        | BUK-BZW-89006             | BUK-BRP | nee              | no            | Divorced               | CareInstance | RMProvisional         | Gedoogd        | ja            | ja          | ja       | Lichamelijke aandoening   | Positief      | nee             | Positief                          |             |
      # |                           2 | BUK | 659633838 | Written       |    10-10-2024 | Appeal        |                           |         | nee              | no            | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | ja            | ja          | geen     | geen                      | Negatief      | ja              | Negatief                          |             |
      # |                           3 | BUK | 659633838 | Written       |     15-9-2024 | Appeal        |                           |         | nee              | no            | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | ja            | nee         | n.v.t    | n.v.t                     | n.v.t         | n.v.t           |                                   |             |
      # |                           5 | BUK | 184089359 | Fax           |     15-9-2024 | Objection     |                           |         | nee              | no            | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | ja            | ja          | geen     | geen                      | Positief      | ja              | Wijzig naar Negatief              |             |
      # |                           6 | BUK | 187928733 | ByTelephone   |    12-10-2024 | Objection     |                           |         | nee              | no            | Divorced               | CareInstance | RMProvisional         | Gedoogd        | ja            | nee         | n.v.t    | n.v.t                     | n.v.t         | n.v.t           |                                   |             |
      # |                           7 | BUK | 123456782 | Fax           |    12-10-2024 | Advice        |                           |         | nee              | no            | Divorced               | CareInstance | RMProvisional         | Gedoogd        | Nee           |             |          |                           |               |                 |                                   |             |
# acc omgeving
    # Examples:
    #   | Scenario | env | bsn       | klant | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | Zaaknummer   | Zaak     |ouderToestemming | geheimPersoon | burgerlijkeStaat       | leefSituatie | juridischeMaatregelen | verblijfStatus | admincompleet| nieuwAdvies | stoornis | aardVanDeZiekteOfStoornis | uitkomstScore | gegevensOphalen | afwijkendAdvies                   |hoorzitting|
    #   |        4 | BUK | 146339563 | oude  | Written       |    10-10-2023 | Objection     | BA-87007     | BUK-BZW |nee               | no            | Married                | Partner      | None                  | Permanent      |ja            |ja           | ja       | Lichamelijke aandoening   | Positief      | nee             | Wijzig naar Negatief voor bezwaar | nee      |

  @Buk_existingClient_BUK_BRP_2
  Scenario Outline: Register and validate a existing client in BUK application (onderzoek ingaan met hoorzitting)
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    When Fill in veld value: "<bsn>" voor index: "1" op tab: "1"
    When Druk op type: "button" met naam: "Zoek cliënt" met index: "9999" op tab: "1"
    Then Druk op type: "radio" met naam: "true" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Select option by value: "<Aanvraagwijze>" voor index: "0" op tab: "1"
    When Fill in veld value: "<Aanvraagdatum>" voor index: "1" op tab: "1"
    When Select option by value: "<Aanvraagsoort>" voor index: "1" op tab: "1"
    When Fill in veld value: "143324" voor index: "2" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "1"
    Then Fill in veld value: "BUK-BZW-141001" voor index: "3" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "1" op tab: "1"
    When Fill in veld value: "Ryan Babel" voor index: "5" op tab: "1"
    When Fill in block value: "Dit is een voorbeeld voor de test" voor index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op local action "Vernieuwen" op tab "1"
    Then Druk op sidebar optie "Bijbehorende zaken" op tab "1"
    # When Druk op zaak: "BUK-BRP" link voor: "<Scenario>" sla op met filenaam: "Buk_existingClient_Test_2.json" op tab: "1"
    When Druk op zaak: "BUK-BRP" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "false" met index: "10" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    Then Select option by value: "Amstelveen" voor index: "0" op tab: "2"
    Then Fill in veld value: "Opsturen dossier" voor index: "1" op tab: "2"
    Then Iframe fill in value: "Opsturen dossier i frame" voor index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "Postal" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "false" met index: "10" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "9999" op tab: "2"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "No" met index: "0" op tab: "2"
    Then Select option by value: "Yes" voor index: "0" op tab: "2"
    When Zoeken en invullen value: "<aardVanDeZiekteOfStoornis>" voor index: "1" indexpijl: "0" op tab: "2"
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
    When Druk op type: "radio" met naam: "true" met index: "1" op tab: "2"
    When Fill in block value: "Toelichting hoorzitting" voor index: "0" op tab: "2"
    When Select option by value: "House visit" voor index: "1" op tab: "2"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "Yes" met index: "1" op tab: "2"
    Then Fill in veld value: "test.automation@ciz.nl" voor index: "1" op tab: "2"
    Then Druk op type: "radio" met naam: "accesscode" met index: "0" op tab: "2"
    Then Fill in veld value: "12345678" voor index: "2" op tab: "2"
    Then Druk op type: "button" met naam: "Voltooien" met index: "0" op tab: "2"
    Then Druk op local action "Verwerken definitieve uitspraak rechtbank" op tab "2"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "2"
    Then Druk op type: "radio" met naam: "true" met index: "1" op tab: "2"
    When Select option by value: "House visit" voor index: "1" op tab: "2"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "2"
    When Druk op type: "button" met naam: "Voltooien" met index: "0" op tab: "2"
    Then Status geupdate naar: "Opgelost - Afgerond" voor index: "0" op tab: "2"
    Then Sla zaak met naam "BUK-BRP" voor: "<scenario>" in filenaam: "Buk_existingClient_Test_2.json" op tab: "2"

    Examples:
      | Scenario | env | bsn       | klant | Aanvraagwijze | aardVanDeZiekteOfStoornis | Aanvraagdatum | Aanvraagsoort | key                                | zaak    | ouderToestemming | geheimPersoon | admincompleet | Locatie    | aanvullendOnderzoek |
      |        1 | BUK | 261194811 | oude  | Written       | Lichamelijke aandoening   |    12-10-2023 | Appeal        | caseID-4-Buk_existingClient_Test_1 | BUK-BRP | nee              | no            | ja            | Amstelveen | nee                 |

  @Buk_existingClient_BUK_BZW_3
  Scenario Outline: Register and validate a existing client in BUK application (onderzoek ingaan met hoorzitting afwijken van negatief  naar positief)
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    When Fill in veld value: "<bsn>" voor index: "1" op tab: "1"
    When Wacht op deze pagina voor "3000" miliseconden op tab: "1"
    When Druk op type: "button" met naam: "Zoek cliënt" met index: "9999" op tab: "1"
    Then Druk op type: "radio" met naam: "true" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Select option by value: "<Aanvraagwijze>" voor index: "0" op tab: "1"
    When Fill in veld value: "<Aanvraagdatum>" voor index: "1" op tab: "1"
    When Select option by value: "<Aanvraagsoort>" voor index: "1" op tab: "1"
    When Fill in veld value: "143324" voor index: "2" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "1"
    Then Fill in veld value: "BA-209050" voor index: "3" op tab: "1"
    When Fill in veld value: "Ryan Babel" voor index: "5" op tab: "1"
    When Fill in block value: "Dit is een voorbeeld voor de test" voor index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op local action "Vernieuwen" op tab "1"
    Then Druk op sidebar optie "Bijbehorende zaken" op tab "1"
    When Druk op zaak: "BUK-BZW" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "false" met index: "10" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "No" met index: "0" op tab: "2"
    Then Select option by value: "Yes" voor index: "0" op tab: "2"
    When Zoeken en invullen value: "<aardVanDeZiekteOfStoornis>" voor index: "1" indexpijl: "0" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld" voor index: "0" op tab: "2"
    When Select option by value: "NoScore" voor index: "1" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 2" voor index: "1" op tab: "2"
    When Select option by value: "NoScore" voor index: "2" op tab: "2"
    When Iframe fill in value: "Dit is een voorbeeld 3" voor index: "2" op tab: "2"
    When Select option by value: "NoScore" voor index: "3" op tab: "2"
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
    When Druk op type: "radio" met naam: "true" met index: "1" op tab: "2"
    When Druk op type: "radio" met naam: "true" met index: "0" op tab: "2"
    When Select option by value: "Positive" voor index: "0" op tab: "2"
    When Fill in block value: "Toelichting hoorzitting" voor index: "0" op tab: "2"
    When Fill in block value: "Beschikbaarheid voor (hoor)zitting" voor index: "1" op tab: "2"
    Given We testen scenario: "<Scenario>"
    When Fill in veld value: "13-02-2025" voor index: "1" op tab: "2"
    When Select option by value: "House visit" voor index: "2" op tab: "2"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Voltooien" met index: "0" op tab: "2"
    When Druk op type: "button" met naam: "Ga" met index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "true" met index: "0" op tab: "2"
    When Select option by value: "Positive" voor index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "false" met index: "11" op tab: "2"
    When Fill in block value: "Toelichting hoorzitting" voor index: "0" op tab: "2"
    When Fill in veld value: "13-02-2025" voor index: "1" op tab: "2"
    When Select option by value: "House visit" voor index: "2" op tab: "2"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "Postal" met index: "0" op tab: "2"
    When Druk op type: "radio" met naam: "false" met index: "12" op tab: "2"
    When Druk op type: "button" met naam: "Voltooien" met index: "0" op tab: "2"
    Then Status geupdate naar: "Opgelost - Afgerond" voor index: "0" op tab: "2"
    Then Sla zaak met naam "BUK-BZW" voor: "<scenario>" in filenaam: "Buk_existingClient_BUK_BZW_3.json" op tab: "2"

    Examples:
      | Scenario | env | bsn       | klant | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | key       | zaak    | ouderToestemming | geheimPersoon | juridischeMaatregelen | admincompleet | nieuwAdvies | stoornis | aardVanDeZiekteOfStoornis | uitkomstScore | gegevensOphalen | hoorzitting | afwijkendAdvies                   | adviesNaZitting |
      |        1 | BUK | 245921497 | oude  | Fax           |     15-9-2023 | Objection     | BA-188016 | BUK-BZW | nee              | no            | None                  | ja            | ja          | geen     | Psychiatrische aandoening |               | ja              | ja          | Wijzig naar Negatief voor bezwaar | Blijft negatief |
      #|        2 | BUK | 146339563 | oude  | Written       |    10-10-2023 | Objection     | BA-190017 | BUK-BZW | ja               | no            | None                  | ja            | ja          | ja       | Lichamelijke aandoening   | Positief      | nee             | ja          | Wijzig naar Negatief voor bezwaar | Blijft negatief |
      # |        3 | BUK | 375562199 | oude  | Fax           |    10-10-2023 | Objection     | BA-139010    | BUK-BZW   | ja              | no            | None                  | nee          | ja          | ja       | Lichamelijke aandoening   | Negatief      | nee             | ja           | Wijzig naar Positief voor bezwaar | Blijft positief  |
# Acc omgeving
    # Examples:
    #   | Scenario | env | bsn       | klant | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | Zaaknummer   | Zaak      |ouderToestemming | geheimPersoon | juridischeMaatregelen | admincompleet| nieuwAdvies | stoornis | aardVanDeZiekteOfStoornis | uitkomstScore | gegevensOphalen | hoorzitting  | afwijkendAdvies                   | adviesNaZitting  |
    #   |        1 | BUK | 184089359 | oude  | Fax           |     15-9-2023 | Objection     | BA-85022    | BUK-BZW   |nee              | no            | None                  | ja           | ja          | geen     | geen                      |               | ja              | ja           | Wijzig naar Negatief voor bezwaar | Blijft negatief  |
    #   |        2 | BUK | 146339563 | oude  | Written       |    10-10-2023 | Objection     | BA-87007    | BUK-BZW   | ja              | no            | None                  | ja           | ja          | ja       | Lichamelijke aandoening   | Positief      | nee             | ja           | Wijzig naar Negatief voor bezwaar | Blijft negatief  |
    #   # |        3 | BUK | 375562199 | oude  | Fax           |    10-10-2023 | Objection     | BA-139010    | BUK-BZW   | ja              | no            | None                  | nee          | ja          | ja       | Lichamelijke aandoening   | Negatief      | nee             | ja           | Wijzig naar Positief voor bezwaar | Blijft positief  |

  @Buk_existingClient_BUK_BRP_4
  Scenario Outline: Register and validate a existing client in BUK application
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op type: "Button" met naam: "Aanvraag" met index: "0" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    Then Status geupdate naar: "Nieuw" op tab: "1"
    When Vul bsn "<bsn>" voor een "<klant>" klant op tab: "1"
    When Klik op selecteren klant op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Registreren aanvraaggegevens Aanvraagwijze: "<Aanvraagwijze>" Aanvraagdatum: "<Aanvraagdatum>" Aanvraagsoort: "<Aanvraagsoort>" op tab: "1"
    When Vul BUK informatie in met: "<Aanvraagsoort>" ouder toestemming: "<ouderToestemming>" op tab: "1"
    When Selecteer zaak uit Json met key: "<key>" in file: "Buk_existingClient_Test_3.json" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    #When Select special form of communication "<formOfCommunication>"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Aanmaken" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Bijbehorende zaken" met index: "0" op tab: "1"
    # When Druk op zaak: "<zaak>" link voor: "<Scenario>" sla op met filenaam: "Buk_existingClient_Test_4.json" op tab: "1"
    When Druk op zaak: "<zaak>" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Druk op type: "Button" met naam: "Ga" met index: "0" op tab: "2"
    When Is de aanvraag administratief volledig?: "<admincompleet>" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Druk op type: "Button" met naam: "Ga" met index: "0" op tab: "2"
    When Kantoor SVB locatie: "<Locatie>" op tab: "2"
    When Druk op type: "Button" met naam: "post" met index: "0" op tab: "2"
    When Druk op type: "Button" met naam: "ja" met index: "0" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    When Is er aanvullend onderzoek nodig: "<aanvullendOnderzoek>" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Druk op type: "Button" met naam: "Ga" met index: "0" op tab: "2"
    Then Is er sprake van een ziekte of stoornis? gegevensOphalen:"<gegevensOphalen>", stoornis:"<stoornis>", klant:"<klant>"
    Then Wanneer stoornis is "<stoornis>" en gegevens ophalen is "<gegevensOphalen>", dan is aard van ziekte of stoornis "<aardVanDeZiekteOfStoornis>"
    Then Wanneer stoornis is "<stoornis>" dan worden de scores ingevuld "<uitkomstScore>"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "2"
    When Wijzig voorgesteld Advies "<afwijkendAdvies>", tab "2"
    When Vul in emailadres: "test.automation@ciz.nl" op tab: "2"
    Then Druk op type: "Button" met naam: "Toegangscode" met index: "0" op tab: "2"
    Then Druk op type: "Button" met naam: "Voltooien" met index: "0" op tab: "2"
    Then Sla zaak met naam "<zaak>" voor: "<scenario>" in filenaam: "Buk_existingClient_Test_4.json" op tab: "2"
    # Then Verwijder alle testdata voor file: "request_BUK_New_Client_test2.json"
    # Then Verwijder alle testdata voor file: "request_BUK_New_Client_test1.json"
    # Then Verwijder alle testdata voor file: "caseID-2-Buk_existingClient_Test_1"
    # Then Verwijder alle testdata voor file: "caseID-2-Buk_existingClient_Test_2"
    # Then Verwijder alle testdata voor file: "caseID-2-Buk_existingClient_Test_3"

    Examples:
      | Scenario | env | bsn       | klant | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | key                                | Zaak    | ouderToestemming | geheimPersoon | admincompleet | Locatie  | aanvullendOnderzoek | nieuwAdvies | stoornis | aardVanDeZiekteOfStoornis | uitkomstScore | gegevensOphalen | hoorzitting | afwijkendAdvies                  |
      |        1 | BUK | 265105900 | oude  | Fax           |    12-10-2023 | Appeal        | caseID-2-Buk_existingClient_Test_3 | BUK-BRP | nee              | no            | nee           | Zaanstad | ja                  | ja          | ja       | Lichamelijke aandoening   | Negatief      | nee             | Nee         | Wijzig naar Positief voor beroep |
# Acc omgeving
    # Examples:
    #   | Scenario | env | bsn       | klant | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | Zaaknummer    | Zaak     |ouderToestemming | geheimPersoon  | admincompleet| Locatie    | aanvullendOnderzoek | nieuwAdvies | stoornis | aardVanDeZiekteOfStoornis | uitkomstScore | gegevensOphalen | hoorzitting  | afwijkendAdvies                   |
    #   |        1 | BUK | 265105900 | oude  | Fax           |    12-10-2023 | Appeal        | BUK-BZW-53005 |BUK-BRP   | nee             | no             | nee          | Zaanstad   | ja                  | ja          | ja       | Lichamelijke aandoening   | Negatief      | nee             | Nee          | Wijzig naar Positief voor beroep  |
