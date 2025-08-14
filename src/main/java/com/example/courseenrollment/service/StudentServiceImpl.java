//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.service;

import com.example.courseenrollment.dto.StudentDTO;
import com.example.courseenrollment.model.Student;
import com.example.courseenrollment.repository.StudentRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {
    private final StudentRepository repository;

    private Student toEntity(StudentDTO dto) {
        return Student.builder().name(dto.getName()).email(dto.getEmail()).build();
    }

    private StudentDTO toDto(Student entity) {
        return StudentDTO.builder().id(entity.getStudentId()).name(entity.getName()).email(entity.getEmail()).build();
    }

    public List<StudentDTO> getAll() {
        return (List)this.repository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    public StudentDTO getById(Long id) {
        return (StudentDTO)this.repository.findById(id).map(this::toDto).orElse((StudentDTO) null);
    }

    public StudentDTO create(StudentDTO dto) {
        Student entity = this.toEntity(dto);
        Student saved = (Student)this.repository.save(entity);
        return this.toDto(saved);
    }

    public StudentDTO update(Long id, StudentDTO dto) {
        return (StudentDTO)this.repository.findById(id).map((existing) -> {
            existing.setName(dto.getName());
            existing.setEmail(dto.getEmail());
            return this.toDto((Student)this.repository.save(existing));
        }).orElse((StudentDTO) null);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }

    public StudentServiceImpl(final StudentRepository repository) {
        this.repository = repository;
    }
}
