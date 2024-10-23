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
@Table(name = "stat")
public class Stat {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "sessionId")
    private Session sessionId;
    
    @Column(name = "errors")
    private int errors;
    
    @Column(name = "time")
    private int time;
    
    @Column(name = "wpm")
    private Float wpm;
    
    @Column(name = "accuracy")
    private Float accuracy;
    
    @Column(name = "correctWords")
    private int correctWords;

    public Stat() {
    }

    public Stat(Long id, Session sessionId, int errors, int time, Float wpm, Float accuracy, int correctWords) {
        this.id = id;
        this.sessionId = sessionId;
        this.errors = errors;
        this.time = time;
        this.wpm = wpm;
        this.accuracy = accuracy;
        this.correctWords = correctWords;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Session getSessionId() {
        return sessionId;
    }

    public void setSessionId(Session sessionId) {
        this.sessionId = sessionId;
    }

    public int getErrors() {
        return errors;
    }

    public void setErrors(int errors) {
        this.errors = errors;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public Float getWpm() {
        return wpm;
    }

    public void setWpm(Float wpm) {
        this.wpm = wpm;
    }

    public Float getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(Float accuracy) {
        this.accuracy = accuracy;
    }

    public int getCorrectWords() {
        return correctWords;
    }

    public void setCorrectWords(int correctWords) {
        this.correctWords = correctWords;
    }
}