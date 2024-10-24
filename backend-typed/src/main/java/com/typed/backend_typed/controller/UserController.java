/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.typed.backend_typed.controller;

import java.util.List;
import com.typed.backend_typed.model.User;
import com.typed.backend_typed.model.UserDTO;
import com.typed.backend_typed.model.LoginDTO;
import com.typed.backend_typed.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author MARLONBARAJAS
 */

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    UserService userService;
    
    //list all users
    @GetMapping("/list")
    public List<User> loadUsers() {
        return userService.getUsers();
    }
    
    //search user
    @GetMapping("/list/{id}")
    public User searchById(@PathVariable Long id) {
        return userService.searchUser(id);
    }
    
    //create user
    @PostMapping("/")
    public User create(@RequestBody UserDTO userDTO) {
        return userService.newUser(userDTO);
    }
    
    //update user
    @PutMapping("/")
    public User update(@RequestBody UserDTO userDTO) {
        return userService.newUser(userDTO);
    }
    
    //delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<User> delete(@PathVariable Long id) {
        User obj = userService.searchUser(id);
        if (obj != null) {
            userService.deleteUser(id);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    @PostMapping("/loginclient")
    public int login(@RequestBody LoginDTO user) {
        int responseLogin = userService.login(user);
        return responseLogin;
    }
    
    
    @PostMapping("/login")
    public ResponseEntity<?> loginClient(@RequestBody LoginDTO user) {
        return userService.signin(user);
    }
}