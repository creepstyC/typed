/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.typed.backend_typed.service;

import java.util.List;
import com.typed.backend_typed.model.Session;

/**
 *
 * @author MARLONBARAJAS
 */

public interface ISessionService {
    
    //list
    List<Session> getSessions();
    
    //create
    Session newSession(Session session);
    
    //search
    Session searchSession(Long id);
    
    //delete
    int deleteSession(Long id);
}