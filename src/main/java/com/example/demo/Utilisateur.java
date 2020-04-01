package com.example.demo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Utilisateur {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;
  private String login;
  private String mdp;

  protected Utilisateur() {}

  public Utilisateur(String login, String mdp) {
    this.login = login;
    this.mdp = mdp;
  }

  @Override
  public String toString() {
    return String.format(
        "Utilisateur[id=%d, login='%s', mdp='%s']",
        id, login, mdp);
  }

  public Long getId() {
    return id;
  }

  public String getLogin() {
    return login;
  }

  public String getMdp() {
    return mdp;
  }
}
