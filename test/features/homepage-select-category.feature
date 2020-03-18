Feature: Selecting category from home page

    As a user on the auticon testing store home page
    I want to select a category
    Because I want to see products in that category

    Background:

        Given I am on the home page
    
    Scenario: Select a top level category
        When I select "Video Games" in the category menu
        Then I should see a product list
        And  I should see "Video Games" as the list title
    
    Scenario: Select a mid level category
        When I hover over "Video Games" in the category menu
        And  I select "Nintendo Switch" in the category menu
        Then I should see a product list
        And  I should see "Nintendo Switch" as the list title
        
    Scenario: Select a bottom level category
        When I hover over "Video Games" in the category menu
        And  I hover over "Xbox One" in the category menu
        And  I select "Xbox One Games" in the category menu
        Then I should see a product list
        And  I should see "Xbox One Games" as the list title