package com.example.courseenrollment.service;

import com.example.courseenrollment.model.AssignmentSubmission;
import com.example.courseenrollment.repository.AssignmentSubmissionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public class AssignmentSubmissionService {

    private AssignmentSubmissionRepository submissionRepository = null;

    public AssignmentSubmissionService() {
        this.submissionRepository = submissionRepository;
    }

    public List<AssignmentSubmission> getAll() {
        return submissionRepository.findAll();
    }

    public Optional<AssignmentSubmission> getById(Integer id) {
        return submissionRepository.findById(id);
    }

    public AssignmentSubmission save(AssignmentSubmission submission) {
        return submissionRepository.save(submission);
    }

    public void deleteById(Integer id) {
        submissionRepository.deleteById(id);
    }
}
