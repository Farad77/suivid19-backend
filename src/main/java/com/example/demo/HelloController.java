package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

/*
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
// Test Build Heroku TEST 4
	@RequestMapping("/")
	public String index() {
		return "index";
	}

}
*/


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.Arrays;
import java.util.List;

@Controller
public class HelloController {

	// inject via application.properties
    @Value("${welcome.message}")
    private String message;

    private List<String> tasks = Arrays.asList("a", "b", "c", "d", "e", "f", "g");
    
    @Autowired //don't forget the setter
    private UtilisateurRepository repository; 

    @GetMapping("/")
    public String main(Model model) {
        model.addAttribute("message", message);
        model.addAttribute("tasks", tasks);
        model.addAttribute("template", "te");

        return "welcome"; //view
    }

    // /hello?name=kotlin
    @GetMapping("/hello")
    public String mainWithParam(
            @RequestParam(name = "name", required = false, defaultValue = "") 
			String name, Model model) {

        model.addAttribute("message", name);
        model.addAttribute("template", "te");

        return "welcome"; //view
    }
    
    
    @GetMapping("/test")
    public String mainUtilisateur(Model model) {
        model.addAttribute("message", message);
        model.addAttribute("tasks", tasks);
        model.addAttribute("template", "te");
        model.addAttribute("utilisateurs", repository.findAll());
        

        return "welcome"; //view
    }
    
    
    @GetMapping("/ajoutUtilisateur")
    public String mainAjoutUtilisateur(Model model) {
        model.addAttribute("message", message);
        model.addAttribute("tasks", tasks);
        model.addAttribute("template", "te");
        
        repository.save(new Utilisateur("test", "test"));
        

        return "welcome"; //view
    }

}