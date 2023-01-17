Feature: Navigation Bar

    Scenario Outline: The user clicks on Navigation Item, this is highlighted
        Given the devolpers renders the ListIATAItem component with the next props:
            """
            [
            'passenger1',
            'passenger2',
            'passenger3',
            'passenger4'
            ]
            """
        When the user clicks on the <navigationItem> navigation item
        Then the <navigationItem> navigation item is highlighted
        And the <navigationItem> navigation item is the only one highlighted
        Examples:
            | navigationItem |
            | passenger1     |
            | passenger2     |
            | passenger3     |
            | passenger4     |

    Scenario Outline: First Navigation Item is the default highlighted
        Given the devolpers renders the ListIATAItem component with the next props:
            """
            [
            'passenger1',
            'passenger2',
            'passenger3',
            'passenger4'
            ]
            """
        When the component loads the first <navigationItem> navigation item is highlighted
        Then the <navigationItem> navigation item is highlighted

    Examples:
        | navigationItem |
        | passenger1     |
        | passenger2     |
        | passenger3     |
        | passenger4     |
