package com.example.narocnine.repository;

import com.example.narocnine.model.Subscription;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface SubscriptionRepository extends ReactiveMongoRepository<Subscription, String> {
    Flux<Subscription> findByUserId(String userId);
}
