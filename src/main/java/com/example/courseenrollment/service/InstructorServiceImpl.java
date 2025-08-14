//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.service;

import com.example.courseenrollment.dto.InstructorDTO;
import com.example.courseenrollment.model.Instructor;
import com.example.courseenrollment.repository.InstructorRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class InstructorServiceImpl implements InstructorService {
    private final InstructorRepository repository;

    private Instructor toEntity(InstructorDTO dto) {
        return Instructor.builder().name(dto.getName()).email(dto.getEmail()).build();
    }

    private InstructorDTO toDto(Instructor entity) {
        return InstructorDTO.builder().id(entity.getInstructorId()).name(entity.getName()).email(entity.getEmail()).build();
    }

    public List<InstructorDTO> getAll() {
        return (List)this.repository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    public InstructorDTO getById(Long id) {
        return (InstructorDTO)this.repository.findById(id).map(this::toDto).orElse((InstructorDTO) null);
    }

    public InstructorDTO create(InstructorDTO dto) {
        Instructor entity = this.toEntity(dto);
        Instructor saved = (Instructor)this.repository.save(entity);
        return this.toDto(saved);
    }

    public InstructorDTO update(Long id, InstructorDTO dto) {
        return (InstructorDTO)this.repository.findById(id).map((existing) -> {
            existing.setName(dto.getName());
            existing.setEmail(dto.getEmail());
            return this.toDto((Instructor)this.repository.save(existing));
        }).orElse((InstructorDTO) null);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }

    public InstructorServiceImpl(final InstructorRepository repository) {
        this.repository = repository;
    }
}
