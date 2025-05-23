package com.example.narocnine.controller;

import com.example.narocnine.model.Subscription;
import com.example.narocnine.service.SubscriptionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionController {
    private static final Logger logger = LoggerFactory.getLogger(SubscriptionController.class);

    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping("/{id}")
    public Mono<Subscription> getSubscription(@PathVariable String id) {
        logger.info("GET request received for subscription ID: {}", id);
        return subscriptionService.getSubscription(id);
    }

    @GetMapping("/user/{userId}")
    public Flux<Subscription> getSubscriptionsByUser(@PathVariable String userId) {
        logger.info("GET request received for subscriptions of user ID: {}", userId);
        return subscriptionService.getSubscriptionsByUser(userId);
    }

    @PostMapping
    public Mono<Subscription> createSubscription(@RequestBody Subscription subscription) {
        logger.info("POST request to create a new subscription");
        return subscriptionService.createSubscription(subscription);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> cancelSubscription(@PathVariable String id) {
        logger.info("DELETE request received for subscription ID: {}", id);
        return subscriptionService.cancelSubscription(id);
    }
}
