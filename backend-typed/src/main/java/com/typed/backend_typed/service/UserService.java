/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.typed.backend_typed.service;

import com.typed.backend_typed.model.User;
import com.typed.backend_typed.model.UserDTO;
import com.typed.backend_typed.model.LoginDTO;
import com.typed.backend_typed.repository.UserRepository;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author MARLONBARAJAS
 */

@Service
@Transactional
public class UserService implements IUserService {
    
    @Autowired
    UserRepository userRepository;
    
    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    
    @Override
    public User newUser(UserDTO userDTO) {
        
        User user = new User();
        
        if (userDTO.getId() != null) {
            user.setId(userDTO.getId());
        }
        
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        return userRepository.save(user);
    }

    @Override
    public User searchUser(Long id) {
        User user = null;
        user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }
        return user;
    }
    
    @Override
    public int deleteUser(Long id) {
        userRepository.deleteById(id);
        return 1;
    }

    @Override
    public int login(LoginDTO userDTO) {
        int u = userRepository.findByNameAndPassword(userDTO.getUsername(), userDTO.getPassword());
        return u;
    }
    
    @Override
    public ResponseEntity<?> signin(LoginDTO userDTO) {
        Map<String, Object> response = new HashMap<>();
        User user = null;
        try {
            user = userRepository.findByUsernameAndPassword(userDTO.getUsername(), userDTO.getPassword());
            if (user == null) {
                response.put("User", null);
                response.put("Message", "Alert:User or Password incorrect");
                response.put("statusCode", HttpStatus.NOT_FOUND.value());
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            } else {
                response.put("User", user);
                response.put("Message", "incorrect data");
                response.put("statusCode", HttpStatus.OK.value());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
        } catch (Exception e) {
            response.put("User", null);
            response.put("Message", "An error has occurred");
            response.put("statusCode", HttpStatus.INTERNAL_SERVER_ERROR.value());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}