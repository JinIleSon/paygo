package com.paygo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class PaygoBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaygoBackendApplication.class, args);
	}

}
