package com.example.courseenrollment.controller;

import com.example.courseenrollment.dto.ProgressDTO;
import com.example.courseenrollment.service.ProgressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
@RequiredArgsConstructor
public class ProgressController {

    private final ProgressService progressService;

    @PostMapping
    public ResponseEntity<ProgressDTO> createProgress(@RequestBody ProgressDTO progressDTO) {
        return ResponseEntity.ok(progressService.createProgress(progressDTO));
    }

    @GetMapping
    public ResponseEntity<List<ProgressDTO>> getAllProgress() {
        return ResponseEntity.ok(progressService.getAllProgress());
    }

    @GetMapping("/{progressId}")
    public ResponseEntity<ProgressDTO> getProgressById(@PathVariable Integer progressId) {
        return ResponseEntity.ok(progressService.getProgressById(progressId));
    }

    @PutMapping("/{progressId}")
    public ResponseEntity<ProgressDTO> updateProgress(@PathVariable Integer progressId,
                                                      @RequestBody ProgressDTO progressDTO) {
        return ResponseEntity.ok(progressService.updateProgress(progressId, progressDTO));
    }

    @DeleteMapping("/{progressId}")
    public ResponseEntity<Void> deleteProgress(@PathVariable Integer progressId) {
        progressService.deleteProgress(progressId);
        return ResponseEntity.noContent().build();
    }
}
