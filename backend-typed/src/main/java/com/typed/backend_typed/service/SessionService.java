/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.typed.backend_typed.service;

import com.typed.backend_typed.model.Session;
import com.typed.backend_typed.repository.SessionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author MARLONBARAJAS
 */

@Service
@Transactional
public class SessionService implements ISessionService{
    
    @Autowired
    SessionRepository sessionRepository;
    
    @Override
    public List<Session> getSessions() {
        return sessionRepository.findAll();
    }
    
    @Override
    public Session newSession(Session session) {
        return sessionRepository.save(session);
    }
    
    @Override
    public Session searchSession(Long id) {
        Session session = null;
        session = sessionRepository.findById(id).orElse(null);
        if (session == null) {
            return null;
        }
        return session;
    }
    
    @Override
    public int deleteSession(Long id) {
        sessionRepository.deleteById(id);
        return 1;
    }
}