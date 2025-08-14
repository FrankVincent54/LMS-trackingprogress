//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.service;

import com.example.courseenrollment.dto.AdminDTO;
import java.util.List;

public interface AdminService {
    List<AdminDTO> getAll();

    AdminDTO getById(Long id);

    AdminDTO create(AdminDTO dto);

    AdminDTO update(Long id, AdminDTO dto);

    void delete(Long id);
}
