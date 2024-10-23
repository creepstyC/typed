/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.typed.backend_typed.service;

import java.util.List;
import com.typed.backend_typed.model.Text;

/**
 *
 * @author MARLONBARAJAS
 */

public interface ITextService {
    
    //list
    List<Text> getTexts();
    
    //create
    Text newText(Text text);
    
    //search
    Text searchText(Long id);
    
    //delete
    int deleteText(Long id);
}