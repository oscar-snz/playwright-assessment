
Feature: Search for a placed order

Scenario: Successfully search for an order

Given I navigate to the 'home' page
When I search for 'digital watch'
And I add an item to my cart
Then the cart should show '1' items
When I proceed to checkout
And I fill the shipping address
And I place the order
Then the order should be placed
When I navigate to the 'orders and returns' page
And I search for the order placed
Then I should find the order