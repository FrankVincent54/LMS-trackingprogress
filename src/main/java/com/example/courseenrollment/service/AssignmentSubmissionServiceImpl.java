package com.example.courseenrollment.service;

import com.example.courseenrollment.model.AssignmentSubmission;
import com.example.courseenrollment.repository.AssignmentSubmissionRepository;
import com.example.courseenrollment.service.AssignmentSubmissionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentSubmissionServiceImpl extends AssignmentSubmissionService {

    private final AssignmentSubmissionRepository submissionRepository;

    public AssignmentSubmissionServiceImpl(AssignmentSubmissionRepository submissionRepository) {
        super();
        this.submissionRepository = submissionRepository;
    }

    @Override
    public List<AssignmentSubmission> getAll() {
        return submissionRepository.findAll();
    }

    @Override
    public Optional<AssignmentSubmission> getById(Integer id) {
        return submissionRepository.findById(id);
    }

    @Override
    public AssignmentSubmission save(AssignmentSubmission submission) {
        return submissionRepository.save(submission);
    }

    @Override
    public void deleteById(Integer id) {
        submissionRepository.deleteById(id);
    }
}
