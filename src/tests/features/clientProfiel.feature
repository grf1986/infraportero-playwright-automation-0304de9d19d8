Feature: aanpassen van client gegevens

  @ClientProfiel_aanpassen1
  Scenario Outline: aanpassen van client gegevens
    Given Ga naar "BUK" app
    Then in de hoofdmenu op tab "0" klik op "Zoeken client"
    When Vul bsn "129095205" om client profiel op te zoeken
    Then klik op de naam van de gekozen klant op tab "1"
    # Then Then klik op acties menu op tab "0" en klik op ""

  @360ClientProfielWeergave
  Scenario Outline: 360 clientprofiel weergeven vanuit BUK advies case
    Given Ga naar "BUK" app
    When Log in op "BUK" pagina, tab "0"
    When In app "BukApp" op pagina "Mijn werklijst" zoeken naar file: "<dossierFile>" en pas toe
    When In app: "BukApp" op pagina: "Mijn werklijst" op tab: "0" druk op "Ga" knop
    When Op tab "0" check indicatie van huidige case of app in browsertabblad "Advies"
    Then klik op de 360 naam link van de gekozen klant op tab "1"
    When Op tab "1" check indicatie van huidige case of app in browsertabblad "Cliënt profiel"

    Examples:
      | scenario | dossierFile |
      |        1 | BA-71139    |
