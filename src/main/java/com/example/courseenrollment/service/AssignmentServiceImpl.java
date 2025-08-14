package com.example.courseenrollment.service;

import com.example.courseenrollment.model.Assignment;
import com.example.courseenrollment.repository.AssignmentRepository;
import com.example.courseenrollment.service.AssignmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentServiceImpl extends AssignmentService {

    private final AssignmentRepository assignmentRepository;

    public AssignmentServiceImpl(AssignmentRepository assignmentRepository) {
        super();
        this.assignmentRepository = assignmentRepository;
    }

    @Override
    public List<Assignment> getAll() {
        return assignmentRepository.findAll();
    }

    @Override
    public Optional<Assignment> getById(Integer id) {
        return assignmentRepository.findById(id);
    }

    @Override
    public Assignment save(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    @Override
    public void deleteById(Integer id) {
        assignmentRepository.deleteById(id);
    }
}
