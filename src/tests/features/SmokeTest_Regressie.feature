Feature: BUK Hoger Beroep
Dit is een feature voor het testen van de functionaliteit voor BUK Hoger Beroep klachten

  Background: https://cizbeheer.sharepoint.com/:b:/s/Groep-ZaakSysteem-Development/EZ7DBOExuP5LrY1saSOrN9IB4ZlBcBKabA5RBhiydI84_g?e=WTrEjQ

  @BB_09_Behandelen_beroepHoger_beroep_BUK_1
  Scenario Outline:
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Druk op type: "button" met naam: "Ga" met index: "0" op tab: "0"
    Then Navigeer naar "<env>" omgeving op tab: "0"
    Given We testen scenario: "<Scenario>"
    When Zoeken en invullen value: "" voor index: "" indexpijl: "" op tab: ""
    # ######registreer klacht#####
    # Then Druk op type: "radio" met naam: "<KlachtinBehandelingNemen>" met index: "0" op tab: "0"
    # ##Informeel gesprek met klager
    # ##Klacht naar tevredenheid afgehandeld? <KlachtnaarTevredenAfgehandeld>
    # ###Registreren en afronden
    # ####Printen en verzenden brief
    # ###Klacht is afgehandeld

    Examples:
      | Scenario                                         | bsn       | env    | user      | pass      | KlachtinBehandelingNemen | KlachtnaarTevredenAfgehandeld |
      | Schriftelijke klacht via e-mail/post/website_Yes | 154498130 | Klacht | AO@ciz.nl | Welkom02! | Yes                      | yes                           |
      | Schriftelijke klacht via e-mail/post/website_Yes | 154498130 | Klacht | AO@ciz.nl | Welkom02! | Yes                      | No                            |
      | Schriftelijke klacht via e-mail/post/website_No  | 154498130 | Klacht | AO@ciz.nl | Welkom02! | No                       | N.V.T                         |

  @BB_09_Behandelen_beroepHoger_beroep_BUK_2
  Scenario Outline:
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Druk op type: "button" met naam: "Ga" met index: "0" op tab: "0"
    Then Navigeer naar "<env>" omgeving op tab: "0"
    ######registreer klacht#####
    Then Druk op type: "radio" met naam: "<KlachtinBehandelingNemen>" met index: "0" op tab: "0"
    ##Informeel gesprek met klager
    ##Klacht naar tevredenheid afgehandeld? <KlachtnaarTevredenAfgehandeld>
    ###Opstarten formele procedure###
    ####Onderzoeken klacht en registreren uitkomsten#### 
    ####"<Informeren_beklaagde_en_klachtenambassadeur>"###
    #######Klacht is afgehandeld#####

    Examples:
      | Scenario                                         | bsn       | env    | user      | pass      | KlachtinBehandelingNemen | KlachtnaarTevredenAfgehandeld | Informeren_beklaagde_en_klachtenambassadeur |
      | Schriftelijke klacht via e-mail/post/website_Yes | 154498130 | Klacht | AO@ciz.nl | Welkom04! | Yes                      | No                            | Printen en verzend brief                    |
      | Schriftelijke klacht via e-mail/post/website_Yes | 154498130 | Klacht | AO@ciz.nl | Welkom04! | Yes                      | No                            | Informeren beklaagde en klachtenambassadeur |

  @BB_09_Behandelen_beroepHoger_beroep_BUK_mondeling
  Scenario Outline:
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Druk op type: "button" met naam: "Ga" met index: "0" op tab: "0"
    Then Navigeer naar "<env>" omgeving op tab: "0"
    ######registreer klacht#####
    Then Druk op type: "radio" met naam: "<klachtIndienen>" met index: "0" op tab: "0"
    Then Druk op type: "radio" met naam: "<Zelf registreren in Portero>" met index: "0" op tab: "0"
    ###Registreren klacht###
    ###Informeren_beklaagde_en_klachtenambassadeur
    #
    #
    #
    ###Zelf registreren in Portero =  no
    ###Mailen_naar_verantwoordelijk_team
    ###registreren_in_Portero###
    ###Doorgaan naar ###Informeren_beklaagde_en_klachtenambassadeur

    Examples:
      | Scenario                                         | bsn       | env    | user      | pass      | klachtIndienen | Zelf_registreren_in_Portero | Mailen_naar_verantwoordelijk_team |
      | Schriftelijke klacht via e-mail/post/website_Yes | 154498130 | Klacht | AO@ciz.nl | Welkom04! | Yes            | Yes                         | N.V.T                             |
      | Schriftelijke klacht via e-mail/post/website_Yes | 154498130 | Klacht | AO@ciz.nl | Welkom04! | Yes            | No                          | Yes                               |
      | Schriftelijke klacht via e-mail/post/website_No  | 154498130 | Klacht | AO@ciz.nl | Welkom04! | No             | N.V.T                       | N.V.T                             |

  @BB_09_Behandelen_beroepHoger_beroep_BUK_socialMedia
  Scenario Outline:
    Given We testen scenario: "<Scenario>"
    Given Go to AppFactoryApp app page
    When Log in op pagina, met user: "<user>" en wachtwoord: "<pass>" op tab: "0"
    When Druk op app: "Aanvraag" met index: "1" op tab: "0"
    When Druk op type: "button" met naam: "Ga" met index: "0" op tab: "0"
    Then Navigeer naar "<env>" omgeving op tab: "0"
    ######registreer klacht#####
    Then Druk op type: "radio" met naam: "<klachtIndienen>" met index: "0" op tab: "0"
    ###Mailen_naar_verantwoordelijk_team
    ###registreren_in_Portero###
    ###Doorgaan naar ###Informeren_beklaagde_en_klachtenambassadeur

    Examples:
      | Scenario                                         | bsn       | env    | user      | pass      | klachtIndienen | Zelf_registreren_in_Portero | Mailen_naar_verantwoordelijk_team |
      | Schriftelijke klacht via e-mail/post/website_Yes | 154498130 | Klacht | AO@ciz.nl | Welkom04! | Yes            | Yes                         | Yes                               |
      | Schriftelijke klacht via e-mail/post/website_No  | 154498130 | Klacht | AO@ciz.nl | Welkom04! | No             | N.V.T                       | N.V.T                             |
