Feature: Addresses section

    As a user on the home page
    I want to add an address

    Background:

        Given I am on the home page
        And   I am logged in as email and password "michael.cappe@auticon.us" "password123"

    Scenario: Adding An Address
        When I click the Addresses link
        And  I click the Add New Address Button
        And  I input first and last name "Michael" "Cappe" into the address
        And  I input email "michael.cappe@auticon.us" into the address
        And  I input country and state "United States" "California" into the address
        And  I input city, address, and zip "Woodland Hills" "12345 Boulevard St." "91333" into the address
        And  I input phone "555-0000" into the address
        And  I press the Save Address Button
        Then I should see "Michael Cappe" in the address list
        When I delete address with name "Michael Cappe"
        Then I should not see "Michael Cappe" in the address list