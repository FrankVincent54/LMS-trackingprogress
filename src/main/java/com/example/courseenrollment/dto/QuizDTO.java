package com.example.courseenrollment.dto;



public class QuizDTO {
    private Integer quizId;
    private Integer lessonId;
    private String quizTitle;

    // Public no-args constructor
    public QuizDTO() {
    }

    // Public all-args constructor
    public QuizDTO(Integer quizId, Integer lessonId, String quizTitle) {
        this.quizId = quizId;
        this.lessonId = lessonId;
        this.quizTitle = quizTitle;
    }

    // Getters and Setters
    public Integer getQuizId() {
        return quizId;
    }

    public void setQuizId(Integer quizId) {
        this.quizId = quizId;
    }

    public Integer getLessonId() {
        return lessonId;
    }

    public void setLessonId(Integer lessonId) {
        this.lessonId = lessonId;
    }

    public String getQuizTitle() {
        return quizTitle;
    }

    public void setQuizTitle(String quizTitle) {
        this.quizTitle = quizTitle;
    }
}
