Feature: Ecommerce validation
  @Regression
  Scenario: Placing the order
    Given Start to type your Given step here a login to Ecommerce application with "anildshiva@gmail.com" and "Dsa@2026"
    When Add "ZARA COAT 3" to the cart
    Then verify "ZARA COAT 4" is displayed in the cart
    When Enter valid details and place the order
    Then Verify the order is placed successfully and present in order history

  @Validation
  Scenario Outline: Placing the order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then verify error message is displayed
    Examples:
      | username            | password|
      |anildshiva@gmail.com |Dsa@2026 |