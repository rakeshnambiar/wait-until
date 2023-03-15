Feature: duckduckgo.com
  Scenario: visiting the frontpage
    Given I visit europepmc.org
    When I do a search
    Then I should see a search bar
