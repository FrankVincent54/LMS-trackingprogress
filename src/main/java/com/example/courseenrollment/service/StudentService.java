//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.service;

import com.example.courseenrollment.dto.StudentDTO;
import java.util.List;

public interface StudentService {
    List<StudentDTO> getAll();

    StudentDTO getById(Long id);

    StudentDTO create(StudentDTO dto);

    StudentDTO update(Long id, StudentDTO dto);

    void delete(Long id);
}
