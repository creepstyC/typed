/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.typed.backend_typed.service;

import java.util.List;
import com.typed.backend_typed.model.User;
import com.typed.backend_typed.model.UserDTO;
import com.typed.backend_typed.model.LoginDTO;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author MARLONBARAJAS
 */

public interface IUserService {
    
    //list
    List<User> getUsers();
    
    //create
    User newUser(UserDTO userDTO);
    
    //search
    User searchUser(Long id);
    
    //delete
    int deleteUser(Long id);
    
    int login(LoginDTO userDTO);
    
    ResponseEntity<?> signin(LoginDTO userDTO);
}