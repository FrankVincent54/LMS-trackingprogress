package com.example.courseenrollment.service;

import java.util.List;

import com.example.courseenrollment.dto.ProgressDTO;

public interface ProgressService {

    ProgressDTO createProgress(ProgressDTO progressDTO);

    List<ProgressDTO> getAllProgress();

    ProgressDTO getProgressById(Integer progressId);

    ProgressDTO updateProgress(Integer progressId, ProgressDTO progressDTO);

    void deleteProgress(Integer progressId);
}
