
Feature: Click on the next button on step 1

As a customer, I should be able to click on the next button on step 1 when I give valid information.

#* AC1: The next button should take customers to step 2 when given valid information.
#*              a. Test by providing all fields
#*              b. Test by providing only the required fields


#TODO: Create scenarios that cover all the acceptance criteria

Background:
    Given user is on the enrollment page

Scenario: Test by providing all the required fields
    When user enters first name
    And user enters last name
    And user enters email address
    And user enters phone number
    And user select how heard about us
    And user clicks on Next button
    Then user should be on Payment plan page

Scenario: Test by providing only the required fields
    Given user enters first name
    And user enters last name
    And user enters email address
    And user enters phone number
    And user clicks on Next button
    Then user should be on Payment plan page