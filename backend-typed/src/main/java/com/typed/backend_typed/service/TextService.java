/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.typed.backend_typed.service;

import com.typed.backend_typed.model.Text;
import com.typed.backend_typed.repository.TextRepository;
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
public class TextService implements ITextService{
    
    @Autowired
    TextRepository textRepository;
    
    @Override
    public List<Text> getTexts() {
        return textRepository.findAll();
    }
    
    @Override
    public Text newText(Text text) {
        return textRepository.save(text);
    }
    
    @Override
    public Text searchText(Long id) {
        Text text = null;
        text = textRepository.findById(id).orElse(null);
        if (text == null) {
            return null;
        }
        return text;
    }
    
    @Override
    public int deleteText(Long id) {
        textRepository.deleteById(id);
        return 1;
    }
}