package com.example.courseenrollment.service;

import com.example.courseenrollment.model.Lesson;
import com.example.courseenrollment.repository.LessonRepository;
import com.example.courseenrollment.service.LessonService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LessonServiceImpl implements LessonService {

    private final LessonRepository lessonRepository;

    @Override
    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    @Override
    public Lesson getLessonById(Long id) {
        return lessonRepository.findById(id).orElse(null);
    }

    @Override
    public Lesson createLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    @Override
    public Lesson updateLesson(Long id, Lesson lesson) {
        return lessonRepository.findById(id).map(existing -> {
            existing.setTitle(lesson.getTitle());
            existing.setContent(lesson.getContent());
            return lessonRepository.save(existing);
        }).orElse(null);
    }

    @Override
    public void deleteLesson(Long id) {
        lessonRepository.deleteById(id);
    }
}
