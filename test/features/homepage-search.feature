Feature: Searching from home page

    As a user on the auticon testing store home page
    I want to search for an item
    Because I want to look for it

    Background:

        Given I am on the home page
    
    Scenario Outline: Search for an item
        When I enter <searchItem> into the search box
        And  I click the search button
        Then I should see a product list
        And  I should see "Search" as the list title
        And  I should see <searchItem> in the product list
        
        Examples:
        |searchItem|
        |"Avengers"|