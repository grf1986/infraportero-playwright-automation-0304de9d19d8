Feature: Login

@DemoTest
Scenario Outline: 
Given Navigeer naar URL: "https://www.kirpalani.com/"
Then Wacht op deze pagina voor: "1000" miliseconden op tab: "0"
When Header button: "Zoeken" value: "computer" met index: "0" op tab: "0"
# Then Druk op type: "checkbox" met naam: "verify you are human" met index: "0" op tab: "0"
Then Wacht op deze pagina voor: "10000" miliseconden op tab: "0"


