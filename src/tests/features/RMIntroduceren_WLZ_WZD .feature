Feature: Voorrang verlenen in de WLZ/WZD Applicatie

  Background: zie ticket https://ciz.atlassian.net/browse/ZSD-20682?atlOrigin=eyJpIjoiNjdhNjRjYzU3NGNjNGVlM2E3N2E0ZmNmMjAwMDk5OGYiLCJwIjoiaiJ9

  @request_WLZ_New_Client_test1_Voorrang_Verlenen
  Scenario Outline: Register and validate a new client in WLZ application
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automationWLZ@ciz.nl" en wachtwoord: "Rules@123!" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Log in op pagina, met user: "test.automationWLZ@ciz.nl" en wachtwoord: "Rules@123!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    When Fill in veld value: "<bsn>" voor index: "1" op tab: "1"
    Then Druk op type: "button" met naam: "Zoek cliënt" met index: "9999" op tab: "1"
    When Druk op type: "checkbox" met naam: "Aanvraag creëren met een nieuwe cliënt" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap Registratie - scherm Persoonlijk######
    When Fill in veld value: "26-01-2022" voor index: "2" op tab: "1"
    When Fill in veld value: "roepnaam-baby-Test" voor index: "3" op tab: "1"
    When Fill in veld value: "baby-Test" voor index: "4" op tab: "1"
    When Fill in veld value: "van den" voor index: "5" op tab: "1"
    When Fill in veld value: "Baby test" voor index: "6" op tab: "1"
    When Fill in veld value: "BT" voor index: "7" op tab: "1"
    When Select option by value: "M" voor index: "0" op tab: "1"
    When Select option by value: "BirthName" voor index: "1" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap Registratie - scherm Aanvullend persoonlijk######
    When Select option by value: "NeverMarriedNorPartner" voor index: "0" op tab: "1"
    When Select option by value: "AtParents" voor index: "1" op tab: "1"
    When Select option by value: "Guardianship" voor index: "2" op tab: "1"
    When Select option by value: "Permanent" voor index: "3" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap Registratie - scherm Contact######
    When Fill in veld value: "thisismymail@mailme.com" voor index: "3" op tab: "1"
    When Select option by value: "Dutch" voor index: "0" op tab: "1"
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
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    # Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1
    Then Select option by value: "<Aanvraagwijze>" voor index: "0" op tab: "1"
    Then Fill in veld value: "7-1-2025" voor index: "1" op tab: "1"
    Then Select option by value: "<Aanvraagsoort>" voor index: "1" op tab: "1"
    When Druk op type: "radio" met naam: "No" met index: "8" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "0" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "1" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "2" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "3" op tab: "1"
    When Druk op type: "radio" met naam: "Yes" met index: "4" op tab: "1"
    Then Fill in veld value: "2803PK" voor index: "4" op tab: "1"
    Then Fill in veld value: "30" voor index: "5" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op local action "Vernieuwen" op tab "1"
    Then Druk op sidebar optie "Bijbehorende zaken" op tab "1"
    # When Druk op zaak: "WLZ" link voor: "<Scenario>" sla op met filenaam: "request_WLZ_New_Client_test1_Voorrang_Verlenen.json" op tab: "1"
    When Druk op zaak: "WLZ" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "test.automationWLZ@ciz.nl" en wachtwoord: "Rules@123!" op tab: "2"
    Then Druk op local action "Verlenen voorrang WLZ" op tab "2"
    Then Druk op type: "radio" met naam: "true" met index: "0" op tab: "2"
    Then Fill in textvak value: "Dit is een test" voor index: "0" op tab: "2"
    Then Druk op type: "button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Sla zaak met naam "WLZ" voor: "<Scenario>" in filenaam: "request_WLZ_New_Client_test1_Voorrang_Verlenen.json" op tab: "2"

    Examples:
      | Scenario                                         | env | bsn       | klant  | geheimPersoon | speciaalOnderzoek | geboortedatum | naamgebruik | burgerlijkeStaat       | leefSituatie | juridischeMaatregelen | verblijfStatus | geheimNummer | geheimNummer2 | taal  | telefonischeCommunicatie | bijzondereCommunicatieVorm | relatie                     | wettelijkeRelatie | partnerGeboorteDatum | woontOpZelfdeAdres | Aanvraagsoort  | Aanvraagdatum | Aanvraagwijze | huisArtsClient | verzekering     | nieuwOfBestaandZorg           | zorgVraag1 | zorgVraag2 | zorgVraag3 | WZDversneld | checkboxes | stroom     | isIDVastgesteld  | orientatieStoornis  | psychischFunctioneren | motorischFunctioneren | psychoSociaalWelzijn | probleemGedrag      | verslavingsProblemen | socialeRaadZaamheid | mobiliteit          | persoonlijkeZorg    | huishoudelijkLeven  | socialeRelatiesEnMaatschappelijk | deelnameOnderwijs   | deelnameWerk        | grondslag | eersteGrondslag      | permanentToezicht | toegangWLZ | negatiefBesluit | opstarten | zorgProfielReeks | zorgProfiel | Besluitbrief | aanvragenReview | menuItem          |
      | request_WLZ_New_Client_test1_Voorrang_Verlenen-1 | WLZ | 695870117 | nieuwe | no            | no                |            10 | BirthName   | NeverMarriedNorPartner | AtParents    | None                  | Permanent      | no           | no            | Dutch | yes                      | None                       | WettelijkeVertegenwoordiger | Curator           | None                 | None               | RegularRequest |    12-10-2023 | Written       | search data    | Dutch insurance | Bestaande Wlz-zorg stopzetten | nee        | nee        | nee        | n.v.t       | nee        | Beoordelen | Ja, face to face | Nvt/Niet beoordeeld | Nvt/Niet beoordeeld   | Nvt/Niet beoordeeld   | Nvt/Niet beoordeeld  | Nvt/Niet beoordeeld | Nvt/Niet beoordeeld  | Nvt/Niet beoordeeld | Nvt/Niet beoordeeld | Nvt/Niet beoordeeld | Nvt/Niet beoordeeld | Nvt/Niet beoordeeld              | Nvt/Niet beoordeeld | Nvt/Niet beoordeeld | ja        | Lichamelijk handicap | ja                | ja         | nee             | nee       | GGZB             | GGZ01B      | ZB05         | nee             | Verlenen voorrang |
# @BUK_VoorrangVerlenenBeschikbaar_ZSD20536_WLZ_WZD
# Scenario Outline: AuthorisatieMatrix: Voorrang verlenen functionaliteit is beschikbaar
#    Given We testen scenario: "<Scenario>"
#     Given Go to AppFactoryApp app page
#     When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
#     When Druk op type: "Button" met naam: "Wlz-Wzd" tab: "0"
#     When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "1"
#     Then 
#     Then Filter taaksoort: "<taaksoort>" kolom: "<kolomNaam>" en menuItem: "<zaakNummer>" op tab: "1" aanwezig is
#     Then Op schermgedeelte "<taaksoort>" druk op "Ga" op tab: "1"
#     When Nieuwe sessie starten op tab: "1"
#     Then Expected: "<menuItem>" aanwezig is op tab: "1"
#      Examples:
#       | Scenario                                    | user                          | pass      | taaksoort     | zaakNummer    | kolomNaam | menuItem          |                                                                                                                                                                                         
#       |        1 WLZWZD: AO                         | AO@ciz.nl                     |Welkom02!  |actieveTaken   | WZD-A21-54957 |    ID     | Verlenen voorrang |                         
#       # |        2 WLZWZD: BeoordelaarWLZWZD          | Beoordelaar.a@ciz.nl          |Welkom01!  |actieveTaken   | BUK-OI-86005  |    ID     | Verlenen voorrang |    
#       # |        3 WLZWZD: OnderzoekerWLZWZD          | Onderzoeker.a@ciz.nl          |Welkom01!  |actieveTaken   | BUK-BRP-91005 |    ID     | Verlenen voorrang |
#       |        4 WLZWZD: JuridischMedewerker        | Jurmwd@ciz.nl                 |Welkom01!  |actieveTaken | BUK-BRP-70013     |    ID     | Verlenen voorrang |   
#       # |        5 WLZWZD: JuristPrimairProces        | Jurist@ciz.nl                 |Welkom05!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang |     
#       |        6 WLZWZD: JuridischAdviseurWzd       | JurmdwWzd.b@ciz.nl            |Welkom01!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang | 
#       |        7 WLZWZD: FunctioneelBeheer          | Functioneelbeheerder.a@ciz.nl |Welkom01!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang |   
#       |        8 WLZWZD: ServicedeskMedewerker      | ServicedeskMedewerker@ciz.nl  |Welkom01!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang |     
# @BUK_VoorrangVerlenenNietBeschikbaar_ZSD20536_WLZ_WZD
# Scenario Outline: AuthorisatieMatrix: Voorrang verlenen functionaliteit is beschikbaar
#    Given We testen scenario: "<Scenario>"
#     Given Go to AppFactoryApp app page
#     When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
#     When Druk op type: "Button" met naam: "Wlz-Wzd" tab: "0"
#     When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "1" 
#     Then Filter taaksoort: "<taaksoort>" kolom: "<kolomNaam>" en menuItem: "<zaakNummer>" op tab: "1" aanwezig is   
#      Examples:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
#       | Scenario                                    | user                            | pass      | taaksoort     | zaakNummer    | kolomNaam | menuItem          |                                                                                                                                                                                         
#       |        1 WLZWZD: MedischAdviseur            | Medisch.Adviseur.a@ciz.nl       |Welkom01!  |actieveTaken   | BUK-BZW-96009 |    ID     | Verlenen voorrang |                         
#       |        2 WLZWZD: Teamcoach                  | teamcoach@ciz.nl                |Welkom01!  |actieveTaken   | BUK-OI-86005  |    ID     | Verlenen voorrang |    
#       |        3 WLZWZD: TeamcoachBUK               | teamcoachBUK@ciz.nl             |Welkom01!  |actieveTaken   | BUK-BRP-91005 |    ID     | Verlenen voorrang |
#       |        4 WLZWZD: AdviseurBijzonderOnderzoek | Bijzonderonderzoek@ciz.nl       |Welkom07!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang |   
#       |        5 WLZWZD: BISpecialist               | BIspecialist@ciz.nl             |Welkom10!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang |     
#       |        6 WLZWZD: AdviseurProcesbeheersing   | AdviseurProcesBeheersing@ciz.nl |Welkom01!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang | 
#       |        7 WLZWZD: MedewerkerBUK              | Consultant@ciz.nl               |Welkom02!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang |   
#       |        8 WLZWZD: Adviseur                   | Adviseur@ciz.nl                 |Welkom07!  |inactieveTaken | BA-144013     |    ID     | Verlenen voorrang |     
