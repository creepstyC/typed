/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.typed.backend_typed.model;

import jakarta.persistence.*;

/**
 *
 * @author MARLONBARAJAS
 */

@Entity
@Table(name = "session")
public class Session {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "userId")
    private User userId;
    
    @ManyToOne
    @JoinColumn(name = "textId", nullable = true)
    private Text textId;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "time")
    private int time;
    
    @Column(name = "words")
    private int words;

    public Session() {
    }

    public Session(Long id, User userId, Text textId, String name, int time, int words) {
        this.id = id;
        this.userId = userId;
        this.textId = textId;
        this.name = name;
        this.time = time;
        this.words = words;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public Text getTextId() {
        return textId;
    }

    public void setTextId(Text textId) {
        this.textId = textId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public int getWords() {
        return words;
    }

    public void setWords(int words) {
        this.words = words;
    }
}