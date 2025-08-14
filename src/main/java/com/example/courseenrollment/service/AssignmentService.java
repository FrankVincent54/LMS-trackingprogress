package com.example.courseenrollment.service;

import com.example.courseenrollment.model.Assignment;
import com.example.courseenrollment.repository.AssignmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentService {

    private AssignmentRepository assignmentRepository = null;

    public AssignmentService() {
        this.assignmentRepository = assignmentRepository;
    }

    public List<Assignment> getAll() {
        return assignmentRepository.findAll();
    }

    public Optional<Assignment> getById(Integer id) {
        return assignmentRepository.findById(id);
    }

    public Assignment save(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    public void deleteById(Integer id) {
        assignmentRepository.deleteById(id);
    }
}
