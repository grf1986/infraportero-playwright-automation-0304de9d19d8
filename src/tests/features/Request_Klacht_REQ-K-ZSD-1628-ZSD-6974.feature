Feature: Klachten: werklijsten + werkbakken + routing

  @request_Klacht_REQ-K-ZSD-1628-ZSD-6974_test1
  Scenario Outline: Klacht zaak wordt gerouteerd naar de juiste medewerker(klacht NIET in behandeling nemen) test1
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "0"
    When Druk op type: "Button" met naam: "Aanvraag" met index: "0" op tab: "0"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "1"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    # Then Status geupdate naar: "Nieuw" op tab: "1"
    When Selecteer klant "CP-GC-9004" en zaak "REQ-BUK-67629" op tab: "1"
    When Vul ontvangsdatum in op tab: "1"
    When Selecteer wijze van binnenkomst "<wijzeVanBinnenkomst>" op tab: "1"
    When Dient de cliënt de klacht in "<dientDeKlantDeKlachtIn>" op tab: "1"
    Then klant dient klacht in "<dientDeKlantDeKlachtIn>" adres mag niet leeg zijn op tab: "1"
    When Klacht gericht op "<klachtGerichtOp>" op tab: "1"
    Then klacht op "<klachtGerichtOp>" veld naam medewerker "<naamMedewerker>" op tab: "1"
    When Soort klacht "<soortKlacht>" op tab: "1"
    When Omschrijving van de klacht en gewenste oplossing op tab: "1"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "1"
    # Then Status geupdate naar: "Open - In behandeling" op tab: "1"
    Then Druk op: "dossier" zaak link op tab: "1"
    When Log in op pagina, met user: "test.automation@ciz.nl" en wachtwoord: "Welkom04!" op tab: "2"
    When In app: "request_KlachtenApp" op pagina: "in_Behandeling" op tab: "2" druk op "Ga" knop
    When Klacht in behandeling nemen "<klachtInBehandelingNemen>" op tab: "2"
    Then Klacht niet in behandeling nemen "<klachtInBehandelingNemen>" reden wordt getoond op tab: "2"
    # Then Status geupdate naar: "Open - In behandeling" op tab: "2"
    When Vul een toelichting in "primair" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    # Then Status geupdate naar: "Opgelost - Afgerond" op tab: "2"
    Then Druk op: "dossier" zaak link op tab: "2"
    # Then Status geupdate naar: "Open - In behandeling" op tab: "2"
    Then Druk op type: "Button" met naam: "Ga" met index: "0" tab: "2"
    Then Druk op type: "Button" met naam: "CIZPrinter1" met index: "0" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    # Then Status geupdate naar: "Opgelost - Afgerond" op tab: "2"
    Then Druk op type: "Button" met naam: "Ga" met index: "0" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "1"
    # Then Status geupdate naar: "Opgelost - Afgerond" op tab: "1"

    Examples:
      | Scenario | env    | wijzeVanBinnenkomst | dientDeKlantDeKlachtIn | klachtGerichtOp | naamMedewerker   | soortKlacht             | klachtInBehandelingNemen |
      |        1 | klacht | Website             | nee                    | Employee        | beschikbaar      | Datalek                 | nee                      |
      |        2 | klacht | E-Mail              | nee                    | CIZ             | niet beschikbaar | Gericht op doorlooptijd | nee                      |

  @request_Klacht_REQ-K-ZSD-1628-ZSD-6974_test2
  Scenario Outline: Klacht zaak wordt gerouteerd naar de juiste medewerker(klacht WEL in behandeling nemen)test2
    Given Go to AppFactoryApp app page
    When Log in op "AppFactory" pagina, tab "0" met user: "AOMedewerker@ciz.nl" en wachtwoord: "Welkom04!"
    When Druk op type: "Button" met naam: "Aanvraag" met index: "0" op tab: "0"
    When Log in op "requestApp" pagina, tab "1" met user: "AOMedewerker@ciz.nl" en wachtwoord: "Welkom04!"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    Then Status geupdate naar: "Nieuw" op tab: "1"
    When Selecteer klant "CP-GC-5024" en zaak "REQ-BUK-57504" op tab: "1"
    When Vul ontvangsdatum in op tab: "1"
    When Selecteer wijze van binnenkomst "<wijzeVanBinnenkomst>" op tab: "1"
    When Dient de cliënt de klacht in "<dientDeKlantDeKlachtIn>" op tab: "1"
    Then klant dient klacht in "<dientDeKlantDeKlachtIn>" adres mag niet leeg zijn op tab: "1"
    When Klacht gericht op "<klachtGerichtOp>" op tab: "1"
    Then klacht op "<klachtGerichtOp>" veld naam medewerker "<naamMedewerker>" op tab: "1"
    When Soort klacht "<soortKlacht>" op tab: "1"
    When Omschrijving van de klacht en gewenste oplossing op tab: "1"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "1"
    Then Status geupdate naar: "Open - In behandeling" op tab: "1"
    Then Druk op: "dossier" zaak link op tab: "1"
    When Log in op "request_KlachtenApp" pagina, tab "2" met user: "AOMedewerker@ciz.nl" en wachtwoord: "Welkom04!"
    When In app: "request_KlachtenApp" op pagina: "in_Behandeling" op tab: "2" druk op "Ga" knop
    When Klacht in behandeling nemen "<klachtInBehandelingNemen>" op tab: "2"
    Then Klacht niet in behandeling nemen "<klachtInBehandelingNemen>" reden wordt getoond op tab: "2"
    Then Status geupdate naar: "Open - In behandeling" op tab: "2"
    When Vul een toelichting in "primair" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    When Verslaglegging contact met de klager "primair" op tab: "2"
    When Klacht naar tevredenheid afgehandeld? "<klachtNaarTevredenheidAfgehandeld_primair>" op tab: "2"
    When Leerpunt voor CIZ "primair" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    Then Status geupdate naar: "Opgelost - Afgerond" op tab: "2"
    Then Druk op: "dossier" zaak link op tab: "2"
    Then Then Status geupdate naar: "Opgelost - Afgerond" op tab: "3"

    Examples:
      | Scenario | env    | wijzeVanBinnenkomst | dientDeKlantDeKlachtIn | klachtGerichtOp | naamMedewerker   | soortKlacht | klachtInBehandelingNemen | klachtNaarTevredenheidAfgehandeld_primair |
      |        1 | klacht | Website             | ja                     | CIZ             | niet beschikbaar | Datalek     | ja                       | ja                                        |
      |        2 | klacht | Website             | nee                    | Both            | beschikbaar      | Datalek     | ja                       | ja                                        |

  @request_Klacht_REQ-K-ZSD-1628-ZSD-6974_test3
  Scenario Outline: Klacht zaak wordt gerouteerd naar de juiste medewerker(klacht WEL in behandeling nemen en geescaleerd)test3
    Given Go to AppFactoryApp app page
    When Log in op "AppFactory" pagina, tab "0" met user: "AOMedewerker@ciz.nl" en wachtwoord: "Welkom04!"
    When Druk op type: "Button" met naam: "Aanvraag" met index: "0" op tab: "0"
    When Log in op "requestApp" pagina, tab "1" met user: "AOMedewerker@ciz.nl" en wachtwoord: "Welkom04!"
    Then Navigeer naar "<env>" omgeving op tab: "1"
    Then Status geupdate naar: "Nieuw" op tab: "1"
    When Selecteer klant "CP-GC-16025" en zaak "REQ-W-9039" op tab: "1"
    When Vul ontvangsdatum in op tab: "1"
    When Selecteer wijze van binnenkomst "<wijzeVanBinnenkomst>" op tab: "1"
    When Dient de cliënt de klacht in "<dientDeKlantDeKlachtIn>" op tab: "1"
    Then klant dient klacht in "<dientDeKlantDeKlachtIn>" adres mag niet leeg zijn op tab: "1"
    When Klacht gericht op "<klachtGerichtOp>" op tab: "1"
    Then klacht op "<klachtGerichtOp>" veld naam medewerker "<naamMedewerker>" op tab: "1"
    When Soort klacht "<soortKlacht>" op tab: "1"
    When Omschrijving van de klacht en gewenste oplossing op tab: "1"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "1"
    Then Status geupdate naar: "Open - In behandeling" op tab: "1"
    Then Druk op: "dossier" zaak link op tab: "1"
    When Log in op "request_KlachtenApp" pagina, tab "2" met user: "AOMedewerker@ciz.nl" en wachtwoord: "Welkom04!"
    When In app: "request_KlachtenApp" op pagina: "in_Behandeling" op tab: "2" druk op "Ga" knop
    When Klacht in behandeling nemen "<klachtInBehandelingNemen>"  op tab: "2"
    Then Klacht niet in behandeling nemen "<klachtInBehandelingNemen>" reden wordt getoond op tab: "2"
    Then Status geupdate naar: "Open - In behandeling" op tab: "2"
    When Vul een toelichting in "primair" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    When Verslaglegging contact met de klager "primair" op tab: "2"
    When Klacht naar tevredenheid afgehandeld? "<klachtNaarTevredenheidAfgehandeld_primair>" op tab: "2"
    When Leerpunt voor CIZ "primair" op tab: "2"
    Then Druk op type: "Button" met naam: "Indienen" met index: "0" op tab: "2"
    When Verslaglegging contact met de klager "geescaleerd" op tab: "2"
    When Wijze van afhandelen "Telefonisch contact" op tab: "2"
    When Klacht naar tevredenheid afgehandeld? "<klachtNaarTevredenheidAfgehandeld_geescaleerd>" op tab: "2"
    When Leerpunt voor CIZ "geescaleerd" op tab: "2"
    When Klager heeft aangegeven zich tot de nationale ombudsman te wenden "<nationaleOmbudsman>" op tab: "2"
    Then Status geupdate naar: "Open - In behandeling" op tab: "2"
    Then Druk op: "dossier" zaak link op tab: "2"
    Then Status geupdate naar: "Open - In behandeling" op tab: "3"

    Examples:
      | Scenario | env    | wijzeVanBinnenkomst | dientDeKlantDeKlachtIn | klachtGerichtOp | naamMedewerker   | soortKlacht | klachtInBehandelingNemen | klachtNaarTevredenheidAfgehandeld_primair | klachtNaarTevredenheidAfgehandeld_geescaleerd | nationaleOmbudsman |
      |        1 | klacht | Website             | ja                     | CIZ             | niet beschikbaar | Datalek     | ja                       | nee                                       | nee geescaleerd                               | ja                 |
