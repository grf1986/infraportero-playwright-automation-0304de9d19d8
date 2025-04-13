Feature: Navigger naar omgeving

  Scenario Outline: Navigger naar omgeving
    When Navigeer naar "<env>" omgeving op tab: "1"

    Examples:
      | env    |
      | BUK    |
      | WLZ    |
      | klacht |
