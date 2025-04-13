Feature: This feature file is the same test as in request_BUK_New_Client.feature
The only difference is that in this test we include the checktext function(s).

  @OutputInfoOPnieuwSturen_ZSD-21744_scenario1
  Scenario Outline:
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op app: "BUK" met index: "1" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    When zoek op: "<zaakNummer>" op tab: "1"
    Then Druk op sidebar optie "Documenten" op tab "1"
    Then Druk op type: "Kebab menu brieven" met naam: "kebab menu brieven" met index: "0" op tab: "1"
    Then Druk op type: "Menu item" met naam: "Output informatie" met index: "0" op tab: "1"
    When Druk op type: "radio" met naam: "true" met index: "0" op tab: "1"
    When Druk op type: "radio" met naam: "<kanaal>" met index: "0" op tab: "1"
    When Druk op type: "radio" met naam: "<aangetekend>" met index: "1" op tab: "1"
    When Druk op type: "button" met naam: "Indienen" met index: "9999" op tab: "1"

    Examples:
      | Scenario                                           | env | zaakNummer | kanaal | Email | Telefoon | aangetekend | time |
      | 1 Je wilt een brief via een ander kanaal versturen | BUK | BA-144013  | Postal |       |          | true        | 6000 |

  @OutputInfoOPnieuwSturen_ZSD-21744_scenario2
  Scenario Outline:
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op app: "BUK" met index: "1" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    When zoek op: "<zaakNummer>" op tab: "1"
    Then Druk op sidebar optie "Documenten" op tab "1"
    Then Druk op type: "Kebab menu brieven" met naam: "kebab menu brieven" met index: "0" op tab: "1"
    Then Druk op type: "Menu item" met naam: "Output informatie" met index: "0" op tab: "1"
    When Druk op type: "radio" met naam: "true" met index: "0" op tab: "1"
    When Druk op type: "radio" met naam: "<kanaal>" met index: "0" op tab: "1"
    When Fill in veld value: "<Email>" voor index: "1" op tab: "1"
    When Druk op type: "label" met naam: "SMS" met index: "0" op tab: "1"
    When Fill in veld value: "<Telefoon>" voor index: "3" op tab: "1"
    When Druk op type: "button" met naam: "Indienen" met index: "9999" op tab: "1"

    Examples:
      | Scenario                                                                                                       | env | zaakNummer | kanaal | Email                        | Telefoon   |
      |          2 Je wilt de brief naar via hetzelfde kanaal versturen maar naar een ander mailadres + telefoonnummer | BUK | BA-144013  | Email  | ThisIsmyotherEmail@gmail.com | 0640193365 |
      | 3 Je wilt een brief op dezelfde manier (zelfde kanaal) versturen en naar het zelfde mailadres + telefoonnummer | BUK | BA-144013  | Email  | ThisIsmyFirstEmail@gmail.com | 0678901233 |
