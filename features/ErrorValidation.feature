Feature: Ecommerce validation
  @Validation
  Scenario Outline: Placing the order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then verify error message is displayed
    Examples:
      | username            | password|
      |anildshiva@gmail.com |Dsa@2026 |
      |anildshiva11@gmail.com|Dsa@2026 |
