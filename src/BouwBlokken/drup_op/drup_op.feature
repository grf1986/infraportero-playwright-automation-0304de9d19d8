Feature: druk op

  Scenario: drup
    When Druk op app: "Wlz-Wzd" met index: "1" op tab: "0"
    When Druk op type: "button" met naam: "Ga" met index: "0" op tab: "1"
    When Druk op type: "label" met naam: "Levensgevaar, ernstig lichamelijk letsel, ernstige psychische, materiële, immateriële of financiële schade, ernstige verwaarlozing of maatschappelijke teloorgang, ernstig verstoorde ontwikkeling voor of van de cliënt of een ander" met index: "0" op tab: "1"
    When Gerelateerde Dossiers: "Alles weergeven" voor index: "1" op tab: "0"
