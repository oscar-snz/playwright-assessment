
Feature: Purchase an item from the Magento store

Scenario: Successfully purchase an item

Given I navigate to the 'home' page
When I search for 'digital watch'
And I add an item to my cart
Then the cart should show '1' items
And I proceed to checkout
And I fill the shipping address
And I place the order
Then the order should be placed
