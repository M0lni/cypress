Feature: Navigating to different websites and verifying title
  @test
  Scenario: Perform Navigation
    Given I open the Google web url
    Then I verify title of web page as 'Google'


  Scenario: Perform Navigation
    Given I open the Facebook web url
    Then I verify title of web page as 'Facebook'

Scenario: Perform Navigation and verify header
    Given I open the Pet database web url
    Then I verify header as 'Pet Store'

  Scenario: Perform Navigation and verify pet name
    Given I open the Pet database web url
    Then I verify the first name of a pet as 'Bauer'

  Scenario: Perform Navigation and verify pet age
    Given I open the Pet database web url
    Then I verify age of a pet as '1'

  Scenario: Perform Navigation and verify button
    Given I open the Pet database web url
    Then I verify button as 'Create a pet'

  Scenario: Perform Navigation and verify pet name
    Given I open the Pet database web url
    Then I verify a name of a pet as 'Bobo'

  Scenario: Perform Navigation and verify pet status
    Given I open the Pet database web url
    Then I verify if any pet is important

  Scenario: Perform Navigation and verify pet status
    Given I open the Pet database web url
    Then I verify if any pet is new

  Scenario: Perform Navigation and verify pet age as negative
    Given I open the Pet database web url
    Then I verify if any pet is negative

  Scenario: Perform Navigation and verify a word on the page
    Given I open the Pet database web url
    Then I verify if 'Detail' is on the page