package com.example.demo;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CucumberWithdraw {

	private String user;
	private int balance;
	private int tmp;
	private String ATMResponse;
	
	@Given("{string} have a valid card")
	public void have_a_valid_card(String string) {
		user = string;
	}
	
	@And("His account is credited by {string}")
	public void account_is_credited_by(String string) {
		balance = Integer.parseInt(string);
		System.out.println();
		//hello 
	}
	
	@When("the card is inserted")
	public void the_card_is_inserted() {
		//NOTHING TO DO
	}
	@And("try to withdraw {string}")
	public void try_to_withdraw(String string) {
		tmp = Integer.parseInt(string);
	}
			
	@Then("the ATM should return {string}")
	public void the_ATM_should_return(String string) {
		if(balance<tmp) {
			ATMResponse = "DECLINED";
			assertEquals(string, "DECLINED");
		}else {
			ATMResponse = "AUTHORIZED";
			balance -= tmp;
			assertEquals(string, "AUTHORIZED");
		}
	}
	
	@And("the balance of the account should be {string}")
	public void And_the_balance_of_the_account_should_be(String string) {
			assertEquals(balance, Integer.parseInt(string));
	}
}
