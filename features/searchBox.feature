Feature: Search and Cart

Scenario: Successfully searching an item and add to cart
  Given I navigate to the 'home' page
  When I search for 'digital watch'
  And I add an item to my cart
  Then the item should be added to cart

