Feature: Facebook Login

  Scenario: Successful login with valid credentials
    Given I open Facebook login page
    When I enter username "email"
    And I enter password "password"
    And I click the login button
    Then I should be logged in successfully

  Scenario: Unsuccessful login with invalid credentials
    Given I open Facebook login page
    When I enter username "invalid_user"
    And I enter password "wrong_password"
    And I click the login button
    Then I should see an error message
