package com.example.narocnine.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "subscriptions")
public class Subscription {
    @Id
    private String id;
    private String userId;
    private String magazineName;
    private String status; // active, expired, canceled
    private Long startDate;
    private Long endDate;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    public String getMagazineName() { return magazineName; }
    public void setMagazineName(String magazineName) { this.magazineName = magazineName; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Long getStartDate() { return startDate; }
    public void setStartDate(Long startDate) { this.startDate = startDate; }
    public Long getEndDate() { return endDate; }
    public void setEndDate(Long endDate) { this.endDate = endDate; }
}
