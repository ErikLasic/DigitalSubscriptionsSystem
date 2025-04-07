package com.example.narocnine.repository;

import com.example.narocnine.model.Subscription;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriptionRepository extends ReactiveMongoRepository<Subscription, String> {
}
