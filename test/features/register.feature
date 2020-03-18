Feature: Registering a new user

    As a user on the register page
    I want to register a new user
    Because I want to have an account on this website

    Background:

        Given I am on the register page

    Scenario: Registering an account with a unique email
        When I register with first and last name "Michael" "Cappe" into the text box
        And  I register with date of birth 1/11/1993 into the dropdown menus
        And  I register with a unique email into the text box
        And  I register with password "password123" into the text box
        And  I press the Register button
        Then Registration should be complete