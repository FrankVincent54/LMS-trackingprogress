//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.controller;

import com.example.courseenrollment.dto.AdminDTO;
import com.example.courseenrollment.service.AdminService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
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
@RequestMapping({"/api/admins"})
public class AdminController {
    private final AdminService service;

    @GetMapping
    public ResponseEntity<List<AdminDTO>> getAll() {
        return ResponseEntity.ok(this.service.getAll());
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<AdminDTO> getById(@PathVariable Long id) {
        AdminDTO dto = this.service.getById(id);
        return dto == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<AdminDTO> createAdmin(@RequestBody @Valid AdminDTO adminDTO) {
        AdminDTO savedAdmin = this.service.create(adminDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAdmin);
    }

    @PutMapping({"/{id}"})
    public ResponseEntity<AdminDTO> update(@PathVariable Long id, @RequestBody @Valid AdminDTO dto) {
        AdminDTO updated = this.service.update(id, dto);
        return updated == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(updated);
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.service.delete(id);
        return ResponseEntity.noContent().build();
    }

    public AdminController(final AdminService service) {
        this.service = service;
    }
}
