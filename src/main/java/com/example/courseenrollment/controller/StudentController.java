//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.controller;

import com.example.courseenrollment.dto.StudentDTO;
import com.example.courseenrollment.service.StudentService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/api/students"})
public class StudentController {
    private final StudentService service;

    @GetMapping
    public ResponseEntity<List<StudentDTO>> getAll() {
        return ResponseEntity.ok(this.service.getAll());
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<StudentDTO> getById(@PathVariable Long id) {
        StudentDTO dto = this.service.getById(id);
        return dto == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<StudentDTO> create(@RequestBody @Valid StudentDTO dto) {
        StudentDTO created = this.service.create(dto);
        return ResponseEntity.status(201).body(created);
    }

    @PutMapping({"/{id}"})
    public ResponseEntity<StudentDTO> update(@PathVariable Long id, @RequestBody @Valid StudentDTO dto) {
        StudentDTO updated = this.service.update(id, dto);
        return updated == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(updated);
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.service.delete(id);
        return ResponseEntity.noContent().build();
    }

    public StudentController(final StudentService service) {
        this.service = service;
    }
}
