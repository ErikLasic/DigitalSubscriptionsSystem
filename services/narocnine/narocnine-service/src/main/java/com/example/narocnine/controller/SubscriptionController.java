package com.example.narocnine.controller;

import com.example.narocnine.model.Subscription;
import com.example.narocnine.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping("/{id}")
    public Mono<Subscription> getSubscription(@PathVariable String id) {
        return subscriptionService.getSubscription(id);
    }

    @PostMapping
    public Mono<Subscription> createSubscription(@RequestBody Subscription subscription) {
        return subscriptionService.createSubscription(subscription);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> cancelSubscription(@PathVariable String id) {
        return subscriptionService.cancelSubscription(id);
    }
}
