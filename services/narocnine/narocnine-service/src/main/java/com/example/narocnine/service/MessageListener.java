package com.example.narocnine.service;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import com.example.narocnine.config.RabbitConfig;
import reactor.core.publisher.Mono;

@Service
public class MessageListener {

    @RabbitListener(queues = RabbitConfig.QUEUE_NAME) // Referencing the queue name from RabbitConfig
    public Mono<Void> receiveMessage(String message) {
        return Mono.fromRunnable(() -> {
            // Handle the incoming message (for now, just log it)
            System.out.println("Received message: " + message);
            // You can implement more actions, like updating a subscription status based on the message
        });
    }
}
