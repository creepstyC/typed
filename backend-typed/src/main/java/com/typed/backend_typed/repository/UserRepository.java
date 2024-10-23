/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.typed.backend_typed.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.typed.backend_typed.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author MARLONBARAJAS
 */

public interface UserRepository extends JpaRepository<User, Long>{
    
    @Query("select count(*) from User as p where p.username= :username and p.password= :password")
    Integer findByNameAndPassword(@Param("username") String username, @Param("password") String password);
    
    @Query("select p from User as p where p.username= :username and p.password= :password")
    User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}