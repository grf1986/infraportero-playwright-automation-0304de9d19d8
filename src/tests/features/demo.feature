Feature: Navigeer naar pagina

@DemoTest
Scenario Outline:
Given Navigeer naar URL: "https://www.kirpalani.com/"
Then Wacht op deze pagina voor: "10000" miliseconden op tab: "0"

