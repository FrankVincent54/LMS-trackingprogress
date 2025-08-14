package com.example.courseenrollment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.courseenrollment.model.ProgressEntity;

@Repository
public interface ProgressRepository extends JpaRepository<ProgressEntity, Integer> {

}
