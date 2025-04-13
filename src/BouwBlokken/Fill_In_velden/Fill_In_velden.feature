Feature: Vul in

  Scenario: Vul in
    #Fill in iframe
    When Iframe fill in value: "Dit is een voorbeeld [string]" voor index: "Index voor welke i frame [int]" op tab: "op tab [int]"
    #Fill in normaal veld
    When Fill in veld value: "Dit is een voorbeeld [string]" voor index: "Index voor het veld [int]" op tab: "op tab [int]"
    #Fill in normaal block
    When Fill in block value: "Dit is een voorbeeld [string]" voor index: "Index voor het veld [int]" op tab: "op tab [int]"
