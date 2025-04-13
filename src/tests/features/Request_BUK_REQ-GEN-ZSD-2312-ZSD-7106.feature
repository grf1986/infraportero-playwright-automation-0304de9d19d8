Feature: REQ-GEN: wanneer voor een instelling gekozen wordt uit de lijst onder Tijdelijk Verblijfadres, dan moeten de bijbehorende invoervelden read-only zijn

  @BREQ-GEN-ZSD-2312-ZSD-7106-test1
  Scenario Outline: Readonly velden ivm instelling
    Given Ga naar "aanvragen" app
    When Log in op "Aanvragen" pagina, tab "0"
    Then Navigeer naar "<env>" omgeving
    When Vul bsn "<bsn>" voor een "<klant>" klant
    When Navigeer naar "registreer applicatie data" pagina
    When Registreren aanvraaggegevens Aanvraagwijze: "<Aanvraagwijze>" Aanvraagdatum: "<Aanvraagdatum>" Aanvraagsoort: "<Aanvraagsoort>"
    When Vul BUK informatie in met: "<Aanvraagsoort>" ouder toestemming: "<ouderToestemming>"
    When Navigeer naar "persoonlijke info" pagina
    When Vul in Persoonlijke informatie: geheim persoon: "<geheimPersoon>" speciaal onderzoek: "<speciaalOnderzoek>" geboortedatum: "<geboortedatum>" naamgebruik: "<naamgebruik>"
    Then Druk op navigatie 'adressen'
    When Druk op afwijkend tijdelijk verblijfadres 'ja'
    When Selecteer instelling: "<instelling>" of land: "<land>"
    Then Velden Land, Postcode,Huisnummer,Straat,Plaats mogen niet leeg zijn maar readonly

    Examples: 
      | Scenario | env | bsn       | klant | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | ouderToestemming | geheimPersoon | speciaalOnderzoek | geboortedatum | naamgebruik | land     | instelling                 |
      |        1 | BUK | 129095205 | nieuwe | E-Mail       |    10-10-2023 | Advice        | no               | no            | no                |            17 | BirthName   |          | s Heeren Loo Midden Ijssel |



  @BREQ-GEN-ZSD-2312-ZSD-7106-test2
  Scenario Outline: invul velden ivm land
    Given Ga naar "aanvragen" app
    When Log in op "Aanvragen" pagina, tab "0"
    Then Navigeer naar "<env>" omgeving
    When Vul bsn "<bsn>" voor een "<klant>" klant
    When Navigeer naar "registreer applicatie data" pagina
    When Registreren aanvraaggegevens Aanvraagwijze: "<Aanvraagwijze>" Aanvraagdatum: "<Aanvraagdatum>" Aanvraagsoort: "<Aanvraagsoort>"
    When Vul BUK informatie in met: "<Aanvraagsoort>" ouder toestemming: "<ouderToestemming>"
    When Navigeer naar "persoonlijke info" pagina
    When Vul in Persoonlijke informatie: geheim persoon: "<geheimPersoon>" speciaal onderzoek: "<speciaalOnderzoek>" geboortedatum: "<geboortedatum>" naamgebruik: "<naamgebruik>"
    Then Druk op navigatie 'adressen'
    When Druk op afwijkend tijdelijk verblijfadres 'ja'
    Then Selecteer instelling: "<instelling>" of land: "<land>"


    Examples: 
      | Scenario | env | bsn       | klant | Aanvraagwijze | Aanvraagdatum | Aanvraagsoort | ouderToestemming | geheimPersoon | speciaalOnderzoek | geboortedatum | naamgebruik | land     | instelling                 |
      |        2 | BUK | 129095205 | nieuwe| E-Mail       |    10-10-2023 | Advice        | no               | no            | no                |            17 | BirthName   | Suriname |                            |


