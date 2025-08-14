package com.example.courseenrollment.dto;

public class AssignmentDTO {

    private Integer id;
    private Integer lessonId;
    private String title;
    private String description;

    public AssignmentDTO() {}

    public AssignmentDTO(Integer id, Integer lessonId, String title, String description) {
        this.id = id;
        this.lessonId = lessonId;
        this.title = title;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getLessonId() {
        return lessonId;
    }

    public void setLessonId(Integer lessonId) {
        this.lessonId = lessonId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
