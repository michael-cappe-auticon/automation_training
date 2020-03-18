Feature: Checkout

    As a user on the auticon testing store home page
    I want to checkout
    Because I want to purchase the items in my cart

    Background:

        Given I am on the home page
        And   I am logged in as email and password "michael.cappe@auticon.us" "password123"
    
    Scenario: Add an item to the shopping cart and purchase it
        When I select "Video Games" in the category menu
        Then I should see a product list
        When I add "Call of Duty" to the cart from the product list
        And  I navigate to the Shopping Cart
        Then I should see the shopping cart page
        And  I should see "Call of Duty" in the shopping cart
        When I accept terms of service on the Shopping Cart
        And  I click checkout on the Shopping Cart
        And  I click Continue in the Billing address section of checkout
        And  I click Continue in the Shipping method section of checkout
        And  I select payment method "Credit Card" in checkout
        And  I click Continue in the Payment method section of checkout
        And  I input card name, number, expiration, and code "Fake Card" 4555555555555550 5/2025 555 into checkout
        And  I click Continue in the Payment information section of checkout
        And  I click Confirm in the Confirm order section of checkout
        Then I should see the order completed screen