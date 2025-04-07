package com.example.narocnine.service;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class MessageProducer {

    private final AmqpTemplate amqpTemplate;

    @Value("${rabbitmq.exchange.name:myExchange}") // Define the exchange name
    private String exchangeName;

    @Value("${rabbitmq.routing.key.name:myRoutingKey}") // Define the routing key
    private String routingKey;

    public MessageProducer(AmqpTemplate amqpTemplate) {
        this.amqpTemplate = amqpTemplate;
    }

    public Mono<Void> sendMessage(String message) {
        return Mono.fromRunnable(() -> {
            // Send the message to the exchange with the routing key
            amqpTemplate.convertAndSend(exchangeName, routingKey, message);
        });
    }
}
