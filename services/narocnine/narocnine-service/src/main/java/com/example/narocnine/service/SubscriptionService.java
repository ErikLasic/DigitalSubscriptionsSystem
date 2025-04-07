package com.example.narocnine.service;

import com.example.narocnine.model.Subscription;
import com.example.narocnine.repository.SubscriptionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class SubscriptionService {

    private static final Logger logger = LoggerFactory.getLogger(SubscriptionService.class);

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private MessageProducer messageProducer;

    public SubscriptionService(SubscriptionRepository subscriptionRepository, MessageProducer messageProducer) {
        this.subscriptionRepository = subscriptionRepository;
        this.messageProducer = messageProducer;
    }

    public Mono<Subscription> getSubscription(String id) {
        logger.info("Fetching subscription with id: {}", id);
        return subscriptionRepository.findById(id)
                .doOnSuccess(subscription -> logger.info("Retrieved subscription: {}", subscription))
                .doOnError(error -> logger.error("Error fetching subscription with id: {}", id, error));
    }

    public Mono<Subscription> createSubscription(Subscription subscription) {
        logger.info("Creating new subscription: {}", subscription);
        return subscriptionRepository.save(subscription)
                .doOnSuccess(savedSubscription -> {
                    logger.info("Successfully created subscription with id: {}", savedSubscription.getId());
                    messageProducer.sendMessage("Created subscription: " + savedSubscription.getId())
                            .doOnSuccess(ignored -> logger.info("Sent message for created subscription: {}", savedSubscription.getId()))
                            .subscribe();
                })
                .doOnError(error -> logger.error("Error creating subscription", error));
    }

    public Mono<Void> cancelSubscription(String id) {
        logger.info("Cancelling subscription with id: {}", id);
        return subscriptionRepository.deleteById(id)
                .doOnSuccess(ignored -> {
                    logger.info("Successfully canceled subscription: {}", id);
                    messageProducer.sendMessage("Canceled subscription: " + id)
                            .doOnSuccess(ignoredMsg -> logger.info("Sent message for canceled subscription: {}", id))
                            .subscribe();
                })
                .doOnError(error -> logger.error("Error canceling subscription with id: {}", id, error));
    }
}
