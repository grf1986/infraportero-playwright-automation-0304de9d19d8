Feature: Controleer of een menu-optie aanwezig is in het actions menu

  Scenario: men-optie voorrang verlenen is aanwezig
    Then Expected: "Verlenen voorrang" aanwezig is op tab: "1"
    Then Expected: "Verlenen voorrang" niet aanwezig is op tab: "1"
