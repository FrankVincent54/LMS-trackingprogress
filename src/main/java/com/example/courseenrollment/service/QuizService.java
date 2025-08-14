package com.example.courseenrollment.service;

import java.util.List;

import com.example.courseenrollment.dto.QuizDTO;

public interface QuizService {

    QuizDTO createQuiz(QuizDTO quizDTO);

    QuizDTO getQuizById(Integer quizId);

    QuizDTO updateQuiz(Integer quizId, QuizDTO quizDTO);

    void deleteQuiz(Integer quizId);

    List<QuizDTO> getAllQuizzes();
}
