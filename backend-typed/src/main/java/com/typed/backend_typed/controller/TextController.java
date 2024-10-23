/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.typed.backend_typed.controller;

import com.typed.backend_typed.model.Text;
import com.typed.backend_typed.service.TextService;
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
@RequestMapping("/texts")
public class TextController {
    
    @Autowired
    TextService textService;
    
    //list all texts
    @GetMapping("/list")
    public List<Text> loadTexts() {
        return textService.getTexts();
    }
    
    //search by id
    @GetMapping("/list/{id}")
    public Text searchById(@PathVariable Long id) {
        return textService.searchText(id);
    }
    
    //create text
    @PostMapping("/")
    public ResponseEntity<Text> create(@RequestBody Text text) {
        Text obj = textService.newText(text);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    //update text
    @PutMapping("/")
    public ResponseEntity<Text> update(@RequestBody Text text) {
        Text obj = textService.searchText(text.getId());
        if (obj != null) {
            obj.setContent(text.getContent());
            textService.newText(text);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    //delete text
    @DeleteMapping("/{id}")
    public ResponseEntity<Text> delete(@PathVariable Long id) {
        Text obj = textService.searchText(id);
        if (obj != null) {
            textService.deleteText(id);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
}