Feature: Create client in BUK application

  @REQ_BUK_testclient_data_voor_aanvraag_Client_test_Nederland_1
  Scenario Outline: Register and validate a new client in BUK application
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op type: "Button" met naam: "Aanvraag" met index: "0" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "BUK" omgeving op tab: "1"
    When Vul bsn "<bsn>" voor een "nieuwe" klant op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Registreren aanvraaggegevens Aanvraagwijze: "E-Mail" Aanvraagdatum: "10-10-2023" Aanvraagsoort: "Advice" op tab: "1"
    When Vul BUK informatie in met: "Advice" ouder toestemming: "nee" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Vul in Persoonlijke informatie: geboortenaam: "<geboortenaam>" op tab: "1"
    When Vul in Persoonlijke informatie: met een leeftijd van "20" en roepnaam op tab "1"
    When Vul in Persoonlijke informatie: Voorvoegsel: "<voorvoegsel>" op tab: "1"
    When Vul in Persoonlijke informatie: Voornamen: "<voornamen>" op tab: "1"
    When Vul in Persoonlijke informatie: Voorletters: "<voorletters>" op tab: "1"
    When Gebruik "BirthName" op tab "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Aanvullend persoonlijk gegevens: burgerlijke staat "NeverMarriedNorPartner" leefsituatie: "AtParents" juridische maatregelen "Guardianship" verblijfstatus "Permanent" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Vul in Adressen: Land "<land>" straatnaam: "<straatnaam>" op tab: "1"
    When Vul in Adressen: Land: "<land>" op tab: "1"
    When Vul in Adressen: postcode: "<postcode>" op tab: "1"
    When Vul in Adressen: Huisnummer: "<huisnummer>" op tab: "1"
    When Vul in Adressen: Toevoeging huisnummer: "<toevoeging_huisnummer>" op tab: "1"
    When Vul in Adressen: Land "<land>" straatnaam: "<straatnaam>" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op: "dossier" zaak link op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Verwacht BRP_status: "<brp_status>" op tab: "2"

    Examples:
      | Scenario                                                                        | bsn       | geboortenaam | voorvoegsel | voornamen | voorletters | postcode | huisnummer | toevoeging_huisnummer | land      | straatnaam | brp_status                        |
      |                                                    1-scenario zonder mismatches | 307741837 | Braber       | den         | Gerrit    | G           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                      2-scenario met verkeerde lowercase waardes | 307741837 | bRaber       | Den         | gERRIT    | g           |   1014aw |         16 | i                     | Nederland | NA         | Wacht op afronding traject        |
      |                                 3-scenario Huisnummer mismatch + Postcode match | 307741837 | Braber       | den         | Gerrit    | G           |   1014AW |         24 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                     4-scenario Huisnummer toevoeging mismatch  + Postcode match | 307741837 | Braber       | den         | Gerrit    | G           |   1014AW |         16 | K                     | Nederland | NA         | Wacht op afronding traject        |
      |                               5-scenario Geboortenaam mismatch + Postcode match | 307741837 | Kevin        | den         | Gerrit    | G           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                 6-scenario Voorletter mismatch + Postcode match | 307741837 | Braber       | den         | Gerrit    | J           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                     7-scenario Voorvoegsel achternaam mismatch + Postcode match | 307741837 | Braber       | Van         | Gerrit    | G           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                  9-scenario Voornamen mismatch + Postcode match | 307741837 | Braber       | den         | Kevin     | G           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                         17-scenario Huisnummer + Huisnummer toevoeging mismatch | 307741837 | Braber       | den         | Gerrit    | G           |   1014AW |         10 | L                     | Nederland | NA         | Wacht op afronding traject        |
      |                                  18-scenario Huisnummer + Geboortenaam mismatch | 307741837 | Hamed        | den         | Gerrit    | G           |   1014AW |          2 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                    19-scenario Huisnummer + Voorletter mismatch | 307741837 | Braber       | den         | Gerrit    | A           |   1014AW |          3 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                   20-scenario Huisnummer + Voorvoegsel mismatch | 307741837 | Braber       | van         | Gerrit    | G           |   1014AW |          4 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                     22-scenario Huisnummer + Voornamen mismatch | 307741837 | Braber       | den         | Ahmed     | G           |   1014AW |          5 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                  23-scenario Toevoeging + geboortenaam mismatch | 307741837 | Alain        | den         | Gerrit    | G           |   1014AW |         16 | Y                     | Nederland | NA         | Wacht op afronding traject        |
      |                                    24-scenario Toevoeging + voorletter mismatch | 307741837 | Braber       | den         | Gerrit    | H           |   1014AW |         16 | B                     | Nederland | NA         | Wacht op afronding traject        |
      |                                   25-scenario Toevoeging + voorvoegsel mismatch | 307741837 | Braber       | aan den     | Gerrit    | G           |   1014AW |         16 | C                     | Nederland | NA         | Wacht op afronding traject        |
      |                                     27-scenario Toevoeging + voornamen mismatch | 307741837 | Braber       | den         | Ricky     | G           |   1014AW |         16 | E                     | Nederland | NA         | Wacht op afronding traject        |
      |                                 28-scenario Geboortenaam + voorvoegsel mismatch | 307741837 | Henri        | van         | Gerrit    | G           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                   29-scenario Voorletter + voorvoegsel mismatch | 307741837 | Braber       | van         | Gerrit    | P           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                    31-scenario Voorletter + voornamen  mismatch | 307741837 | Braber       | den         | Tyrone    | R           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                    33-scenario Voorvoegsel + voornamen mismatch | 307741837 | Braber       | aan         | Raynold   | G           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                   35-scenario Huisnummer + Toevoeging + Voorletters + Voornamen | 307741837 | Braber       | den         | Garry     | U           |   1014AW |          9 | G                     | Nederland | NA         | Wacht op afronding traject        |
      |                                          38-scenario Geboortenaam + Voorletters | 307741837 | Harold       | den         | Gerrit    | K           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |                                   40-scenario Geboortenaam + Voornamen mismatch | 307741837 | Kelvin       | den         | Jannetje  | G           |   1014AW |         16 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |       43-scenario Huisnummer + Toevoeging + Geboortenaam + Voorvoegsel mismatch | 307741837 | Dan          | van den     | Gerrit    | G           |   1014AW |         18 | V                     | Nederland | NA         | Wacht op afronding traject        |
      |        44-scenario Huisnummer + Toevoeging + Voorletters + Voorvoegsel mismatch | 307741837 | Braber       | van         | Gerrit    | S           |   1014AW |         17 | D                     | Nederland | NA         | Wacht op afronding traject        |
      |          46-scenario Huisnummer + Toevoeging + Voorvoegsel + Voornamen mismatch | 307741837 | Braber       | aan den     | Paul      | G           |   1014AW |         20 | Q                     | Nederland | NA         | Wacht op afronding traject        |
      |         48-scenario Huisnummer + Voorletters + Voorvoegsel + Voornamen mismatch | 307741837 | Braber       | van         | Ray       | F           |   1014AW |         22 | I                     | Nederland | NA         | Wacht op afronding traject        |
      |         50-scenario Toevoeging + Voorletters + Voorvoegsel + Voornamen mismatch | 307741837 | Braber       | de          | Jack      | FF          |   1014AW |         16 | K                     | Nederland | NA         | Wacht op afronding traject        |
      | 52-scenario Huisnummer + Toevoeging + Voorletters + Voornamen + RANDOM mismatch | 307741837 | Braber       | de          | Kevin     | L           |   1014AW |          8 | S                     | Nederland | NA         | Controleren BRP en cliëntgegevens |
      |                                 55-scenario Geboortenaam + Voorletters + RANDOM | 307741837 | Boss         | den         | Gerrit    | X           |   1014AW |         16 | F                     | Nederland | NA         | Controleren BRP en cliëntgegevens |
      |                                   57-scenario Geboortenaam + Voornamen + RAMDOM | 307741837 | Cino         | van         | Kelvin    | G           |   1014AW |         16 | I                     | Nederland | NA         | Controleren BRP en cliëntgegevens |

  @REQ_BUK_testclient_data_voor_aanvraag_Client_test_Suriname2
  Scenario Outline: Register and validate a new client in BUK application
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op type: "Button" met naam: "Aanvraag" met index: "0" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "BUK" omgeving op tab: "1"
    When Vul bsn "<bsn>" voor een "nieuwe" klant in land: "<land>" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Registreren aanvraaggegevens Aanvraagwijze: "E-Mail" Aanvraagdatum: "10-10-2023" Aanvraagsoort: "Advice" op tab: "1"
    When Vul BUK informatie in met: "Advice" ouder toestemming: "nee" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Vul in Persoonlijke informatie: geboortenaam: "<geboortenaam>" op tab: "1"
    When Vul in Persoonlijke informatie: met een leeftijd van "20" en roepnaam op tab "1"
    When Vul in Persoonlijke informatie: Voorvoegsel: "<voorvoegsel>" op tab: "1"
    When Vul in Persoonlijke informatie: Voornamen: "<voornamen>" op tab: "1"
    When Vul in Persoonlijke informatie: Voorletters: "<voorletters>" op tab: "1"
    When Gebruik "BirthName" op tab "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Aanvullend persoonlijk gegevens: burgerlijke staat "NeverMarriedNorPartner" leefsituatie: "AtParents" juridische maatregelen "Guardianship" verblijfstatus "Permanent" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Vul in Adressen: Land: "<land>" op tab: "1"
    When Vul in Adressen: postcode: "<postcode>" op tab: "1"
    When Vul in Adressen: Huisnummer: "<huisnummer>" op tab: "1"
    When Vul in Adressen: Toevoeging huisnummer: "<toevoeging_huisnummer>" op tab: "1"
    When Vul in Adressen: Land "<land>" straatnaam: "<straatnaam>" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op: "dossier" zaak link op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Verwacht BRP_status: "<brp_status>" op tab: "2"

    Examples:
      | Scenario                                                             | bsn       | geboortenaam | voorvoegsel | voornamen | voorletters | postcode | huisnummer | toevoeging_huisnummer | land     | straatnaam     | brp_status                        |
      |                      8-scenario Straatnaam mismatch + Postcode match | 307741837 | Braber       | den         | Gerrit    | G           |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                  10-scenario Huisnummer mismatch + Postcode mismatch | 307741837 | Braber       | den         | Gerrit    | G           |   1000AA |         22 | I                     | Suriname | Schakelstraat  | Controleren BRP en cliëntgegevens |
      |       11-scenario Huisnummer toevoeging mismatch + Postcode mismatch | 307741837 | Braber       | den         | Gerrit    | G           |   1000AA |         16 | O                     | Suriname | Schakelstraat  | Controleren BRP en cliëntgegevens |
      |                12-scenario Geboortenaam mismatch + Postcode mismatch | 307741837 | Jack         | den         | Gerrit    | G           |   1000AA |         16 | I                     | Suriname | Schakelstraat  | Controleren BRP en cliëntgegevens |
      |                13-scenario Voorletter   mismatch + Postcode mismatch | 307741837 | Braber       | den         | Gerrit    | K           |   1000AA |         16 | I                     | Suriname | Schakelstraat  | Controleren BRP en cliëntgegevens |
      |      14-scenario Voorvoegsel achternaam mismatch + Postcode mismatch | 307741837 | Braber       | van der     | Gerrit    | G           |   1000AA |         16 | I                     | Suriname | Schakelstraat  | Controleren BRP en cliëntgegevens |
      |                  15-scenario Straatnaam mismatch + Postcode mismatch | 307741837 | Braber       | den         | Gerrit    | G           |   1000AA |         16 | I                     | Suriname | Verdwaalstraat | Controleren BRP en cliëntgegevens |
      |                   16-scenario Voornamen mismatch + Postcode mismatch | 307741837 | Braber       | den         | Ergon     | G           |   1000AA |         16 | I                     | Suriname | Schakelstraat  | Controleren BRP en cliëntgegevens |
      |                             21-scenario Huisnummer + Straat mismatch | 307741837 | Braber       | den         | Gerrit    | G           |   1014AW |          5 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                             26-scenario Toevoeging + straat mismatch | 307741837 | Braber       | den         | Gerrit    | G           |   1014AW |         16 | P                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                        30-scenario Voorletter + straatnaam  mismatch | 307741837 | Braber       | den         | Gerrit    | U           |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                           32-scenario Voorvoegsel + straat  mismatch | 307741837 | Braber       | aan         | Gerrit    | G           |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                              34-scenario Straat + voornamen mismatch | 307741837 | Braber       | den         | Ray       | G           |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |          36-scenario Huisnummer + Voorletters + Voorvoegsel + Straat | 307741837 | Braber       | van         | Gerrit    | W           |   1014AW |          7 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                        37-scenario Toevoeging + Voorletters + Straat | 307741837 | Braber       | den         | Gerrit    | F           |   1014AW |         16 | D                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                           39-scenario Geboortenaam + Straat mismatch | 307741837 | Jan          | den         | Gerrit    | G           |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                41-scenario Voorletters + Straat + Voornamen mismatch | 307741837 | Braber       | den         | Paul      | O           |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |                         42-scenario Voorvoegsel + Straat + Voornamen | 307741837 | Braber       | aan         | Kelvin    | G           |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |  45-scenario Huisnummer + Toevoeging + Voorvoegsel + Straat mismatch | 307741837 | Braber       | aan         | Gerrit    | G           |   1014AW |         19 | S                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |    47-scenario Huisnummer + Toevoeging + Straat + Voornamen mismatch | 307741837 | Braber       | den         | Tyrone    | G           |   1014AW |         21 | R                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |               49-scenario Huisnummer + Voorletters + Straat mismatch | 307741837 | Braber       | den         | Gerrit    | E           |   1014AW |         23 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      |             51-scenario Voorletters + Voorvoegsels + Straat mismatch | 307741837 | Braber       | de          | Gerrit    | KK          |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Wacht op afronding traject        |
      | 53-scenario Huisnummer + Voorletters + Voorvoegsel + Straat + RANDOM | 307741837 | Harold       | van         | Gerrit    | DD          |   1014AW |          4 | I                     | Suriname | Verdwaalstraat | Controleren BRP en cliëntgegevens |
      |               54-scenario Toevoeging + Voorletters + Straat + RANDOM | 307741837 | Braber       | van         | Gerrit    | C           |   1014AW |         16 | O                     | Suriname | Verdwaalstraat | Controleren BRP en cliëntgegevens |
      |                           56-scenario Geboortenaam + Straat + RANDOM | 307741837 | Dino         | van         | Gerrit    | G           |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Controleren BRP en cliëntgegevens |
      |                58-scenario Voorletters + Straat + Voornamen + RANDOM | 307741837 | Braber       | van         | Kelvin    | HH          |   1014AW |         16 | I                     | Suriname | Verdwaalstraat | Controleren BRP en cliëntgegevens |
      |                59-scenario Voorvoegsel + Straat + Voornamen + RANDOM | 307741837 | Braber       | aan         | Kelvin    | G           |   1014AW |         16 | D                     | Suriname | Verdwaalstraat | Controleren BRP en cliëntgegevens |

  @REQ_BUK_testclient_data_voor_aanvraag_Client_test_Land_Naar_Nederland
  Scenario Outline: Register and validate a new client in BUK application
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op type: "Button" met naam: "Aanvraag" met index: "0" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "BUK" omgeving op tab: "1"
    When Vul bsn "<bsn>" voor een "nieuwe" klant in land: "<zoekOpLand>" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Registreren aanvraaggegevens Aanvraagwijze: "E-Mail" Aanvraagdatum: "10-10-2023" Aanvraagsoort: "Advice" op tab: "1"
    When Vul BUK informatie in met: "Advice" ouder toestemming: "nee" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Vul in Persoonlijke informatie: geboortenaam: "<geboortenaam>" op tab: "1"
    When Vul in Persoonlijke informatie: met een leeftijd van "20" en roepnaam op tab "1"
    When Vul in Persoonlijke informatie: Voorvoegsel: "<voorvoegsel>" op tab: "1"
    When Vul in Persoonlijke informatie: Voornamen: "<voornamen>" op tab: "1"
    When Vul in Persoonlijke informatie: Voorletters: "<voorletters>" op tab: "1"
    When Gebruik "BirthName" op tab "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Aanvullend persoonlijk gegevens: burgerlijke staat "NeverMarriedNorPartner" leefsituatie: "AtParents" juridische maatregelen "Guardianship" verblijfstatus "Permanent" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Vul in Adressen: Land: "Nederland" op tab: "1"
    When Vul in Adressen: postcode: "<postcode>" op tab: "1"
    When Vul in Adressen: Huisnummer: "<huisnummer>" op tab: "1"
    When Vul in Adressen: Toevoeging huisnummer: "<toevoeging_huisnummer>" op tab: "1"
    When Vul in Adressen: Land "<NaarNL>" straatnaam: "<straatnaam>" op tab: "1"
    Then Druk op type: "Button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "Button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op: "dossier" zaak link op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    Then Verwacht BRP_status: "<brp_status>" op tab: "2"

    Examples:
      | Scenario       | bsn       | geboortenaam | voorvoegsel | voornamen | voorletters | postcode | huisnummer | toevoeging_huisnummer | zoekOpLand | NaarNL    | straatnaam | brp_status                   |
      | 1-Land naar NL | 307741837 | Braber       | den         | Gerrit    | G           |   1014AW |         16 | I                     | Suriname   | Nederland | NA         | Wachten op afronding traject |
