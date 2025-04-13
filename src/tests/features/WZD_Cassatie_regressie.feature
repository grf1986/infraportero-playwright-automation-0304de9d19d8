Feature: Automation - WZD-Cassatie

  Background:

  @WZD_Cassatie_regressie
  Scenario Outline:

  Scenario Outline: Register and validate a new client in WLZ application
    Given Go to AppFactoryApp app page
    Given We testen scenario: "<Scenario>"
    When Log in op pagina, met user: "AO@ciz.nl" en wachtwoord: "Welkom02!" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Log in op pagina, met user: "AO@ciz.nl" en wachtwoord: "Welkom02!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    When Fill in veld value: "<bsn>" voor index: "1" op tab: "1"
    Then Druk op type: "button" met naam: "Zoek cliënt" met index: "9999" op tab: "1"
    When Druk op type: "checkbox" met naam: "Aanvraag creëren met een nieuwe cliënt" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    ######Stap Registratie - scherm Persoonlijk######
    When Fill in veld value: "03-09-2010" voor index: "2" op tab: "1"
    When Fill in veld value: "Tester" voor index: "3" op tab: "1"
    When Fill in veld value: "Tester" voor index: "4" op tab: "1"
    When Fill in veld value: "Tester" voor index: "5" op tab: "1"
    When Fill in veld value: "van de" voor index: "6" op tab: "1"
    When Fill in veld value: "Ter" voor index: "7" op tab: "1"
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
    # Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Select option by value: "<Aanvraagwijze>" voor index: "0" op tab: "1"
    Then Fill in veld value: "7-1-2025" voor index: "1" op tab: "1"
    Then Select option by value: "<Aanvraagsoort>" voor index: "1" op tab: "1"
    Then Druk op type: "button" met naam: "Doorgaan" met index: "0" op tab: "1"
    Then Druk op type: "button" met naam: "Aanmaken" met index: "0" op tab: "1"
    When Druk op local action "Vernieuwen" op tab "1"
    Then Druk op sidebar optie "Bijbehorende zaken" op tab "1"
    When Druk op zaak: "WZD" link voor: "<Scenario>" op tab: "1"
    When Log in op pagina, met user: "JuridischWzd@ciz.nl" en wachtwoord: "Welkom06!" op tab: "1"
    Then Druk op type: "button" met naam: "Ga" met index: "0" op tab: "1"
    Then Zoeken en invullen value: "Geen Art.21 traject" voor index: "5" indexpijl: "0" op tab: "1"

    Examples:
      | Scenario   | env | bsn       | Aanvraagwijze | Aanvraagsoort | bijzondereCommunicatieVorm | relatie                     | wettelijkeRelatie |
      | Cassatie 1 | WLZ | 477097327 | Written       | WzdCAS        | None                       | WettelijkeVertegenwoordiger | Curator           |
