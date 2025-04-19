Feature: Login

  @DemoTest
  Scenario Outline:
    Given Navigeer naar URL: "<url>"
    When Header button: "<headerButton>" value: "<headerValue>" met index: "0" op tab: "0"
    When Login met gebruikersnaam: "<gebruikersnaam>" en wachtwoord: "<wachtwoord>" op tab: "0"
    Then Gebruiker is ingelogd met naam: "<naam>" voor index: "0" op tab: "0"

    Examples:
      | Scenario | url                        | headerButton | headerValue | gebruikersnaam                   | wachtwoord      | naam                    |
      | DemoTest | https://www.kirpalani.com/ | Account      | N.V.T       | info@testautomation-solutions.nl | Ma2!PrGP@XS8bZf | testAutomation Solution |
