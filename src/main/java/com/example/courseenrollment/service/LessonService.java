package com.example.courseenrollment.service;

import com.example.courseenrollment.model.Lesson;
import java.util.List;

public interface LessonService {
    List<Lesson> getAllLessons();
    Lesson getLessonById(Long id);
    Lesson createLesson(Lesson lesson);
    Lesson updateLesson(Long id, Lesson lesson);
    void deleteLesson(Long id);
}
