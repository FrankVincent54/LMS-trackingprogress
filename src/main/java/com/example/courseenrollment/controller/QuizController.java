package com.example.courseenrollment.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.courseenrollment.dto.QuizDTO;
import com.example.courseenrollment.service.QuizService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/quizzes")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService QuizService;

    @PostMapping
    public ResponseEntity<QuizDTO> createQuiz(@RequestBody QuizDTO quizDTO) {
        return ResponseEntity.ok(QuizService.createQuiz(quizDTO));
    }

    @GetMapping
    public ResponseEntity<List<QuizDTO>> getAllQuizzes() {
        return ResponseEntity.ok(QuizService.getAllQuizzes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuizDTO> getQuizById(@PathVariable Integer id) {
        return ResponseEntity.ok(QuizService.getQuizById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<QuizDTO> updateQuiz(@PathVariable Integer id,
                                              @RequestBody QuizDTO quizDTO) {
        return ResponseEntity.ok(QuizService.updateQuiz(id, quizDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuiz(@PathVariable Integer id) {
        QuizService.deleteQuiz(id);
        return ResponseEntity.noContent().build();
    }
}
