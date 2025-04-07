package com.example.narocnine.service;

import com.example.narocnine.model.Subscription;
import com.example.narocnine.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private MessageProducer messageProducer; // Injecting the message producer

    public Mono<Subscription> getSubscription(String id) {
        return subscriptionRepository.findById(id);
    }

    public Mono<Subscription> createSubscription(Subscription subscription) {
        // Save the subscription to MongoDB
        return subscriptionRepository.save(subscription)
                .doOnTerminate(() -> {
                    // Send message to RabbitMQ after saving the subscription
                    messageProducer.sendMessage("Created subscription: " + subscription.getId())
                            .subscribe(); // Subscribe to fire the event asynchronously
                });
    }

    public Mono<Void> cancelSubscription(String id) {
        // Delete the subscription from MongoDB
        return subscriptionRepository.deleteById(id)
                .doOnTerminate(() -> {
                    // Send message to RabbitMQ after canceling the subscription
                    messageProducer.sendMessage("Canceled subscription: " + id)
                            .subscribe(); // Subscribe to fire the event asynchronously
                });
    }
}

