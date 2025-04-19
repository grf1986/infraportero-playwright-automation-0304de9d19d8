Feature: Login

@DemoTest
Scenario Outline: 
Given Navigeer naar URL: "https://www.kirpalani.com/"
Then Wacht op deze pagina voor: "1000" miliseconden op tab: "0"
When Header button: "Account" value: "N.V.T" met index: "0" op tab: "0"
When Login met gebruikersnaam: "info@testautomation-solutions.nl" en wachtwoord: "Ma2!PrGP@XS8bZf" op tab: "0"
# Then validation met expect checktext





