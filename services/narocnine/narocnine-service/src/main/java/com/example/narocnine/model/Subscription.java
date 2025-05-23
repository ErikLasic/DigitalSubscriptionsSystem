package com.example.narocnine.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "subscriptions")
public class Subscription {
    @Id
    private String id;
    private String userId;
    private String magazineId; // Namesto magazineName hranimo ID revije

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    
    public String getMagazineId() { return magazineId; }
    public void setMagazineId(String magazineId) { this.magazineId = magazineId; }
}
