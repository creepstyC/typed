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
@Table(name = "interfaceConfig")
public class InterfaceConfig {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "userId")
    private User userId;
    
    @Column(name = "theme")
    private String theme;
    
    @Column(name = "fontSize")
    private int fontSize;
    
    @Column(name = "language")
    private String language;
    
    @Column(name = "sound")
    private boolean sound;

    public InterfaceConfig() {
    }

    public InterfaceConfig(Long id, User userId, String theme, int fontSize, String language, boolean sound) {
        this.id = id;
        this.userId = userId;
        this.theme = theme;
        this.fontSize = fontSize;
        this.language = language;
        this.sound = sound;
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

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public int getFontSize() {
        return fontSize;
    }

    public void setFontSize(int fontSize) {
        this.fontSize = fontSize;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public boolean isSound() {
        return sound;
    }

    public void setSound(boolean sound) {
        this.sound = sound;
    }
}