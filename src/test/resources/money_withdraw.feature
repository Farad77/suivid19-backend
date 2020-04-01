Feature: Can i withdraw money ?
  the ATM will let you withdraw money ?

  Scenario Outline: A user withdraws money from an ATM
    Given "<name>" have a valid card
    And His account is credited by "<startBalance>"
    When the card is inserted
    And try to withdraw "<withdrawalAmount>"
    Then the ATM should return "<ATMReturn>"
   	And the balance of the account should be "<newBalance>"
    
  Examples:
    | name           	| startBalance 	| withdrawalAmount 	| ATMReturn | newBalance 	|
    | Romain         	| 50	   		| 50				|AUTHORIZED	|0				|				
    | Maxime         	| 150   		| 100   			|AUTHORIZED	|50				|				
    | Renald		 	| 100	 		| 120	 			|DECLINED	|100			|