package com.example.narocnine.controller;

import com.example.narocnine.service.MessageProducer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class MessageController {

    private final MessageProducer messageProducer;

    public MessageController(MessageProducer messageProducer) {
        this.messageProducer = messageProducer;
    }

    @GetMapping("/send")
    public Mono<String> sendMessage() {
        messageProducer.sendMessage("Hello from Spring Boot Reactive!")
                .doOnTerminate(() -> System.out.println("Message sent successfully"))
                .subscribe();
        return Mono.just("Message sent");
    }
}
