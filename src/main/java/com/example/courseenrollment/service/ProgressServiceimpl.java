package com.example.courseenrollment.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import lombok.Builder;
import org.springframework.stereotype.Service;

import com.example.courseenrollment.dto.ProgressDTO;
import com.example.courseenrollment.model.ProgressEntity;
import com.example.courseenrollment.repository.ProgressRepository;
import com.example.courseenrollment.service.ProgressService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class ProgressServiceimpl implements ProgressService {

    private final ProgressRepository progressRepository;

    @Override
    public ProgressDTO createProgress(ProgressDTO progressDTO) {
        ProgressEntity entity = toEntity(progressDTO);
        ProgressEntity saved = progressRepository.save(entity);
        return toDTO(saved);
    }

    @Override
    public List<ProgressDTO> getAllProgress() {
        return progressRepository.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProgressDTO getProgressById(Integer id) {
        return progressRepository.findById(id)
                .map(this::toDTO)
                .orElseThrow(() -> new RuntimeException("Progress not found"));
    }

    @Override
    public ProgressDTO updateProgress(Integer id, ProgressDTO progressDTO) {
        ProgressEntity existing = progressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Progress not found"));

        existing.setCourseName(progressDTO.getCourseName());
        existing.setProgressPercentage(progressDTO.getProgressPercentage());

        ProgressEntity updated = progressRepository.save(existing);
        return toDTO(updated);
    }

    @Override
    public void deleteProgress(Integer id) {
        progressRepository.deleteById(id);
    }

    // --- Helper methods ---
    private ProgressDTO toDTO(ProgressEntity entity) {
        ProgressDTO dto = new ProgressDTO();
        dto.setId(entity.getId());
        dto.setCourseName(entity.getCourseName());
        dto.setProgressPercentage(entity.getProgressPercentage());
        return dto;
    }

    private ProgressEntity toEntity(ProgressDTO dto) {
        ProgressEntity entity = new ProgressEntity();
        entity.setId(dto.getId());
        entity.setCourseName(dto.getCourseName());
        entity.setProgressPercentage(dto.getProgressPercentage());
        return entity;
    }
}
