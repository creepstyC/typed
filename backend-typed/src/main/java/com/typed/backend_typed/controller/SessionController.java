/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.typed.backend_typed.controller;

import com.typed.backend_typed.model.Session;
import com.typed.backend_typed.service.SessionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author MARLONBARAJAS
 */

@RestController
@RequestMapping("/sessions")
public class SessionController {
    
    @Autowired
    SessionService sessionService;
    
    //list all sessions
    @GetMapping("/list")
    public List<Session> loadSessions() {
        return sessionService.getSessions();
    }
    
    //search by id
    @GetMapping("/list/{id}")
    public Session searchById(@PathVariable Long id) {
        return sessionService.searchSession(id);
    }
    
    //create session
    @PostMapping("/")
    public ResponseEntity<Session> create(@RequestBody Session session) {
        Session obj = sessionService.newSession(session);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    //update session
    @PutMapping("/")
    public ResponseEntity<Session> update(@RequestBody Session session) {
        Session obj = sessionService.searchSession(session.getId());
        if (obj != null) {
            obj.setUserId(session.getUserId());
            obj.setTextId(session.getTextId());
            obj.setName(session.getName());
            obj.setTime(session.getTime());
            obj.setWords(session.getWords());
            sessionService.newSession(session);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    //delete session
    @DeleteMapping("/{id}")
    public ResponseEntity<Session> delete(@PathVariable Long id) {
        Session obj = sessionService.searchSession(id);
        if (obj != null) {
            sessionService.deleteSession(id);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
}