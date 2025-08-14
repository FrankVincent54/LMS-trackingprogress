//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.service;

import com.example.courseenrollment.dto.AdminDTO;
import com.example.courseenrollment.model.Admin;
import com.example.courseenrollment.repository.AdminRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    private final AdminRepository repository;

    private Admin toEntity(AdminDTO dto) {
        return Admin.builder().name(dto.getName()).email(dto.getEmail()).build();
    }

    private AdminDTO toDto(Admin entity) {
        return AdminDTO.builder().id(entity.getAdminId()).name(entity.getName()).email(entity.getEmail()).build();
    }

    public List<AdminDTO> getAll() {
        return (List)this.repository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    public AdminDTO getById(Long id) {
        return (AdminDTO)this.repository.findById(id).map(this::toDto).orElse((AdminDTO) null);
    }

    public AdminDTO create(AdminDTO dto) {
        Admin entity = this.toEntity(dto);
        Admin saved = (Admin)this.repository.save(entity);
        return this.toDto(saved);
    }

    public AdminDTO update(Long id, AdminDTO dto) {
        return (AdminDTO)this.repository.findById(id).map((existing) -> {
            existing.setName(dto.getName());
            existing.setEmail(dto.getEmail());
            return this.toDto((Admin)this.repository.save(existing));
        }).orElse((AdminDTO) null);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }

    public AdminServiceImpl(final AdminRepository repository) {
        this.repository = repository;
    }
}
