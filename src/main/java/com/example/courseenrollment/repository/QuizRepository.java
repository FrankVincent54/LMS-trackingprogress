package com.example.courseenrollment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.courseenrollment.model.QuizEntity;


@Repository
public interface QuizRepository extends JpaRepository<QuizEntity, Integer> {

}
