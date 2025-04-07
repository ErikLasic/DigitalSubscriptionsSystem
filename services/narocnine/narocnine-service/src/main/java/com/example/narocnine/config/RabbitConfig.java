package com.example.narocnine.config;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    public static final String QUEUE_NAME = "myQueue";
    public static final String EXCHANGE_NAME = "myExchange";
    public static final String ROUTING_KEY = "myRoutingKey";

    // Declare the Queue
    @Bean
    public Queue queue() {
        return new Queue(QUEUE_NAME, true); // durable queue
    }

    // Declare the Exchange
    @Bean
    public DirectExchange exchange() {
        return new DirectExchange(EXCHANGE_NAME);
    }

    // Declare the Binding between Queue and Exchange
    @Bean
    public Binding binding(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(ROUTING_KEY);
    }
}
