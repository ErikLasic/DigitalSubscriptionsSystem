package com.example.narocnine.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import com.example.narocnine.config.RabbitConfig;
import reactor.core.publisher.Mono;

@Service
public class MessageListener {
    private static final Logger logger = LoggerFactory.getLogger(MessageListener.class);

    @RabbitListener(queues = RabbitConfig.QUEUE_NAME)
    public Mono<Void> receiveMessage(String message) {
        logger.info("Received message from RabbitMQ: {}", message);
        return Mono.fromRunnable(() -> {
            try {
                // Tukaj bi lahko implementirali logiko obdelave sporočil
                logger.debug("Processing received message: {}", message);
            } catch (Exception e) {
                logger.error("Error processing received message", e);
            }
        });
    }
}
