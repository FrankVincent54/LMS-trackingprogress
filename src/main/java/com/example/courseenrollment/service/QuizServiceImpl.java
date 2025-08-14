package com.example.courseenrollment.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.example.courseenrollment.dto.QuizDTO;
import com.example.courseenrollment.model.QuizEntity;
import com.example.courseenrollment.repository.QuizRepository;


@Service
@RequiredArgsConstructor
public class QuizServiceImpl implements QuizService {

    private final QuizRepository quizRepository;

    @Override
    public QuizDTO createQuiz(QuizDTO quizDTO) {
        QuizEntity entity = toEntity(quizDTO);
        QuizEntity saved = quizRepository.save(entity);
        return toDTO(saved);
    }

    @Override
    public List<QuizDTO> getAllQuizzes() {
        return quizRepository.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public QuizDTO getQuizById(Integer quizId) {
        return quizRepository.findById(quizId)
                .map(this::toDTO)
                .orElseThrow(() -> new RuntimeException("Quiz not found"));
    }

    @Override
    public QuizDTO updateQuiz(Integer quizId, QuizDTO quizDTO) {
        QuizEntity existing = quizRepository.findById(quizId)
                .orElseThrow(() -> new RuntimeException("Quiz not found"));

        existing.setLessonId(quizDTO.getLessonId());
        existing.setQuizTitle(quizDTO.getQuizTitle());

        QuizEntity updated = quizRepository.save(existing);
        return toDTO(updated);
    }

    @Override
    public void deleteQuiz(Integer quizId) {
        quizRepository.deleteById(quizId);
    }

    // --- Helper methods ---
    private QuizDTO toDTO(QuizEntity entity) {
        QuizDTO dto = new QuizDTO();
        dto.setQuizId(entity.getQuizId());
        dto.setLessonId(entity.getLessonId());
        dto.setQuizTitle(entity.getQuizTitle());
        return dto;
    }

    private QuizEntity toEntity(QuizDTO dto) {
        QuizEntity entity = new QuizEntity();
        entity.setQuizId(dto.getQuizId());
        entity.setLessonId(dto.getLessonId());
        entity.setQuizTitle(dto.getQuizTitle());
        return entity;
    }
}
