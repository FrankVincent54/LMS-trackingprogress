package com.example.courseenrollment.dto;

import java.time.LocalDateTime;

public class AssignmentSubmissionDTO {

    private Integer id;
    private Integer assignmentId;
    private Integer studentId;
    private String fileUrl;
    private String status;
    private LocalDateTime submittedAt;

    public AssignmentSubmissionDTO() {}

    public AssignmentSubmissionDTO(Integer id, Integer assignmentId, Integer studentId,
                                   String fileUrl, String status, LocalDateTime submittedAt) {
        this.id = id;
        this.assignmentId = assignmentId;
        this.studentId = studentId;
        this.fileUrl = fileUrl;
        this.status = status;
        this.submittedAt = submittedAt;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAssignmentId() {
        return assignmentId;
    }
    public void setAssignmentId(Integer assignmentId) {
        this.assignmentId = assignmentId;
    }

    public Integer getStudentId() {
        return studentId;
    }
    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getFileUrl() {
        return fileUrl;
    }
    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }
    public void setSubmittedAt(LocalDateTime submittedAt) {
        this.submittedAt = submittedAt;
    }
}
