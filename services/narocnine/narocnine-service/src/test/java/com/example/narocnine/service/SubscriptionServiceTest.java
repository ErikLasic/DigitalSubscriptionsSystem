package com.example.narocnine.service;

import com.example.narocnine.model.Subscription;
import com.example.narocnine.repository.SubscriptionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import static org.mockito.Mockito.when;

class SubscriptionServiceTest {

    private SubscriptionService subscriptionService;

    @Mock
    private SubscriptionRepository subscriptionRepository;

    @Mock
    private MessageProducer messageProducer;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        subscriptionService = new SubscriptionService(subscriptionRepository, messageProducer);
    }

    @Test
    void testGetSubscription() {
        String subscriptionId = "123";
        Subscription subscription = new Subscription();
        subscription.setId(subscriptionId);
        subscription.setUserId("user1");
        subscription.setMagazineName("Magazine");
        subscription.setStatus("active");

        when(subscriptionRepository.findById(subscriptionId)).thenReturn(Mono.just(subscription));

        StepVerifier.create(subscriptionService.getSubscription(subscriptionId))
                .expectNextMatches(sub -> sub.getId().equals(subscriptionId))
                .verifyComplete();
    }
}
