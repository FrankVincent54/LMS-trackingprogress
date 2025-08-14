package com.example.courseenrollment.dto;

import lombok.Data;

@Data
public class ProgressDTO {
    private Integer id;
    private String courseName;
    private Integer progressPercentage;
}
