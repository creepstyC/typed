/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.typed.backend_typed.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.typed.backend_typed.model.Stat;

/**
 *
 * @author MARLONBARAJAS
 */

public interface StatRepository extends JpaRepository<Stat, Long>{
    
}