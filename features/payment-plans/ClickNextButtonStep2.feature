@sep16
Feature: Click on the next button on payment plans page   #! Test Only

As a customer, I should be able to click on the next button on step 2 when I select a plan.

#* AC1: Clicking on any plan should activate the next button
#* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
#* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
#* AC4: The payment component should be displayed.
#* AC5: A price summary should be displayed.
#* AC6: The back button should be displayed.
#* AC7: By default, the pay button should be displayed.


Background:
    Given user is on the enrollment page
    And user has completed step one with valid information
    And user is on step two of the enrollment process


#TODO: Create scenarios that cover all the acceptance criteria

Scenario: verify that the next button is disabled by default
    Then the next button is disabled by default


Scenario: verify that the next button will be activated when user selects upfront payment option
    When user selects upfront payment option
    Then the next button is enabled


Scenario: verify that the next button will be activated when user selects installments payment option
    When user selects installments payment option
    Then the next button is enabled


Scenario: verify that when user clicks the next button after payment selection, Step 3 page should be displayed
    When user selects upfront payment option
    When user clicks the next button
    Then the step 3 page is displayed

@wip
Scenario: verify that in the stepper, steps 1 and 2 should be green, and step 3 should be blue
    When user selects upfront payment option
    When user clicks the next button
    Then the stepper displays steps 1 and 2 as green, and step 3 as blue