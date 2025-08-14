//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.service;

import com.example.courseenrollment.dto.InstructorDTO;
import java.util.List;

public interface InstructorService {
    List<InstructorDTO> getAll();

    InstructorDTO getById(Long id);

    InstructorDTO create(InstructorDTO dto);

    InstructorDTO update(Long id, InstructorDTO dto);

    void delete(Long id);
}
