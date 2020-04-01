package com.example.demo;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UtilisateurRepository extends CrudRepository<Utilisateur, Long> {

  List<Utilisateur> findByLogin(String login);

  Utilisateur findById(long id);
}
