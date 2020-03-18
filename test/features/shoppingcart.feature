Feature: Shopping Cart

    As a user on the auticon testing store home page
    I want to add a product to my cart
    Because I want to purchase that product

    Background:

        Given I am on the home page
    
    Scenario: Add an item to the shopping cart
        When I select "Video Games" in the category menu
        Then I should see a product list
        When I select "Animal Crossing" in the product list
        Then I should see a product page
        When I press the Add To Cart button on the product page
        And  I navigate to the Shopping Cart
        Then I should see the shopping cart page
        And  I should see "Animal Crossing" in the shopping cart

    Scenario: Remove an item from the shopping cart
        When I navigate to the Shopping Cart
        Then I should see the shopping cart page
        And  I should see "Animal Crossing" in the shopping cart
        When I remove item "Animal Crossing" from the Shopping Cart
        Then I should not see "Animal Crossing" in the shopping cart